import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme/theme-provider'
import { Toaster } from './components/ui/sonner'
import { router } from './pages/routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <RouterProvider router={router} />
        <Toaster richColors />
      </ThemeProvider>
    </HelmetProvider>
  )
}
