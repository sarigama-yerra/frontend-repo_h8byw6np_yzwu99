import { useState } from 'react'
import { Menu, X, Coffee, MapPin, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#menu', label: 'Menu' },
    { href: '#story', label: 'Our Story' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#visit', label: 'Visit' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-900">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="text-white font-semibold tracking-wide">Fireside Coffee</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="text-slate-200/90 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
              <a href="#visit" className="inline-flex items-center gap-2 text-slate-900 bg-amber-400 hover:bg-amber-300 px-4 py-2 rounded-xl font-medium transition-colors">
                <MapPin className="w-4 h-4" /> Visit Us
              </a>
              <a href="tel:+1234567890" className="inline-flex items-center gap-2 text-slate-200/90 hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> Call
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2 rounded-lg bg-white/10">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 pb-6">
              <nav className="flex flex-col gap-4 pt-4">
                {links.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-slate-200/90 hover:text-white transition-colors">
                    {link.label}
                  </a>
                ))}
                <a href="#visit" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 text-slate-900 bg-amber-400 hover:bg-amber-300 px-4 py-2 rounded-xl font-medium transition-colors">
                  <MapPin className="w-4 h-4" /> Visit Us
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
