import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#24110b] text-[#fcf9f2] pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-4">
              <img src="/desi-zaika-logo.png" alt="Desi Zaika" className="h-12 w-auto brightness-0 invert" />
              <span className="font-serif text-3xl font-bold text-white">Desi Zaika</span>
            </div>
            <p className="text-white/70 text-lg font-serif italic mb-6">
              "Ghar ka swaad, aapke darwaze tak"
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-bold text-lg mb-4 text-secondary">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors text-white"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm text-center">
          <p>© 2025 Desi Zaika. All rights reserved.</p>
          <p>A cloud kitchen by food lovers, for food lovers.</p>
        </div>
      </div>
    </footer>
  );
}