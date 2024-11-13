<template>
  <section class="main">
    <div class="main__inner">
      <SearchForm />
      <FilterForm />
      <MainTable />
    </div>
</section>
</template>
<script lang="ts" setup>
import SearchForm from '@/components/Form/SearchForm.vue'
import FilterForm from '@/components/Form/FilterForm.vue'
import MainTable from '@/components/Table/MainTable.vue'
</script>

<style lang="scss">
.main {
  flex: 1 1 auto;
  background: transparent;
}
</style>
