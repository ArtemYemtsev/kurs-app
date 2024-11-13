export type Search = {
  start: string,
  end: string,
  valcode:  string,
  sort:  string,
  order:  string,
  format:  string,
};

export type Data = {
  exchangedate: string,
  r030: number,
  cc: string,
  txt: string,
  enname: string,
  rate: number,
  units: number,
  rate_per_unit: number,
  group: string,
  calcdate: string,
};

export type Options = {
  valcode: string [],
  sort: string [],
  order: string [],
};

export type FilteredData = {
  exchangedate: string,
  r030: number,
  cc: string,
  txt: string,
  enname: string,
  rate: number,
  units: number,
  rate_per_unit: number,
  group: string,
  calcdate: string,
};

export type FilterOptions = {
  start: string,
  end: string,
  cc: string [],
  txt: string [],
  enname: string [],
};

export type Filter = {
  start: string,
  end: string,
  cc: string [],
  txt: string [],
  enname: string [],
};

export type State = {
  search: Search,
  data: Data [],
  options: Options,
  filtered_data: FilteredData [],
  filter_options: FilterOptions,
  filter: Filter,
};