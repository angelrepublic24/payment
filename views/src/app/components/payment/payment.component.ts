import { PaymentService } from './../../services/payment.service';
import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, OnDestroy, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialogModule, MatDialogClose} from '@angular/material/dialog';
import { AngularMaterialModule } from '../..//angular-material.module';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [ { provide: MAT_DIALOG_DATA, useValue: [] }, { provide: MatDialogRef, useValue: [] } ]
})
export class PaymentComponent implements OnDestroy, AfterViewInit  {

  @ViewChild('cardInfo') cardInfo: ElementRef;
  _totalAmount: number;
      card: any;
      cardHandler = this.onChange.bind(this);
      cardError: string;


  constructor(
          private cd: ChangeDetectorRef,
          @Inject(MAT_DIALOG_DATA)
          private data: any,
          public dialogRef: MatDialogRef<PaymentComponent>
       ) {

          this._totalAmount = data['totalAmount'];
      }
  ngOnDestroy() {
          if (this.card) {
              // We remove event listener here to keep memory clean
              this.card.removeEventListener('change', this.cardHandler);
              this.card.destroy();
          }
      }
  ngAfterViewInit() {
          this.initiateCardElement();
      }
  initiateCardElement() {
          // Giving a base style here, but most of the style is in scss file
          const cardStyle = {
              base: {
                  color: '#32325d',
                  fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                  fontSmoothing: 'antialiased',
                  fontSize: '16px',
                  '::placeholder': {
                      color: '#aab7c4',
                  },
              },
              invalid: {
                  color: '#fa755a',
                  iconColor: '#fa755a',
              },
          };
          this.card = elements.create('card', {cardStyle});
          this.card.mount(this.cardInfo.nativeElement);
          this.card.addEventListener('change', this.cardHandler);
      }
  onChange({error}) {
          if (error) {
              this.cardError = error.message;
          } else {
              this.cardError = null;
          }
          this.cd.detectChanges();
      }
      onSuccess(token) {
        console.log(token);
    }
    onError(error) {
        if (error.message) {
            this.cardError = error.message;
        }
    }
  async createStripeToken() {
          const {token, error} = await stripe.createToken(this.card);
          if (token) {
              this.onSuccess(token);
          } else {
              this.onError(error);
          }
      }



}

