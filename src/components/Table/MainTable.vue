<template>
  <section class="table-section">
    <div class="container">
      <table class="result-table">
        <thead class="result-table__header">
          <tr>
            <td>Exchangedate</td>
            <td>Calcdate</td>
            <td>CC</td>
            <td>Name</td>
            <td>EnName</td>
            <td>Rate per unit</td>
            <td>Units</td>
            <td>Rate</td>
          </tr>
        </thead>
        <tbody class="result-table__body">
          <tr
            v-for="item of DATA"
          >
            <td>{{ item.exchangedate }}</td>
            <td>{{ item.calcdate }}</td>
            <td>{{ item.cc }}</td>
            <td>{{ item.txt }}</td>
            <td>{{ item.enname }}</td>
            <td>{{ item.rate_per_unit }}</td>
            <td>{{ item.units }}</td>
            <td>{{ item.rate }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';
import { computed } from 'vue';

const APP_STORE = useAppStore();
const DATA = computed(() => APP_STORE.STATE.data);
</script>

<style lang="scss">
.result-table {
  width: 100%;
  margin: 1.6rem 0;

  &__header {
    background: #d7e7dc;
    tr {
      td {
        padding: 0.5rem;
      }
    }
  }

  &__body {
    tr {
      td {
        padding: 0.5rem;
      }

      &:nth-child(2n) {
        background: #f1f1f1;
      }
    }
  }
}
</style>