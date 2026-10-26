
import ProductCard from './ProductCard'

export default function ProductList({ products }) {
  return (
    <section>
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Product Inventory
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Products currently in your list.
          </p>
        </div>

        <span className="shrink-0 rounded-full bg-indigo-100 px-3 py-1.5 text-sm font-bold text-indigo-700">
          {products.length} {products.length === 1 ? 'Product' : 'Products'}
        </span>
      </div>

      {products.length === 0 ? (
        <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-white px-6 py-12 text-center">
          <div className="text-4xl">📦</div>
          <h3 className="mt-4 font-bold text-slate-800">
            No products yet
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            Fill in the form to add your first product.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}
