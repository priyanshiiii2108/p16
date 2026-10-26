
import { useState } from "react"
import ProductForm from "./Component/ProductForm";
import ProductList from "./Component/ProductList";
import ProductCard from "./Component/ProductCard";

export default function App() {
  const [products, setProducts] = useState([])
  const [successMessage, setSuccessMessage] = useState('')

  function addProduct(newProduct) {
    setProducts((previousProducts) => [
      newProduct,
      ...previousProducts,
    ])

    setSuccessMessage(
      `${newProduct.name} was added successfully!`
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-gradient-to-r from-indigo-700 to-violet-700 px-6 py-8 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-2xl">
              📦
            </div>
            <div>
              <h1 className="text-2xl font-extrabold sm:text-3xl">
                Product Manager
              </h1>
              <p className="mt-1 text-sm text-indigo-100">
                Create and manage your product inventory
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-8 px-5 py-8 sm:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[380px_minmax(0,1fr)]">
          <ProductForm onAdd={addProduct} />

          <div className="space-y-5">
            {successMessage && (
              <div
                role="status"
                className="flex items-center justify-between gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-800"
              >
                <span>✓ {successMessage}</span>
                <button
                  type="button"
                  onClick={() => setSuccessMessage('')}
                  className="rounded-md px-2 py-1 text-emerald-700 hover:bg-emerald-100"
                  aria-label="Dismiss success message"
                >
                  ✕
                </button>
              </div>
            )}

            <ProductList products={products} />
          </div>
        </div>
      </main>

      <footer className="mt-8 border-t border-slate-200 bg-white px-6 py-5 text-center text-sm text-slate-500">
        Product Manager · Built with React and Tailwind CSS
      </footer>
    </div>
  )
}
