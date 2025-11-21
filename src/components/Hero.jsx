import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/40 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur text-slate-100 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Freshly brewed every day
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_5px_30px_rgba(0,0,0,0.6)]">
            Craft Coffee, Cozy Vibes
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-200/90 max-w-xl">
            Step into our world of slow mornings, rich aromas, and playful textures. Sip, relax, and stay awhile.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#menu" className="px-5 py-3 rounded-xl bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 transition-colors">Explore Menu</a>
            <a href="#visit" className="px-5 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 border border-white/20 transition-colors">Visit Us</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
