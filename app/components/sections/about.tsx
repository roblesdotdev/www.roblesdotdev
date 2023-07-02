import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function AboutSection() {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="py-4 flex flex-col gap-4 items-start">
      <h1 className="font-bold text-lg">About me</h1>
      <p>
        Vestibulum imperdiet elit nec ipsum volutpat lacinia. Fusce at quam at
        diam molestie lacinia. Nam nec tristique urna, vel ultricies sapien.
        Duis consectetur ut massa at aliquam. Aenean nec massa sed mi posuere
        convallis.
      </p>
      <AnimatePresence initial={false} mode="wait">
        {showMore ? (
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
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
                ease: "linear",
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
              Cras vulputate, lectus eu ornare consectetur, sem tellus mollis
              odio, quis vehicula massa sapien non turpis. Fusce ligula magna,
              sollicitudin id diam id, rutrum ultricies felis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              consectetur vitae enim ut dictum. Sed enim ante, eleifend a
              iaculis et, faucibus et arcu. Donec vel vestibulum magna, sit amet
              commodo neque.
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <button
        onClick={() => setShowMore(!showMore)}
        className="underline underline-offset-4 text-fg-muted"
      >
        {showMore ? "Show less" : "Show more"}
      </button>
    </div>
  );
}
