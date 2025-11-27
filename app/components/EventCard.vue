<template>
  <div
      class="flex-col items-center text-center w-[300px] rounded-4xl p-4 bg-white shadow-2xl flex gap-2 max-h-fit select-none"
  >
    <div class="flex justify-between w-full px-1">
      <p
          v-if="date"
          class="text-4xl font-extrabold"
          :style="{ color: mainColor }"
      >
        {{ date }}
      </p>
      <p
          v-if="date && time"
          class="text-4xl font-extrabold"
          :style="{ color: mainColor }"
      >
        -
      </p>
      <p
          v-if="time"
          class="text-4xl font-extrabold"
          :style="{ color: mainColor }"
      >
        {{ time }}
      </p>
    </div>
    <img
        :src="qr"
        alt="qr"
        class="h-64 w-64 shrink-0"
    >
    <div
        class="flex flex-col items-center w-full"
    >
      <p
          class="text-3xl font-extrabold leading-tight uppercase"
          :style="{ color: mainColor }"
      >
        {{ header }}
      </p>
        <p
            v-if="description"
            class="text-xl font-semibold"
            :style="{ color: secondaryColor }"
        >
          {{ description }}
        </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  qr: string
  header: string
  mainColor: string
  secondaryColor: string
  description?: string
  date?: string
  time?: string
}>()
</script>
