import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="py-24 bg-background overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute -left-32 -top-32 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />
      <div className="absolute -right-32 -bottom-32 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Hamari Kahani
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Desi Zaika ki shuruaat ek choti si rasoi se hui, jahan hamari dadi ka secret recipe aaj bhi zinda hai.
              </p>
              <p>
                Hum believe karte hain ki ghar jaisa khana sirf ghar mein nahi, balki aapke darwaze tak pahuncha sakte hain. Har dish mein hum daalte hain — <span className="text-primary font-medium">love, ghee, aur authentic desi masale.</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-video rounded-3xl bg-gradient-to-tr from-primary to-accent overflow-hidden relative flex items-center justify-center p-8 shadow-2xl">
              {/* Pattern Overlay */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")"
                }}
              />
              
              <div className="bg-background/95 backdrop-blur-sm p-8 rounded-2xl w-full max-w-sm relative z-10 border border-white/20 shadow-xl">
                <div className="space-y-6">
                  <div className="text-center border-b border-border pb-4">
                    <div className="font-serif text-4xl font-bold text-primary">500+</div>
                    <div className="text-sm font-medium text-foreground uppercase tracking-wider mt-1">Happy Customers</div>
                  </div>
                  <div className="text-center border-b border-border pb-4">
                    <div className="font-serif text-4xl font-bold text-secondary">3 Years</div>
                    <div className="text-sm font-medium text-foreground uppercase tracking-wider mt-1">Of Desi Swaad</div>
                  </div>
                  <div className="text-center">
                    <div className="font-serif text-4xl font-bold text-accent">100%</div>
                    <div className="text-sm font-medium text-foreground uppercase tracking-wider mt-1">Fresh Daily</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}