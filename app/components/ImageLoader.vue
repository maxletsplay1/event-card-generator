<template>
  <UFileUpload
      v-model="file"
      color="neutral"
      label="Изображение в центре QR"
      description="PNG или JPG"
      class="h-52 md:h-64 w-full md:w-1/2"
      @change="roundImage(file)"
  />
</template>

<script setup lang="ts">
import makeRoundImage from "~/composables/makeRoundImage.js";
const emit = defineEmits(['save'])
const file = ref()
const roundImage = async (file: File | undefined) => {
  if (file) {
    const url = URL.createObjectURL(file)
    const finalImage = await makeRoundImage(url, 500)
    emit('save', finalImage)
  }
  else {
    emit('save', '')
  }
}
</script>