
'use client'

export default function Navbar({ cartCount = 0 }) {
  return (
    <header className="bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-extrabold tracking-tight">
          Sportify
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex gap-8 font-semibold">
          <a href="#" className="hover:underline">Men</a>
          <a href="#" className="hover:underline">Women</a>
          <a href="#" className="hover:underline">Gear</a>
        </nav>

        {/* Cart */}
        <button aria-label="Cart" className="relative">
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
