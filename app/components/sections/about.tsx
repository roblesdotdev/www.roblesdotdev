import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export default function AboutSection() {
  const [showMore, setShowMore] = useState<boolean>(false)

  return (
    <div className="flex flex-col items-start gap-4 py-4">
      <h1 className="text-lg font-bold">Sobre mí</h1>
      <p>
        Soy un desarrollador full stack de Argentina 🇦🇷 con experiencia en el
        desarrollo web y móvil. Mi versatilidad se extiende a través de las
        tecnologías del back-end y del front-end, permitiéndome crear soluciones
        integrales y eficientes.
      </p>
      <AnimatePresence initial={false} mode="wait">
        {showMore ? (
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: 'auto',
              transition: {
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.15,
                },
              },
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: {
                ease: 'linear',
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <p>
              En cuanto a mi formación, poseo una tecnicatura en análisis de
              sistemas que se ha complementado con una diversidad de bootcamps y
              cursos especializados. Estos programas adicionales me han
              permitido adquirir habilidades y conocimientos actualizados en
              áreas como desarrollo web, arquitectura de software y gestión de
              proyectos.
            </p>
            <p>
              Disfruto trabajar en proyectos desafiantes que involucren el
              desarrollo de soluciones innovadoras. Me gusta colaborar con
              profesionales de diferentes áreas para encontrar soluciones
              creativas a problemas complejos.
            </p>
            <p>
              En busca de un crecimiento profesional y personal, siempre estoy
              abierto a adquirir nuevos conocimientos y perfeccionar mis
              habilidades. Mi constante exploración de nuevas tecnologías y
              tendencias emergentes me impulsa a superar desafíos y entregar
              soluciones de alta calidad.
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <button
        onClick={() => setShowMore(!showMore)}
        className="text-fg-muted underline underline-offset-4"
      >
        {showMore ? 'Mostrar menos' : 'Mostrar mas'}
      </button>
    </div>
  )
}
