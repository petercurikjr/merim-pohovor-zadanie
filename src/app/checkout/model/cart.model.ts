export interface ICart {
  id: string;
  cartItems: ICartItem[];
}

export interface ICartItem {
  id: string;
  name: string;
  // price in USD
  priceUSD: number;
  // price in desired currency
  price: number;
  currency: Currency;
}

export enum Currency {
  YEN = 'YEN',
  CZK = 'CZK',
  VND = 'VND',
  EUR = 'EUR',
  USD = 'USD',
}
