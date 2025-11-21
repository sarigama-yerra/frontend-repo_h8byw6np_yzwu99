import { motion } from 'framer-motion'
import { Coffee, Croissant, Sparkles, Leaf } from 'lucide-react'

const items = [
  { icon: Coffee, title: 'Signature Brews', desc: 'Velvety lattes to bold pour-overs, crafted by passionate baristas.' },
  { icon: Croissant, title: 'Fresh Bakes', desc: 'Flaky pastries and indulgent treats, baked in-house every morning.' },
  { icon: Leaf, title: 'Ethically Sourced', desc: 'We partner with small farms for sustainable, traceable beans.' },
  { icon: Sparkles, title: 'Cozy Atmosphere', desc: 'Soft lighting, warm textures, and a soundtrack to slow down.' },
]

export default function Features() {
  return (
    <section id="story" className="relative py-20">
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-900 flex items-center justify-center mb-4">
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="text-white font-semibold text-lg">{item.title}</h3>
            <p className="text-slate-300/90 mt-2 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
