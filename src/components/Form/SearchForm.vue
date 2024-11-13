<template>
  <section class="search-form">
    <div class="container">
      <form
        class="form"
        @submit="loadData"
      >
        <h3 class="form__title">Search form</h3>
        <div class="form__input__block">
          <label
            class="form__input__label"
          >
            Date from:
          </label>
          <input
            type="date"
            class="form__input__field"
            v-model="DATE_FROM"
          >
        </div>
        <div class="form__input__block">
          <label class="form__input__label">Date to:</label>
          <input
            type="date"
            class="form__input__field"
            v-model="DATE_TO"
          >
        </div>
        <div class="form__input__block">
          <label class="form__input__label">Valute:</label>
          <select
            class="form__input__field"
            v-model="SEARCH.valcode"
          >
            <option value="">Select val</option>
            <option
              v-for="option in VALUTE_OPTIONS"
              :value="option"
            >
              {{ option.toUpperCase() }}
            </option>
          </select>
        </div>
        <div class="form__input__block">
          <label class="form__input__label">Sort by:</label>
          <select
            class="form__input__field"
            v-model="SEARCH.sort"
          >
            <option
              v-for="option in SORT_OPTIONS"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
        </div>
        <div class="form__input__block">
          <label class="form__input__label">Order:</label>
          <select
            class="form__input__field"
            v-model="SEARCH.order"
          >
            <option
              v-for="option in ORDER_OPTIONS"
              :value="option">{{ option }}</option>
          </select>
        </div>
        <button
          type="submit"
          class="btn btn--submit"
          @click="loadData"
        >
          Load
        </button>
      </form>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useAppStore } from '@/stores/app';

const APP_STORE = useAppStore();
const SEARCH = computed(() => APP_STORE.STATE.search);
const VALUTE_OPTIONS = computed(() => APP_STORE.STATE.options.valcode);
const SORT_OPTIONS = computed(() => APP_STORE.STATE.options.sort);
const ORDER_OPTIONS = computed(() => APP_STORE.STATE.options.order);

const DATE_FROM = ref<string>('');
const DATE_TO = ref<string>('');

const loadData = (event: Event) => {
  event.preventDefault();
  APP_STORE.STATE.search.start = DATE_FROM.value.split('-').join('');
  APP_STORE.STATE.search.end = DATE_TO.value.split('-').join('');
  APP_STORE.httpGetNBU();
}
</script>

<style lang="scss">
.search-form {
  background: #f4f4f4;
}

.form {
  display: flex;
  flex-wrap: wrap;
  padding: 1.6rem 0;
  margin-left: -1.6rem;

  &__title {
    width: 100%;
    margin-left: 1.6rem;
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

.btn {
  display: flex;
  align-items: center;
  align-self: end;
  height: 100%;
  color: white;
  background: #295e6c;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 0.4rem 1.8rem;
  cursor: pointer;

  &--submit {
    margin-left: auto;
  }
}
</style>