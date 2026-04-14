import { forwardRef } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import type { BeautyType } from '@/data/beautyTypes'

interface ResultCardProps {
  result: BeautyType
}

const SITE_URL = window.location.origin

const ResultCard = forwardRef<HTMLDivElement, ResultCardProps>(
  ({ result }, ref) => {
    return (
      <div
        ref={ref}
        className="w-full max-w-[420px] mx-auto bg-card overflow-hidden rounded-xl"
        style={{ boxShadow: 'var(--shadow-elegant)' }}
      >
        {/* Hero Image */}
        <div className="relative w-full aspect-[3/4] overflow-hidden">
          <img
            src={result.imageUrl}
            alt={result.name}
            crossOrigin="anonymous"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay at bottom of image */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-card to-transparent" />

          {/* Category name overlay */}
          <div className="absolute inset-x-0 bottom-4 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-wider leading-tight">
              {result.name}
            </h1>
            <p className="text-sm font-display italic text-gold mt-1">
              {result.englishTag}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pt-4 pb-6">
          {/* One liner - prominent */}
          <p className="text-xl md:text-2xl font-serif-cn font-semibold text-center text-foreground leading-relaxed mb-4">
            「{result.oneLiner}」
          </p>

          {/* Gold divider */}
          <div className="gold-divider my-4" />

          {/* Painting reference */}
          <p className="text-xs text-muted-foreground text-center mb-3 font-serif-cn">
            灵感名画：{result.paintingRef}
          </p>

          {/* Full compliment */}
          <p className="text-sm font-serif-cn text-ink-light leading-[1.9] text-justify">
            {result.compliment}
          </p>

          {/* Gold divider */}
          <div className="gold-divider my-4" />

          {/* QR Code + Watermark row */}
          <div className="flex items-center justify-center gap-4">
            {/* Artistic QR Code */}
            <div className="relative flex-shrink-0">
              {/* Decorative border frame */}
              <div
                className="p-[6px] rounded-lg"
                style={{
                  background:
                    'linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--gold) / 0.4) 50%, hsl(var(--gold)) 100%)',
                }}
              >
                <div className="bg-card p-[6px] rounded-md">
                  <QRCodeCanvas
                    value={SITE_URL}
                    size={72}
                    level="M"
                    bgColor="hsl(40, 30%, 96%)"
                    fgColor="hsl(30, 20%, 25%)"
                    marginSize={0}
                  />
                </div>
              </div>
              {/* Corner ornaments */}
              <div
                className="absolute -top-[2px] -left-[2px] w-3 h-3 border-t-2 border-l-2 rounded-tl-sm"
                style={{ borderColor: 'hsl(var(--gold))' }}
              />
              <div
                className="absolute -top-[2px] -right-[2px] w-3 h-3 border-t-2 border-r-2 rounded-tr-sm"
                style={{ borderColor: 'hsl(var(--gold))' }}
              />
              <div
                className="absolute -bottom-[2px] -left-[2px] w-3 h-3 border-b-2 border-l-2 rounded-bl-sm"
                style={{ borderColor: 'hsl(var(--gold))' }}
              />
              <div
                className="absolute -bottom-[2px] -right-[2px] w-3 h-3 border-b-2 border-r-2 rounded-br-sm"
                style={{ borderColor: 'hsl(var(--gold))' }}
              />
            </div>

            {/* Text info */}
            <div className="flex flex-col items-start gap-1">
              <p className="text-xs font-serif-cn text-foreground font-medium">
                扫码测你的颜值风格
              </p>
              <p className="text-[10px] text-muted-foreground font-serif-cn leading-tight">
                「你是哪种美？」
              </p>
              <p className="text-[10px] text-muted-foreground font-serif-cn">
                ©xylon
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
)

ResultCard.displayName = 'ResultCard'

export default ResultCard
