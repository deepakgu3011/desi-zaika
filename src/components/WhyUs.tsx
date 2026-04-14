import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Heart, Zap } from "lucide-react";

const features = [
  {
    icon: <Leaf size={32} className="text-secondary" />,
    title: "Fresh Ingredients",
    desc: "Roz fresh ingredients se taiyaar",
  },
  {
    icon: <ShieldCheck size={32} className="text-secondary" />,
    title: "Hygienic Cooking",
    desc: "FSSAI certified saaf rasoi",
  },
  {
    icon: <Heart size={32} className="text-secondary" />,
    title: "Authentic Taste",
    desc: "Ghar jaisi pakwaan",
  },
  {
    icon: <Zap size={32} className="text-secondary" />,
    title: "Fast Delivery",
    desc: "30 min delivery guarantee",
  },
];

export function WhyUs() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-foreground inline-block relative">
            Kyun Chunein Desi Zaika?
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full" />
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card p-8 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-serif">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}