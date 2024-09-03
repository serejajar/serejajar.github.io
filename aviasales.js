
const data = {
  token,
  origin: 'MOW',
  destination: 'RMO',
  departure_at: '2024-11',
  // return_at: '2024-09',
  sorting: 'price',
  currency: 'EUR',
  limit: 1000,
  // page: '1',
  one_way: true
}

const params = new URLSearchParams(data).toString();

console.log(`https://api.travelpayouts.com/aviasales/v3/prices_for_dates?${params}`);

const prices = {
  token,
  origin: 'MOW',
  destination: 'RMO',
  sorting: 'price',
  currency: 'EUR',
  period_type: 'year',
  limit: 1000,
}

const paramsForPrices = new URLSearchParams(prices).toString();

console.log(`http://api.travelpayouts.com/aviasales/v3/get_latest_prices?${paramsForPrices}`);
