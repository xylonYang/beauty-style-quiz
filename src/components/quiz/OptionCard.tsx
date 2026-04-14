import { cn } from '@/lib/utils'
import type { QuizOption } from '@/data/quizQuestions'

interface OptionCardProps {
  option: QuizOption
  isSelected: boolean
  onClick: () => void
}

export default function OptionCard({ option, isSelected, onClick }: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'group relative w-full overflow-hidden rounded-lg border-2 transition-all duration-300 cursor-pointer',
        'hover:shadow-elegant hover:scale-[1.02]',
        isSelected
          ? 'border-gold shadow-elegant scale-[1.02]'
          : 'border-border hover:border-gold/50',
      )}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={option.imageUrl}
          alt={option.label}
          crossOrigin="anonymous"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div
        className={cn(
          'px-3 py-2.5 text-center transition-colors duration-300',
          isSelected ? 'bg-gold/10' : 'bg-card',
        )}
      >
        <p
          className={cn(
            'text-sm font-serif-cn leading-relaxed transition-colors duration-300',
            isSelected ? 'text-gold-dark font-medium' : 'text-foreground',
          )}
        >
          {option.label}
        </p>
      </div>
      {isSelected && (
        <div className="absolute top-2 right-2 w-6 h-6 rounded-full gradient-gold flex items-center justify-center">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="hsl(var(--primary-foreground))"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      )}
    </button>
  )
}
