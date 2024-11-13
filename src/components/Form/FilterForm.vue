<template>
  <section class="filter">
    <div class="container">
      <form class="filter__form">
        <h3 class="form__title">Filter</h3>
        <div class="form__input__block">
          <label
            class="form__input__label"
          >
            Date from:
          </label>
          <input
            type="date"
            class="form__input__field"
            v-model="FILTER.start"
          >
        </div>
        <div class="form__input__block">
          <label class="form__input__label">Date to:</label>
          <input
            type="date"
            class="form__input__field"
            v-model="FILTER.end"
          >
        </div>
        <div class="form__input__block">
          <label class="form__input__label">Valute:</label>
          <select
            class="form__input__field"
            v-model="FILTER.cc"
          >
          <option value="">Select val</option>
            <option
              v-for="option in CC_OPTIONS"
              :value="option"
            >
              {{ option.toUpperCase() }}
            </option>
          </select>
        </div>
        <div class="form__input__block">
          <label class="form__input__label">Name:</label>
          <select
            class="form__input__field"
            v-model="FILTER.txt"
          >
            <option value="">Select val</option>
            <option
              v-for="option in NAME_OPTIONS"
              :value="option"
            >
              {{ option.toUpperCase() }}
            </option>
          </select>
        </div>
        <div class="form__input__block">
          <label class="form__input__label">EnName:</label>
          <select
            class="form__input__field"
            v-model="FILTER.enname"
          >
            <option value="">Select val</option>
            <option
              v-for="option in ENNAME_OPTIONS"
              :value="option"
            >
              {{ option.toUpperCase() }}
            </option>
          </select>
        </div>
      </form>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useAppStore } from '@/stores/app';

const APP_STORE = useAppStore();
const FILTER = computed(() => APP_STORE.STATE.filter);
// const FILTER_OPTIONS = computed(() => APP_STORE.STATE.filter_options);
const CC_OPTIONS = computed(() => APP_STORE.STATE.filter_options.cc);
const NAME_OPTIONS = computed(() => APP_STORE.STATE.filter_options.txt);
const ENNAME_OPTIONS = computed(() => APP_STORE.STATE.filter_options.enname);
// const START = computed(() => APP_STORE.STATE.filter_options.start);
// const END = computed(() => APP_STORE.STATE.filter_options.end);
</script>

<style lang="scss">
.filter {
  &__form {
    display: flex;
    flex-wrap: wrap;
    margin-left: -1.6rem;
    
    &__title {
      width: 100%;
    }

    &__input {
    &__block {
      flex-grow: 1;
      margin: 1.6rem 1.6rem 0;
      position: relative;

      &:last-child {
        margin-right: 0;
      }
    }

    &__label {
      position: absolute;
      top: -4px;
      left: 6px;
      background: #FFF;
    }

    &__field {
      width: 100%;
      border: 1px solid #295e6c;
      border-radius: 6px;
      outline: none;
      padding: 0.3rem 1.2rem;
    }
  }


  }
}
</style>