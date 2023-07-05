import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot'

const badgeVariants = cva(
  'inline-flex cursor-pointer items-center rounded-md border-[1px] px-2.5 py-0.5 text-xs transition-colors focus:outline-none',
  {
    variants: {
      variant: {
        default:
          'border-fg-muted/10 bg-canvas-variant/50 text-fg-muted shadow hover:bg-canvas-variant/80',
        outline:
          'border-fg-muted/20 text-fg-muted hover:bg-canvas-muted hover:text-fg',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        ref={ref}
        className={clsx(badgeVariants({ variant }), className)}
        {...props}
      />
    )
  },
)
Badge.displayName = 'Badge'

export { Badge, badgeVariants }
