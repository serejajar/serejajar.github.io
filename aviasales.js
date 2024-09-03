const toket = ''

const data = {
  token:,
  origin: 'RMO',
  destination: 'MIL',
  departure_at: '2024-11',
  // return_at: '2024-09',
  sorting: 'price',
  currency: 'EUR',
  limit: '300',
  // page: '1',
  // one_way: true
}

const params = new URLSearchParams(data).toString();

console.log(`https://api.travelpayouts.com/aviasales/v3/prices_for_dates?${params}`);


const prices = {
  token:,
  origin: 'RMO',
  destination: 'MIL',
  sorting: 'price',
  currency: 'EUR',
  period_type: 'year',
  limit: '300',
}

const paramsForPrices = new URLSearchParams(prices).toString();

console.log(`http://api.travelpayouts.com/aviasales/v3/get_latest_prices?${paramsForPrices}`);
