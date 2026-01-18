import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-black">
            New
          </span>
        )}
        <button className="absolute bottom-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 bg-white p-3 shadow-lg hover:bg-black hover:text-white">
          <ShoppingBag size={18} />
        </button>
      </div>
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-gray-900 group-hover:underline">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
    </Link>
  );
}
