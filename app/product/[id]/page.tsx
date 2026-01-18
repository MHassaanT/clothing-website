import Navbar from '@/components/Navbar';
import Button from '@/components/ui/Button';
import { PRODUCTS } from '@/lib/data';
import { Star } from 'lucide-react';

export default function ProductDetail({ params }: { params: { id: string } }) {
  // In a real app, fetch based on params.id
  const product = PRODUCTS[0]; 

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-neutral-100 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="aspect-[3/4] bg-neutral-100">
                  <img src="https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&w=800" className="w-full h-full object-cover" alt="Detail" />
               </div>
               <div className="aspect-[3/4] bg-neutral-100">
                  <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800" className="w-full h-full object-cover" alt="Detail" />
               </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="mb-6">
              <h1 className="text-3xl font-bold tracking-tight mb-2">{product.name}</h1>
              <div className="flex items-center gap-4">
                <p className="text-xl text-gray-900">${product.price}</p>
                <div className="flex items-center text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <span className="text-xs text-gray-500 ml-2 text-black">(42 reviews)</span>
                </div>
              </div>
            </div>

            <div className="prose prose-sm text-gray-600 mb-8">
              <p>Expertly tailored from Italian silk, this piece transitions seamlessly from day to night. Features a relaxed fit with a structured silhouette.</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-900">Color</label>
                <div className="mt-2 flex gap-3">
                  <button className="h-8 w-8 rounded-full bg-black ring-2 ring-offset-2 ring-gray-300"></button>
                  <button className="h-8 w-8 rounded-full bg-neutral-200"></button>
                  <button className="h-8 w-8 rounded-full bg-blue-900"></button>
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-900">Size</label>
                  <button className="text-sm text-gray-500 underline">Size Guide</button>
                </div>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {['XS', 'S', 'M', 'L'].map(size => (
                    <button key={size} className="border py-3 text-sm hover:bg-black hover:text-white transition-colors">
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t">
                <Button fullWidth>Add to Cart</Button>
                <p className="text-xs text-center text-gray-500 mt-4">Free shipping on orders over $300</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
