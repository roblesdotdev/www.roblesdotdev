import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export default function AboutSection() {
  const [showMore, setShowMore] = useState<boolean>(false)

  return (
    <div className="flex flex-col items-start gap-4 py-4">
      <h1 className="text-lg font-bold">Sobre mí</h1>
      <p>
        Soy un desarrollador full stack con una mentalidad optimista y con
        experiencia en el desarrollo web y mobile. Mi versatilidad se extiende a
        través de las tecnologías del back-end y del front-end, permitiéndome
        crear soluciones integrales y eficientes.
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
              Poseo una tecnicatura en análisis de sistemas y mi formación se ha
              complementado con una diversidad de bootcamps y cursos
              especializados, lo que me ha proporcionado las habilidades
              necesarias para llevar a cabo el desarrollo completo de
              aplicaciones, desde su concepción hasta su implementación.
            </p>
            <p>
              Mi objetivo es estar a la vanguardia de las últimas tendencias y
              utilizar nuevas herramientas para ofrecer soluciones innovadoras y
              mejorar continuamente la experiencia de los usuarios en cada
              proyecto.
            </p>
            <p>
              Fuera del trabajo, mis pasatiempos incluyen tocar el bajo, jugar
              videojuegos, ver programas y películas de ciencia ficción, y
              explorar nuevas tecnologías mientras practico.
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
