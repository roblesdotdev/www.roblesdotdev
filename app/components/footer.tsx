export default function Footer() {
  return (
    <footer className="mt-24 flex flex-col gap-4 py-6 text-center">
      <p className="text-sm">
        &copy; Aldo R. Robles - {new Date().getFullYear()} - Tinogasta,
        Argentina
      </p>
    </footer>
  )
}
