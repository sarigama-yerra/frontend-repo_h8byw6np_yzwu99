import { motion } from 'framer-motion'

const menu = [
  { name: 'Honey Latte', price: '$5.50', tag: 'Signature', img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Iced Matcha', price: '$5.00', tag: 'Refreshing', img: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Mocha', price: '$5.75', tag: 'Chocolate', img: 'https://images.unsplash.com/photo-1517709402683-07b130802f46?q=80&w=1200&auto=format&fit=crop' },
]

export default function MenuShowcase() {
  return (
    <section id="menu" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Menu Highlights</h2>
            <p className="text-slate-300/90 mt-2">A few favorites to get you started</p>
          </div>
          <a href="#" className="hidden md:inline-flex px-4 py-2 rounded-xl bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 transition-colors">View Full Menu</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {menu.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-slate-200/90 mb-2">{item.tag}</div>
                  <h3 className="text-white font-semibold">{item.name}</h3>
                </div>
                <span className="text-amber-300 font-semibold">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
