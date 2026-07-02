import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import heroTowers from "@/assets/hero-towers.jpg";
import interior from "@/assets/interior.jpg";
import amenities from "@/assets/amenities.jpg";
import {
  MapPin, Phone, MessageCircle, Building2, Trees, Dumbbell, Waves,
  Sparkles, Home, Ruler, Layers, Users, ChevronRight, Play, FileText, Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { property: "og:image", content: "https://id-preview--20287d8d-6c21-4666-b370-5fbc16ccb003.lovable.app/og-hero.jpg" },
    ],
  }),
});

const PHONE = "8971280913";
const WHATSAPP = `https://wa.me/91${PHONE}?text=${encodeURIComponent("Hi, I'm interested in Puravankara Northern Lights. Please share details.")}`;
const REG_LINK = "https://www.providenthousing.com/provident-channel-partner-registration-form/";
const LOCATION = "https://maps.app.goo.gl/HcDfABdBY27FDWfo9";

const stats = [
  { label: "Acres of Land", value: "25", icon: Trees },
  { label: "Iconic Towers", value: "08", icon: Building2 },
  { label: "Residences", value: "2973", icon: Home },
  { label: "Open Space", value: "80%", icon: Sparkles },
  { label: "Clubhouse", value: "1L sqft", icon: Dumbbell },
  { label: "Amenities", value: "50+", icon: Waves },
];

const typologies = [
  {
    tier: "2 BHK",
    tagline: "Comfort & Grand",
    price: "₹1.40 Cr*",
    sizes: ["1,104 sqft — Comfort", "1,275 sqft — Grand", "1,326 sqft — Grand", "1,336 sqft — Grand"],
    accent: "from-gold/20 to-transparent",
  },
  {
    tier: "3 BHK",
    tagline: "Standard, Large & Premium",
    price: "₹1.96 Cr*",
    sizes: ["1,685 sqft — Standard", "1,686 sqft — Standard", "1,736 sqft — Large", "1,791 sqft — Premium"],
    accent: "from-gold/30 to-transparent",
    featured: true,
  },
  {
    tier: "3.5 BHK",
    tagline: "Study & Maid layouts",
    price: "On Request",
    sizes: ["1,962 sqft — With Study", "1,858 sqft — With Maid", "2,031 sqft — With Maid"],
    accent: "from-gold/20 to-transparent",
  },
  {
    tier: "4 BHK Duplex",
    tagline: "The signature residence",
    price: "On Request",
    sizes: ["4,131 sqft — Duplex", "The most expansive home", "Limited exclusive units"],
    accent: "from-gold/40 to-transparent",
  },
];

const videos = [
  { title: "Lifestyle Film", subtitle: "The Northern Lights lifestyle", youtubeId: "_7ZEA2Uxa3Y" },
  { title: "Location Advantage", subtitle: "Why Bagalur Road, North Bengaluru", youtubeId: "5zWG5odyKns" },
  { title: "Project Walkthrough", subtitle: "A tour of the community", youtubeId: "DzpNNOayBjE" },
  { title: "3 BHK Show Residence", subtitle: "Step inside a furnished home", youtubeId: "Eq_ADS9WF5o" },
];

const brochures = [
  { title: "Floor Plans Brochure", url: "https://drive.google.com/file/d/1sgZ9A0WwE49HA89Ag162Jsbw819FNMVg/view" },
  { title: "Lifestyle Brochure", url: "https://drive.google.com/file/d/1NW2oVFWF4T__8oFqTPqjNAKDYNWgjVnB/view" },
];

function Landing() {
  return (
    <div className="min-h-screen text-foreground">
      <Toaster theme="dark" />
      <Nav />
      <Hero />
      <StatsBar />
      <About />
      <Typologies />
      <Amenities />
      <Gallery />
      <Location />
      <LeadForm />
      <Footer />
      <FloatingActions />
    </div>
  );
}

