import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import MenuShowcase from './components/MenuShowcase'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />

      <main className="relative">
        <Features />
        <MenuShowcase />
        <Gallery />

        <section id="visit" className="relative py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white">Come say hello</h3>
                <p className="text-slate-300/90 mt-2">123 Brew Street, Roast City • Open daily 7am–7pm</p>
              </div>
              <a href="#" className="px-5 py-3 rounded-xl bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 transition-colors">Get Directions</a>
            </div>

            <p className="text-center text-slate-400/80 text-sm mt-10">© {new Date().getFullYear()} Fireside Coffee. All rights reserved.</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
