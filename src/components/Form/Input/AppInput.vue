<template>
  <div class="form__input__block">
    <label
      class="form__input__label"
    >
    </label>
    <input
      type="text"
      class="form__input__field"
      v-model="modelValue"
    >
  </div>
</template>
<script lang="ts" setup>
defineProps({
  modelValue: {
    type: String,
  },
  label: {
    type: String,
  },
});

</script>
<style lang="scss">
.form__input {
  &__label {
    font-size: 2.6rem;
    font-weight: 500;
  }
}
</style>