<script setup lang="ts">
import HeaderSection from "./layout/HeaderSection.vue";
import FooterSection from "./layout/FooterSection.vue";
import MainSection from "./layout/MainSection.vue";

import { onMounted } from "vue";
import { useAppStore } from "./stores/app";

const APP_STORE = useAppStore();

onMounted(() => {
  APP_STORE.initialRequest();
})

</script>

<template>
  <HeaderSection />
  <MainSection />
  <FooterSection />
</template>
