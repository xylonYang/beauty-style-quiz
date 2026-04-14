import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen gradient-parchment flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-display font-bold text-gold mb-4">404</h1>
        <p className="text-muted-foreground font-serif-cn mb-6">页面不存在</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-serif-cn hover:opacity-90 transition-opacity"
        >
          返回首页
        </button>
      </div>
    </div>
  )
}
