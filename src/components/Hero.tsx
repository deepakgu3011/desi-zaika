import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiZomato } from "react-icons/si";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#cc1714] to-[#331a12]"
    >
      {/* Decorative texture overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#ffb700 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[#ffb700] rounded-full blur-[120px] opacity-20 pointer-events-none" />

      {/* Floating emojis */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-6xl md:text-8xl opacity-30 select-none pointer-events-none drop-shadow-2xl"
        variants={floatVariants}
        animate="animate"
      >
        🍛
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-1/4 text-6xl md:text-8xl opacity-30 select-none pointer-events-none drop-shadow-2xl"
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
      >
        🌶️
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-1/3 text-4xl md:text-6xl opacity-30 select-none pointer-events-none drop-shadow-2xl"
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
      >
        🔥
      </motion.div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col items-center text-center mt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-[#fcf9f2] leading-tight drop-shadow-lg mb-6"
          >
            Asli Desi Swaad, <br />
            <span className="text-[#ffb700]">Ghar Baithe</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-[#fcf9f2]/90 mb-10 max-w-2xl font-medium drop-shadow-md"
          >
            Litti Chokha, Desi Maggi aur aur bhi bahut kuch
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <a
              href="https://zomato.onelink.me/xqzv/4reonjb3"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
              data-testid="link-hero-order"
            >
              <Button
                className="bg-[#E23744] hover:bg-[#c22d38] text-white font-bold rounded-full px-8 py-6 text-lg w-full sm:w-auto flex items-center gap-2 shadow-xl hover:-translate-y-1 transition-transform"
                data-testid="btn-hero-order"
              >
                <SiZomato size={24} />
                Order Now on Zomato
              </Button>
            </a>
            <a href="#menu" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="bg-transparent border-2 border-[#fcf9f2] text-[#fcf9f2] hover:bg-[#fcf9f2] hover:text-[#331a12] font-bold rounded-full px-8 py-6 text-lg w-full sm:w-auto transition-all"
                data-testid="btn-hero-menu"
              >
                View Our Menu
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}