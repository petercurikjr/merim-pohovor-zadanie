import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CheckoutService } from '../service/checkout.service';
import { ActivatedRoute } from '@angular/router';
import { Currency, ICart } from '../model/cart.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent implements OnInit {
  private checkoutService: CheckoutService = inject(CheckoutService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  readonly cartId: string = this.activatedRoute.snapshot.paramMap.get('cartId');
  readonly convertCurrencyList: Currency[] = Object.values(Currency);

  cart$: BehaviorSubject<ICart> = new BehaviorSubject(null);

  ngOnInit(): void {
    // no need to handle unsubscribing as HttpClient.get emits once and closes automatically
    this.checkoutService
      .fetchActiveCart(this.cartId)
      .subscribe((cart: ICart) => this.cart$.next(cart));
  }

  onCurrencyConvert(currency: Currency): void {
    this.cart$.next(
      this.checkoutService.convertCurrency(currency, this.cart$.value)
    );
  }
}
