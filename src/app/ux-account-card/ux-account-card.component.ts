import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output } from "@angular/core";

@Component({
  selector: "ux-account-card",
  templateUrl: "./ux-account-card.component.html",
  styleUrls: ["./ux-account-card.component.scss"],
})
export class AccountCardComponent implements AfterViewInit, OnDestroy {
  @Input("card") card: any;
  @Input("cardIndex") cardIndex: any;
  @Input("selectedCardIndex") selectedCardIndex: any;
  @Input("customClass") customClass: string;

  @Output("onswipeleft") swipeLeftEventEmitter = new EventEmitter<any>();
  @Output("onswiperight") swipeRightEventEventEmitter = new EventEmitter<any>();
  @Output("onpanleft") panLeftEventEmitter = new EventEmitter<any>();
  @Output("onpanright") panRightEventEmitter = new EventEmitter<any>();
  @Output("onpanstart") panStartEventEmitter = new EventEmitter<any>();
  @Output("onpanend") panEndEventEmitter = new EventEmitter<any>();

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
}
