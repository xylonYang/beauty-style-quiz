import Index from './pages/Index'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'

export const routers = [
  {
    path: '/',
    name: 'home',
    element: <Index />,
  },
  {
    path: '/quiz',
    name: 'quiz',
    element: <Quiz />,
  },
  {
    path: '/result/:typeId',
    name: 'result',
    element: <Result />,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    element: <Dashboard />,
  },
  {
    path: '*',
    name: '404',
    element: <NotFound />,
  },
]

declare global {
  interface Window {
    __routers__: typeof routers
  }
}

window.__routers__ = routers
