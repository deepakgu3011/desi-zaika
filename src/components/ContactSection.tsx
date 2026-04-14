import { motion } from "framer-motion";

const GOOGLE_FORM_URL = "https://forms.gle/PHAomsojnpRVgZ8Q6";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#1e0e08]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#fcf9f2] inline-block relative">
            Humse Sampark Karein
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-secondary rounded-full" />
          </h2>
          <p className="mt-8 text-[#fcf9f2]/70 text-lg max-w-xl mx-auto">
            Koi sawaal hai? Feedback dena chahte hain? Hum sunne ke liye hamesha taiyaar hain.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          style={{ minHeight: 640 }}
        >
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6824.78907572489!2d75.76763352721557!3d31.209797008607907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391af4cfbf69cf17%3A0x9cb5e9788af83f32!2sJCT%20Phagwara!5e0!3m2!1sen!2sin!4v1776166392792!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </motion.div>

        <p className="text-center text-[#fcf9f2]/40 text-sm mt-6">
          Form nahin dikh raha?{" "}
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-secondary hover:text-secondary/80 transition-colors"
            data-testid="link-open-form"
          >
            Yahan click karein
          </a>{" "}
          form seedha kholne ke liye.
        </p>
      </div>
    </section>
  );
}
