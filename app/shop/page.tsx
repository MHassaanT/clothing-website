import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/lib/data';

export default function Shop() {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl font-bold tracking-tight mb-8">All Products</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters - Visual Only */}
          <aside className="w-full lg:w-64 space-y-8">
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="text-black font-medium">All Products</li>
                <li>Dresses</li>
                <li>Outerwear</li>
                <li>Tops</li>
                <li>Accessories</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                  <button key={size} className="border py-2 text-sm hover:border-black">{size}</button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {/* Duplicate for demo density */}
            {PRODUCTS.map((product) => (
              <ProductCard key={`${product.id}-dup`} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
