<script setup>
import { ref } from 'vue'
import { ArrowDown, ArrowUp, ArrowUpRight, Instagram, Mail, Play, Youtube } from 'lucide-vue-next'

const menuOpen = ref(false)

const films = [
  { title: 'The quiet in between', type: 'Documentary · 2024', image: 'photo-1519608487953-e999c86e7455', tone: 'tone-one' },
  { title: 'Made of more', type: 'Brand film · 2024', image: 'photo-1531058020387-3be344556be6', tone: 'tone-two' },
  { title: 'A city, still moving', type: 'Visual journal · 2023', image: 'photo-1519608487953-e999c86e7455', tone: 'tone-three' },
  { title: 'Light finds a way', type: 'Campaign · 2023', image: 'photo-1500530855697-b586d89ba3ee', tone: 'tone-four' },
]
</script>

<template>
  <main>
    <section id="home" class="hero">
      <img class="hero-image" src="/blavkboo-hero.png" alt="A filmmaker looking out over Abuja at dusk" />
      <div class="hero-shade"></div>
      <header class="site-header">
        <a href="#home" class="wordmark" aria-label="Blavkboo home">BLAVKBOO<span>®</span></a>
        <nav aria-label="Main navigation"><a href="#about">About</a><a href="#contact">Contact</a><button class="menu-trigger" type="button" :aria-expanded="menuOpen" aria-controls="site-menu" @click="menuOpen = !menuOpen">{{ menuOpen ? 'Close' : 'Menu' }}</button></nav>
        <span class="header-location">ABUJA, NG</span>
      </header>
      <div v-if="menuOpen" id="site-menu" class="menu-overlay">
        <nav aria-label="Expanded navigation">
          <a href="#home" @click="menuOpen = false">Home <span>01</span></a>
          <a href="#about" @click="menuOpen = false">About <span>02</span></a>
          <a href="#work" @click="menuOpen = false">Selected work <span>03</span></a>
          <a href="#contact" @click="menuOpen = false">Contact <span>04</span></a>
        </nav>
        <p>FILMS &amp; STORIES BY BLAVKBOO · ABUJA, NIGERIA</p>
      </div>
      <div class="hero-content">
        <p class="eyebrow"><span class="live-dot"></span> INDEPENDENT VIDEOGRAPHER &amp; EDITOR</p>
        <h1>Stories that<br /><em>stay with you.</em></h1>
        <div class="hero-bottom"><p>Finding the feeling in every frame.<br />Made with intention in Abuja, Nigeria.</p><a href="#work" class="round-link" aria-label="Explore selected work"><ArrowDown :size="19" /></a></div>
      </div>
      <div class="hero-foot"><span>FILM / 001 — INTRODUCTION</span><span>SCROLL TO EXPLORE ↓</span><span>9°04′N 7°29′E</span></div>
    </section>

    <section id="about" class="intro section-wrap">
      <div class="section-label"><span>01 / THE PERSON</span><span>BEHIND THE CAMERA</span></div>
      <div class="intro-grid"><img class="about-photo" src="/assets/blavkboo-image.jpeg" alt="Portrait of videographer Ebube Felix Okolo" /><div class="intro-copy"><p class="intro-lead">I’m Ebube Felix Okolo — a videographer and video editor drawn to the stories hiding in plain sight.</p><p>Working under the name Blavkboo, I create cinematic films and thoughtful content that bring people, places and brands closer to the people they want to reach.</p><a class="text-link" href="#contact">A little more about me <ArrowUpRight :size="16" /></a></div></div>
      <div class="intro-meta"><span>BASED IN ABUJA, NIGERIA</span><span>AVAILABLE FOR SELECT PROJECTS <span class="live-dot"></span></span></div>
    </section>

    <section id="work" class="work section-wrap">
      <div class="section-label"><span>02 / SELECTED WORK</span><span>A FEW THINGS I’VE MADE</span></div>
      <div class="work-heading"><h2>Frames from<br /><em>another world.</em></h2><p>A selection of films shaped by good people,<br />honest moments and a little bit of light.</p></div>
      <div class="film-grid"><a v-for="(film, index) in films" :key="film.title" href="#contact" class="film-card" :aria-label="`View ${film.title}`"><div class="film-image" :class="film.tone" :style="{ backgroundImage: `linear-gradient(180deg, transparent 45%, rgba(0,0,0,.35)), url(https://images.unsplash.com/${film.image}?auto=format&fit=crop&w=1200&q=85)` }"><span class="film-index">0{{ index + 1 }}</span><span class="play-button"><Play :size="16" fill="currentColor" /></span><span class="film-duration">FILM · 0{{ index + 2 }}:18</span></div><div class="film-caption"><div><h3>{{ film.title }}</h3><p>{{ film.type }}</p></div><ArrowUpRight class="film-arrow" :size="20" /></div></a></div>
      <p class="gallery-note">THE FULL FILM ARCHIVE IS GROWING. <span>MORE STORIES, SOON.</span></p>
    </section>

    <section id="contact" class="contact"><div class="contact-inner"><p class="eyebrow">HAVE A STORY IN MIND?</p><h2>Let’s make<br /><em>something real.</em></h2><a href="mailto:hello@blavkboo.com" class="contact-link">Tell me about it <ArrowUpRight :size="18" /></a></div>
      <footer class="site-footer">
        <a class="footer-brand" href="#home">BLAVKBOO<span>®</span></a>
        <div class="footer-socials" aria-label="Email and social platforms">
          <a href="mailto:hello@blavkboo.com" aria-label="Email Blavkboo"><Mail :size="17" /></a>
          <span aria-hidden="true"><Instagram :size="17" /></span>
          <span aria-hidden="true"><Youtube :size="18" /></span>
        </div>
        <div class="footer-credit"><span>© 2026 BLAVKBOO · ABUJA, NIGERIA</span><a href="#home" aria-label="Back to top"><ArrowUp :size="14" /><span>BACK TO TOP</span></a></div>
      </footer>
    </section>
  </main>
</template>
