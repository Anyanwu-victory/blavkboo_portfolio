<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import {
  ArrowDownRight,
  ArrowUpRight,
  Instagram,
  Mail,
  MapPin,
  Moon,
  Music2,
  Sun,
  Youtube,
} from 'lucide-vue-next'

const savedTheme = window.localStorage.getItem('blavkboo-theme')
const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
const theme = ref(savedTheme || preferredTheme)
const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/'
const isNotFound = !['/', '/index.html'].includes(normalizedPath)
const profilePhoto = ref(null)
const photoReady = ref(false)
const photoInView = ref(false)
let photoObserver

if (isNotFound) document.title = '404 — Page Not Found | Blavkboo'

watch(theme, (value) => {
  document.documentElement.dataset.theme = value
  window.localStorage.setItem('blavkboo-theme', value)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', value === 'dark' ? '#1b1b17' : '#f7f4e9')
}, { immediate: true })

onMounted(() => {
  if (!profilePhoto.value || !('IntersectionObserver' in window)) {
    photoInView.value = true
    return
  }

  photoObserver = new IntersectionObserver(([entry]) => {
    photoInView.value = entry.isIntersecting
  }, { threshold: 0.35 })

  photoReady.value = true
  photoObserver.observe(profilePhoto.value)
})

onUnmounted(() => photoObserver?.disconnect())

// Public profile links used in the films section.
const socialLinks = [
  { name: 'Instagram', note: 'Reels, edits & behind the scenes', icon: Instagram, href: 'https://www.instagram.com/blavkboo44' },
  { name: 'TikTok', note: 'Quick cuts & moments in motion', icon: Music2, href: 'https://www.tiktok.com/@theblavkguy0' },
  { name: 'YouTube', note: 'Films, stories & longer cuts', icon: Youtube, href: 'https://youtube.com/@blavkboo' },
]

const focusAreas = [
  'General videography',
  'Automotive content',
]

const editingTools = [
  { name: 'CapCut', logo: '/assets/editing-tools/capcut.svg', className: 'tool-capcut' },
  { name: 'DaVinci Resolve', logo: '/assets/editing-tools/davinci-resolve.svg', className: 'tool-davinci' },
  { name: 'Premiere Pro', logo: '/assets/editing-tools/premiere-pro.svg', className: 'tool-premiere' },
]
</script>

