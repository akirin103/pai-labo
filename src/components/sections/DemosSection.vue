<script setup lang="ts">
import ToolCard from '@/components/ui/ToolCard.vue'
import { tools } from '@/data/tools'
</script>

<template>
  <section
    id="demos"
    class="py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-16 xl:px-20"
  >
    <div class="max-w-7xl mx-auto">
      <!-- タイトル -->
      <h2 class="
        text-3xl md:text-4xl
        font-bold tracking-tight
        text-gray-900
        mb-12 md:mb-16
      ">
        Demos & Tools
      </h2>

      <!-- Grid レイアウト -->
      <div class="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
      ">
        <ToolCard
          v-for="tool in tools"
          :key="tool.id"
          :tool="tool"
        />
      </div>
    </div>
  </section>
</template>
