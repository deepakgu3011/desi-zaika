import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ZOMATO_URL = "https://zomato.onelink.me/xqzv/4reonjb3";

const menuItems = [
  {
    id: "m1",
    name: "Litti Chokha",
    description: "Baati-style litti with smoky chokha aur desi ghee",
    price: "99",
    color: "from-orange-400 to-red-500",
    zomatoUrl: ZOMATO_URL,
    image: "litti-chokha.jpg",
  },
  {
    id: "m2",
    name: "Desi Maggi",
    description: "Masaledar Maggi with fresh veggies aur special tadka",
    price: "79",
    color: "from-yellow-400 to-orange-500",
    zomatoUrl: ZOMATO_URL,
    image: "OIP.jpg",
  },
  {
    id: "m3",
    name: "Macroni",
    description: "6 littis with chokha, salad, aur makhan",
    price: "149",
    color: "from-amber-500 to-red-600",
    zomatoUrl: ZOMATO_URL,
    image: "macroni.webp",
  },
  {
    id: "m4",
    name: "Plain Paratha",
    description: "Crispy paratha stuffed with spiced Plain masala",
    price: "89",
    color: "from-red-400 to-rose-600",
    zomatoUrl: ZOMATO_URL,
    image: "pratha.webp",
  },
];

export function MenuSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground inline-block relative">
            Hamara Special Menu
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-secondary rounded-full" />
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border group"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={`/products/${item.image}`}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground font-bold px-3 py-1 rounded-full shadow-lg">
                  ₹{item.price}
                </div>
              </div>

              <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                <h3 className="text-xl font-bold text-foreground mb-2 font-serif group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow mb-6">
                  {item.description}
                </p>
                <a
                  href={item.zomatoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                  data-testid={`link-order-${item.id}`}
                >
                  <Button
                    className="w-full bg-[#E23744] hover:bg-[#c22d38] text-white font-semibold rounded-xl flex items-center justify-center gap-2"
                    data-testid={`btn-add-${item.id}`}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                    </svg>
                    Order on Zomato
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}