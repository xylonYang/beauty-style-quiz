interface ProgressBarProps {
  current: number
  total: number
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100

  return (
    <div className="w-full flex items-center gap-3">
      <div className="flex-1 h-[2px] bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full gradient-gold rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-xs text-muted-foreground font-serif-cn whitespace-nowrap">
        {current} / {total}
      </span>
    </div>
  )
}
