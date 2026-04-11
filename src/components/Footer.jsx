import { RiCodeSSlashLine, RiHeartFill, RiArrowUpLine } from 'react-icons/ri'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-dark-700/50 py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="w-7 h-7 rounded-lg bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-400">
            <RiCodeSSlashLine size={14} />
          </span>
          <span className="text-gradient">Umer.dev</span>
        </div>

        <p className="text-slate-600 text-sm flex items-center gap-1.5 font-mono">
          Built with <RiHeartFill className="text-brand-500 text-xs" /> using React & Supabase
        </p>

        <button
          onClick={scrollTop}
          className="w-9 h-9 rounded-xl bg-dark-700 border border-dark-500/60 text-slate-500 hover:text-brand-400 hover:border-brand-500/40 flex items-center justify-center transition-all"
          aria-label="Scroll to top"
        >
          <RiArrowUpLine size={16} />
        </button>
      </div>
    </footer>
  )
}
