import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight, BadgeCheck, Building2, Check, ChevronDown, Clock3, Facebook,
  HeartHandshake, Instagram, Leaf, Mail, MapPin, Menu, Phone, ShieldCheck,
  Sparkles, Star, X
} from 'lucide-react';
import './styles.css';

const services = [
  { number: '01', icon: Building2, title: 'Commercial Cleaning', text: 'Consistent, detailed cleaning plans built around your hours, your space, and your standards.', color: 'mint' },
  { number: '02', icon: Sparkles, title: 'Deep Cleaning', text: 'A thorough top-to-bottom reset for high-touch areas, hard-to-reach places, and everything between.', color: 'gold' },
  { number: '03', icon: Leaf, title: 'Day Porter Services', text: 'On-site support that keeps shared spaces spotless, stocked, and welcoming throughout the day.', color: 'blue' },
  { number: '04', icon: ShieldCheck, title: 'Specialty Services', text: 'Floor care, post-construction cleanup, pressure washing, and tailored facility solutions.', color: 'rose' },
];

const Logo = ({ light = false }) => (
  <a className={`logo ${light ? 'logo-light' : ''}`} href="#top" aria-label="Chico Limpio home">
    <span className="logo-mark"><Sparkles size={19} strokeWidth={2.5} /><i /></span>
    <span><b>CHICO LIMPIO</b><small>FACILITY SERVICES</small></span>
  </a>
);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      <header className="nav" id="top">
        <Logo />
        <nav className={menuOpen ? 'open' : ''} aria-label="Main navigation">
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About us</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-cta mobile-cta" href="#quote" onClick={() => setMenuOpen(false)}>Get a free quote <ArrowRight size={16} /></a>
        </nav>
        <a className="nav-cta desktop-cta" href="#quote">Get a free quote <ArrowRight size={16} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span /> CLEAN SPACES. CLEAR MINDS.</p>
            <h1>We care for your space like it’s <em>our own.</em></h1>
            <p className="hero-lead">Reliable facility services with a human touch. We create cleaner, healthier spaces so your people can do their best work.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#quote">Get your free quote <ArrowRight size={18} /></a>
              <a className="text-link" href="#services">Explore our services <span>↓</span></a>
            </div>
            <div className="hero-proof">
              <div className="avatars"><span>JM</span><span>AR</span><span>KL</span><span>+</span></div>
              <div><div className="stars">★★★★★</div><small>Trusted by 150+ local businesses</small></div>
            </div>
          </div>
          <div className="hero-visual" aria-label="A bright, professionally cleaned modern office">
            <div className="image-card">
              <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=88" alt="Bright and clean modern office interior" />
              <div className="floating-card card-top"><span><BadgeCheck size={18}/></span><div><b>Fully insured</b><small>Professionals you can trust</small></div></div>
              <div className="floating-card card-bottom"><span><Clock3 size={18}/></span><div><b>Right on schedule</b><small>Every visit, every time</small></div></div>
            </div>
            <div className="doodle sparkle-one">✦</div><div className="doodle sparkle-two">✦</div>
          </div>
        </section>

        <section className="trust-strip">
          <span>PROUDLY SERVING</span><b>OFFICES</b><i>◆</i><b>RETAIL</b><i>◆</i><b>HEALTHCARE</b><i>◆</i><b>EDUCATION</b><i>◆</i><b>INDUSTRIAL</b>
        </section>

        <section className="services section" id="services">
          <div className="section-heading">
            <div><p className="eyebrow"><span /> WHAT WE DO</p><h2>Everything your space needs to <em>shine.</em></h2></div>
            <p>From everyday upkeep to specialty care, our team takes pride in every detail—so you never have to think twice.</p>
          </div>
          <div className="service-grid">
            {services.map(({ number, icon: Icon, title, text, color }) => (
              <article className={`service-card ${color}`} key={title}>
                <div className="card-number">{number}</div><div className="icon-box"><Icon /></div>
                <h3>{title}</h3><p>{text}</p><a href="#quote" aria-label={`Learn more about ${title}`}>Learn more <ArrowRight size={17}/></a>
              </article>
            ))}
          </div>
        </section>

        <section className="about section" id="about">
          <div className="about-collage">
            <img className="about-main" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=85" alt="Professional cleaner at work" />
            <img className="about-small" src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=85" alt="Cleaning supplies ready for service" />
            <div className="experience"><strong>12+</strong><span>YEARS OF<br/>EXCELLENCE</span></div>
          </div>
          <div className="about-copy">
            <p className="eyebrow light"><span /> WHY CHICO LIMPIO</p>
            <h2>Small enough to care.<br/><em>Experienced enough</em> to deliver.</h2>
            <p>We started Chico Limpio with one simple belief: every workplace deserves care you can see and service you can feel.</p>
            <p>Our dedicated crews bring consistency, respect, and genuine pride to every space. No shortcuts. No surprises. Just clean, done right.</p>
            <ul><li><Check /> Background-checked, trained professionals</li><li><Check /> Flexible plans built around your needs</li><li><Check /> Eco-conscious products and practices</li></ul>
            <a className="button button-cream" href="#contact">Meet our team <ArrowRight size={18}/></a>
          </div>
        </section>

        <section className="process section" id="process">
          <p className="eyebrow centered"><span /> SIMPLE FROM THE START <span /></p>
          <h2>Cleaner spaces in <em>three easy steps.</em></h2>
          <div className="steps">
            <div className="step"><div className="step-icon"><Phone/><b>1</b></div><h3>Tell us about your space</h3><p>Share your needs or schedule a convenient walkthrough.</p></div>
            <div className="step-line" />
            <div className="step"><div className="step-icon"><HeartHandshake/><b>2</b></div><h3>Get your custom plan</h3><p>We’ll create a clear scope and transparent quote just for you.</p></div>
            <div className="step-line" />
            <div className="step"><div className="step-icon"><Sparkles/><b>3</b></div><h3>Enjoy a cleaner space</h3><p>Our trusted team gets to work—and keeps it that way.</p></div>
          </div>
        </section>

        <section className="testimonial">
          <div className="quote-mark">“</div>
          <blockquote>Chico Limpio doesn’t just clean our building—they <em>care for it.</em> The attention to detail is incredible, and their team feels like part of ours.</blockquote>
          <div className="reviewer"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80" alt="Maria, a happy customer"/><div><b>Maria Rodriguez</b><small>Operations Director, North Valley Health</small></div><div className="stars">★★★★★</div></div>
        </section>

        <section className="quote-section section" id="quote">
          <div className="quote-copy">
            <p className="eyebrow light"><span /> LET’S GET STARTED</p>
            <h2>Ready for a space that feels <em>brand new?</em></h2>
            <p>Tell us a little about your facility and we’ll follow up with a free, no-pressure quote within one business day.</p>
            <div className="contact-line"><span><Phone/></span><div><small>CALL US</small><a href="tel:+15308946463">(530) 894-6463</a></div></div>
            <div className="contact-line"><span><Mail/></span><div><small>EMAIL US</small><a href="mailto:hello@chicolimpio.com">hello@chicolimpio.com</a></div></div>
          </div>
          <form onSubmit={submit}>
            <div className="form-title"><h3>Get your free quote</h3><Sparkles/></div>
            <div className="form-row"><label>YOUR NAME<input required name="name" placeholder="Jane Smith" /></label><label>COMPANY<input required name="company" placeholder="Company name" /></label></div>
            <div className="form-row"><label>EMAIL ADDRESS<input required type="email" name="email" placeholder="jane@company.com" /></label><label>PHONE NUMBER<input required type="tel" name="phone" placeholder="(530) 000-0000" /></label></div>
            <label>WHAT CAN WE HELP WITH?<div className="select-wrap"><select name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map(s => <option key={s.title}>{s.title}</option>)}</select><ChevronDown/></div></label>
            <label>TELL US ABOUT YOUR SPACE<textarea name="message" placeholder="Facility type, approximate size, ideal schedule..." /></label>
            <button className="button button-primary" type="submit">Request my free quote <ArrowRight size={18}/></button>
            {sent && <p className="success"><Check/> Thanks! We’ll be in touch within one business day.</p>}
          </form>
        </section>
      </main>

      <footer id="contact">
        <div className="footer-top"><div><Logo light/><p>Clean spaces. Happy people.<br/>Service you can count on.</p><div className="socials"><a href="#top" aria-label="Instagram"><Instagram/></a><a href="#top" aria-label="Facebook"><Facebook/></a></div></div>
          <div><h4>Explore</h4><a href="#services">Services</a><a href="#about">About us</a><a href="#process">How it works</a><a href="#quote">Get a quote</a></div>
          <div><h4>Services</h4><a href="#services">Commercial cleaning</a><a href="#services">Deep cleaning</a><a href="#services">Day porter services</a><a href="#services">Specialty services</a></div>
          <div><h4>Get in touch</h4><a href="tel:+15308946463"><Phone/> (530) 894-6463</a><a href="mailto:hello@chicolimpio.com"><Mail/> hello@chicolimpio.com</a><p className="address"><MapPin/> Serving Chico and<br/>surrounding communities</p></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Chico Limpio Facility Services. All rights reserved.</span><span><a href="#top">Privacy</a><a href="#top">Terms</a></span></div>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
