import { motion } from "framer-motion"
import type { SectionProps } from "@/types"

const cardColors = [
  'hsl(var(--pastel-blue) / 0.6)',
  'hsl(var(--pastel-rose) / 0.6)',
  'hsl(var(--pastel-sage) / 0.6)',
  'hsl(var(--pastel-peach) / 0.6)',
  'hsl(var(--pastel-lavender) / 0.6)',
]

export default function Section({ id, title, subtitle, content, items, columns, isActive, showButton, buttonText }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {subtitle && (
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}

      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl"
        style={{ color: 'hsl(var(--pastel-text))' }}
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {content && (
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6"
          style={{ color: 'hsl(var(--pastel-muted))' }}
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}

      {items && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="rounded-2xl p-4 backdrop-blur-sm border border-white/60"
              style={{ background: cardColors[i % cardColors.length] }}
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.12 * i + 0.2 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-semibold text-sm md:text-base" style={{ color: 'hsl(var(--pastel-text))' }}>{item.label}</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--pastel-muted))' }}>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      )}

      {columns && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {columns.map((col, ci) => (
            <motion.div
              key={ci}
              className="rounded-2xl p-5 backdrop-blur-sm border border-white/60"
              style={{ background: ci === 0 ? 'hsl(var(--pastel-sage) / 0.6)' : 'hsl(var(--pastel-rose) / 0.6)' }}
              initial={{ opacity: 0, x: ci === 0 ? -20 : 20 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + ci * 0.1 }}
            >
              <h3 className="font-bold text-base md:text-lg mb-3" style={{ color: 'hsl(var(--pastel-text))' }}>{col.title}</h3>
              <ul className="space-y-2">
                {col.items.map((item, ii) => (
                  <li
                    key={ii}
                    className="text-sm leading-relaxed pb-2 border-b last:border-0 last:pb-0"
                    style={{ color: 'hsl(var(--pastel-muted))', borderColor: 'rgba(0,0,0,0.08)' }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      )}

      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          <button
            className="px-8 py-3 rounded-full font-semibold text-base border-2 transition-all hover:scale-105"
            style={{
              color: 'hsl(var(--pastel-text))',
              borderColor: 'hsl(var(--pastel-text))',
              background: 'transparent',
            }}
          >
            {buttonText}
          </button>
        </motion.div>
      )}
    </section>
  )
}
