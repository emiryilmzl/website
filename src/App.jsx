import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Camera, Palette, PenTool, Quote, ShieldCheck, Sparkles } from "lucide-react";

const navLinks = ["Anasayfa", "Hizmetler", "Çalışmalarımız", "Sanatçı", "İletişim"];

// Kullanıcının yüklediği fotoğraflar için public/gallery/ klasörüne referans veriyoruz.
const gallery = [
  {
    title: "Colorful Portrait",
    desc: "Renk geçişlerinin mükemmel uyumuyla modern ve soyut portre dövmesi.",
    image: "/gallery/1.jpg"
  },
  {
    title: "Axin Lettering",
    desc: "Estetik yazı karakterleri ve kırmızı ince çizgilerle harf sanatı.",
    image: "/gallery/2.jpg"
  },
  {
    title: "İsa (Jesus) Realism",
    desc: "Detaylı gölgelendirmelerle işlenmiş dini motif ve realistik portre çalışması.",
    image: "/gallery/3.jpg"
  },
  {
    title: "Black & Grey Doberman",
    desc: "Siyah ve gri tonlamalı, çarpıcı ve detaylı Doberman figürü çalışması.",
    image: "/gallery/4.jpg"
  },
  {
    title: "Melek (Archangel)",
    desc: "Mitolojik ve klasik esintilerle, güçlü gölgelere sahip melek dövmesi tasarımı.",
    image: "/gallery/5.jpg"
  },
  {
    title: "Roman Spartan Sleeve",
    desc: "Kolezyum ve antik Spartalı savaşçı miğferi temalı detaylı kol kaplama çalışması.",
    image: "/gallery/8.jpg"
  },
  {
    title: "Scripture Lion",
    desc: "'İyi bir yara izi, en iyi nasihatten daha değerlidir...' yazılı illüstratif aslan portresi.",
    image: "/gallery/9.jpg"
  },
  {
    title: "Medieval Dagger",
    desc: "Barok yaprak desenleri ve gölgelendirmelerle işlenmiş antik kılıç dövmesi.",
    image: "/gallery/10.jpg"
  },
  {
    title: "Zeus & Eagle",
    desc: "Siyah ve gri tonlamalı, antik Yunan tanrısı Zeus ve kartal figürlü kol dövmesi.",
    image: "/gallery/11.jpg"
  },
  {
    title: "Keffiyeh Portrait",
    desc: "Yüzü puşi ile örtülü kadın ve barış işareti figürlü kol dövmesi çalışması.",
    image: "/gallery/12.jpg"
  },
  {
    title: "Drama Masks Woman",
    desc: "Tiyatro maskeleri ve detaylı kadın portresi temalı siyah-gri dövme tasarımı.",
    image: "/gallery/13.jpg"
  },
  {
    title: "Eye & Loyalty Script",
    desc: "'Blood makes you related...' yazılı, her şeyi gören göz ve bulut desenli çalışma.",
    image: "/gallery/14.jpg"
  },
  {
    title: "The Last Supper",
    desc: "Leonardo da Vinci'nin Son Akşam Yemeği tablosunun kol üzerine realistik uygulaması.",
    image: "/gallery/15.jpg"
  },
  {
    title: "Doves & Sacred Heart",
    desc: "Sema eden güvercinler, ışık hüzmeleri ve alevli kutsal kalp temalı kompozisyon.",
    image: "/gallery/16.jpg"
  },

  {
    title: "Zeus with Lion Helmet",
    desc: "Aslan başlı miğfer giyen Zeus/Poseidon figürlü realistik omuz dövmesi.",
    image: "/gallery/18.jpg"
  },
  {
    title: "Eye, Clock & Rose",
    desc: "Zaman akışı, her şeyi gören göz ve gül detaylı sürrealist kol kaplama dövmesi.",
    image: "/gallery/19.jpg"
  }
];

