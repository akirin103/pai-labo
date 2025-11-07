<script setup lang="ts">
import HeroSection from "@/components/sections/HeroSection.vue";
import DemosSection from "./components/sections/DemosSection.vue";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<template>
  <div class="min-h-screen">
    <!-- Header -->
    <header class="bg-white">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" class="text-base font-normal tracking-wider text-gray-900">
          PAI-LABO
        </a>
        <nav class="hidden md:flex items-center gap-8">
          <button @click="scrollToSection('demos')" class="hover:text-gray-600 transition-colors">Demos</button>
          <button @click="scrollToSection('about')" class="hover:text-gray-600 transition-colors">About</button>
          <button @click="scrollToSection('contact')" class="hover:text-gray-600 transition-colors">Contact</button>
        </nav>
      </div>
    </header>
    <!-- Hero Section -->
    <HeroSection />
    <!-- Demo Section -->
    <DemosSection id="demos" />
    <!-- About Section -->
    <section id="about" class="min-h-screen flex items-center justify-center">
      <p class="text-gray-500">About section coming soon...</p>
    </section>
    <!-- Contact Section -->
    <section id="contact" class="min-h-screen flex items-center justify-center">
      <p class="text-gray-500">Contact section coming soon...</p>
    </section>
    <footer class="py-6 px-4 bg-gray-900 text-white text-center text-sm">
      <p>© 2025 PAI-LABO. All rights reserved.</p>
    </footer>
  </div>
</template>
