import { motion } from "framer-motion";
import { MapPin, Phone, Camera, Palette, PenTool, Quote, ShieldCheck, Sparkles } from "lucide-react";

const navLinks = ["Anasayfa", "Hizmetler", "Çalışmalarımız", "Sanatçı", "İletişim"];
const baseUrl = import.meta.env.BASE_URL;

// Kullanıcının yüklediği fotoğraflar için public/gallery/ klasörüne referans veriyoruz.
const gallery = [
  {
    title: "Colorful Portrait",
    desc: "Özel Tasarım Renkli Portre",
    image: `${baseUrl}gallery/1.jpg`
  },
  {
    title: "Black & Grey Doberman",
    desc: "Yazı ve Figür Tasarımı",
    image: `${baseUrl}gallery/2.jpg`
  },
  {
    title: "İsa (Jesus) Realism",
    desc: "İnce İşçilikli Dini Motif",
    image: `${baseUrl}gallery/3.jpg`
  },
  {
    title: "Melek (Archangel)",
    desc: "Mitolojik & Melek Tasarımı",
    image: `${baseUrl}gallery/4.jpg`
  },
  {
    title: "Axin Lettering",
    desc: "Kırmızı Harf Detayları",
    image: `${baseUrl}gallery/5.jpg`
  }
];

const services = [
  {
    title: "Colorful Tattoo",
    desc: "Özel mürekkeplerle uzun ömürlü, canlı ve kişiye özel renkli dövme tasarımları.",
    icon: <Palette className="w-10 h-10" />
  },
  {
    title: "Black & Grey",
    desc: "Işık ve gölgenin kusursuz uyumuyla gerçekçi siyah beyaz sanat eserleri.",
    icon: <PenTool className="w-10 h-10" />
  },
  {
    title: "Hijyenik Ortam",
    desc: "Tek kullanımlık malzemeler ve sterilize edilmiş premium stüdyo koşulları.",
    icon: <ShieldCheck className="w-10 h-10" />
  }
];

function Logo() {
  return (
    <a href="#anasayfa" className="flex items-center gap-4 group">
      <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] flex items-center justify-center bg-black transition-transform duration-500 group-hover:rotate-12 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] relative overflow-hidden">
        <span className="text-[#D4AF37] text-2xl font-bold">A</span>
      </div>
      <div className="flex flex-col">
        <span className="text-white font-bold tracking-[0.2em] uppercase text-sm group-hover:text-[#D4AF37] transition-colors">Aslan Tattoo</span>
        <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-bold">Van Dövme</span>
      </div>
    </a>
  );
}

