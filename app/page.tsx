'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'

type Product = {
  id: number
  title: string
  price: number
  image: string
  alt: string
  category: string
}

const products: Product[] = [
  { id: 1, title: "Air Zoom Pegasus 40", price: 129.99, image: "https://picsum.photos/seed/d1/600/600", alt: "Running shoes", category: "Running" },
  { id: 2, title: "Pro Training Shorts", price: 34.50, image: "https://picsum.photos/seed/d2/600/600", alt: "Sports shorts", category: "Training" },
  { id: 3, title: "Lightweight Windbreaker", price: 89.99, image: "https://picsum.photos/seed/d3/600/600", alt: "Windbreaker jacket", category: "Outdoor" },
  { id: 4, title: "Basketball Pro Ball", price: 39.00, image: "https://picsum.photos/seed/d4/600/600", alt: "Basketball", category: "Sports" },
  { id: 5, title: "Performance Running Cap", price: 22.99, image: "https://picsum.photos/seed/d5/600/600", alt: "Running cap", category: "Accessories" },
  { id: 6, title: "Training Backpack", price: 54.00, image: "https://picsum.photos/seed/d6/600/600", alt: "Sports backpack", category: "Gear" },
]

export default function Home() {
  const [cart, setCart] = useState<Product[]>([])

  function addToCart(product: Product) {
    setCart(prev => [...prev, product])
  }

  return (
    <>
      <Navbar cartCount={cart.length} />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          Shop the Latest Sports Gear
        </h1>
        <p className="text-gray-600 mb-10">
          High-performance gear to power your training, running, and lifestyle.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={() => addToCart(p)} />
          ))}
        </div>

        {cart.length > 0 && (
          <div className="mt-12 bg-orange-50 p-6 rounded-lg border border-orange-200">
            <h2 className="text-xl font-bold text-orange-700 mb-3">Your Cart</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {cart.map((item) => (
                <li key={item.id}>
                  {item.title} — ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <p className="mt-3 font-extrabold text-orange-600">
              Total: ${cart.reduce((sum, i) => sum + i.price, 0).toFixed(2)}
            </p>
          </div>
        )}
      </main>
    </>
  )
}
