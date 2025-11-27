<template>
  <div class="flex flex-col-reverse md:flex-row gap-6 w-full h-full">
    <div class="flex flex-col grow gap-4 items-center">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <UInput v-model="form.header" size="xl" maxlength="30" placeholder="Заголовок"/>

      <UInput v-model="form.description" size="xl" maxlength="100" placeholder="Описание" />

      <UInput v-model="form.qrlink" size="xl" placeholder="Ссылка для QR" />
      <div class="grid grid-cols-2 gap-2">
      <UInputDate size="xl" v-model="form.date" ref="inputDateRef">
        <template #trailing>
          <UPopover :reference="inputDateRef?.inputsRef[3]?.$el">
            <UButton
                color="neutral"
                variant="link"
                size="sm"
                icon="i-lucide-calendar"
                aria-label="Выбрать дату"
                class="px-0"
            />
            <template #content>
              <UCalendar v-model="form.date" />
            </template>
          </UPopover>
        </template>
      </UInputDate>

      <UInputTime v-model="form.time" :hour-cycle="24" size="xl"/>
      </div>
      <UPopover>
        <UButton size="xl" variant="outline" color="neutral" label="Основной цвет">
          <template #leading>
            <span class="size-3 rounded-full" :style="{ background: form.mainColor }" />
          </template>
        </UButton>
        <template #content>
          <UColorPicker v-model="form.mainColor" class="p-2" />
        </template>
      </UPopover>

      <UPopover>
        <UButton size="xl" variant="outline" color="neutral" label="Второстепенный цвет">
          <template #leading>
            <span class="size-3 rounded-full" :style="{ background: form.secondaryColor }" />
          </template>
        </UButton>
        <template #content>
          <UColorPicker v-model="form.secondaryColor" class="p-2" />
        </template>
      </UPopover>

    </div>
      <ImageLoader @save="setImage" />
    </div>
    <div class="flex flex-col items-center justify-center">
      <EventCard
          class="shrink-0 border md:-mt-10"
          :qr="qr"
          :header="form.header"
          :description="form.description"
          :main-color="form.mainColor"
          :secondary-color="form.secondaryColor"
          :date="dateTime[0]"
          :time="dateTime[1]"
      />
    </div>
  </div>
</template>


<script setup>
import { CalendarDate, Time } from '@internationalized/date'
import generateQr from "~/composables/generateQr.ts";
const inputDateRef = ref(null);
const now = new Date()

const form = reactive({
  header: "Заголовок",
  description: "",
  qrlink: "",
  date: new CalendarDate(now.getFullYear(), now.getMonth() + 1, now.getDate()),
  time: new Time(0, 0),
  mainColor: "#00DC82",
  secondaryColor: "#020420",
  image: ""
});

const qr = ref("");

const qrOptions = computed(() => ({
  link: form.qrlink,
  size: 1000,
  colorDark: form.mainColor,
  dotStyle: "rounded",
  cornerSquareStyle: "extra-rounded",
  cornerDotStyle: "dot",
  image: form.image
}));

const dateTime = computed(() => {
  if (!form.date || !form.time) return ["", ""]

  const d = form.date
  const day = String(d.day).padStart(2, "0")
  const month = String(d.month).padStart(2, "0")
  const time = form.time.toString().slice(0, 5)

  return [
    `${day}.${month}`,
    time
  ]
})

const setImage = (image) => {
  form.image = image;
};

watch(
    () => qrOptions.value,
    async (opts) => {
      qr.value = await generateQr(opts);
    },
    { deep: true, immediate: true }
);
</script>