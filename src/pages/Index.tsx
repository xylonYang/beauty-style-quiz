import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const HERO_IMAGE = 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100029099/beauty-hero_fb092abe.png'

export default function Index() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gradient-parchment px-4 py-8 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--gold)) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, hsl(var(--gold)) 0%, transparent 40%)`,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="max-w-md w-full flex flex-col items-center relative z-10"
      >
        {/* Hero Image */}
        <div className="w-56 h-72 md:w-64 md:h-80 rounded-xl overflow-hidden mb-8 shadow-elegant border border-gold/20">
          <img
            src={HERO_IMAGE}
            alt="Beauty Style Quiz"
            crossOrigin="anonymous"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-wide text-center">
          你是哪种美？
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-muted-foreground font-serif-cn text-center leading-relaxed">
          7道题，解锁你的颜值风格密码
        </p>

        {/* Gold divider */}
        <div className="gold-divider w-48 my-6" />

        {/* CTA */}
        <button
          onClick={() => navigate('/quiz')}
          className="gradient-gold text-primary-foreground hover:opacity-90 transition-opacity font-serif-cn text-lg h-14 px-10 rounded-lg shadow-elegant flex items-center"
        >
          开始探索
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>

        {/* Footer text */}
        <p className="mt-10 text-xs text-muted-foreground/60 font-serif-cn text-center">
          测试灵感来自世界名画中的美学密码
          <br />
          <span className="text-muted-foreground/40">©xylon</span>
        </p>
      </motion.div>
    </div>
  )
}
