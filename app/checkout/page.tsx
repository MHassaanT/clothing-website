import Navbar from '@/components/Navbar';
import Button from '@/components/ui/Button';

export default function Checkout() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Navbar />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold tracking-tight mb-8 text-center">Checkout</h1>
        
        <div className="bg-white shadow sm:rounded-lg p-6 space-y-8">
          {/* Shipping Address */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Shipping Information</h2>
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
               <input type="text" placeholder="First Name" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black p-3 border" />
               <input type="text" placeholder="Last Name" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black p-3 border" />
               <input type="text" placeholder="Address" className="sm:col-span-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black p-3 border" />
               <input type="text" placeholder="City" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black p-3 border" />
               <input type="text" placeholder="ZIP / Postal Code" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black p-3 border" />
            </div>
          </div>

          {/* Payment UI Mock */}
          <div className="border-t pt-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Payment Details</h2>
            <div className="border p-4 rounded-md bg-gray-50 border-gray-200">
               <div className="flex gap-3 mb-4">
                  <div className="h-8 w-12 bg-white border rounded"></div>
                  <div className="h-8 w-12 bg-white border rounded"></div>
                  <div className="h-8 w-12 bg-white border rounded"></div>
               </div>
               <input type="text" placeholder="Card number" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black p-3 border mb-3 bg-white" />
               <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="MM / YY" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black p-3 border bg-white" />
                  <input type="text" placeholder="CVC" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black p-3 border bg-white" />
               </div>
            </div>
          </div>

          <div className="border-t pt-8">
            <div className="flex justify-between items-center mb-6">
               <span className="text-lg font-bold">Total</span>
               <span className="text-lg font-bold">$325.00</span>
            </div>
            <Button fullWidth>Pay Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
