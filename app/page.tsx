import Navbar from '@/components/Navbar';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/lib/data';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full">
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop"
          alt="Hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">ESSENTIAL LUXURY</h1>
          <p className="text-lg md:text-xl mb-8 max-w-lg font-light">
            Timeless silhouettes crafted for the modern individual.
          </p>
          <div className="flex gap-4">
            <Button variant="outline">View Lookbook</Button>
            <Button variant="primary" className="bg-white text-black hover:bg-neutral-200 border-none">Shop Collection</Button>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold tracking-tight">New Arrivals</h2>
          <a href="/shop" className="text-sm font-semibold underline decoration-1 underline-offset-4 hover:text-gray-600">View All</a>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-neutral-100 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">Sustainable by Design</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe in fewer, better things. Our collection is produced in small batches 
                using ethically sourced materials. Every stitch serves a purpose, every fabric tells a story.
              </p>
              <Button variant="secondary">Read Our Story</Button>
            </div>
            <div className="aspect-video bg-neutral-200">
               {/* Placeholder for brand video/image */}
               <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1000" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Workshop" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
