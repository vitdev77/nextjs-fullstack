import Sidebar from '@/components/sidebar';
import { createProduct } from '@/lib/actions/products';
import { getCurrentUser } from '@/lib/auth';
import Link from 'next/link';

export default async function AddProductPage() {
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath="/add-product" />
      <main className="ml-64 p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Add Product
              </h1>
              <p className="text-sm text-gray-500">
                Add a new product to your inventory.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <form className="space-y-6" action={createProduct}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Product Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent outline-none"
                  placeholder="Enter Product Name"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Price *
                  </label>
                  <input
                    type="number"
                    min={0}
                    step={0.01}
                    id="price"
                    name="price"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent outline-none"
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Quantity *
                  </label>
                  <input
                    type="number"
                    min={0}
                    step={1}
                    id="quantity"
                    name="quantity"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent outline-none"
                    placeholder="0"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="sku"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  SKU (Optional)
                </label>
                <input
                  type="text"
                  id="sku"
                  name="sku"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent outline-none"
                  placeholder="Enter SKU"
                />
              </div>
              <div>
                <label
                  htmlFor="lowStockAt"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Low Stock Threshold (Optional)
                </label>
                <input
                  type="number"
                  id="lowStockAt"
                  name="lowStockAt"
                  min={0}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent outline-none"
                  placeholder="Enter low stock threshold"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Alert when quantity falls below this number
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type={'submit'}
                  className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
                >
                  Add Product
                </button>
                {/* <button
                  type={'reset'}
                  className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
                >
                  Cancel
                </button> */}
                <Link
                  href={'/inventory'}
                  className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
