import {
  Menu,
  MenuButton,
  MenuItems,
  MenuLink,
  MenuPopover,
  useMenuButtonContext,
} from '@reach/menu-button'
import { Link, useLocation } from '@remix-run/react'
import clsx from 'clsx'
import { useReducedMotion, motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

const LINKS = [
  {
    to: '/about',
    label: 'About',
  },
  {
    to: '/contact',
    label: 'Contact',
  },
]

const MOBILE_LINKS = [
  {
    to: '/',
    label: 'Home',
  },
  ...LINKS,
]

export default function Navbar({ className }: { className?: string }) {
  const cls = clsx(
    'max-w-7xl mx-auto flex items-center justify-between',
    className,
  )
  return (
    <div className="p-8">
      <nav className={cls}>
        <Link prefetch="intent" to="/" className="text-2xl font-bold">
          <h1>r.</h1>
        </Link>
        <ul className="hidden lg:flex">
          {LINKS.map(link => (
            <NavLink to={link.to} key={link.to}>
              {link.label}
            </NavLink>
          ))}
        </ul>

        <div className="block lg:hidden">
          <MobileMenu />
        </div>
      </nav>
    </div>
  )
}

function MobileMenuList() {
  const { isExpanded } = useMenuButtonContext()
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (isExpanded) {
      // don't use overflow-hidden, as that toggles the scrollbar and causes layout shift
      document.body.classList.add('fixed')
      document.body.classList.add('overflow-y-scroll')
      // alternatively, get bounding box of the menu, and set body height to that.
      document.body.style.height = '100vh'
    } else {
      document.body.classList.remove('fixed')
      document.body.classList.remove('overflow-y-scroll')
      document.body.style.removeProperty('height')
    }
  }, [isExpanded])

  return (
    <AnimatePresence>
      {isExpanded ? (
        <MenuPopover
          position={r => ({
            top: `calc(${Number(r?.top) + Number(r?.height)}px + 2.25rem)`, // 2.25 rem = py-9 from navbar
            left: 0,
            bottom: 0,
            right: 0,
          })}
          style={{ display: 'block' }}
          className="z-50"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.15,
              ease: 'linear',
            }}
            className="flex h-full flex-col overflow-y-auto bg-canvas-overlay pb-12"
          >
            <MenuItems className="flex flex-col border-none bg-transparent pb-8">
              {MOBILE_LINKS.map(link => (
                <MenuLink
                  className="w-full border-b border-border-color py-8 px-8 text-lg font-medium text-fg-muted"
                  key={link.to}
                  as={Link}
                  to={link.to}
                >
                  {link.label}
                </MenuLink>
              ))}
            </MenuItems>
          </motion.div>
        </MenuPopover>
      ) : null}
    </AnimatePresence>
  )
}

function NavLink({
  to,
  children,
}: Omit<Parameters<typeof Link>['0'], 'to'> & { to: string }) {
  const location = useLocation()
  const isSelected =
    to === location.pathname || location.pathname.startsWith(`${to}/`)

  return (
    <li className="px-5 py-2">
      <Link
        prefetch="intent"
        className={clsx(
          'block whitespace-nowrap text-lg font-medium underline-offset-4 hover:text-link focus:outline-none',
          {
            'text-fg-default underline': isSelected,
            'font-light text-fg-muted': !isSelected,
          },
        )}
        to={to}
      >
        {children}
      </Link>
    </li>
  )
}

const topVariants = {
  open: { rotate: 45, y: 7, originX: '16px', originY: '10px' },
  closed: { rotate: 0, y: 0 },
}

const centerVariants = {
  open: { opacity: 0 },
  closed: { opacity: 1 },
}

const bottomVariants = {
  open: { rotate: -45, y: -5, originX: '16px', originY: '22px' },
  closed: { rotate: 0, y: 0 },
}

function MobileMenu() {
  const shouldReduceMotion = useReducedMotion()
  const transition = shouldReduceMotion ? { duration: 0 } : {}
  return (
    <Menu>
      {({ isExpanded }) => {
        const state = isExpanded ? 'open' : 'closed'
        return (
          <>
            <MenuButton
              aria-controls=""
              className="inline-flex h-14 w-14 items-center justify-center rounded-lg border-2 border-border-color text-fg-muted transition focus:outline-none dark:border-canvas-primary"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.rect
                  animate={state}
                  variants={topVariants}
                  transition={transition}
                  x="6"
                  y="9"
                  width="20"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
                <motion.rect
                  animate={state}
                  variants={centerVariants}
                  transition={transition}
                  x="6"
                  y="15"
                  width="20"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
                <motion.rect
                  animate={state}
                  variants={bottomVariants}
                  transition={transition}
                  x="6"
                  y="21"
                  width="20"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
              </svg>
            </MenuButton>

            <MobileMenuList />
          </>
        )
      }}
    </Menu>
  )
}
