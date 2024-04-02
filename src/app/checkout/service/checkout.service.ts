import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Currency, ICart, ICartItem } from '../model/cart.model';
import { HttpClient } from '@angular/common/http';
import {
  USD_TO_CZK,
  USD_TO_VND,
  USD_TO_YEN,
} from '../model/currency-convert.constant';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private http: HttpClient = inject(HttpClient);

  fetchActiveCart(cartId: string): Observable<ICart> {
    return this.http
      .get<ICart[]>('/mocks/getActiveCarts.json')
      .pipe(
        map((carts: ICart[]) =>
          (carts ?? []).find((cart) => cart.id === cartId)
        )
      );
  }

  convertCurrency(currency: Currency, cart: ICart): ICart {
    const currencyChangedItems: ICartItem[] = cart.cartItems.map(
      (item: ICartItem) => this.convertCurrencyCartItem(currency, item)
    );

    return { ...cart, cartItems: currencyChangedItems };
  }

  private convertCurrencyCartItem(currency: Currency, cartItem: ICartItem) {
    switch (currency) {
      case Currency.CZK:
        return { ...cartItem, currency, price: cartItem.priceUSD * USD_TO_CZK };
      case Currency.USD:
        return { ...cartItem, currency, price: cartItem.priceUSD };
      case Currency.VND:
        return { ...cartItem, currency, price: cartItem.priceUSD * USD_TO_VND };
      case Currency.YEN:
        return { ...cartItem, currency, price: cartItem.priceUSD * USD_TO_YEN };
      default:
        return cartItem;
    }
  }
}
