import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output } from "@angular/core";
import { Event } from "@angular/router";

@Component({
  selector: "ux-account-card-detail",
  templateUrl: "./ux-account-card-detail.component.html",
  styleUrls: ["./ux-account-card-detail.component.scss"],
})
export class AccountCardDetailComponent implements AfterViewInit, OnDestroy {
  @Input("card") card: any;
  @Input("cardIndex") cardIndex: any;
  @Input("selectedCardIndex") selectedCardIndex: any;

  @Output("onswipeleft") swipeLeftEventEmitter = new EventEmitter<any>();
  @Output("onswiperight") swipeRightEventEventEmitter = new EventEmitter<any>();
  @Output("onpanleft") panLeftEventEmitter = new EventEmitter<any>();
  @Output("onpanright") panRightEventEmitter = new EventEmitter<any>();
  @Output("onpanstart") panStartEventEmitter = new EventEmitter<any>();
  @Output("onpanend") panEndEventEmitter = new EventEmitter<any>();
  @Output("onscrolling") scrollEventEmitter = new EventEmitter<number>();

  constructor() {}

  ngAfterViewInit() {}

  ngOnDestroy() {}

  swipeLeftHandler($event) {
    this.swipeLeftEventEmitter.emit($event);
  }

  swipeRightHandler($event) {
    this.swipeRightEventEventEmitter.emit($event);
  }

  panStartHandler($event) {
    this.panStartEventEmitter.emit($event);
  }

  panEndHandler($event) {
    this.panEndEventEmitter.emit($event);
  }

  panLeftHandler($event) {
    this.panLeftEventEmitter.emit($event);
  }

  panRightHandler($event) {
    this.panRightEventEmitter.emit($event);
  }

  scrollHandler(progress) {
    this.scrollEventEmitter.emit(parseInt(progress));
  }

  formatAmount(number) {
    return new Intl.NumberFormat("de-DE", { minimumFractionDigits: 2 }).format(number);
  }
}
