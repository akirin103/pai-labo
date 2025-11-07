<script setup lang="ts">
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
    <section
    class="
      min-h-screen
      flex items-center justify-center
      px-6 md:px-12 lg:px-16 xl:px-20
      py-16 md:py-20
      bg-linear-to-b from-gray-50 to-white
    "
  >
    <div class="max-w-4xl w-full text-center space-y-12">
      <!-- タイトル -->
      <div class="space-y-6">
        <h1 class="
          text-5xl md:text-6xl lg:text-7xl
          font-light tracking-tight
          text-gray-900
        ">
          PAI-LABO
        </h1>
        <p class="
          text-4xl tracking-widest uppercase
          text-gray-500
        ">
          GIS × Web
        </p>
      </div>

      <!-- 説明文 -->
      <div class="space-y-6 text-gray-600 leading-relaxed">
        <p class="text-base md:text-lg font-light">
          地理空間データを扱う 実際に動くデモやツールを公開しています
        </p>
      </div>

      <!-- CTA -->
      <div>
        <button
          @click="scrollToSection('demos')"
          class="
            inline-flex flex-col items-center gap-3
            text-gray-500 hover:text-gray-900
            transition-colors duration-300
            cursor-pointer
          "
        >
          <div class="text-xl">↓</div>
          <span class="text-xl tracking-widest uppercase">View Demos / Tools</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
