import Navbar from '@/components/Navbar';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function Cart() {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            <div className="border-t border-gray-200">
              <div className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=300" className="h-full w-full object-cover object-center" />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3><a href="#">Midnight Silk Slip Dress</a></h3>
                      <p className="ml-4">$185.00</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Black / M</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty 1</p>
                    <button type="button" className="font-medium text-red-600 hover:text-red-500">Remove</button>
                  </div>
                </div>
              </div>
              {/* Duplicate Item for Demo */}
              <div className="flex py-6 border-t border-gray-200">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=300" className="h-full w-full object-cover object-center" />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3><a href="#">Cashmere Turtleneck</a></h3>
                      <p className="ml-4">$120.00</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Cream / S</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty 1</p>
                    <button type="button" className="font-medium text-red-600 hover:text-red-500">Remove</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-4 bg-gray-50 p-6 rounded-lg h-fit">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
            <div className="flow-root">
              <dl className="-my-4 text-sm divide-y divide-gray-200">
                <div className="py-4 flex items-center justify-between">
                  <dt className="text-gray-600">Subtotal</dt>
                  <dd className="font-medium text-gray-900">$305.00</dd>
                </div>
                <div className="py-4 flex items-center justify-between">
                  <dt className="text-gray-600">Shipping</dt>
                  <dd className="font-medium text-gray-900">$20.00</dd>
                </div>
                <div className="py-4 flex items-center justify-between">
                  <dt className="text-base font-bold text-gray-900">Total</dt>
                  <dd className="font-bold text-gray-900">$325.00</dd>
                </div>
              </dl>
            </div>
            <div className="mt-6">
              <Link href="/checkout">
                <Button fullWidth>Checkout</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
