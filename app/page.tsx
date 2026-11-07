"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, CalendarDays, MapPin, Pause, Play, Sparkles } from "lucide-react";

const weddingDate = new Date("2027-01-01T00:00:00+05:30");

function OrnamentalMark({ small = false }: { small?: boolean }) {
  return (
    <div className={`ornament-mark ${small ? "ornament-small" : ""}`} aria-hidden="true">
      <span>✦</span><i /><span>✧</span><i /><span>✦</span>
    </div>
  );
}

function Countdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);
  const distance = Math.max(0, weddingDate.getTime() - (now ?? weddingDate.getTime()));
  const units = [
    ["Days", Math.floor(distance / 86400000)],
    ["Hours", Math.floor((distance / 3600000) % 24)],
    ["Minutes", Math.floor((distance / 60000) % 60)],
    ["Seconds", Math.floor((distance / 1000) % 60)],
  ] as const;
  return (
    <div className="countdown" aria-label="Countdown to the wedding">
      {units.map(([label, value]) => (
        <div className="countdown-unit" key={label}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

const reveal = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  const dateLabel = useMemo(
    () => new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" }).format(weddingDate),
    []
  );

  const scrollToInvitation = () => document.getElementById("invitation")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main>
      <motion.div
        className="curtain-screen"
        initial={{ opacity: 1 }}
        animate={{ opacity: opened ? 0 : 1 }}
        transition={{ duration: 0.6, delay: opened ? 1.35 : 0 }}
        style={{ pointerEvents: opened ? "none" : "auto" }}
      >
            <div className="curtain-glow" />
            <motion.div className="curtain curtain-left" animate={opened ? { x: "-102%" } : { x: 0 }} transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }} />
            <motion.div className="curtain curtain-right" animate={opened ? { x: "102%" } : { x: 0 }} transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }} />
            <div className="curtain-center">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 1 }}>
                <OrnamentalMark />
                <p className="eyebrow"> بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ </p>
                <p className="curtain-kicker">Together with their families</p>
                <h1 className="curtain-names">Mohammadalmas <span>&</span> Tasmin</h1>
                <p className="curtain-date">01 · 01 · 2027 <b>—</b> Ahmedabad</p>
                <button className="open-invite" onClick={() => setOpened(true)}>
                  <span className="open-seal">✦</span>
                  <span>Tap to open invitation</span>
                  <span className="open-arrow">↗</span>
                </button>
                <p className="tap-note">A little celebration, shared with love</p>
              </motion.div>
            </div>
            <div className="curtain-bottom">A WEDDING INVITATION <span>✦</span> 2027</div>
      </motion.div>

      <div className="site-shell">
        <nav className="topbar">
          <a href="#top" className="brand-mark">M <span>&</span> T</a>
          <div className="nav-links">
            <a href="#invitation">Invitation</a><a href="#celebration">The day</a><a href="#details">Details</a>
          </div>
          <button className="sound-toggle" onClick={() => setMusicOn(!musicOn)} aria-label={musicOn ? "Turn music off" : "Turn music on"}>
            {musicOn ? <Pause size={15} /> : <Play size={15} />} <span>{musicOn ? "Music on" : "Music off"}</span>
          </button>
        </nav>

        <section className="hero" id="top">
          <div className="hero-pattern" />
          <div className="hero-frame">
            <div className="arch arch-outer"><div className="arch arch-inner" /></div>
            <div className="hero-copy">
              <motion.p className="eyebrow gold" initial="hidden" animate="visible" variants={reveal}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</motion.p>
              <motion.div initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.15 }}>
                <OrnamentalMark />
                <p className="hero-intro">With the blessings of Allah</p>
                <h1>Mohammadalmas <em>&</em><br />Tasmin</h1>
                <p className="hero-subtitle">joyfully invite you to celebrate<br />the beginning of their forever</p>
                <div className="hero-date"><span /> FRIDAY, 01 JANUARY 2027 <span /></div>
                <p className="hero-city">AHMEDABAD · GUJARAT</p>
              </motion.div>
            </div>
            <div className="arch-base" />
          </div>
          <button className="scroll-cue" onClick={scrollToInvitation}><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></button>
          <div className="side-note">A NEW CHAPTER · 2027</div>
        </section>

        <section className="invitation-section section-pad" id="invitation">
          <motion.div className="section-inner narrow" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal}>
            <p className="eyebrow">A heartfelt invitation</p>
            <OrnamentalMark />
            <h2>In the name of love,<br /><em>and in the grace of Allah.</em></h2>
            <p className="body-copy">With grateful hearts and the blessings of our families, we invite you to join us as we celebrate the wedding of</p>
            <div className="name-lockup"><span>Mohammadalmas</span><i>&</i><span>Tasmin</span></div>
            <p className="body-copy">Your presence and duas will make our special day even more meaningful. We would be honoured to celebrate this beautiful beginning with you.</p>
            <div className="date-stamp"><CalendarDays size={18} /><span>{dateLabel}</span><b>Ahmedabad, Gujarat</b></div>
          </motion.div>
        </section>

        <section className="celebration-section section-pad" id="celebration">
          <div className="section-inner">
            <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
              <p className="eyebrow">Save the date</p><OrnamentalMark />
              <h2>A day to remember</h2>
              <p>One beautiful day. A lifetime of memories.</p>
            </motion.div>
            <motion.div className="event-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal}>
              <div className="event-card-top"><span>01</span><span>THE CELEBRATION</span><span>2027</span></div>
              <div className="event-card-main">
                <p className="eyebrow gold">You are warmly invited</p>
                <h3>Wedding<br /><em>Celebration</em></h3>
                <div className="event-divider"><span>✦</span></div>
                <p className="event-date">Friday · 01 January 2027</p>
                <p className="event-location"><MapPin size={15} /> Ahmedabad, Gujarat</p>
                <p className="event-pending">Venue and timing will be shared soon</p>
              </div>
              <div className="event-card-bottom">MOHAMMADALMAS <span>✦</span> TASMIN</div>
            </motion.div>
          </div>
        </section>

        <section className="countdown-section section-pad">
          <motion.div className="section-inner narrow" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <p className="eyebrow">Counting every moment</p><OrnamentalMark />
            <h2>Until we say <em>“I do”</em></h2>
            <Countdown />
            <p className="countdown-caption">01 January 2027 · Ahmedabad</p>
          </motion.div>
        </section>

        <section className="details-section section-pad" id="details">
          <motion.div className="section-inner details-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
            <div>
              <p className="eyebrow">The finer details</p><OrnamentalMark />
              <h2>We can't wait<br /><em>to see you.</em></h2>
              <p className="body-copy">Please keep the date close. More information about the venue, schedule and celebration will be added here soon.</p>
            </div>
            <div className="detail-list">
              <div className="detail-row"><CalendarDays /><div><span>DATE</span><strong>01 January 2027</strong></div></div>
              <div className="detail-row"><MapPin /><div><span>LOCATION</span><strong>Ahmedabad, Gujarat</strong><small>Exact venue to be announced</small></div></div>
              <div className="detail-row"><Sparkles /><div><span>YOUR PRESENCE</span><strong>Our greatest gift</strong><small>We look forward to celebrating with you</small></div></div>
            </div>
          </motion.div>
        </section>

        <footer className="footer">
          <OrnamentalMark />
          <p className="footer-blessing">May Allah bless this union with love, mercy and barakah.</p>
          <h2>Mohammadalmas <em>&</em> Tasmin</h2>
          <p className="footer-date">01 · 01 · 2027 — AHMEDABAD</p>
          <span className="footer-credit">MADE WITH LOVE · 2027</span>
        </footer>
      </div>
    </main>
  );
}
