import axios from "axios";

// const BASE_URL = 'https://bank.gov.ua/NBU_Exchange/exchange_site?';
const BASE_URL = 'https://bank.gov.ua/NBU_Exchange';
const DATE_START = 'start=20200115&';
const DATE_END = 'end=20220131&';
const VALCODE = 'valcode=usd&';
const SORT = 'sort=exchangedate&';
const ORDER = 'order=desc&';
const FORMAT = 'json';

export async function httpGet() {
  try {
    const resp = await axios.get(`${BASE_URL}${DATE_START}${DATE_END}${VALCODE}${SORT}${ORDER}${FORMAT}`);
    console.log(...resp.data);
  } catch (error) {
    console.error(error);
  }
}

// export async function httpApp() {

// }

export const http = axios.create({
  baseURL: `${BASE_URL}`,
})