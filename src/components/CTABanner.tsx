import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiZomato } from "react-icons/si";

export function CTABanner() {
  return (
    <section className="relative py-24 bg-gradient-to-r from-primary to-accent overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            Abhi Order Karein!
          </h2>
          <p className="text-xl text-white/90 mb-10 font-medium">
            Zomato par available hai Desi Zaika
          </p>
          <a
            href="https://zomato.onelink.me/xqzv/4reonjb3"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-banner-order"
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold rounded-full px-10 py-7 text-xl shadow-xl hover:-translate-y-1 transition-transform"
              data-testid="btn-banner-order"
            >
              <SiZomato className="mr-2 text-[#E23744]" size={28} />
              Order on Zomato
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}