<script setup lang="ts">
import type { Tool } from '@/types/tools'

defineProps<{
  tool: Tool
}>()

const statusConfig = {
  ready: { label: '公開中', class: 'bg-green-100 text-green-700' },
  wip: { label: '開発中', class: 'bg-yellow-100 text-yellow-700' },
  planned: { label: '予定', class: 'bg-gray-100 text-gray-600' }
}
</script>

<template>
  <a
    :href="tool.url"
    class="
      block p-6
      bg-white
      border border-gray-200
      rounded-xl
      hover:border-gray-300
      hover:shadow-lg
      transition-all duration-200
      flex flex-col
      min-h-[280px]
    "
  >
    <!-- 上部コンテンツ -->
    <div class="flex-1">
      <!-- アイコン + ステータス -->
      <div class="flex items-start justify-between mb-4">
        <span class="text-5xl">{{ tool.icon }}</span>
        <span
          class="px-3 py-1 text-xs font-semibold rounded-full"
          :class="statusConfig[tool.status].class"
        >
          {{ statusConfig[tool.status].label }}
        </span>
      </div>

      <!-- タイトル -->
      <h3 class="text-xl font-bold text-gray-900 mb-2">
        {{ tool.name }}
      </h3>

      <!-- 説明 -->
      <p class="text-gray-600 text-sm mb-4 line-clamp-3">
        {{ tool.description }}
      </p>
    </div>

    <!-- カテゴリタグ（下部固定） -->
    <div class="flex flex-wrap gap-2 mt-auto">
      <span
        v-for="cat in tool.categories"
        :key="cat"
        class="px-3 py-1 text-xs bg-blue-50 text-blue-700 rounded-full"
      >
        {{ cat }}
      </span>
    </div>
  </a>
</template>
