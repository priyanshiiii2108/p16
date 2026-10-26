
import { useState } from 'react'

const initialForm = {
  name: '',
  price: '',
  category: '',
  stock: '',
  description: '',
}

const inputClass =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'

export default function ProductForm({ onAdd }) {
  const [formData, setFormData] = useState(initialForm)
  const [error, setError] = useState('')

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    setError('')
  }

  function handleSubmit(event) {
    event.preventDefault()

    const price = Number(formData.price)
    const stock = Number(formData.stock)

    if (!formData.name.trim() || !formData.category) {
      setError('Please enter a product name and select a category.')
      return
    }

    if (!Number.isFinite(price) || price <= 0) {
      setError('Price must be greater than zero.')
      return
    }

    if (
      formData.stock.trim() === '' ||
      !Number.isInteger(stock) ||
      stock < 0
    ) {
      setError('Stock must be a non-negative whole number.')
      return
    }

    onAdd({
      id: crypto.randomUUID(),
      name: formData.name.trim(),
      price,
      category: formData.category,
      stock,
      description: formData.description.trim(),
    })

    setFormData(initialForm)
    setError('')
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900">
          Add New Product
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Enter the details below to create a product.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
            Product Name *
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Wireless Headphones"
            className={inputClass}
            required
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="price" className="block text-sm font-semibold text-slate-700">
              Price (₹) *
            </label>
            <input
              id="price"
              name="price"
              type="number"
              min="0.01"
              step="0.01"
              value={formData.price}
              onChange={handleChange}
              placeholder="2499"
              className={inputClass}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="stock" className="block text-sm font-semibold text-slate-700">
              Stock Quantity *
            </label>
            <input
              id="stock"
              name="stock"
              type="number"
              min="0"
              step="1"
              value={formData.stock}
              onChange={handleChange}
              placeholder="20"
              className={inputClass}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="category" className="block text-sm font-semibold text-slate-700">
            Category *
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={inputClass}
            required
          >
            <option value="">Select a category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Accessories">Accessories</option>
            <option value="Home & Living">Home & Living</option>
            <option value="Books">Books</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="block text-sm font-semibold text-slate-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your product..."
            rows={3}
            className={`${inputClass} resize-y`}
          />
        </div>

        {error && (
          <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-xl bg-indigo-600 px-5 py-3 font-bold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
        >
          + Add Product
        </button>
      </form>
    </section>
  )
}
