import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Inside the Cafe</h2>
            <p className="text-slate-300/90 mt-2">Warm textures, soft light, and a little sparkle</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-xl group"
            >
              <img src={src} alt="Cafe" className="w-full h-48 object-cover md:h-56 lg:h-64 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