function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition hover:scale-110"
        style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
      >
        <span className="absolute inset-0 rounded-full animate-ping opacity-40" style={{ background: "#25D366" }} />
        <MessageCircle className="w-6 h-6 text-white relative z-10 fill-current" />
        <span className="absolute right-full mr-3 whitespace-nowrap bg-navy-deep text-foreground text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition pointer-events-none gold-border">
          Chat on WhatsApp
        </span>
      </a>
      <a
        href={`tel:${PHONE}`}
        aria-label="Call us"
        className="group relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition hover:scale-110 btn-gold"
      >
        <span className="absolute inset-0 rounded-full animate-ping opacity-30 bg-gold" />
        <Phone className="w-5 h-5 text-primary-foreground relative z-10 fill-current" />
        <span className="absolute right-full mr-3 whitespace-nowrap bg-navy-deep text-foreground text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition pointer-events-none gold-border">
          Call {PHONE}
        </span>
      </a>
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/70">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg text-gold-gradient">Northern Lights</div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">by Puravankara</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#residences" className="hover:text-gold transition">Residences</a>
          <a href="#amenities" className="hover:text-gold transition">Amenities</a>
          <a href="#gallery" className="hover:text-gold transition">Gallery</a>
          <a href="#location" className="hover:text-gold transition">Location</a>
        </div>
        <a href="#enquire" className="btn-gold btn-gold-hover px-5 py-2.5 rounded-full text-sm inline-flex items-center gap-2">
          Enquire Now <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <img
        src={heroTowers}
        alt="Puravankara Northern Lights iconic towers at dusk"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full gold-border text-xs tracking-[0.2em] uppercase text-gold">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Now Launching · Bagalur Road, North Bengaluru
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
            Live where the <br />
            <span className="text-gold-gradient italic">sky glows</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Puravankara Northern Lights — 25 acres, 8 iconic towers rising 30 floors,
            2,973 residences framed by 80% open space. A destination reserved for
            those who seek more.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#enquire" className="btn-gold btn-gold-hover px-8 py-4 rounded-full inline-flex items-center gap-2">
              Book a Site Visit <ChevronRight className="w-4 h-4" />
            </a>
            <a href={`tel:${PHONE}`} className="glass-card px-8 py-4 rounded-full inline-flex items-center gap-2 text-foreground hover:border-gold transition">
              <Phone className="w-4 h-4 text-gold" /> {PHONE}
            </a>
          </div>
          <div className="flex items-center gap-6 pt-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">2 BHK from</div>
              <div className="font-display text-3xl text-gold-gradient">₹1.40 Cr*</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">3 BHK from</div>
              <div className="font-display text-3xl text-gold-gradient">₹1.96 Cr*</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 hidden lg:block">
          <div className="glass-card rounded-2xl p-8 space-y-5">
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Express Enquiry</div>
            <QuickForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickForm() {
  const [loading, setLoading] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name");
    const phone = fd.get("phone");
    const config = fd.get("config");
    const msg = `Hi, I'm ${name} (${phone}). I'm interested in ${config} at Puravankara Northern Lights.`;
    window.open(`https://wa.me/91${PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
    toast.success("Redirecting to WhatsApp — we'll be in touch shortly.");
    setLoading(false);
    (e.target as HTMLFormElement).reset();
  };
  return (
    <form onSubmit={submit} className="space-y-3">
      <input required name="name" placeholder="Full Name" className="w-full bg-input/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition" />
      <input required name="phone" type="tel" placeholder="Phone Number" className="w-full bg-input/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition" />
      <input name="email" type="email" placeholder="Email (optional)" className="w-full bg-input/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition" />
      <select required name="config" className="w-full bg-input/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition">
        <option value="">Preferred Configuration</option>
        <option>2 BHK</option>
        <option>3 BHK</option>
        <option>3.5 BHK</option>
        <option>4 BHK Duplex</option>
      </select>
      <button disabled={loading} className="w-full btn-gold btn-gold-hover px-6 py-3.5 rounded-lg text-sm">
        {loading ? "Sending..." : "Get Best Price & Site Visit"}
      </button>
      <p className="text-[10px] text-center text-muted-foreground">By submitting, you consent to be contacted regarding this project.</p>
    </form>
  );
}

function StatsBar() {
  return (
    <section className="relative border-y border-border/40 bg-navy-deep/40 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center space-y-2">
            <s.icon className="w-6 h-6 text-gold mx-auto" />
            <div className="font-display text-3xl md:text-4xl text-gold-gradient">{s.value}</div>
            <div className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-5">
        <img src={interior} loading="lazy" width={1280} height={960} alt="Luxury residence interior" className="rounded-2xl gold-border shadow-2xl" />
      </div>
      <div className="lg:col-span-7 space-y-6">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">The Overview</div>
        <h2 className="font-display text-4xl md:text-6xl leading-tight">
          A skyline chapter <br /> written in <span className="italic text-gold-gradient">light</span>.
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Rising above Bagalur Road in North Bengaluru, Northern Lights is Puravankara's
          most ambitious residential composition to date. Eight sculpted towers on a
          25-acre canvas, each residence oriented to catch the horizon — a home that
          feels less like an address and more like an arrival.
        </p>
        <div className="grid grid-cols-2 gap-6 pt-4">
          <Feature icon={Layers} title="B + G + 29/30" sub="Iconic elevation" />
          <Feature icon={Ruler} title="1,104 – 4,131 sqft" sub="Configurations" />
          <Feature icon={Users} title="2,973 Residences" sub="A curated community" />
          <Feature icon={Trees} title="80% Open Space" sub="Landscaped greens" />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title, sub }: { icon: typeof Trees; title: string; sub: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-11 h-11 rounded-lg gold-border flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-gold" />
      </div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider">{sub}</div>
      </div>
    </div>
  );
}

function Typologies() {
  return (
    <section id="residences" className="max-w-7xl mx-auto px-6 py-32">
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Residences</div>
        <h2 className="font-display text-4xl md:text-6xl">Choose your <span className="italic text-gold-gradient">horizon</span></h2>
        <p className="text-muted-foreground">From intimate 2 BHK homes to expansive 4 BHK duplexes — every residence is a study in proportion and light.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {typologies.map((t) => (
          <div key={t.tier} className={`glass-card rounded-2xl p-8 relative overflow-hidden group hover:border-gold/60 transition ${t.featured ? "lg:-translate-y-4" : ""}`}>
            {t.featured && (
              <div className="absolute top-4 right-4 text-[10px] uppercase tracking-widest px-2 py-1 rounded bg-gold text-primary-foreground font-semibold">Popular</div>
            )}
            <div className={`absolute inset-0 bg-gradient-to-br ${t.accent} opacity-0 group-hover:opacity-100 transition`} />
            <div className="relative space-y-5">
              <div>
                <div className="font-display text-4xl text-gold-gradient">{t.tier}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.tagline}</div>
              </div>
              <div className="h-px bg-border" />
              <ul className="space-y-2 text-sm text-muted-foreground min-h-[120px]">
                {t.sizes.map((s) => (
                  <li key={s} className="flex gap-2"><span className="text-gold">·</span> {s}</li>
                ))}
              </ul>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Starting</div>
                <div className="font-display text-2xl">{t.price}</div>
              </div>
              <a href="#enquire" className="w-full block text-center btn-gold btn-gold-hover py-3 rounded-lg text-sm">
                Request Floor Plan
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const amenityList = [
  "Grand Clubhouse (1,00,000 sqft)", "Infinity Swimming Pool", "State-of-the-art Gymnasium",
  "Tennis & Badminton Courts", "Indoor Games Arena", "Kids' Play Zones",
  "Yoga & Meditation Pavilion", "Landscaped Central Park", "Jogging & Cycling Tracks",
  "Multi-purpose Banquet Halls", "Amphitheatre", "Business Lounge & Co-working",
  "Spa & Wellness Center", "24×7 Concierge & Security", "EV Charging Bays",
];

function Amenities() {
  return (
    <section id="amenities" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-3">
            {amenityList.map((a) => (
              <div key={a} className="glass-card rounded-lg px-4 py-3 text-sm flex items-center gap-3">
                <Star className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 order-1 lg:order-2 space-y-6 lg:sticky lg:top-32 self-start">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">50+ Amenities</div>
          <h2 className="font-display text-4xl md:text-5xl">A resort <br /> that <span className="italic text-gold-gradient">never closes</span>.</h2>
          <p className="text-muted-foreground leading-relaxed">
            One hundred thousand square feet of clubhouse. Fifty-plus curated experiences.
            An address where every day feels like a getaway.
          </p>
          <img src={amenities} loading="lazy" width={1280} height={960} alt="Clubhouse and pool at Northern Lights" className="rounded-xl gold-border" />
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="max-w-7xl mx-auto px-6 py-32">
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Explore</div>
        <h2 className="font-display text-4xl md:text-6xl">See it in <span className="italic text-gold-gradient">motion</span></h2>
        <p className="text-muted-foreground">Films, walkthroughs and brochures — everything you need to fall in love before you visit.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {videos.map((v) => (
          <div key={v.title} className="glass-card rounded-2xl overflow-hidden group hover:border-gold/60 transition">
            <div className="relative aspect-video bg-navy-deep">
              <iframe
                src={`https://www.youtube.com/embed/${v.youtubeId}`}
                title={v.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center shrink-0">
                <Play className="w-4 h-4 text-primary-foreground fill-current" />
              </div>
              <div>
                <div className="font-medium">{v.title}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{v.subtitle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {brochures.map((b) => (
          <a key={b.title} href={b.url} target="_blank" rel="noreferrer" className="glass-card rounded-2xl p-6 group hover:border-gold/60 transition flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center shrink-0 group-hover:scale-110 transition">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <div className="font-medium">{b.title}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Download PDF</div>
            </div>
            <ChevronRight className="w-5 h-5 text-gold" />
          </a>
        ))}
      </div>
    </section>
  );
}

function Location() {
  const points = [
    "Direct access to Bagalur Road & NH-44",
    "Minutes from Kempegowda International Airport",
    "Proximity to Manyata & Kirloskar Tech Parks",
    "Reputed international schools nearby",
    "Established retail, hospitals & lifestyle hubs",
  ];
  return (
    <section id="location" className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Location Advantage</div>
        <h2 className="font-display text-4xl md:text-6xl">North Bengaluru's <br /> <span className="italic text-gold-gradient">brightest quarter</span></h2>
        <ul className="space-y-4">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
              <span className="text-muted-foreground">{p}</span>
            </li>
          ))}
        </ul>
        <a href={LOCATION} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 btn-gold btn-gold-hover px-6 py-3 rounded-full text-sm">
          Open in Google Maps <ChevronRight className="w-4 h-4" />
        </a>
      </div>
      <div className="glass-card rounded-2xl p-2 aspect-[4/5] overflow-hidden">
        <iframe
          title="Northern Lights Location"
          src="https://www.google.com/maps?q=Puravankara+Northern+Lights+Bagalur+Road+Bengaluru&output=embed"
          className="w-full h-full rounded-xl border-0"
          loading="lazy"
        />
      </div>
    </section>
  );
}

