import { Menu, ShoppingCart, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-3">
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-slate-100 sm:hidden">
            <Menu className="h-5 w-5" />
          </button>
          <div className="font-semibold">Electro</div>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
          <a href="#catalog" className="hover:text-black">Products</a>
          <a href="#features" className="hover:text-black">Features</a>
          <a href="#about" className="hover:text-black">About</a>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative hidden sm:flex">
            <input placeholder="Search products" className="h-9 w-48 rounded-full border border-slate-200 bg-white px-9 text-sm outline-none focus:ring-2 focus:ring-slate-200" />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          </div>
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-slate-100">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
