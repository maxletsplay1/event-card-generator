<template>
<UApp
    :locale="locales.ru"
>
  <div class="flex flex-col min-h-screen w-screen max-w-screen">
    <Header/>
    <div class="container p-6 flex flex-col items-center grow w-screen max-w-screen">
      <slot/>
    </div>
    <Footer/>
  </div>
</UApp>
</template>

<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>