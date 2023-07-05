export default function ContactSection() {
  return (
    <div className="flex flex-col gap-4 py-4">
      <h1 className="text-lg font-bold">Contacto</h1>
      <p>
        Si te interesa conocer más sobre mi perfil, estaré encantado de recibir
        tus noticias. Por favor, no dudes en contactarme a través de{' '}
        <a
          href="mailto:robles.contactme@gmail.com"
          className="text-fg underline underline-offset-4 transition hover:text-fg-muted"
        >
          robles.contactme@gmail.com
        </a>
        . Estoy dispuesto a analizar nuevas oportunidades profesionales y
        emocionado por las posibilidades que puedan surgir.
      </p>
    </div>
  )
}
