// src/presentation/components/AppShell.tsx
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { ShoppingBag, ShoppingCart, User, LogOut } from 'lucide-react'
import { useAuthStore } from '@/presentation/store/auth.store'
import { useCartStore } from '@/presentation/store/cart.store'
import { Button } from '@/presentation/components/ui/button'
import { Badge } from '@/presentation/components/ui/badge'
import { CartDrawer } from '@/presentation/components/CartDrawer'

export default function AppShell() {
  const navigate = useNavigate()
  const { user, logout } = useAuthStore()
  const openCart = useCartStore((s) => s.openCart)
  const cartItemCount = useCartStore((s) => s.itemCount())

  async function handleLogout() {
    await logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold">
            <ShoppingBag className="h-5 w-5" />
            <span>ShopApp</span>
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-1">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/catalog">Catálogo</Link>
            </Button>

            {user?.is_staff && (
              <Button variant="ghost" size="sm" asChild>
                <Link to="/admin">Admin</Link>
              </Button>
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            {/* Cart icon */}
            <Button variant="ghost" size="icon" className="relative" onClick={openCart}>
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full p-0 text-xs">
                  {cartItemCount}
                </Badge>
              )}
            </Button>

            {user ? (
              <>
                <Button variant="ghost" size="icon" asChild>
                  <Link to="/profile">
                    <User className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" onClick={handleLogout}>
                  <LogOut className="h-5 w-5" />
                </Button>
              </>
            ) : (
              <Button variant="ghost" size="sm" asChild>
                <Link to="/login">Iniciar sesión</Link>
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Page content */}
      <main>
        <Outlet />
      </main>

      {/* Cart drawer */}
      <CartDrawer />
    </div>
  )
}
