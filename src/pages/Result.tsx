import { useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RotateCcw } from 'lucide-react'
import { getBeautyTypeById, beautyTypes } from '@/data/beautyTypes'
import ResultCard from '@/components/result/ResultCard'

export default function Result() {
  const { typeId } = useParams<{ typeId: string }>()
  const navigate = useNavigate()
  const cardRef = useRef<HTMLDivElement>(null)

  const result = getBeautyTypeById(typeId ?? '')

  if (!result) {
    const fallback = beautyTypes[0]
    return (
      <div className="min-h-screen gradient-parchment flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-muted-foreground font-serif-cn mb-4">
            未找到该结果，为你展示默认类型
          </p>
          <button
            onClick={() => navigate(`/result/${fallback.id}`)}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-serif-cn"
          >
            查看结果
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen gradient-parchment py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="max-w-[460px] mx-auto"
      >
        <p className="text-center text-sm text-gold font-display italic mb-6">
          Your Beauty Style
        </p>

        <ResultCard ref={cardRef} result={result} />

        <div className="mt-6 space-y-3">
          <a
            href={`https://twitter.com/intent/tweet?text=我是「${result.name}」！${result.oneLiner}&url=${window.location.origin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-serif-cn text-base hover:opacity-90 transition-opacity"
          >
            分享到 Twitter
          </a>

          <button
            onClick={() => navigate('/quiz')}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-border hover:border-gold/50 text-foreground rounded-lg font-serif-cn text-base transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
            再测一次
          </button>
        </div>
      </motion.div>
    </div>
  )
}
