<template>
<NuxtLayout>
  <NuxtPage/>
</NuxtLayout>
</template>

<script setup lang="ts">
const title = 'Генератор карточки мероприятия'
const description = 'Генерирует карточки с QR-кодом. Походит на телеграм. Будет использован 1,5 раза.'
const image = '/og-image.jpg'

useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  ogUrl: 'https://maxletsplay1.github.io/event-card-generator/',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
  twitterCard: 'summary_large_image'
})

useHead({
  htmlAttrs: {
    lang: 'ru'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>