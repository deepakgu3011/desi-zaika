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
          <iframe
            src={`${GOOGLE_FORM_URL}?embedded=true`}
            width="100%"
            height="640"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Contact Us Form"
            className="w-full bg-white"
            data-testid="iframe-contact-form"
          >
            Loading form…
          </iframe>
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
