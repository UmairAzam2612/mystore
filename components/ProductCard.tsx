export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white border rounded-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition">
      <img
        src={product.image}
        alt={product.alt}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 h-12 overflow-hidden">
          {product.title}
        </h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="text-xl font-extrabold text-orange-600 mt-2">
          ${product.price.toFixed(2)}
        </p>
        <button
          onClick={onAdd}
          className="mt-4 w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}