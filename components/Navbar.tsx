import Link from 'next/link';
import { ShoppingBag, Search, Menu, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu */}
          <div className="flex lg:hidden">
            <Menu className="h-6 w-6" />
          </div>

          {/* Logo */}
          <div className="flex-1 lg:flex-none text-center lg:text-left">
            <Link href="/" className="text-xl font-bold tracking-[0.2em] uppercase">Lumière</Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:gap-x-8">
            {['New Arrivals', 'Shop', 'Collections', 'Editorial'].map((item) => (
              <Link key={item} href="/shop" className="text-sm font-medium text-gray-700 hover:text-black">
                {item}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Search className="h-5 w-5 text-gray-600 hidden sm:block cursor-pointer hover:text-black" />
            <Link href="/cart" className="relative text-gray-600 hover:text-black">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white">2</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
