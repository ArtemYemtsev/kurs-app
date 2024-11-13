import { ref } from 'vue';
import { defineStore } from 'pinia';
import { http } from '@/composables/http'
import type { State } from '@/types'

const index = (params: { [key: string]: any }) => {
  return http.get('/exchange_site', {params})
}

export const useAppStore = defineStore('app', () => {
  const STATE = ref<State>({
    search: {
      start: '',
      end: '',
      valcode: '',
      sort: '',
      order: '',
      format: 'json',
    },
    data: [],
    options: {
      valcode: [],
      sort: ['exchangedate', 'rate', 'cc', 'r030'],
      order: ['desc', 'asc'],
    },
    filtered_data: [],
    filter_options: {
      start: '',
      end: '',
      cc: [],
      txt:  [],
      enname: [],
    },
    filter: {
      start: '',
      end: '',
      cc: [],
      txt:  [],
      enname: [],
    },
  });

  async function httpGetNBU() {
    try {
      const resp = await index(STATE.value.search);
      console.log(resp.data);
      STATE.value.data = resp.data;
    } catch(error) {
      console.log(error);
    }
  }

  async function initialRequest() {
    try {
      const resp = await index(STATE.value.search);
      console.log(resp.data);
      STATE.value.data = resp.data;
      //получаем масив допустимых валют
      STATE.value.options.valcode = STATE.value.data.map(item => item.cc);
    } catch(error) {
      console.log(error);
    }
  }

  return { STATE, httpGetNBU, initialRequest }
})