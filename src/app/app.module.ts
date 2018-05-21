import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxStripeModule.forRoot(environment.stripe.pubKey)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
