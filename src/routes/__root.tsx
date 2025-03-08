import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div className="p-2 flex gap-2 text-lg">
        <Link
          activeOptions={{ exact: true }}
          activeProps={{
            className: 'font-bold',
          }}
          to="/"
        >
          Home
        </Link>{' '}
        <Link
          activeProps={{
            className: 'font-bold',
          }}
          to="/about"
        >
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