const artists = [
  {
    name: "Kamuran Aslan",
    role: "Sanatçı",
    initials: "K.A.",
    instagram: "aslann_tattoo",
    bio: "Sanat ve estetiğin bedende buluştuğu nokta. Yılların verdiği tecrübeyle, aklındaki tasarımı gerçeğe dönüştürüyorum. İster detaylı bir Black & Grey çalışması, ister göz alıcı bir Colorful Tattoo veya eski dövmelerinizi kapatacak profesyonel bir Cover Up Tattoo olsun, her çizgi özenle ve tutkuyla atılıyor.",
    bio2: "Aslan Tattoo stüdyosunda en önemli kuralımız: Hijyen standartları, detaylara verilen hassasiyet ve tamamen size özel (custom) tasarımlar üretmek."
  },
  {
    name: "Siyabend Aslan",
    role: "Sanatçı",
    initials: "S.A.",
    instagram: "siyabendaslan",
    bio: "Çizgilerin gücü ve modern dövme teknikleriyle cildinize özgün hikayeler işliyorum. Minimalist Tattoo, Colorful Tattoo ve profesyonel Cover Up Tattoo çalışmaları başta olmak üzere; geometrik tasarımlar, detaylı çizimler ve kişiye özel illüstrasyonlarla tarzınızı yansıtacak en doğru çalışmayı sunuyorum.",
    bio2: "Sanatı bedeninizde güvenle taşımak için sterilize edilmiş ekipmanlar ve dünya standartlarında mürekkepler kullanarak kusursuz sonuçlar hedefliyorum."
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
            <a href="https://wa.me/905538572365?text=Merhaba%2C%20d%C3%B6vme%20tasar%C4%B1m%C4%B1%20ve%20randevu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn-primary">WhatsApp'tan Yaz</a>
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
               <img src="/gallery/1.jpg" alt="Tattoo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100" />
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
               <img src="/gallery/2.jpg" alt="Tattoo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100" />
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
    <section id="sanatci" className="py-32 relative bg-[#050505] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">Kurucularımız & Sanatçılarımız</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mt-4">Sanatçılarımız</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {artists.map((artist, index) => (
            <motion.div 
              key={artist.name}
              className="flex flex-col md:flex-row gap-8 items-center bg-white/[0.01] border border-white/5 p-6 rounded-lg hover:border-[#D4AF37]/30 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="w-full md:w-2/5 aspect-[4/5] bg-[#0c0c0c] border border-[#D4AF37]/20 flex flex-col items-center justify-center relative overflow-hidden group shrink-0 rounded-md">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent"></div>
                <div className="absolute inset-0 border-2 border-[#D4AF37] scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 z-20 pointer-events-none"></div>
                
                {/* Initials badge */}
                <div className="w-20 h-20 rounded-full border border-[#D4AF37]/30 flex items-center justify-center bg-black transition-all duration-500 group-hover:scale-110 group-hover:border-[#D4AF37]/60 shadow-[0_0_20px_rgba(212,175,55,0.03)] group-hover:shadow-[0_0_35px_rgba(212,175,55,0.15)] relative">
                  <span className="text-[#D4AF37] text-3xl font-serif tracking-[0.2em] pl-1 font-bold">{artist.initials}</span>
                </div>
                
                <span className="text-zinc-600 uppercase tracking-[0.3em] text-[9px] mt-6 font-bold group-hover:text-[#D4AF37]/75 transition-colors">Aslan Tattoo</span>
              </div>
              
              <div className="flex flex-col justify-between flex-grow h-full">
                <div>
                  <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">{artist.role}</span>
                  <h3 className="text-2xl font-black uppercase text-white mt-2 mb-6">{artist.name}</h3>
                  <div className="space-y-3 text-zinc-400 text-sm leading-relaxed mb-6">
                    <p>{artist.bio}</p>
                    <p className="text-zinc-500 text-xs">{artist.bio2}</p>
                  </div>
                </div>
                
                <div className="border-t border-white/5 pt-4 mt-auto flex justify-between items-center w-full">
                  <a 
                    href={`https://instagram.com/${artist.instagram}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors font-bold"
                  >
                    @{artist.instagram}
                  </a>
                  <span className="text-[10px] text-zinc-600 uppercase tracking-widest">Aslan Tattoo</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }
    
    // Web sitesinden gidildiği belirtiliyor
    const text = `Merhaba, web sitenizi gezdim, randevu hakkında bilgi almak istiyorum.\n\n*Ad Soyad:* ${formData.name}\n*Telefon:* ${formData.phone}\n*Mesaj:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/905445529987?text=${encodedText}`, "_blank");
  };

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
              Dövme yaptırmak veya aklındaki tasarım hakkında fiyat bilgi almak için bizimle WhatsApp üzerinden iletişime geçebilirsin.
            </p>
            
            <div className="space-y-8">
              {/* WhatsApp / Telefon Kartı */}
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 shrink-0 rounded-none border border-[#D4AF37] flex items-center justify-center bg-[#D4AF37]/10 text-[#D4AF37] rotate-45">
                  <Phone className="w-6 h-6 -rotate-45" />
                </div>
                <div className="pt-2">
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">WhatsApp / Telefon</h4>
                  <p className="text-zinc-400 text-xl font-light tracking-wider">
                    <a href="https://wa.me/905445529987" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">0544 552 9987</a>
                  </p>
                </div>
              </div>
              
              {/* Adres Kartı */}
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 shrink-0 rounded-none border border-[#D4AF37] flex items-center justify-center bg-[#D4AF37]/10 text-[#D4AF37] rotate-45">
                  <MapPin className="w-6 h-6 -rotate-45" />
                </div>
                <div className="pt-2">
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">Adres</h4>
                  <p className="text-[#D4AF37] text-lg font-bold mb-1">Aslan Tattoo Studio</p>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Şerefiye, Naci Bey Sk. No:16, 65140 Van Merkez, 65100 İpekyolu/Van
                  </p>
                </div>
              </div>
            </div>

            {/* Stüdyo Konumu Kartı */}
            <div className="mt-12 glass-card !p-8 border border-white/5 hover:border-[#D4AF37]/20 transition-all duration-500 rounded-lg">
              <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-2">Stüdyo Konumu</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Aslan Tattoo stüdyomuzu ziyaret ederek dövme tasarımlarımızı inceleyebilir, randevu ve danışmanlık için bizimle iletişime geçebilirsiniz.
              </p>
              
              {/* Harita Alanı */}
              <div className="relative w-full max-w-[280px] aspect-square rounded-xl overflow-hidden border border-white/10 mb-6 bg-zinc-950 mx-auto md:mx-0">
                <iframe
                  title="Aslan Tattoo Studio Konumu"
                  src="https://maps.google.com/maps?q=Aslan+Tatto,+Van&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
                {/* Fallback address info if iframe fails/loads slow */}
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded text-[10px] text-zinc-300 font-semibold border border-white/5 pointer-events-none">
                  Van, Türkiye
                </div>
              </div>
              
              <div className="space-y-4 text-xs text-zinc-500 font-light mb-6 border-b border-white/5 pb-4">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping"></span>
                  Görüşmeler ve dövme işlemleri randevu ile yapılır.
                </p>
              </div>

              {/* Hızlı Aksiyonlar */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <a 
                  href="https://wa.me/905445529987?text=Merhaba%2C%20web%20sitenizi%20gezdim%2C%20randevu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-secondary !px-4 !py-3 !text-[11px] text-center uppercase tracking-widest flex items-center justify-center gap-1.5 hover:bg-[#D4AF37] hover:text-black transition-all"
                >
                  <Phone className="w-3 h-3" /> WhatsApp'tan Randevu Al
                </a>
                <a 
                  href="https://instagram.com/aslann_tattoo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-secondary !px-4 !py-3 !text-[11px] text-center uppercase tracking-widest flex items-center justify-center gap-1.5 hover:bg-[#D4AF37] hover:text-black transition-all"
                >
                  <Camera className="w-3 h-3" /> Instagram'da Gör
                </a>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=38.49604900628831,43.39641680925806" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary !px-4 !py-3 !text-[11px] text-center uppercase tracking-widest flex items-center justify-center gap-1.5 shadow-none"
                >
                  <MapPin className="w-3 h-3" /> Yol Tarifi Al
                </a>
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
            {/* Stüdyomuz Görseli */}
            <div className="mb-8 border-b border-white/5 pb-8">
              <h3 className="text-xl font-bold uppercase tracking-wider text-[#D4AF37] mb-4">Stüdyomuz</h3>
              <div className="aspect-[16/10] w-full rounded-lg overflow-hidden border border-white/10 relative group">
                <img 
                  src="/exterior.jpg" 
                  alt="Aslan Tattoo Studio Girişi" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <span className="text-[10px] text-white font-bold tracking-widest uppercase">Naci Bey Sokak Girişi</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-black uppercase text-white mb-6 tracking-widest text-center">Hızlı Mesaj</h3>
            <form className="space-y-6" onSubmit={handleSend}>
              <div>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Adınız Soyadınız" 
                  className="contact-input bg-[#050505] border-white/20" 
                  required
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Telefon Numaranız" 
                  className="contact-input bg-[#050505] border-white/20" 
                  required
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  placeholder="Dövme fikrinizi kısaca anlatın..." 
                  className="contact-input bg-[#050505] border-white/20"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full cursor-pointer">WhatsApp İle Gönder</button>
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
        <p className="text-zinc-600 text-[10px] uppercase tracking-widest mt-2">
          Designed by <a href="https://carabinasoft.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">Carabina Soft</a>
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