<template>
  <main v-if="isNotFound" class="not-found-page">
    <section class="not-found-content" aria-labelledby="not-found-title">
      <p class="not-found-kicker">BLAVKBOO · ABUJA, NIGERIA</p>
      <p class="not-found-code" aria-hidden="true">404</p>
      <h1 id="not-found-title">Page not found</h1>
      <p class="not-found-copy">This frame didn’t make the final cut.</p>
      <a class="not-found-link" href="/">Back to the portfolio <ArrowUpRight :size="15" /></a>
    </section>
  </main>

  <main v-else id="home" class="portfolio-page">
    <header class="site-header">
      <a class="brand" href="#home" aria-label="Blavkboo home"><span class="brand-mark">B</span><span>BLAVKBOO<small>®</small></span></a>
      <nav class="main-nav" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#socials">My films</a>
        <a href="#contact">Contact <ArrowUpRight :size="13" /></a>
      </nav>
      <button
        class="theme-toggle"
        type="button"
        :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
        :title="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
        @click="theme = theme === 'dark' ? 'light' : 'dark'"
      >
        <Sun v-if="theme === 'dark'" :size="17" />
        <Moon v-else :size="17" />
      </button>
    </header>

    <section class="poster" aria-labelledby="poster-title">
      <div class="poster-topline"><span>INDEPENDENT VIDEOGRAPHER · ABUJA, NIGERIA</span><span>VISUAL STORIES / 2026</span></div>
      <div class="poster-stage">
        <div class="poster-title" id="poster-title" aria-label="Portfolio">
          <span>PORT</span><span>FOLIO</span>
        </div>
        <div class="poster-side poster-side-left">
          <span class="small-label">THE PERSON BEHIND THE CAMERA</span>
          <strong>EBUBE FELIX<br />OKOLO</strong>
          <span class="script-note">Videographer &amp; editor</span>
        </div>
        <!-- <div class="portrait-cutout"><img src="/assets/blavkboo-image.jpeg" alt="Portrait of videographer Ebube Felix Okolo" fetchpriority="high" /></div> -->
        <div class="poster-side poster-side-right">
          <span class="small-label">WHAT I MAKE</span>
          <span>General videography</span>
          <span>Automotive films</span>
          <span>Stories in motion</span>
        </div>
        <span class="year-sticker">’26</span>
        <span class="poster-star star-one" aria-hidden="true"></span>
        <span class="poster-star star-two" aria-hidden="true"></span>
        <span class="poster-bottom-note">BASED IN ABUJA · AVAILABLE WORLDWIDE</span>
      </div>
      <div class="poster-scroll"><span>SCROLL TO MEET THE FILMMAKER</span><ArrowDownRight :size="15" /></div>
    </section>

    <section id="about" class="profile-paper">
      <div class="section-marker"><span>01 / A LITTLE ABOUT ME</span><span>BLAVKBOO® · VIDEO PORTFOLIO</span></div>
      <div class="profile-grid">
        <div ref="profilePhoto" class="profile-photo-wrap" :class="{ 'photo-ready': photoReady, 'photo-in-view': photoInView }">
          <span class="photo-pin" aria-hidden="true">✳</span>
          <div class="profile-photo"><img src="/assets/blavkboo-image.jpeg" alt="Ebube Felix Okolo, also known as Blavkboo" loading="lazy" /></div>
          <span class="photo-caption">EBUBE, BEHIND THE LENS</span>
        </div>
        <div class="bio-block">
          <p class="hello-label">Hello<span>!</span></p>
          <p class="bio-copy">Hi, I’m <span class="script-note">Ebube Felix Okolo</span>, the videographer and editor behind Blavkboo. I create cinematic films for people, places, events and brands, with a special focus on automotive content.</p>
          <div class="location-line"><MapPin :size="17" /><span>Based in <strong>Abuja, Nigeria</strong> · Available for travel</span></div>
          <a class="bio-link" href="#contact">Let’s work together <ArrowUpRight :size="15" /></a>
          <div class="about-details-row">
            <div class="tools-block">
              <h2 class="tools-heading">Video editing tools</h2>
              <div class="tools-grid" role="list" aria-label="Video editing software">
                <div v-for="tool in editingTools" :key="tool.name" class="tool-card" role="listitem" :aria-label="tool.name" :title="tool.name">
                  <span class="tool-logo" :class="tool.className"><img :src="tool.logo" alt="" loading="lazy" /></span>
                </div>
              </div>
            </div>

            <div id="focus" class="focus-block">
              <h2 class="services-heading">What I do</h2>
              <ul class="services-list">
                <li v-for="service in focusAreas" :key="service">{{ service }}</li>
              </ul>
            </div>
          </div>
      </div>
      </div>

      <div id="socials" class="socials-block">
        <div class="section-marker"><span>02 / FIND MY FILMS</span><span>WATCH ON MY SOCIALS</span></div>
        <p class="socials-heading">My videos live<br />over <span>here.</span></p>
        <div class="social-list">
          <template v-for="(social, index) in socialLinks" :key="social.name">
            <a v-if="social.href" class="social-row" :href="social.href" target="_blank" rel="noreferrer" :aria-label="`Open Blavkboo on ${social.name}`">
              <span class="social-index">0{{ index + 1 }}</span>
              <component :is="social.icon" class="social-icon" :size="20" />
              <span class="social-name">{{ social.name }}<small>{{ social.note }}</small></span>
              <span class="social-action">Watch <ArrowUpRight :size="15" /></span>
            </a>
            <div v-else class="social-row social-placeholder" :aria-label="`${social.name} profile link coming soon`">
              <span class="social-index">0{{ index + 1 }}</span>
              <component :is="social.icon" class="social-icon" :size="20" />
              <span class="social-name">{{ social.name }}<small>{{ social.note }}</small></span>
              <span class="social-action">Link coming soon</span>
            </div>
          </template>
        </div>
      </div>

      <section id="contact" class="contact-block">
        <div>
          <p class="section-marker"><span>03 / HAVE A STORY?</span><span>LET’S MAKE IT MOVE</span></p>
          <h2>Let’s make<br /><em>something real.</em></h2>
          <a class="contact-link" href="mailto:ebubefelix28@gmail.com">ebubefelix28@gmail.com <Mail :size="16" /></a>
        </div>
        <span class="contact-doodle" aria-hidden="true">✳</span>
      </section>

      <footer class="site-footer">
        <a class="brand footer-brand" href="#home"><span class="brand-mark">B</span><span>BLAVKBOO<small>®</small></span></a>
        <span>© 2026 BLAVKBOO · EBUBE FELIX OKOLO</span>
        <a href="#home">BACK TO TOP <ArrowUpRight :size="13" /></a>
      </footer>
    </section>
  </main>
</template>
