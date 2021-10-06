import { Injectable, NgModule } from "@angular/core";
import { BrowserModule, HammerModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";
import { AccountCardComponent } from "./ux-account-card/ux-account-card.component";
import { AccountCardDetailComponent } from "./ux-account-card-detail/ux-account-card-detail.component";

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    pinch: { enable: false },
    rotate: { enable: false },
  };
}
@NgModule({
  declarations: [AppComponent, AccountCardComponent, AccountCardDetailComponent],
  imports: [BrowserModule, HammerModule],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