function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase().replace("ı", "i").replace("ç", "c")}`} className="nav-link">
              {link}
            </a>
          ))}
        </div>
        <a href="#iletisim" className="hidden md:inline-flex btn-primary !px-6 !py-3 !text-xs">
          Randevu Al
        </a>
      </nav>
    </motion.header>
  );
}

// Ekrani daha dolu gostermek icin kayan yazi (Marquee) bileseni
function Marquee() {
  return (
    <div className="bg-[#D4AF37] py-3 overflow-hidden border-y border-black">
      <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-8">
            <span className="text-black font-black uppercase tracking-widest text-sm">Tattoo</span>
            <Sparkles className="text-black w-4 h-4" />
            <span className="text-black font-black uppercase tracking-widest text-sm">Cover Up</span>
            <Sparkles className="text-black w-4 h-4" />
            <span className="text-black font-black uppercase tracking-widest text-sm">Custom Design</span>
            <Sparkles className="text-black w-4 h-4" />
            <span className="text-black font-black uppercase tracking-widest text-sm">Piercing</span>
            <Sparkles className="text-black w-4 h-4" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="anasayfa" className="relative min-h-screen pt-24 flex flex-col justify-between">
      <div className="hero-bg opacity-30" />
      <div className="hero-overlay" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center flex-grow w-full py-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-12 bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-bold">Premium Dövme Stüdyosu</span>
          </div>
          {/* I ve i harfi sorunu icin font-sans ve duz metin kullanildi */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white leading-[0.95] tracking-tight font-sans">
            CİLDİNDEKİ <br/>
            <span className="text-[#D4AF37]">SANAT</span>
          </h1>
          <p className="mt-8 text-zinc-300 text-lg leading-relaxed max-w-lg border-l-2 border-[#D4AF37] pl-6 bg-white/5 py-4 pr-4">
            İnce işçilik, kusursuz gölgelendirme ve sana özel tasarımlarla bedenini bir tuvale dönüştür. Van'ın en premium dövme stüdyosu.
          </p>
          <div className="mt-10 flex flex-wrap gap-5">
            <a href="#iletisim" className="btn-primary">WhatsApp'tan Yaz</a>
            <a href="#calismalarimiz" className="btn-secondary">Galeriyi İncele</a>
          </div>
          
          <div className="mt-16 flex items-center gap-6">
             <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-[#050505] bg-zinc-800 flex items-center justify-center">
                    <span className="text-[10px] text-zinc-500">Müşteri</span>
                  </div>
                ))}
             </div>
             <div className="flex flex-col">
               <span className="text-white font-bold">500+ Mutlu Müşteri</span>
               <span className="text-[#D4AF37] text-xs">Van Merkez</span>
             </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="hidden lg:grid grid-cols-2 gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="space-y-4 pt-12">
            <div className="aspect-[4/5] bg-zinc-900 border border-white/10 p-2 overflow-hidden group">
               <img src={`${baseUrl}gallery/1.jpg`} alt="Tattoo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100" />
            </div>
            <div className="aspect-square bg-[#111] border border-[#D4AF37]/30 flex flex-col items-center justify-center p-6 text-center">
               <ShieldCheck className="text-[#D4AF37] w-10 h-10 mb-4" />
               <span className="text-white font-bold uppercase tracking-widest text-xs">Steril &<br/>Güvenli</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="aspect-square bg-[#111] border border-[#D4AF37]/30 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-[#D4AF37] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
               <Quote className="text-[#D4AF37] group-hover:text-black w-10 h-10 mb-4 relative z-10 transition-colors" />
               <span className="text-white group-hover:text-black font-bold uppercase tracking-widest text-xs relative z-10 transition-colors">Özel<br/>Tasarım</span>
            </div>
            <div className="aspect-[4/5] bg-zinc-900 border border-white/10 p-2 overflow-hidden group">
               <img src={`${baseUrl}gallery/2.jpg`} alt="Tattoo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100" />
            </div>
          </div>
        </motion.div>
      </div>
      
      <Marquee />
    </section>
  );
}

function Services() {
  return (
    <section id="hizmetler" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">Hizmetlerimiz</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mt-4">Profesyonel Dokunuş</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="glass-card group flex flex-col items-center text-center !p-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-24 h-24 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-8 transition-all duration-500 group-hover:bg-[#D4AF37] group-hover:text-black group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black uppercase text-white mb-4">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="calismalarimiz" className="py-32 bg-[#020202] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <motion.span 
            className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Portfolyo
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-6xl font-black uppercase text-white mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Çalışmalarımız
          </motion.h2>
        </div>
        <a href="https://instagram.com/aslann_tattoo" target="_blank" rel="noreferrer" className="btn-secondary flex items-center gap-3">
          <Camera className="w-4 h-4" /> Tümünü Gör
        </a>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 max-w-[1400px] mx-auto">
        {gallery.map((item, index) => (
          <motion.div 
            key={item.title}
            className="gallery-item aspect-[4/5] border border-white/10 rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Fotoğraflar public/gallery içinden çekiliyor. Kullanıcı buraya fotoğrafları koyduğunda çalışacak. Kutu içi boş görünmemesi için arkaplan rengi verildi */}
            <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center -z-10">
              <Camera className="text-zinc-700 w-12 h-12" />
            </div>
            <img src={item.image} alt={item.title} className="bg-zinc-900" />
            <div className="gallery-item-overlay">
              <span className="w-8 h-[2px] bg-[#D4AF37] mb-4"></span>
              <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-2">{item.title}</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Artist() {
  return (
    <section id="sanatci" className="py-32 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/5] bg-zinc-900 border border-[#D4AF37]/20 p-4 relative overflow-hidden group">
              <div className="absolute inset-0 border-2 border-[#D4AF37] scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 z-20 pointer-events-none"></div>
              {/* Sanatçının fotoğrafını temsil eden alan */}
              <div className="w-full h-full bg-[#111] flex flex-col items-center justify-center">
                <span className="text-[#D4AF37] font-serif text-8xl opacity-10">K.A.</span>
                <span className="text-zinc-500 uppercase tracking-widest text-xs mt-4">Sanatçı Fotoğrafı</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">Kurucu & Sanatçı</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white mt-4 mb-8">
              Kamuran <br/><span className="text-[#D4AF37]">AslanZ</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed p-8 border border-white/5 bg-white/[0.02]">
              <p>
                Sanat ve estetiğin bedende buluştuğu nokta. Yılların verdiği tecrübeyle, aklındaki tasarımı gerçeğe dönüştürüyorum. İster detaylı bir Black & Grey çalışması, ister göz alıcı bir Colorful Tattoo olsun, her çizgi özenle atılıyor.
              </p>
              <p>
                Aslan Tattoo stüdyosunda en önemli kuralımız: Hijyen, detaylara verilen önem ve tamamen sana özel (custom) tasarımlar üretmek.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-10">
              <div className="flex items-center gap-4">
                <span className="text-4xl text-[#D4AF37] font-black">9K+</span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Instagram<br/>Takipçi</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-4xl text-[#D4AF37] font-black">100%</span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Özel<br/>Tasarım</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="iletisim" className="py-32 relative border-t border-[#D4AF37]/20 bg-gradient-to-b from-[#050505] to-[#111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">Randevu & İletişim</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white mt-4 mb-8">
              Fikrini <span className="text-[#D4AF37]">Sanata</span> Dönüştür
            </h2>
            <p className="text-zinc-400 text-lg mb-10">
              Dövme yaptırmak veya aklındaki tasarım hakkında fiyat bilgisi almak için bizimle WhatsApp üzerinden iletişime geçebilirsin.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 shrink-0 rounded-none border border-[#D4AF37] flex items-center justify-center bg-[#D4AF37]/10 text-[#D4AF37] rotate-45">
                  <Phone className="w-6 h-6 -rotate-45" />
                </div>
                <div className="pt-2">
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">WhatsApp / Telefon</h4>
                  <p className="text-zinc-400 text-xl font-light tracking-wider">0544 552 99 87</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 shrink-0 rounded-none border border-[#D4AF37] flex items-center justify-center bg-[#D4AF37]/10 text-[#D4AF37] rotate-45">
                  <MapPin className="w-6 h-6 -rotate-45" />
                </div>
                <div className="pt-2">
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">Adres</h4>
                  <p className="text-[#D4AF37] text-xl font-light mb-2">Van Merkez</p>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest">
                    Açık adres daha sonra eklenecektir.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card !p-10 border-t-4 border-t-[#D4AF37]"
          >
            <h3 className="text-2xl font-black uppercase text-white mb-8 text-center tracking-widest">Hızlı Mesaj</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input type="text" placeholder="Adınız Soyadınız" className="contact-input bg-[#050505] border-white/20" />
              </div>
              <div>
                <input type="tel" placeholder="Telefon Numaranız" className="contact-input bg-[#050505] border-white/20" />
              </div>
              <div>
                <textarea rows="4" placeholder="Dövme fikrinizi kısaca anlatın..." className="contact-input bg-[#050505] border-white/20"></textarea>
              </div>
              <button type="button" className="btn-primary w-full">Gönder</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        <Logo />
        <p className="text-zinc-600 text-[10px] uppercase tracking-widest mt-8">
          © 2026 Van Dövme Aslan Tattoo. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#D4AF37] selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Artist />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