function LeadForm() {
  return (
    <section id="enquire" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-deep/60 to-transparent" />
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="glass-card rounded-3xl p-10 md:p-16 text-center space-y-8">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Reserve Your Site Visit</div>
          <h2 className="font-display text-4xl md:text-6xl">Your new address <br /> awaits <span className="italic text-gold-gradient">a hello</span>.</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Talk to our senior consultant Deepak Gadge. Get exclusive launch pricing,
            unit availability & priority floor plan access.
          </p>
          <div className="max-w-md mx-auto">
            <QuickForm />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a href={`tel:${PHONE}`} className="glass-card px-6 py-3 rounded-full inline-flex items-center gap-2 hover:border-gold transition">
              <Phone className="w-4 h-4 text-gold" /> Call {PHONE}
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="glass-card px-6 py-3 rounded-full inline-flex items-center gap-2 hover:border-gold transition">
              <MessageCircle className="w-4 h-4 text-gold" /> WhatsApp
            </a>
            <a href={REG_LINK} target="_blank" rel="noreferrer" className="glass-card px-6 py-3 rounded-full inline-flex items-center gap-2 hover:border-gold transition">
              <FileText className="w-4 h-4 text-gold" /> Registration Form
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-display text-xl text-gold-gradient">Puravankara Northern Lights</div>
          <p className="text-muted-foreground mt-3 text-xs leading-relaxed">
            Bagalur Road, North Bengaluru. A Puravankara / Provident Housing venture.
          </p>
        </div>
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-widest text-gold">Contact</div>
          <div className="text-muted-foreground">Deepak Gadge — Purva Group</div>
          <a href={`tel:${PHONE}`} className="block hover:text-gold">+91 {PHONE}</a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="block hover:text-gold">WhatsApp us</a>
        </div>
        <div className="text-xs text-muted-foreground leading-relaxed">
          *Prices indicative and subject to change. Images artistic impressions.
          Please verify RERA & project details with the sales team before booking.
          <br /><br />
          © {new Date().getFullYear()} Puravankara. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
