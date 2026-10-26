
export default function ProductCard({ product }) {
  const icons = {
    Electronics: '🎧',
    Clothing: '👕',
    Accessories: '⌚',
    'Home & Living': '🏠',
    Books: '📚',
  }

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-3xl">
          {icons[product.category] || '📦'}
        </div>

        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
          {product.category}
        </span>
      </div>

      <h3 className="mt-5 break-words text-lg font-bold text-slate-900">
        {product.name}
      </h3>

      <p className="mt-2 min-h-10 text-sm leading-6 text-slate-500">
        {product.description || 'No description provided.'}
      </p>

      <div className="mt-5 flex items-end justify-between border-t border-slate-100 pt-4">
        <div>
          <p className="text-xs font-medium text-slate-400">Price</p>
          <p className="mt-1 text-xl font-extrabold text-indigo-700">
            {product.price.toLocaleString('en-IN', {
              style: 'currency',
              currency: 'INR',
              maximumFractionDigits: 2,
            })}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs font-medium text-slate-400">Stock</p>
          <p className={`mt-1 font-bold ${
            product.stock === 0 ? 'text-red-600' : 'text-emerald-600'
          }`}>
            {product.stock} units
          </p>
        </div>
      </div>
    </article>
  )
}
