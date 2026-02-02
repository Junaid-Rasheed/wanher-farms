import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function PageHero({
  title,
  description,
  backgroundImage,
}) {
  return (
    <motion.section
      className="relative w-full h-[60vh] md:h-[72vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={heroVariants}
    >
      {/* GREEN OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e3f06]/40 via-[#1f6306]/80 to-[#1f6306]/10" />

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto w-full px-6">
        <div className="mt-12 md:mt-20 max-w-2xl">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
            {title}
          </h1>

          {description && (
            <p className="mt-6 text-white/90 text-sm md:text-base leading-relaxed max-w-xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.section>
  );
}
