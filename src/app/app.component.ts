import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from "@angular/core";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import accountStatement from "./_files/accountstatement.json";
import merchantDetail from "./_files/merchantdetail.json";
import transactionCodeDetail from "./_files/transactioncodedetail.json";

gsap.registerPlugin(ScrollTrigger);

const $fontWeightLight = 300;
const $fontWeightRegular = 400;
const $fontWeightMedium = 500;
const $fontWeightSemiBold = 600;
const $fontWeightBold = 700;
const $fontWeightExtraBold = 800;

const MAX_VERTICAL_SCROLL = 0.1847290640394089;

const toVw = (value) => {
  return (value / 375) * window.innerWidth;
};

const toVh = (value) => {
  return (value / 812) * window.innerHeight;
};

const OVERVIEW_WIDTH = toVw(35);
const CARD_MARGIN = toVw(20);
const CARD_WIDTH = toVw(214);
const CARD_DETAIL_WIDTH = toVw(375);
const NEWACCOUNT_WIDTH = toVw(64);
const CARD_MOVEMENT_WIDTH = Math.floor(CARD_MARGIN + CARD_WIDTH);
const CARD_SELECTION_ANIMATION_DURATION = CARD_MOVEMENT_WIDTH / 1000.0;

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("scrollable") scrollable: ElementRef;

  @ViewChild("cardSelector") cardSelector: ElementRef;
  @ViewChild("cardDetails") cardDetails: ElementRef;

  private dockActiveCardTimeline;

  selectedCardIndex = 0;

  cards = [];

  private TOTAL_CARD_SELECTOR_WIDTH = 0;

  private scrollunlistener: () => void;
  private touchunlistener: () => void;

  constructor(private renderer2: Renderer2) {}

  ngOnInit() {
    let txDetails = [];
    for (var j = 0; j < accountStatement.length; j++) {
      let tempObj = {};
      tempObj["merchantCode"] = accountStatement[j].merchantCode;
      tempObj["transactionAmount"] = accountStatement[j].transactionAmountFormat;
      tempObj["description"] = accountStatement[j].description;
      tempObj["transactionDateOfTransaction"] = accountStatement[j].transactionDateOfTransaction;
      tempObj["date"] = accountStatement[j].valueDate;
      tempObj["transactionCode"] = accountStatement[j].transactionCode;
      tempObj["transactionId"] = accountStatement[j].transactionId;
      tempObj["merchantId"] = accountStatement[j].merchantId;
      tempObj["narrationDetail"] = accountStatement[j].narrationDetail;
      tempObj["flexPayEligibility"] = accountStatement[j].flexPayEligibility;
      tempObj["currency"] = accountStatement[j].transactionCurrencyCode;
      tempObj["runningBalance"] = accountStatement[j].runningBalance;
      tempObj["debitCredit"] = accountStatement[j].debitCredit;

      if (accountStatement[j].merchantId && accountStatement[j].merchantId != undefined && accountStatement[j].merchantId != " ") {
        let merchantId = null;
        merchantId = merchantDetail.find((obj) => {
          return obj.merchantId === accountStatement[j].merchantId;
        });
        if (merchantId != null) {
          tempObj["merchantData"] = merchantId;
        }
      } else if (accountStatement[j].transactionCode && accountStatement[j].transactionCode != undefined && accountStatement[j].transactionCode != " ") {
        let transactionCodeId = null;
        transactionCodeId = transactionCodeDetail.find((obj) => {
          return obj.transactionCode === accountStatement[j].transactionCode;
        });
        if (transactionCodeId != null) {
          tempObj["transactionCodeData"] = transactionCodeId;
        }
      }

      if (tempObj["merchantData"]) {
        tempObj["iconImg"] = tempObj["merchantData"].icon;
        tempObj["categoryTagType"] = tempObj["merchantData"].category;
        tempObj["title"] = tempObj["merchantData"].merchantName;
      } else if (tempObj["transactionCodeData"]) {
        tempObj["title"] = tempObj["transactionCodeData"].transactioncodeDescription;
        tempObj["iconImg"] = tempObj["transactionCodeData"].icon;
        tempObj["categoryTagType"] = tempObj["transactionCodeData"].category;
      }

      txDetails.push(tempObj);
    }
    this.cards = [];
    this.cards.push({
      accountNumber: "DE89 5002 0000 5732 0180 90",
      accountName: "Sebastian Sberbanker 0",
      balanceAmount: "4.228,53",
      balanceCurrency: "EUR",
      availableBalanceAmount: "6.228,53",
      availableBalanceCurrency: "EUR",
      details: txDetails,
    });
    this.cards.push({
      accountNumber: "DE89 5002 0000 5732 0180 91",
      accountName: "Sebastian Sberbanker My household",
      balanceAmount: "8.228,53",
      balanceCurrency: "EUR",
      availableBalanceAmount: "16.228,53",
      availableBalanceCurrency: "EUR",
      details: txDetails,
    });
    this.cards.push({
      accountNumber: "DE89 5002 0000 5732 0180 92",
      accountName: "Sebastian Sberbanker 2",
      balanceAmount: "14.228,53",
      balanceCurrency: "EUR",
      availableBalanceAmount: "26.228,53",
      availableBalanceCurrency: "EUR",
      details: txDetails,
    });
    /*
    this.cards.push({
      accountNumber: "DE89 5002 0000 5732 0180 93",
      accountName: "Sebastian Sberbanker 3",
      balanceAmount: "200.228,53",
      balanceCurrency: "EUR",
      availableBalanceAmount: "226.228,53",
      availableBalanceCurrency: "EUR",
      details: txDetails,
    });
    this.cards.push({
      accountNumber: "DE89 5002 0000 5732 0180 94",
      accountName: "Sebastian Sberbanker 4",
      balanceAmount: "150.228,53",
      balanceCurrency: "EUR",
      availableBalanceAmount: "176.228,53",
      availableBalanceCurrency: "EUR",
      details: txDetails,
    });
    */
  }
  /*
   */
  setupDockAnimation() {
    let animationDockDuration = Math.floor(MAX_VERTICAL_SCROLL * window.innerHeight) / 1000.0;
    console.log("Animation Duration", animationDockDuration,window.innerHeight,window.innerWidth);
    this.dockActiveCardTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-details-header",
        anticipatePin: 1,
        pin: false, // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=" + Math.floor(MAX_VERTICAL_SCROLL * window.innerHeight), // end after scrolling 500px beyond the start
        scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        snap: {
          snapTo: (value: number) => {
            console.log("scrollTrigger", value);
            if (value > 0.5) {
              return 1;
            }
            return 0;
          },
          delay: 0,
          directional: false,
          duration: { min: 0.2, max: animationDockDuration * 2 },
          ease: "none",
          inertia: true,
        },
        invalidateOnRefresh: true,
        fastScrollEnd: false,
        preventOverlaps: true,
        onRefresh: ({ progress, direction, isActive }) => console.log("onRefresh", progress, direction, isActive),
        onUpdate: ({ progress, direction, isActive }) => console.log("onUpdate", progress, direction, isActive),
        onScrubComplete: ({ progress, direction, isActive }) => console.log("onScrubComplete", progress, direction, isActive),
        onSnapComplete: ({ progress, direction, isActive }) => console.log("onSnapComplete", progress, direction, isActive),
        onToggle: ({ progress, direction, isActive }) => console.log("onToggle", progress, direction, isActive),
        onEnter: ({ progress, direction, isActive }) => console.log("onEnter", progress, direction, isActive),
        onEnterBack: ({ progress, direction, isActive }) => console.log("onEnterBack", progress, direction, isActive),
        onLeave: ({ progress, direction, isActive }) => console.log("onLeave", progress, direction, isActive),
        onLeaveBack: ({ progress, direction, isActive }) => console.log("onLeaveBack", progress, direction, isActive),
      },
      paused: true,
      duration: animationDockDuration,
      ease: "none",
      autoRemoveChildren: false,
      smoothChildTiming: true,
    });
    this.dockActiveCardTimeline.eventCallback("onComplete", () => {
      console.log("dockActiveCardTimeline", "onComplete");
    });
    this.dockActiveCardTimeline.eventCallback("onReverseComplete", () => {
      console.log("dockActiveCardTimeline", "onReverseComplete");
      this.dockActiveCardTimeline.reversed(false).pause().seek(0);
    });
    console.log("card-selector-container", Math.floor(-MAX_VERTICAL_SCROLL * window.innerHeight));
    this.dockActiveCardTimeline.fromTo(
      ".header",
      {
        css: {
          opacity: 1,
        },
      },
      {
        css: {
          opacity: 0,
        },
      },
      0
    );
    this.dockActiveCardTimeline.fromTo(
      ".dock-header",
      {
        css: {
          opacity: 0,
        },
      },
      {
        css: {
          opacity: 1,
        },
        ease: "none",
      },
      0
    );
    this.dockActiveCardTimeline.fromTo(
      ".card-selector-container",
      {
        css: {
          y: 0,
        },
      },
      {
        css: {
          y: Math.floor(-MAX_VERTICAL_SCROLL * window.innerHeight),
        },
        ease: "none",
      },
      0
    );
    this.dockActiveCardTimeline.fromTo(
      "ux-account-card .active-card",
      {
        css: {
          x: 0,
          width: CARD_WIDTH,
        },
      },
      {
        css: {
          x: Math.floor(0.04 * window.innerWidth),
          width: 1.524 * CARD_WIDTH,
        },
        ease: "none",
      },
      0
    );

    this.dockActiveCardTimeline.fromTo(
      "ux-account-card .active-card >div",
      {
        css: {
          x: 0,
          y: 0,
        },
      },
      {
        css: {
          x: toVw(4),
          y: toVh(38),
        },
        ease: "none",
      },
      0
    );

    this.dockActiveCardTimeline.fromTo(
      "ux-account-card .active-card p.availablebalance",
      {
        css: {
          y: 0,
          x: 0,
        },
      },
      {
        css: {
          y: toVh(-43.84),
          x: toVw(196),
        },
        ease: "none",
      },
      0
    );

    this.dockActiveCardTimeline.fromTo(
      ".overview-tag",
      {
        css: {
          y: 0,
          opacity: 1,
        },
      },
      {
        css: {
          y: Math.floor(0.185 * window.innerHeight),
          opacity: 0,
        },
      },
      0
    );

    this.dockActiveCardTimeline.fromTo(
      ".new-account-tag",
      {
        css: {
          y: 0,
          opacity: 1,
        },
      },
      {
        css: {
          y: Math.floor(0.185 * window.innerHeight),
          opacity: 0,
        },
      },
      0
    );
    if (this.selectedCardIndex > 0) {
      this.dockActiveCardTimeline.fromTo(
        "ux-account-card .before-active-card",
        {
          css: {
            x: 0,
          },
        },
        {
          css: {
            x: Math.floor(-0.186 * window.innerWidth),
          },
        },
        0
      );
    }
    if (this.selectedCardIndex < this.cards.length - 1) {
      this.dockActiveCardTimeline.fromTo(
        "ux-account-card .after-active-card",
        {
          css: {
            x: 0,
          },
        },
        {
          css: {
            x: Math.floor(0.186 * window.innerWidth),
          },
        },
        0
      );
    }
    //this.scrollunlistener = this.renderer2.listen("window", "scroll", this.dockScrollHandler.bind(this));
    //this.touchunlistener = this.renderer2.listen("window", "touchend", this.scrollerTouchEndHandler.bind(this));
  }

  dockScrollHandler($event) {
    let progress = this.getScrollerProgress();
    this.seekDockAnimation(progress);
    console.log("dockScrollHandler", window.scrollY, window.innerHeight, window.innerWidth, progress);
  }

  scrollerTouchEndHandler($event) {
    let progress = this.getScrollerProgressReal();
    this.seekDockAnimation(progress);
    if (progress >= 50 && progress < 100) {
      window.scrollTo({
        top: Math.floor(MAX_VERTICAL_SCROLL * window.innerHeight),
        left: 0,
        behavior: "smooth",
      });
    } else if (progress > 0 && progress < 50) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
    console.log("scrollerTouchEndHandler", window.scrollY, window.innerHeight, window.innerWidth, progress);
  }

  getScrollerProgress() {
    let position = window.scrollY / window.innerHeight;
    let progress = (position / MAX_VERTICAL_SCROLL) * 100;
    if (progress > 100) {
      progress = 100;
    }
    return progress;
  }

  getScrollerProgressReal() {
    let position = window.scrollY / window.innerHeight;
    let progress = (position / MAX_VERTICAL_SCROLL) * 100;
    if (progress > 100) {
      progress = 100;
    }
    return progress;
  }

  scrollHandler(progress) {
    this.seekDockAnimation(progress);
  }

  scheduleDockReverse() {}

  scheduleDockCompletion() {}

  seekDockAnimation(progress) {
    let animationDuration = Math.floor(MAX_VERTICAL_SCROLL * window.innerHeight * 4) / 1000.0;
    let seekTime = animationDuration * (progress / 100);
    console.log("Seek", seekTime, animationDuration);
    let animeInstances = [];
    animeInstances.push(this.dockActiveCardTimeline);
    animeInstances.forEach((item) => {
      if (item) {
        item.seek(seekTime).pause();
      }
    });
  }

  teardownDockAnimation() {
    if (this.scrollunlistener) {
      this.scrollunlistener();
    }
    if (this.touchunlistener) {
      this.touchunlistener();
    }
    let animeInstances = [];
    animeInstances.push(this.dockActiveCardTimeline);
    animeInstances.forEach((item) => {
      if (item) {
        item.kill();
        item = null;
      }
    });
  }

  private cardSelectorCarouselNextAsCurrentAIs = [];
  private cardSelectorCarouselPreviousAsCurrentAIs = [];
  private lastSwipedIndex = -1;

  private nextAsCurrentCardTimeline;
  private previousAsCurrentCardTimeline;

  teardownCarouselCardChangeAnimation() {
    if (this.nextAsCurrentCardTimeline) {
      this.nextAsCurrentCardTimeline.kill();
      this.nextAsCurrentCardTimeline = null;
    }
    if (this.previousAsCurrentCardTimeline) {
      this.previousAsCurrentCardTimeline.kill();
      this.previousAsCurrentCardTimeline = null;
    }
  }

  setupCarouselCardChangeAnimation() {
    this.nextAsCurrentCardTimeline = gsap.timeline({
      paused: true,
      duration: CARD_SELECTION_ANIMATION_DURATION,
      ease: "power3.inOut",
      autoRemoveChildren: false,
      smoothChildTiming: true,
    });
    this.nextAsCurrentCardTimeline.eventCallback("onComplete", () => {
      console.log("activeToFromInactiveTimeline", "onComplete");
      setTimeout(() => {
        this.teardownCarouselCardChangeAnimation();
        this.setupCarouselCardChangeAnimation();
      });
    });

    this.nextAsCurrentCardTimeline.eventCallback("onReverseComplete", () => {
      console.log("onReverseComplete ", "activeToFromInactiveTimeline");
      this.nextAsCurrentCardTimeline.reversed(false).pause().seek(0);
    });

    this.nextAsCurrentCardTimeline.fromTo(
      "ux-account-card .active-card >div",
      {
        css: {
          x: 0,
          y: 0,
        },
      },
      {
        css: {
          x: toVw(4),
          y: toVh(2),
        },
      },
      0
    );

    this.nextAsCurrentCardTimeline.fromTo(
      "ux-account-card-detail .active-card-detail",
      {
        css: {
          opacity: 1,
        },
      },
      {
        css: {
          opacity: 0.15,
        },
      },
      0
    );

    this.nextAsCurrentCardTimeline.fromTo(
      "ux-account-card .active-card p.accountnumber span",
      {
        css: {
          fontWeight: $fontWeightMedium,
        },
      },
      {
        css: {
          fontWeight: $fontWeightRegular,
        },
      },
      0
    );

    this.nextAsCurrentCardTimeline.fromTo(
      "ux-account-card .active-card p.accountname",
      {
        css: {
          marginTop: toVh(18.74),
          fontSize: "12px",
          fontWeight: $fontWeightMedium,
          lineHeight: "13px",
        },
      },
      {
        css: {
          marginTop: toVh(11.84),
          fontSize: "10px",
          fontWeight: $fontWeightRegular,
          lineHeight: "11px",
        },
      },
      0
    );

    this.nextAsCurrentCardTimeline.fromTo(
      "ux-account-card .active-card p.balance",
      {
        css: {
          marginTop: toVh(5.16),
          fontSize: "17px",
          fontWeight: $fontWeightExtraBold,
          lineHeight: "20px",
        },
      },
      {
        css: {
          marginTop: toVh(10),
          fontSize: "14px",
          fontWeight: $fontWeightBold,
          lineHeight: "18px",
        },
      },
      0
    );

    this.nextAsCurrentCardTimeline.fromTo(
      "ux-account-card .active-card p.balance span",
      {
        css: {
          fontWeight: $fontWeightRegular,
        },
      },
      {
        css: {
          fontWeight: $fontWeightLight,
        },
      },
      0
    );

    this.nextAsCurrentCardTimeline.fromTo(
      "ux-account-card .active-card p.availablebalance",
      {
        css: {
          marginTop: toVh(14.84),
          opacity: 1,
        },
      },
      {
        css: {
          marginTop: toVh(-28.84),
          opacity: 0,
        },
        ease: "power3.inOut",
      },
      0
    );

    if (this.selectedCardIndex < this.cards.length - 1) {
      this.nextAsCurrentCardTimeline.fromTo(
        "ux-account-card-detail .after-active-card-detail",
        {
          css: {
            opacity: 0.15,
          },
        },
        {
          css: {
            opacity: 1,
          },
        },
        0
      );
      this.nextAsCurrentCardTimeline.fromTo(
        "ux-account-card .after-active-card >div",
        {
          css: {
            x: toVw(4),
            y: toVh(2),
          },
        },
        {
          css: {
            x: 0,
            y: 0,
          },
        },
        0
      );
      this.nextAsCurrentCardTimeline.fromTo(
        "ux-account-card .after-active-card p.accountnumber span",
        {
          css: {
            fontWeight: $fontWeightRegular,
          },
        },
        {
          css: {
            fontWeight: $fontWeightMedium,
          },
        },
        0
      );

      this.nextAsCurrentCardTimeline.fromTo(
        "ux-account-card .after-active-card p.accountname",
        {
          css: {
            marginTop: toVh(11.84),
            fontSize: "10px",
            fontWeight: $fontWeightRegular,
            lineHeight: "11px",
            whiteSpace: "break-spaces",
            overflow: "visible",
          },
        },
        {
          css: {
            marginTop: toVh(18.74),
            fontSize: "12px",
            fontWeight: $fontWeightMedium,
            lineHeight: "13px",
            whiteSpace: "nowrap",
            overflow: "hidden",
          },
        },
        0
      );

      this.nextAsCurrentCardTimeline.fromTo(
        "ux-account-card .after-active-card p.balance",
        {
          css: {
            marginTop: toVh(10),
            fontSize: "14px",
            fontWeight: $fontWeightBold,
            lineHeight: "18px",
          },
        },
        {
          css: {
            marginTop: toVh(5.16),
            fontSize: "17px",
            fontWeight: $fontWeightExtraBold,
            lineHeight: "20px",
          },
        },
        0
      );

      this.nextAsCurrentCardTimeline.fromTo(
        "ux-account-card .after-active-card p.balance span",
        {
          css: {
            fontWeight: $fontWeightLight,
          },
        },
        {
          css: {
            fontWeight: $fontWeightRegular,
          },
        },
        0
      );

      this.nextAsCurrentCardTimeline.fromTo(
        "ux-account-card .after-active-card p.availablebalance",
        {
          css: {
            marginTop: toVh(-28.84),
            opacity: 0,
          },
        },
        {
          css: {
            marginTop: toVh(14.84),
            opacity: 1,
          },
          ease: "power3.inOut",
        },
        0
      );
    }

    this.previousAsCurrentCardTimeline = gsap.timeline({
      paused: true,
      duration: CARD_SELECTION_ANIMATION_DURATION,
      ease: "power3.inOut",
      autoRemoveChildren: false,
      smoothChildTiming: true,
    });
    this.previousAsCurrentCardTimeline.eventCallback("onComplete", () => {
      console.log("activeToFromInactiveTimeline", "onComplete");
      setTimeout(() => {
        this.teardownCarouselCardChangeAnimation();
        this.setupCarouselCardChangeAnimation();
      });
    });

    this.previousAsCurrentCardTimeline.eventCallback("onReverseComplete", () => {
      console.log("onReverseComplete ", "activeToFromInactiveTimeline");
      this.previousAsCurrentCardTimeline.reversed(false).pause().seek(0);
    });

    this.previousAsCurrentCardTimeline.fromTo(
      "ux-account-card-detail .active-card-detail",
      {
        css: {
          opacity: 1,
        },
      },
      {
        css: {
          opacity: 0.15,
        },
      },
      0
    );

    this.previousAsCurrentCardTimeline.fromTo(
      "ux-account-card .active-card >div",
      {
        css: {
          x: 0,
          y: 0,
        },
      },
      {
        css: {
          x: toVw(4),
          y: toVh(2),
        },
      },
      0
    );

    this.previousAsCurrentCardTimeline.fromTo(
      "ux-account-card .active-card p.accountnumber span",
      {
        css: {
          fontWeight: $fontWeightMedium,
        },
      },
      {
        css: {
          fontWeight: $fontWeightRegular,
        },
      },
      0
    );

    this.previousAsCurrentCardTimeline.fromTo(
      "ux-account-card .active-card p.accountname",
      {
        css: {
          marginTop: toVh(18.74),
          fontSize: "12px",
          fontWeight: $fontWeightMedium,
          lineHeight: "13px",
        },
      },
      {
        css: {
          marginTop: toVh(11.84),
          fontSize: "10px",
          fontWeight: $fontWeightRegular,
          lineHeight: "11px",
        },
      },
      0
    );

    this.previousAsCurrentCardTimeline.fromTo(
      "ux-account-card .active-card p.balance",
      {
        css: {
          marginTop: toVh(5.16),
          fontSize: "17px",
          fontWeight: $fontWeightExtraBold,
          lineHeight: "20px",
        },
      },
      {
        css: {
          marginTop: toVh(10),
          fontSize: "14px",
          fontWeight: $fontWeightBold,
          lineHeight: "18px",
        },
      },
      0
    );

    this.previousAsCurrentCardTimeline.fromTo(
      "ux-account-card .active-card p.balance span",
      {
        css: {
          fontWeight: $fontWeightRegular,
        },
      },
      {
        css: {
          fontWeight: $fontWeightLight,
        },
      },
      0
    );

    this.previousAsCurrentCardTimeline.fromTo(
      "ux-account-card .active-card p.availablebalance",
      {
        css: {
          marginTop: toVh(14.84),
          opacity: 1,
        },
      },
      {
        css: {
          marginTop: toVh(-28.84),
          opacity: 0,
        },
        ease: "power3.inOut",
      },
      0
    );

    if (this.selectedCardIndex > 0) {
      this.previousAsCurrentCardTimeline.fromTo(
        "ux-account-card-detail .before-active-card-detail",
        {
          css: {
            opacity: 0.15,
          },
        },
        {
          css: {
            opacity: 1,
          },
        },
        0
      );
      this.previousAsCurrentCardTimeline.fromTo(
        "ux-account-card .before-active-card >div",
        {
          css: {
            x: toVw(4),
            y: toVh(2),
          },
        },
        {
          css: {
            x: 0,
            y: 0,
          },
        },
        0
      );
      this.previousAsCurrentCardTimeline.fromTo(
        "ux-account-card .before-active-card p.accountnumber span",
        {
          css: {
            fontWeight: $fontWeightRegular,
          },
        },
        {
          css: {
            fontWeight: $fontWeightMedium,
          },
        },
        0
      );

      this.previousAsCurrentCardTimeline.fromTo(
        "ux-account-card .before-active-card p.accountname",
        {
          css: {
            marginTop: toVh(11.84),
            fontSize: "10px",
            fontWeight: $fontWeightRegular,
            lineHeight: "11px",
            whiteSpace: "break-spaces",
            overflow: "visible",
          },
        },
        {
          css: {
            marginTop: toVh(18.74),
            fontSize: "12px",
            fontWeight: $fontWeightMedium,
            lineHeight: "13px",
            whiteSpace: "nowrap",
            overflow: "hidden",
          },
        },
        0
      );

      this.previousAsCurrentCardTimeline.fromTo(
        "ux-account-card .before-active-card p.balance",
        {
          css: {
            marginTop: toVh(10),
            fontSize: "14px",
            fontWeight: $fontWeightBold,
            lineHeight: "18px",
          },
        },
        {
          css: {
            marginTop: toVh(5.16),
            fontSize: "17px",
            fontWeight: $fontWeightExtraBold,
            lineHeight: "20px",
          },
        },
        0
      );

      this.previousAsCurrentCardTimeline.fromTo(
        "ux-account-card .before-active-card p.balance span",
        {
          css: {
            fontWeight: $fontWeightLight,
          },
        },
        {
          css: {
            fontWeight: $fontWeightRegular,
          },
        },
        0
      );

      this.previousAsCurrentCardTimeline.fromTo(
        "ux-account-card .before-active-card p.availablebalance",
        {
          css: {
            marginTop: toVh(-28.84),
            opacity: 0,
          },
        },
        {
          css: {
            marginTop: toVh(14.84),
            opacity: 1,
          },
          ease: "power3.inOut",
        },
        0
      );
    }
  }

  setupCarouselAnimation() {
    this.cardSelectorCarouselNextAsCurrentAIs = new Array();
    this.cardSelectorCarouselPreviousAsCurrentAIs = new Array();

    let nextAsCurrentPosition = 0;
    let previousAsCurrentPosition = 0;
    let nextAsCurrentDetailPosition = 0;
    let previousAsCurrentDetailPosition = 0;
    for (let cardIndex = 0; cardIndex < this.cards.length; ++cardIndex) {
      let translatePositionNextAsCurrent;
      let translatePositionPreviousAsCurrent;

      let translatePositionDetailNextAsCurrent;
      let translatePositionDetailPreviousAsCurrent;

      if (cardIndex == 0) {
        translatePositionNextAsCurrent = [nextAsCurrentPosition, nextAsCurrentPosition];
        translatePositionDetailNextAsCurrent = [nextAsCurrentDetailPosition, nextAsCurrentDetailPosition];
      } else {
        translatePositionNextAsCurrent = [nextAsCurrentPosition, nextAsCurrentPosition - CARD_MOVEMENT_WIDTH];
        translatePositionDetailNextAsCurrent = [nextAsCurrentDetailPosition, nextAsCurrentDetailPosition - CARD_DETAIL_WIDTH];
        nextAsCurrentPosition -= CARD_MOVEMENT_WIDTH;
        nextAsCurrentDetailPosition -= CARD_DETAIL_WIDTH;
      }

      if (cardIndex == this.cards.length - 1) {
        translatePositionPreviousAsCurrent = [previousAsCurrentPosition, previousAsCurrentPosition];
        translatePositionDetailPreviousAsCurrent = [previousAsCurrentDetailPosition, previousAsCurrentDetailPosition];
      } else {
        translatePositionPreviousAsCurrent = [previousAsCurrentPosition - CARD_MOVEMENT_WIDTH, previousAsCurrentPosition];
        translatePositionDetailPreviousAsCurrent = [previousAsCurrentDetailPosition - CARD_DETAIL_WIDTH, previousAsCurrentDetailPosition];
        previousAsCurrentPosition -= CARD_MOVEMENT_WIDTH;
        previousAsCurrentDetailPosition -= CARD_DETAIL_WIDTH;
      }

      let cardSelectorCarouselNextAsCurrentAI = gsap.timeline({
        paused: true,
        duration: CARD_SELECTION_ANIMATION_DURATION,
        ease: "power3.inOut",
        autoRemoveChildren: false,
        smoothChildTiming: true,
      });
      cardSelectorCarouselNextAsCurrentAI.eventCallback("onComplete", () => {
        console.log("onComplete ", cardIndex);
        this.lastSwipedIndex = -1;
        this.selectedCardIndex = cardIndex;
        document.body.style.overflowY = "scroll";
        setTimeout(() => {
          this.teardownDockAnimation();
          this.setupDockAnimation();
          this.teardownCarouselCardChangeAnimation();
          this.setupCarouselCardChangeAnimation();
        });
        if (cardIndex > 0) {
          this.cardSelectorCarouselPreviousAsCurrentAIs[cardIndex - 1].pause().seek(0);
        }
      });
      cardSelectorCarouselNextAsCurrentAI.eventCallback("onReverseComplete", () => {
        console.log("onReverseComplete ", cardIndex);
        this.lastSwipedIndex = -1;
        document.body.style.overflowY = "scroll";
        cardSelectorCarouselNextAsCurrentAI.reversed(false);
        cardSelectorCarouselNextAsCurrentAI.pause().seek(0);
      });
      cardSelectorCarouselNextAsCurrentAI.fromTo(".card-selector", { x: translatePositionNextAsCurrent[0] }, { x: translatePositionNextAsCurrent[1] }, 0);
      cardSelectorCarouselNextAsCurrentAI.fromTo(".card-details", { x: translatePositionDetailNextAsCurrent[0] }, { x: translatePositionDetailNextAsCurrent[1] }, 0);
      this.cardSelectorCarouselNextAsCurrentAIs.push(cardSelectorCarouselNextAsCurrentAI);

      let cardSelectorCarouselPreviousAsCurrentAI = gsap.timeline({
        paused: true,
        duration: CARD_SELECTION_ANIMATION_DURATION,
        ease: "power3.inOut",
        autoRemoveChildren: false,
        smoothChildTiming: true,
      });
      cardSelectorCarouselPreviousAsCurrentAI.eventCallback("onComplete", () => {
        console.log("onComplete ", cardIndex);
        this.lastSwipedIndex = -1;
        this.selectedCardIndex = cardIndex;
        document.body.style.overflowY = "scroll";
        setTimeout(() => {
          this.teardownDockAnimation();
          this.setupDockAnimation();
          this.teardownCarouselCardChangeAnimation();
          this.setupCarouselCardChangeAnimation();
        });
        if (cardIndex < this.cards.length - 1) {
          this.cardSelectorCarouselNextAsCurrentAIs[cardIndex + 1].pause().seek(0);
        }
      });
      cardSelectorCarouselPreviousAsCurrentAI.eventCallback("onReverseComplete", () => {
        console.log("onReverseComplete ", cardIndex);
        this.lastSwipedIndex = -1;
        document.body.style.overflowY = "scroll";
        cardSelectorCarouselPreviousAsCurrentAI.reversed(false);
        cardSelectorCarouselPreviousAsCurrentAI.pause().seek(0);
      });
      cardSelectorCarouselPreviousAsCurrentAI.fromTo(".card-selector", { x: translatePositionPreviousAsCurrent[0] }, { x: translatePositionPreviousAsCurrent[1] }, 0);
      cardSelectorCarouselPreviousAsCurrentAI.fromTo(".card-details", { x: translatePositionDetailPreviousAsCurrent[0] }, { x: translatePositionDetailPreviousAsCurrent[1] }, 0);

      this.cardSelectorCarouselPreviousAsCurrentAIs.push(cardSelectorCarouselPreviousAsCurrentAI);
      setTimeout(() => {
        this.cardSelector.nativeElement.style.transform = "translateX(0)";
        this.cardDetails.nativeElement.style.transform = "translateX(0)";
      });
    }
    this.teardownCarouselCardChangeAnimation();
    this.setupCarouselCardChangeAnimation();
  }

  teardownCarouselAnimation() {
    this.teardownCarouselCardChangeAnimation();
    this.cardSelectorCarouselPreviousAsCurrentAIs.forEach((item) => {
      if (item) {
        item.kill();
        item = null;
      }
    });
    this.cardSelectorCarouselNextAsCurrentAIs.forEach((item) => {
      if (item) {
        item.kill();
        item = null;
      }
    });
  }

  seekNextAsCurrentCarouselAnimation(index, progress) {
    let seekTime = CARD_SELECTION_ANIMATION_DURATION * (progress / 100);
    console.log("Seek", seekTime);
    let animeInstances = [];
    animeInstances.push(this.cardSelectorCarouselNextAsCurrentAIs[index]);
    animeInstances.push(this.nextAsCurrentCardTimeline);
    animeInstances.forEach((item) => {
      if (item) {
        item.pause().seek(seekTime);
      }
    });
  }

  seekPreviousAsCurrentCarouselAnimation(index, progress) {
    let seekTime = CARD_SELECTION_ANIMATION_DURATION * (progress / 100);
    console.log("Seek", seekTime);
    let animeInstances = [];
    animeInstances.push(this.cardSelectorCarouselPreviousAsCurrentAIs[index]);
    animeInstances.push(this.previousAsCurrentCardTimeline);
    animeInstances.forEach((item) => {
      if (item) {
        item.pause().seek(seekTime);
      }
    });
  }

  updateCarouselOffsetProgress(anim) {}

  getCaraouselSwipeProgress(index) {
    let OVERVIEW_WIDTH = toVw(35);
    let CARD_MARGIN = toVw(20);
    let CARD_WIDTH = toVw(214);
    let NEWACCOUNT_WIDTH = toVw(64);
    let offsetPostion = index == 0 ? 0 : Math.floor(OVERVIEW_WIDTH + (CARD_MARGIN + CARD_WIDTH) * index - CARD_MARGIN);
    let progress = Math.abs((offsetPostion / this.TOTAL_CARD_SELECTOR_WIDTH) * 100);
    return progress;
  }

  getCaraouselPanProgress(deltaX) {
    let progress = Math.abs((deltaX / CARD_MOVEMENT_WIDTH) * 100);
    return progress;
  }

  swipeLeftHandler($event, index) {
    console.log("Swipe Left", index);
    if (index == this.selectedCardIndex + 1) {
      this.lastSwipedIndex = index;
      this.cardSelectorCarouselNextAsCurrentAIs[index].play();
      this.nextAsCurrentCardTimeline.play();
    }
  }

  swipeRightHandler($event, index) {
    console.log("Swipe Right", index);
    if (index == this.selectedCardIndex - 1) {
      this.lastSwipedIndex = index;
      this.cardSelectorCarouselPreviousAsCurrentAIs[index].play();
      this.previousAsCurrentCardTimeline.play();
    }
  }

  panStartHandler($event, index) {
    //console.log("Pan Start", index, this.lastSwipedIndex, $event.center.x);
    if (index == this.lastSwipedIndex) {
      console.log("Skipped");
      return;
    }
    if (index !== this.selectedCardIndex) {
      document.body.style.overflowY = "hidden";
    }
  }

  panEndHandler($event, index) {
    let panPercentage = this.calculatePanDistancePercentage($event);
    console.log("Pan End", index, this.lastSwipedIndex, $event.deltaX, panPercentage);
    if (index == this.lastSwipedIndex) {
      console.log("Skipped");
      return;
    }
    if (index !== this.selectedCardIndex) {
      if (panPercentage >= 0 && panPercentage <= 100) {
        if (index < this.selectedCardIndex) {
          if (panPercentage > 30) {
            this.cardSelectorCarouselPreviousAsCurrentAIs[index].play();
            this.previousAsCurrentCardTimeline.play();
          } else {
            this.cardSelectorCarouselPreviousAsCurrentAIs[index].reverse();
            this.previousAsCurrentCardTimeline.reverse();
          }
        }

        if (index > this.selectedCardIndex) {
          if (panPercentage > 30) {
            this.cardSelectorCarouselNextAsCurrentAIs[index].play();
            this.nextAsCurrentCardTimeline.play();
          } else {
            this.cardSelectorCarouselNextAsCurrentAIs[index].reverse();
            this.nextAsCurrentCardTimeline.reverse();
          }
        }
      }
    }
  }

  calculatePanDistancePercentage($event) {
    let panDelta = $event.deltaX;
    let panPercentage = (Math.abs(panDelta) * 100) / CARD_MOVEMENT_WIDTH;
    return panPercentage;
  }

  panLeftHandler($event, index) {
    let panPercentage = this.calculatePanDistancePercentage($event);
    //console.log("Pan Left", index, this.lastSwipedIndex, $event.deltaX, panPercentage);
    if (index == this.lastSwipedIndex) {
      console.log("Skipped");
      return;
    }
    if (index !== this.selectedCardIndex && index !== this.lastSwipedIndex) {
      if (index > this.selectedCardIndex) {
        if (panPercentage <= 100 && $event.deltaX <= 0) {
          let progress = this.getCaraouselPanProgress($event.deltaX);
          this.seekNextAsCurrentCarouselAnimation(index, progress);
        } else {
          this.lastSwipedIndex = index;
          this.cardSelectorCarouselNextAsCurrentAIs[index].play();
          this.nextAsCurrentCardTimeline.play();
        }
      } else if (index < this.selectedCardIndex) {
        if (panPercentage >= 0 && $event.deltaX >= 0) {
          let progress = this.getCaraouselPanProgress($event.deltaX);
          this.seekPreviousAsCurrentCarouselAnimation(index, progress);
        }
      }
    }
  }

  panRightHandler($event, index) {
    let panPercentage = this.calculatePanDistancePercentage($event);
    //console.log("Pan Right", index, this.lastSwipedIndex, $event.deltaX, panPercentage);
    if (index == this.lastSwipedIndex) {
      console.log("Skipped");
      return;
    }
    if (index !== this.selectedCardIndex && index !== this.lastSwipedIndex) {
      if (index > this.selectedCardIndex) {
        if (panPercentage >= 0 && $event.deltaX <= 0) {
          let progress = this.getCaraouselPanProgress($event.deltaX);
          this.seekNextAsCurrentCarouselAnimation(index, progress);
        }
      } else if (index < this.selectedCardIndex) {
        if (panPercentage <= 100 && $event.deltaX >= 0) {
          let progress = this.getCaraouselPanProgress($event.deltaX);
          this.seekPreviousAsCurrentCarouselAnimation(index, progress);
        } else {
          this.lastSwipedIndex = index;
          this.cardSelectorCarouselPreviousAsCurrentAIs[index].play();
          this.previousAsCurrentCardTimeline.play();
        }
      }
    }
  }

  swipeUpHandler($event) {
    console.log("Swipe Up");
  }

  swipeDownHandler($event) {
    console.log("Swipe Down");
  }

  panUpHandler($event) {
    console.log("Pan Up");
  }

  panDownHandler($event) {
    console.log("Pan Down");
  }

  ngAfterViewInit() {
    this.setupAnimations();
  }

  ngOnDestroy() {
    this.teardownAnimations();
  }

  setupAnimations() {
    this.teardownAnimations();
    this.setupDockAnimation();
    this.setupCarouselAnimation();
  }

  teardownAnimations() {
    this.teardownDockAnimation();
    this.teardownCarouselAnimation();
  }

  // this is the helper function that sets it all up. Pass in the content <div> and then the wrapping viewport <div> (can be the elements or selector text). It also sets the default "scroller" to the content so you don't have to do that on all your ScrollTriggers.
  smoothScroll(content, viewport, smoothness) {
    content = gsap.utils.toArray(content)[0];
    smoothness = smoothness || 1;

    gsap.set(viewport || content.parentNode, { overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0 });
    gsap.set(content, { overflow: "visible", width: "100%" });

    let getProp = gsap.getProperty(content),
      setProp = gsap.quickSetter(content, "y", "px"),
      setScroll = ScrollTrigger.getScrollFunc(window),
      removeScroll = () => (content.style.overflow = "visible"),
      killScrub = (trigger) => {
        let scrub = trigger.getTween ? trigger.getTween() : gsap.getTweensOf(trigger.animation)[0]; // getTween() was added in 3.6.2
        scrub && scrub.kill();
        trigger.animation.progress(trigger.progress);
      },
      height,
      isProxyScrolling;

    let onResize = () => {
      height = content.clientHeight;
      content.style.overflow = "visible";
      document.body.style.height = height + "px";
    };
    onResize();
    ScrollTrigger.addEventListener("refreshInit", onResize);
    ScrollTrigger.addEventListener("refresh", () => {
      removeScroll();
      requestAnimationFrame(removeScroll);
    });
    ScrollTrigger.defaults({ scroller: content });

    ScrollTrigger.scrollerProxy(content, {
      scrollTop(value) {
        if (arguments.length) {
          isProxyScrolling = true; // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the content tween/ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.
          setProp(-value);
          setScroll(value);
          return;
        }
        return -getProp("y");
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
    });

    return ScrollTrigger.create({
      animation: gsap.fromTo(
        content,
        { y: 0 },
        {
          y: () => document.documentElement.clientHeight - height,
          ease: "none",
          onUpdate: ScrollTrigger.update,
        }
      ),
      scroller: window,
      invalidateOnRefresh: true,
      start: 0,
      end: () => height - document.documentElement.clientHeight,
      scrub: smoothness,
      onUpdate: (self) => {
        if (isProxyScrolling) {
          killScrub(self);
          isProxyScrolling = false;
        }
      },
      onRefresh: killScrub, // when the screen resizes, we just want the animation to immediately go to the appropriate spot rather than animating there, so basically kill the scrub.
    });
  }
}
