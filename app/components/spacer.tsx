import { AntIcon } from './icons'

export default function Spacer() {
  return (
    <div className="inline-flex w-full items-center justify-center py-16">
      <hr className="my-8 h-0.5 w-64 rounded-lg border-0 bg-border-color dark:bg-canvas-primary" />
      <span className="absolute left-1/2 -translate-x-1/2 bg-canvas px-3 font-medium text-gray-400 dark:text-canvas-primary">
        <AntIcon />
      </span>
    </div>
  )
}
