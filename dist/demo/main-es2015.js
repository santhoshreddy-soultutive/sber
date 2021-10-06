(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_PATTERNS0004_Downloads_ngx_hide_on_scroll_bdccca_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 5158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3040);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ 2949);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap/ScrollTrigger */ 8093);
/* harmony import */ var _files_accountstatement_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_files/accountstatement.json */ 5179);
/* harmony import */ var _files_merchantdetail_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_files/merchantdetail.json */ 8976);
/* harmony import */ var _files_transactioncodedetail_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_files/transactioncodedetail.json */ 5103);









gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__.ScrollTrigger);
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
let AppComponent = class AppComponent {
    constructor(renderer2) {
        this.renderer2 = renderer2;
        this.selectedCardIndex = 0;
        this.cards = [];
        this.TOTAL_CARD_SELECTOR_WIDTH = 0;
        this.cardSelectorCarouselNextAsCurrentAIs = [];
        this.cardSelectorCarouselPreviousAsCurrentAIs = [];
        this.lastSwipedIndex = -1;
    }
    ngOnInit() {
        let txDetails = [];
        for (var j = 0; j < _files_accountstatement_json__WEBPACK_IMPORTED_MODULE_2__.length; j++) {
            let tempObj = {};
            tempObj["merchantCode"] = _files_accountstatement_json__WEBPACK_IMPORTED_MODULE_2__[j].merchantCode;
            tempObj["transactionAmount"] = _files_accountstatement_json__WEBPACK_IMPORTED_MODULE_2__[j].transactionAmountFormat;
            tempObj["description"] = _files_accountstatement_json__WEBPACK_IMPORTED_MODULE_2__[j].description;
            tempObj["transactionDateOfTransaction"] = _files_accountstatement_json__WEBPACK_IMPORTED_MODULE_2__[j].transactionDateOfTransaction;
            tempObj["date"] = _files_accountstatement_json__WEBPACK_IMPORTED_MODULE_2__[j].valueDate;
            tempObj["transactionCode"] = _files_accountstatement_json__WEBPACK_IMPORTED_MODULE_2__[j].transactionCode;
            tempObj["transactionId"] = _files_accountstatement_json__WEBPACK_IMPORTED_MODULE_2__[j].transactionId;
            tempObj["merchantId"] = _files_accountstatement_json__WEBPACK_IMPORTED_MODULE_2__[j].merchantId;
            tempObj["narrationDetail"] = _files_accountstatement_json__WEBPACK_IMPORTED_MODULE_2__[j].narrationDetail;
            tempObj["flexPayEligibility"] = _files_accountstatement_json__WEBPACK_IMPORTED_MODULE_2__[j].flexPayEligibility;
            tempObj["currency"] = _files_accountstatement_json__WEBPACK_IMPORTED_MODULE_2__[j].transactionCurrencyCode;
            tempObj["runningBalance"] = _files_accountstatement_json__WEBPACK_IMPORTED_MODULE_2__[j].runningBalance;
            tempObj["debitCredit"] = _files_accountstatement_json__WEBPACK_IMPORTED_MODULE_2__[j].debitCredit;
            if (_files_accountstatement_json__WEBPACK_IMPORTED_MODULE_2__[j].merchantId && _files_accountstatement_json__WEBPACK_IMPORTED_MODULE_2__[j].merchantId != undefined && _files_accountstatement_json__WEBPACK_IMPORTED_MODULE_2__[j].merchantId != " ") {
                let merchantId = null;
                merchantId = _files_merchantdetail_json__WEBPACK_IMPORTED_MODULE_3__.find((obj) => {
                    return obj.merchantId === _files_accountstatement_json__WEBPACK_IMPORTED_MODULE_2__[j].merchantId;
                });
                if (merchantId != null) {
                    tempObj["merchantData"] = merchantId;
                }
            }
            else if (_files_accountstatement_json__WEBPACK_IMPORTED_MODULE_2__[j].transactionCode && _files_accountstatement_json__WEBPACK_IMPORTED_MODULE_2__[j].transactionCode != undefined && _files_accountstatement_json__WEBPACK_IMPORTED_MODULE_2__[j].transactionCode != " ") {
                let transactionCodeId = null;
                transactionCodeId = _files_transactioncodedetail_json__WEBPACK_IMPORTED_MODULE_4__.find((obj) => {
                    return obj.transactionCode === _files_accountstatement_json__WEBPACK_IMPORTED_MODULE_2__[j].transactionCode;
                });
                if (transactionCodeId != null) {
                    tempObj["transactionCodeData"] = transactionCodeId;
                }
            }
            if (tempObj["merchantData"]) {
                tempObj["iconImg"] = tempObj["merchantData"].icon;
                tempObj["categoryTagType"] = tempObj["merchantData"].category;
                tempObj["title"] = tempObj["merchantData"].merchantName;
            }
            else if (tempObj["transactionCodeData"]) {
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
    setupDockAnimation() {
        let animationDockDuration = Math.floor(MAX_VERTICAL_SCROLL * window.innerHeight) / 1000.0;
        console.log("Animation Duration", animationDockDuration);
        this.dockActiveCardTimeline = gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.timeline({
            scrollTrigger: {
                trigger: ".card-details-header",
                pin: false,
                start: "0",
                end: "+=" + Math.floor(MAX_VERTICAL_SCROLL * window.innerHeight),
                scrub: 0.2,
                snap: {
                    snapTo: [0, 1],
                    ease: "none",
                },
                onEnter: ({ progress, direction, isActive }) => console.log(progress, direction, isActive),
                onEnterBack: ({ progress, direction, isActive }) => console.log(progress, direction, isActive),
                onLeave: ({ progress, direction, isActive }) => console.log(progress, direction, isActive),
                onLeaveBack: ({ progress, direction, isActive }) => console.log(progress, direction, isActive),
            },
            paused: true,
            duration: animationDockDuration,
            ease: "none",
        });
        this.dockActiveCardTimeline.eventCallback("onComplete", () => {
            console.log("dockActiveCardTimeline", "onComplete");
        });
        this.dockActiveCardTimeline.eventCallback("onReverseComplete", () => {
            console.log("dockActiveCardTimeline", "onReverseComplete");
            this.dockActiveCardTimeline.reversed(false).pause().seek(0);
        });
        console.log("card-selector-container", Math.floor(-MAX_VERTICAL_SCROLL * window.innerHeight));
        this.dockActiveCardTimeline.fromTo(".header", {
            css: {
                opacity: 1,
            },
        }, {
            css: {
                opacity: 0,
            },
        }, 0);
        this.dockActiveCardTimeline.fromTo(".dock-header", {
            css: {
                opacity: 0,
            },
        }, {
            css: {
                opacity: 1,
            },
            ease: "none",
        }, 0);
        this.dockActiveCardTimeline.fromTo(".card-details-header", {
            css: {
                paddingTop: toVh(331),
            },
        }, {
            css: {
                paddingTop: toVh(366),
            },
            ease: "none",
        }, 0);
        this.dockActiveCardTimeline.fromTo(".card-selector-container", {
            css: {
                y: 0,
            },
        }, {
            css: {
                y: Math.floor(-MAX_VERTICAL_SCROLL * window.innerHeight),
            },
            ease: "none",
        }, 0);
        this.dockActiveCardTimeline.fromTo("ux-account-card .active-card", {
            css: {
                x: 0,
                width: CARD_WIDTH,
            },
        }, {
            css: {
                x: Math.floor(0.04 * window.innerWidth),
                width: 1.524 * CARD_WIDTH,
            },
            ease: "none",
        }, 0);
        this.dockActiveCardTimeline.fromTo("ux-account-card .active-card >div", {
            css: {
                x: 0,
                y: 0,
            },
        }, {
            css: {
                x: toVw(4),
                y: toVh(38),
            },
            ease: "none",
        }, 0);
        this.dockActiveCardTimeline.fromTo("ux-account-card .active-card p.availablebalance", {
            css: {
                y: 0,
                x: 0,
            },
        }, {
            css: {
                y: toVh(-43.84),
                x: toVw(196),
            },
            ease: "none",
        }, 0);
        this.dockActiveCardTimeline.fromTo(".overview-tag", {
            css: {
                y: 0,
                opacity: 1,
            },
        }, {
            css: {
                y: Math.floor(0.185 * window.innerHeight),
                opacity: 0,
            },
        }, 0);
        this.dockActiveCardTimeline.fromTo(".new-account-tag", {
            css: {
                y: 0,
                opacity: 1,
            },
        }, {
            css: {
                y: Math.floor(0.185 * window.innerHeight),
                opacity: 0,
            },
        }, 0);
        if (this.selectedCardIndex > 0) {
            this.dockActiveCardTimeline.fromTo("ux-account-card .before-active-card", {
                css: {
                    x: 0,
                },
            }, {
                css: {
                    x: Math.floor(-0.186 * window.innerWidth),
                },
            }, 0);
        }
        if (this.selectedCardIndex < this.cards.length - 1) {
            this.dockActiveCardTimeline.fromTo("ux-account-card .after-active-card", {
                css: {
                    x: 0,
                },
            }, {
                css: {
                    x: Math.floor(0.186 * window.innerWidth),
                },
            }, 0);
        }
        //this.scrollunlistener = this.renderer2.listen("window", "scroll", this.dockScrollHandler.bind(this));
        //this.touchunlistener = this.renderer2.listen("window", "touchend", this.scrollerTouchEndHandler.bind(this));
    }
    dockScrollHandler($event) {
        let progress = this.getScrollerProgress();
        this.seekDockAnimation(progress);
        console.log("Scroll", window.scrollY, window.innerHeight, window.innerWidth, progress);
    }
    getScrollerProgress() {
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
    scheduleDockReverse() { }
    scheduleDockCompletion() { }
    seekDockAnimation(progress) {
        let animationDuration = Math.floor(MAX_VERTICAL_SCROLL * window.innerHeight * 3) / 1000.0;
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
        this.nextAsCurrentCardTimeline = gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.timeline({
            paused: true,
            duration: CARD_SELECTION_ANIMATION_DURATION,
            ease: "none",
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
        this.nextAsCurrentCardTimeline.fromTo("ux-account-card .active-card >div", {
            css: {
                x: 0,
                y: 0,
            },
        }, {
            css: {
                x: toVw(4),
                y: toVh(2),
            },
        }, 0);
        this.nextAsCurrentCardTimeline.fromTo("ux-account-card .active-card p.accountnumber span", {
            css: {
                fontWeight: $fontWeightMedium,
            },
        }, {
            css: {
                fontWeight: $fontWeightRegular,
            },
        }, 0);
        this.nextAsCurrentCardTimeline.fromTo("ux-account-card .active-card p.accountname", {
            css: {
                marginTop: toVh(18.74),
                fontSize: "12px",
                fontWeight: $fontWeightMedium,
                lineHeight: "13px",
            },
        }, {
            css: {
                marginTop: toVh(11.84),
                fontSize: "10px",
                fontWeight: $fontWeightRegular,
                lineHeight: "11px",
            },
        }, 0);
        this.nextAsCurrentCardTimeline.fromTo("ux-account-card .active-card p.balance", {
            css: {
                marginTop: toVh(5.16),
                fontSize: "17px",
                fontWeight: $fontWeightExtraBold,
                lineHeight: "20px",
            },
        }, {
            css: {
                marginTop: toVh(10),
                fontSize: "14px",
                fontWeight: $fontWeightBold,
                lineHeight: "18px",
            },
        }, 0);
        this.nextAsCurrentCardTimeline.fromTo("ux-account-card .active-card p.balance span", {
            css: {
                fontWeight: $fontWeightRegular,
            },
        }, {
            css: {
                fontWeight: $fontWeightLight,
            },
        }, 0);
        this.nextAsCurrentCardTimeline.fromTo("ux-account-card .active-card p.availablebalance", {
            css: {
                marginTop: toVh(14.84),
                opacity: 1,
            },
        }, {
            css: {
                marginTop: toVh(-28.84),
                opacity: 0,
            },
        }, 0);
        if (this.selectedCardIndex < this.cards.length - 1) {
            this.nextAsCurrentCardTimeline.fromTo("ux-account-card .after-active-card >div", {
                css: {
                    x: toVw(4),
                    y: toVh(2),
                },
            }, {
                css: {
                    x: 0,
                    y: 0,
                },
            }, 0);
            this.nextAsCurrentCardTimeline.fromTo("ux-account-card .after-active-card p.accountnumber span", {
                css: {
                    fontWeight: $fontWeightRegular,
                },
            }, {
                css: {
                    fontWeight: $fontWeightMedium,
                },
            }, 0);
            this.nextAsCurrentCardTimeline.fromTo("ux-account-card .after-active-card p.accountname", {
                css: {
                    marginTop: toVh(11.84),
                    fontSize: "10px",
                    fontWeight: $fontWeightRegular,
                    lineHeight: "11px",
                },
            }, {
                css: {
                    marginTop: toVh(18.74),
                    fontSize: "12px",
                    fontWeight: $fontWeightMedium,
                    lineHeight: "13px",
                },
            }, 0);
            this.nextAsCurrentCardTimeline.fromTo("ux-account-card .after-active-card p.balance", {
                css: {
                    marginTop: toVh(10),
                    fontSize: "14px",
                    fontWeight: $fontWeightBold,
                    lineHeight: "18px",
                },
            }, {
                css: {
                    marginTop: toVh(5.16),
                    fontSize: "17px",
                    fontWeight: $fontWeightExtraBold,
                    lineHeight: "20px",
                },
            }, 0);
            this.nextAsCurrentCardTimeline.fromTo("ux-account-card .after-active-card p.balance span", {
                css: {
                    fontWeight: $fontWeightLight,
                },
            }, {
                css: {
                    fontWeight: $fontWeightRegular,
                },
            }, 0);
            this.nextAsCurrentCardTimeline.fromTo("ux-account-card .after-active-card p.availablebalance", {
                css: {
                    marginTop: toVh(-28.84),
                    opacity: 0,
                },
            }, {
                css: {
                    marginTop: toVh(14.84),
                    opacity: 1,
                },
            }, 0);
        }
        this.previousAsCurrentCardTimeline = gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.timeline({
            paused: true,
            duration: CARD_SELECTION_ANIMATION_DURATION,
            ease: "none",
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
        this.previousAsCurrentCardTimeline.fromTo("ux-account-card .active-card >div", {
            css: {
                x: 0,
                y: 0,
            },
        }, {
            css: {
                x: toVw(4),
                y: toVh(2),
            },
        }, 0);
        this.previousAsCurrentCardTimeline.fromTo("ux-account-card .active-card p.accountnumber span", {
            css: {
                fontWeight: $fontWeightMedium,
            },
        }, {
            css: {
                fontWeight: $fontWeightRegular,
            },
        }, 0);
        this.previousAsCurrentCardTimeline.fromTo("ux-account-card .active-card p.accountname", {
            css: {
                marginTop: toVh(18.74),
                fontSize: "12px",
                fontWeight: $fontWeightMedium,
                lineHeight: "13px",
            },
        }, {
            css: {
                marginTop: toVh(11.84),
                fontSize: "10px",
                fontWeight: $fontWeightRegular,
                lineHeight: "11px",
            },
        }, 0);
        this.previousAsCurrentCardTimeline.fromTo("ux-account-card .active-card p.balance", {
            css: {
                marginTop: toVh(5.16),
                fontSize: "17px",
                fontWeight: $fontWeightExtraBold,
                lineHeight: "20px",
            },
        }, {
            css: {
                marginTop: toVh(10),
                fontSize: "14px",
                fontWeight: $fontWeightBold,
                lineHeight: "18px",
            },
        }, 0);
        this.previousAsCurrentCardTimeline.fromTo("ux-account-card .active-card p.balance span", {
            css: {
                fontWeight: $fontWeightRegular,
            },
        }, {
            css: {
                fontWeight: $fontWeightLight,
            },
        }, 0);
        this.previousAsCurrentCardTimeline.fromTo("ux-account-card .active-card p.availablebalance", {
            css: {
                marginTop: toVh(14.84),
                opacity: 1,
            },
        }, {
            css: {
                marginTop: toVh(-28.84),
                opacity: 0,
            },
        }, 0);
        if (this.selectedCardIndex > 0) {
            this.previousAsCurrentCardTimeline.fromTo("ux-account-card .before-active-card", {
                css: {
                    x: toVw(4),
                    y: toVh(2),
                },
            }, {
                css: {
                    x: 0,
                    y: 0,
                },
            }, 0);
            this.previousAsCurrentCardTimeline.fromTo("ux-account-card .before-active-card p.accountnumber span", {
                css: {
                    fontWeight: $fontWeightRegular,
                },
            }, {
                css: {
                    fontWeight: $fontWeightMedium,
                },
            }, 0);
            this.previousAsCurrentCardTimeline.fromTo("ux-account-card .before-active-card p.accountname", {
                css: {
                    marginTop: toVh(11.84),
                    fontSize: "10px",
                    fontWeight: $fontWeightRegular,
                    lineHeight: "11px",
                },
            }, {
                css: {
                    marginTop: toVh(18.74),
                    fontSize: "12px",
                    fontWeight: $fontWeightMedium,
                    lineHeight: "13px",
                },
            }, 0);
            this.previousAsCurrentCardTimeline.fromTo("ux-account-card .before-active-card p.balance", {
                css: {
                    marginTop: toVh(10),
                    fontSize: "14px",
                    fontWeight: $fontWeightBold,
                    lineHeight: "18px",
                },
            }, {
                css: {
                    marginTop: toVh(5.16),
                    fontSize: "17px",
                    fontWeight: $fontWeightExtraBold,
                    lineHeight: "20px",
                },
            }, 0);
            this.previousAsCurrentCardTimeline.fromTo("ux-account-card .before-active-card p.balance span", {
                css: {
                    fontWeight: $fontWeightLight,
                },
            }, {
                css: {
                    fontWeight: $fontWeightRegular,
                },
            }, 0);
            this.previousAsCurrentCardTimeline.fromTo("ux-account-card .before-active-card p.availablebalance", {
                css: {
                    marginTop: toVh(-28.84),
                    opacity: 0,
                },
            }, {
                css: {
                    marginTop: toVh(14.84),
                    opacity: 1,
                },
            }, 0);
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
            }
            else {
                translatePositionNextAsCurrent = [nextAsCurrentPosition, nextAsCurrentPosition - CARD_MOVEMENT_WIDTH];
                translatePositionDetailNextAsCurrent = [nextAsCurrentDetailPosition, nextAsCurrentDetailPosition - CARD_DETAIL_WIDTH];
                nextAsCurrentPosition -= CARD_MOVEMENT_WIDTH;
                nextAsCurrentDetailPosition -= CARD_DETAIL_WIDTH;
            }
            if (cardIndex == this.cards.length - 1) {
                translatePositionPreviousAsCurrent = [previousAsCurrentPosition, previousAsCurrentPosition];
                translatePositionDetailPreviousAsCurrent = [previousAsCurrentDetailPosition, previousAsCurrentDetailPosition];
            }
            else {
                translatePositionPreviousAsCurrent = [previousAsCurrentPosition - CARD_MOVEMENT_WIDTH, previousAsCurrentPosition];
                translatePositionDetailPreviousAsCurrent = [previousAsCurrentDetailPosition - CARD_DETAIL_WIDTH, previousAsCurrentDetailPosition];
                previousAsCurrentPosition -= CARD_MOVEMENT_WIDTH;
                previousAsCurrentDetailPosition -= CARD_DETAIL_WIDTH;
            }
            let cardSelectorCarouselNextAsCurrentAI = gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.timeline({
                paused: true,
                duration: CARD_SELECTION_ANIMATION_DURATION,
                ease: "none",
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
            let cardSelectorCarouselPreviousAsCurrentAI = gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.timeline({
                paused: true,
                duration: CARD_SELECTION_ANIMATION_DURATION,
                ease: "none",
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
    updateCarouselOffsetProgress(anim) { }
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
                    }
                    else {
                        this.cardSelectorCarouselPreviousAsCurrentAIs[index].reverse();
                        this.previousAsCurrentCardTimeline.reverse();
                    }
                }
                if (index > this.selectedCardIndex) {
                    if (panPercentage > 30) {
                        this.cardSelectorCarouselNextAsCurrentAIs[index].play();
                        this.nextAsCurrentCardTimeline.play();
                    }
                    else {
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
                }
                else {
                    this.lastSwipedIndex = index;
                    this.cardSelectorCarouselNextAsCurrentAIs[index].play();
                    this.nextAsCurrentCardTimeline.play();
                }
            }
            else if (index < this.selectedCardIndex) {
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
            }
            else if (index < this.selectedCardIndex) {
                if (panPercentage <= 100 && $event.deltaX >= 0) {
                    let progress = this.getCaraouselPanProgress($event.deltaX);
                    this.seekPreviousAsCurrentCarouselAnimation(index, progress);
                }
                else {
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
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2 }
];
AppComponent.propDecorators = {
    scrollable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ["scrollable",] }],
    cardSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ["cardSelector",] }],
    cardDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ["cardDetails",] }]
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "my-app",
        template: _C_Users_PATTERNS0004_Downloads_ngx_hide_on_scroll_bdccca_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyHammerConfig": function() { return /* binding */ MyHammerConfig; },
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _ux_account_card_ux_account_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ux-account-card/ux-account-card.component */ 882);
/* harmony import */ var _ux_account_card_detail_ux_account_card_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ux-account-card-detail/ux-account-card-detail.component */ 9870);







let MyHammerConfig = class MyHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.HammerGestureConfig {
    constructor() {
        super(...arguments);
        this.overrides = {
            pinch: { enable: false },
            rotate: { enable: false },
        };
    }
};
MyHammerConfig = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], MyHammerConfig);

let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _ux_account_card_ux_account_card_component__WEBPACK_IMPORTED_MODULE_1__.AccountCardComponent, _ux_account_card_detail_ux_account_card_detail_component__WEBPACK_IMPORTED_MODULE_2__.AccountCardDetailComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.HammerModule],
        providers: [
            {
                provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.HAMMER_GESTURE_CONFIG,
                useClass: MyHammerConfig,
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 9870:
/*!****************************************************************************!*\
  !*** ./src/app/ux-account-card-detail/ux-account-card-detail.component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountCardDetailComponent": function() { return /* binding */ AccountCardDetailComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_PATTERNS0004_Downloads_ngx_hide_on_scroll_bdccca_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ux_account_card_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./ux-account-card-detail.component.html */ 5437);
/* harmony import */ var _ux_account_card_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ux-account-card-detail.component.scss */ 9948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let AccountCardDetailComponent = class AccountCardDetailComponent {
    constructor() {
        this.swipeLeftEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.swipeRightEventEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.panLeftEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.panRightEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.panStartEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.panEndEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.scrollEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngAfterViewInit() { }
    ngOnDestroy() { }
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
};
AccountCardDetailComponent.ctorParameters = () => [];
AccountCardDetailComponent.propDecorators = {
    card: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ["card",] }],
    cardIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ["cardIndex",] }],
    selectedCardIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ["selectedCardIndex",] }],
    swipeLeftEventEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output, args: ["onswipeleft",] }],
    swipeRightEventEventEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output, args: ["onswiperight",] }],
    panLeftEventEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output, args: ["onpanleft",] }],
    panRightEventEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output, args: ["onpanright",] }],
    panStartEventEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output, args: ["onpanstart",] }],
    panEndEventEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output, args: ["onpanend",] }],
    scrollEventEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output, args: ["onscrolling",] }]
};
AccountCardDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: "ux-account-card-detail",
        template: _C_Users_PATTERNS0004_Downloads_ngx_hide_on_scroll_bdccca_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ux_account_card_detail_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ux_account_card_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountCardDetailComponent);



/***/ }),

/***/ 882:
/*!**************************************************************!*\
  !*** ./src/app/ux-account-card/ux-account-card.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountCardComponent": function() { return /* binding */ AccountCardComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_PATTERNS0004_Downloads_ngx_hide_on_scroll_bdccca_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ux_account_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./ux-account-card.component.html */ 5695);
/* harmony import */ var _ux_account_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ux-account-card.component.scss */ 38);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let AccountCardComponent = class AccountCardComponent {
    constructor() {
        this.swipeLeftEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.swipeRightEventEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.panLeftEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.panRightEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.panStartEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.panEndEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngAfterViewInit() { }
    ngOnDestroy() { }
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
};
AccountCardComponent.ctorParameters = () => [];
AccountCardComponent.propDecorators = {
    card: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ["card",] }],
    cardIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ["cardIndex",] }],
    selectedCardIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ["selectedCardIndex",] }],
    customClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ["customClass",] }],
    swipeLeftEventEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output, args: ["onswipeleft",] }],
    swipeRightEventEventEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output, args: ["onswiperight",] }],
    panLeftEventEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output, args: ["onpanleft",] }],
    panRightEventEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output, args: ["onpanright",] }],
    panStartEventEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output, args: ["onpanstart",] }],
    panEndEventEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output, args: ["onpanend",] }]
};
AccountCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: "ux-account-card",
        template: _C_Users_PATTERNS0004_Downloads_ngx_hide_on_scroll_bdccca_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ux_account_card_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ux_account_card_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountCardComponent);



/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ 7435);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ 8256);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 1882);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ 6747);




(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__.AppModule).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
}).catch(err => console.error(err));


/***/ }),

/***/ 7435:
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js */ 7761);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/
// import 'core-js/es6/reflect';
// import 'core-js/es7/reflect';
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.


/***/ }),

/***/ 5158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page\">\n  <div class=\"header\">\n    <img class=\"logo\" src=\"../assets/images/icons/logo.svg\" />\n    <img class=\"profile-pic\" src=\"../assets/images/icons/profile-pic.svg\" />\n  </div>\n  <div class=\"dock-header\">\n    <img class=\"back-arrow\" src=\"../assets/images/icons/down-arrow.svg\" />\n    <img class=\"search\" src=\"../assets/images/icons/search.svg\" />\n  </div>\n  <div class=\"card-selector-container\" #cardSelectorContainer>\n    <div class=\"card-selector\" #cardSelector>\n      <div class=\"overview-tag\" (click)=\"playCarousel()\">\n        <div>Overview</div>\n      </div>\n      <ux-account-card *ngFor=\"let card of cards; index as cardIndex\" [card]=\"card\" [selectedCardIndex]=\"selectedCardIndex\" [cardIndex]=\"cardIndex\" (onswipeleft)=\"swipeLeftHandler($event, cardIndex)\" (onswiperight)=\"swipeRightHandler($event, cardIndex)\" (onpanleft)=\"panLeftHandler($event, cardIndex)\" (onpanright)=\"panRightHandler($event, cardIndex)\" (onpanstart)=\"panStartHandler($event, cardIndex)\" (onpanend)=\"panEndHandler($event, cardIndex)\"></ux-account-card>\n      <div class=\"new-account-tag\" (click)=\"reverseCarousel()\">\n        <img src=\"../assets/images/icons/shopping-bag.svg\" />\n        <div>New<br />Account</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-details-header\">\n    <div class=\"tab selected\">History</div>\n    <div class=\"tab\">Flex Pay</div>\n    <div class=\"tab\">Scheduled</div>\n  </div>\n  <div class=\"card-details-container\" #scrollable>\n    <div class=\"card-details\" #cardDetails>\n      <ux-account-card-detail *ngFor=\"let card of cards; index as cardIndex\" [card]=\"card\" [selectedCardIndex]=\"selectedCardIndex\" [cardIndex]=\"cardIndex\" (onscrolling)=\"scrollHandler($event)\"></ux-account-card-detail>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 5437:
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/ux-account-card-detail/ux-account-card-detail.component.html ***!
  \*********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-detail\" [ngClass]=\"{ 'active-card-detail': selectedCardIndex === cardIndex }\">\n  <div class=\"content\">\n    <div class=\"item\" *ngFor=\"let item of card.details; index as detailIndex\">\n      <div class=\"top\">\n        <div class=\"icon\">\n          <div>\n            <img [src]=\"'./assets/images/trxicons/' + item.iconImg\" alt=\"\" *ngIf=\"item.iconImg != ''\" />\n          </div>\n        </div>\n        <div class=\"details\">\n          <p class=\"txdate\">{{ item.date }}</p>\n          <p class=\"txmerchant\">{{ item.title }}</p>\n          <p class=\"txreference\">{{ item.description }}</p>\n        </div>\n      </div>\n      <div class=\"bottom\">\n        <div class=\"txtag\">{{ item.categoryTagType }}</div>\n        <div class=\"txamount\" [ngClass]=\"{ credit: item.debitCredit == 'C' }\">\n          <span *ngIf=\"item.debitCredit == 'D'\">-</span><span *ngIf=\"item.debitCredit == 'C'\">+</span>{{ formatAmount(item.transactionAmount) }}&nbsp;<span class=\"txcurrency\">{{ item.currency }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 5695:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/ux-account-card/ux-account-card.component.html ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div part=\"card\" class=\"card\" [ngClass]=\"{ 'active-card': selectedCardIndex === cardIndex, 'before-active-card': selectedCardIndex - 1 === cardIndex, 'after-active-card': selectedCardIndex + 1 === cardIndex }\" (swipeleft)=\"swipeLeftHandler($event)\" (swiperight)=\"swipeRightHandler($event)\" (panleft)=\"panLeftHandler($event)\" (panright)=\"panRightHandler($event)\" (panstart)=\"panStartHandler($event)\" (panend)=\"panEndHandler($event)\">\n  <div class=\"content\">\n  <p class=\"accountnumber\"><img src=\"../../assets/images/bank-brand.svg\" /><span>{{ card.accountNumber }}</span></p>\n  <p class=\"accountname\">{{ card.accountName }}</p>\n  <p class=\"balance\">\n    {{ card.balanceAmount }}&nbsp;<span>{{ card.balanceCurrency }}</span>\n  </p>\n  <p class=\"availablebalance\">\n    <span class=\"legend\">Available</span><span class=\"value\">{{ card.availableBalanceAmount }}&nbsp;{{ card.  availableBalanceCurrency }}</span>\n  </p>\n</div>\n</div>\n");

/***/ }),

/***/ 3040:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = ".page {\n  width: 100%;\n  overflow: hidden;\n  margin: auto;\n  background-color: #f4f7f5;\n  display: flex;\n  flex-direction: column;\n}\n.page .header {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  touch-action: none;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  background-color: transparent;\n  z-index: 99999;\n  opacity: 1;\n}\n.page .header img.logo {\n  position: absolute;\n  top: 6.013546798vh;\n  left: 6.4vw;\n  width: 32.544vw;\n  height: 2.8731527094vh;\n}\n.page .header img.profile-pic {\n  position: absolute;\n  top: 5.6650246305vh;\n  left: 86.1333333333vw;\n  width: 8.5333333333vw;\n  height: 3.9408866995vh;\n}\n.page .dock-header {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  touch-action: none;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  background-color: transparent;\n  z-index: 99999;\n  opacity: 0;\n}\n.page .dock-header img.back-arrow {\n  position: absolute;\n  top: 6.2807881773vh;\n  left: 8.9333333333vw;\n  width: 4.0666666667vw;\n  height: 0.9261083744vh;\n  transform: rotate(90deg);\n}\n.page .dock-header img.search {\n  position: absolute;\n  top: 6.2807881773vh;\n  left: 88.5333333333vw;\n  width: 4.664vw;\n  height: 2.1539408867vh;\n}\n.page .card-selector-container {\n  top: 0;\n  width: 100%;\n  position: fixed;\n  touch-action: none;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  background-color: #f4f7f5;\n  z-index: 99998;\n}\n.page .card-selector-container .card-selector {\n  overflow-x: hidden;\n  display: flex;\n  touch-action: none;\n  flex-direction: row;\n  padding-bottom: 5.4187192118vh;\n  padding-top: 14.7783251232vh;\n  align-items: flex-start;\n}\n.page .card-selector-container .card-selector .overview-tag {\n  height: 14.2857142857vh;\n  width: 9.3333333333vw;\n  margin: 0px;\n  margin-right: 5.3333333333vw;\n  background-color: #ffffff;\n  flex-shrink: 0;\n  border-radius: 0px 3.2vw 3.2vw 0px;\n  box-shadow: 0px 3px 25.6vw #00000029;\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n}\n.page .card-selector-container .card-selector .overview-tag div {\n  transform: translateY(6vh) rotate(270deg);\n  color: #656565;\n  text-align: center;\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: -0.12px;\n  line-height: 11px;\n  align-self: center;\n}\n.page .card-selector-container .card-selector .new-account-tag {\n  height: 16.5333333333vw;\n  width: 17.0666666667vw;\n  margin: 0px;\n  margin-left: 5.3333333333vw;\n  background-color: #00a10b;\n  flex-shrink: 0;\n  border-radius: 5.3333333333vw 0px 0px 5.3333333333vw;\n  box-shadow: 0px 3px 25.6vw #00000029;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.page .card-selector-container .card-selector .new-account-tag img {\n  width: 4.6213333333vw;\n  height: 2.4630541872vh;\n  margin-top: 1.2315270936vh;\n  margin-bottom: 0.4926108374vh;\n}\n.page .card-selector-container .card-selector .new-account-tag div {\n  color: #ffffff;\n  text-align: center;\n  font-size: 8px;\n  font-weight: 500;\n  letter-spacing: -0.08px;\n  line-height: 8px;\n  text-align: center;\n}\n.page .card-selector-container .card-selector::-webkit-scrollbar {\n  opacity: 0;\n  width: 0px;\n  height: 0px;\n}\n.page .card-details-container {\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  z-index: 99997;\n}\n.page .card-details-container .card-details {\n  position: relative;\n  flex: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n.page .card-details-container .card-details ux-account-card-detail {\n  width: 100%;\n  flex-shrink: 0;\n}\n.page .card-details-container::-webkit-scrollbar {\n  opacity: 0;\n  width: 0px;\n  height: 0px;\n}\n.page .card-details-header {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  padding-top: 40.763546798vh;\n  padding-bottom: 3.2019704433vh;\n}\n.page .card-details-header .tab {\n  flex-shrink: 1;\n  font-size: 17px;\n  font-weight: 500;\n  color: #8d8d8d;\n  line-height: 2.4630541872vh;\n  text-align: center;\n  padding-bottom: 6px;\n  margin-right: 2.6666666667vw;\n  margin-left: 2.6666666667vw;\n}\n.page .card-details-header .tab.selected {\n  font-weight: 800;\n  color: #000014;\n  height: 1px;\n  border-radius: 3px;\n  box-shadow: 0 5.8666666667vw 0 0 #00a10b;\n}\n.page .card-details-header .tab:first-child {\n  text-align: right;\n  margin-left: 0px;\n  margin-right: 2.6666666667vw;\n}\n.page .card-details-header .tab:last-child {\n  text-align: left;\n  margin-left: 2.6666666667vw;\n  margin-right: 0px;\n}\n.page .tabs {\n  height: 4.0640394089vh;\n  width: 100%;\n}\n.page::-webkit-scrollbar {\n  width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQWJGO0FBY0U7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQVpKO0FBYUk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQVhOO0FBYUk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBWE47QUFjRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBWko7QUFjSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQVpOO0FBY0k7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFaTjtBQWVFO0VBQ0UsTUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQWJKO0FBZUk7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0FBYk47QUFlTTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFiUjtBQWNRO0VBQ0UseUNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBeEdVO0VBeUdWLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVpWO0FBZU07RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0RBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBYlI7QUFjUTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FBWlY7QUFjUTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFuSVM7RUFvSVQsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBWlY7QUFpQkk7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFmTjtBQW1CRTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBakJKO0FBa0JJO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQWhCTjtBQWlCTTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBZlI7QUFvQkU7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFsQko7QUFvQkU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBbEJKO0FBbUJJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBakJOO0FBa0JNO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUFoQlI7QUFtQkk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFqQk47QUFtQkk7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUFqQk47QUFvQkU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUFsQko7QUFzQkE7RUFDRSxVQUFBO0FBbkJGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmdW5jdGlvbiB0b1Z3KCR2YWx1ZSkge1xuICBAcmV0dXJuICgkdmFsdWUgKiAxMDAvIDM3NSkgKyB2dztcbn1cblxuQGZ1bmN0aW9uIHRvVmgoJHZhbHVlKSB7XG4gIEByZXR1cm4gKCR2YWx1ZSAqIDEwMC8gODEyKSArIHZoO1xufVxuJGZvbnRXZWlnaHRMaWdodDogMzAwO1xuJGZvbnRXZWlnaHRSZWd1bGFyOiA0MDA7XG4kZm9udFdlaWdodE1lZGl1bTogNTAwO1xuJGZvbnRXZWlnaHRTZW1pQm9sZDogNjAwO1xuJGZvbnRXZWlnaHRCb2xkOiA3MDA7XG4kZm9udFdlaWdodEV4dHJhQm9sZDogODAwO1xuXG4ucGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY3ZjU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC5oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG91Y2gtYWN0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB6LWluZGV4OiA5OTk5OTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGltZy5sb2dvIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogdG9WaCg0OC44Myk7XG4gICAgICBsZWZ0OiB0b1Z3KDI0KTtcbiAgICAgIHdpZHRoOiB0b1Z3KDEyMi4wNCk7XG4gICAgICBoZWlnaHQ6IHRvVmgoMjMuMzMpO1xuICAgIH1cbiAgICBpbWcucHJvZmlsZS1waWMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiB0b1ZoKDQ2KTtcbiAgICAgIGxlZnQ6IHRvVncoMzIzKTtcbiAgICAgIHdpZHRoOiB0b1Z3KDMyKTtcbiAgICAgIGhlaWdodDogdG9WaCgzMik7XG4gICAgfVxuICB9XG4gIC5kb2NrLWhlYWRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHotaW5kZXg6IDk5OTk5O1xuICAgIG9wYWNpdHk6IDA7XG5cbiAgICBpbWcuYmFjay1hcnJvdyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IHRvVmgoNTEpO1xuICAgICAgbGVmdDogdG9WdygzMy41KTtcbiAgICAgIHdpZHRoOiB0b1Z3KDE1LjI1KTtcbiAgICAgIGhlaWdodDogdG9WaCg3LjUyKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB9XG4gICAgaW1nLnNlYXJjaCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IHRvVmgoNTEpO1xuICAgICAgbGVmdDogdG9WdygzMzIpO1xuICAgICAgd2lkdGg6IHRvVncoMTcuNDkpO1xuICAgICAgaGVpZ2h0OiB0b1ZoKDE3LjQ5KTtcbiAgICB9XG4gIH1cbiAgLmNhcmQtc2VsZWN0b3ItY29udGFpbmVyIHtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjdmNTtcbiAgICB6LWluZGV4OiA5OTk5ODtcblxuICAgIC5jYXJkLXNlbGVjdG9yIHtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgcGFkZGluZy1ib3R0b206IHRvVmgoNDQpO1xuICAgICAgcGFkZGluZy10b3A6IHRvVmgoMTIwKTtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgICAub3ZlcnZpZXctdGFnIHtcbiAgICAgICAgaGVpZ2h0OiB0b1ZoKDExNik7XG4gICAgICAgIHdpZHRoOiB0b1Z3KDM1KTtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogdG9WdygyMCk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggdG9WdygxMikgdG9WdygxMikgMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IHRvVncoOTYpICMwMDAwMDAyOTtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBkaXYge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2dmgpIHJvdGF0ZSgyNzBkZWcpO1xuICAgICAgICAgIGNvbG9yOiAjNjU2NTY1O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0UmVndWxhcjtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMTJweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTFweDtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5uZXctYWNjb3VudC10YWcge1xuICAgICAgICBoZWlnaHQ6IHRvVncoNjIpO1xuICAgICAgICB3aWR0aDogdG9Wdyg2NCk7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogdG9WdygyMCk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGExMGI7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB0b1Z3KDIwKSAwcHggMHB4IHRvVncoMjApO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IHRvVncoOTYpICMwMDAwMDAyOTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogdG9WdygxNy4zMyk7XG4gICAgICAgICAgaGVpZ2h0OiB0b1ZoKDIwKTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiB0b1ZoKDEwKTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiB0b1ZoKDQpO1xuICAgICAgICB9XG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodE1lZGl1bTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDhweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogOHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkLXNlbGVjdG9yOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgd2lkdGg6IDBweDtcbiAgICAgIGhlaWdodDogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5jYXJkLWRldGFpbHMtY29udGFpbmVyIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB6LWluZGV4OiA5OTk5NztcbiAgICAuY2FyZC1kZXRhaWxzIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGZsZXg6IDE7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgdXgtYWNjb3VudC1jYXJkLWRldGFpbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2FyZC1kZXRhaWxzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDBweDtcbiAgICBoZWlnaHQ6IDBweDtcbiAgfVxuICAuY2FyZC1kZXRhaWxzLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiB0b1ZoKDMzMSk7XG4gICAgcGFkZGluZy1ib3R0b206IHRvVmgoMjYpO1xuICAgIC50YWIge1xuICAgICAgZmxleC1zaHJpbms6IDE7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICM4ZDhkOGQ7XG4gICAgICBsaW5lLWhlaWdodDogdG9WaCgyMCk7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiB0b1Z3KDEwKTtcbiAgICAgIG1hcmdpbi1sZWZ0OiB0b1Z3KDEwKTtcbiAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBjb2xvcjogIzAwMDAxNDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCB0b1Z3KDIyKSAwIDAgIzAwYTEwYjtcbiAgICAgIH1cbiAgICB9XG4gICAgLnRhYjpmaXJzdC1jaGlsZCB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IHRvVncoMTApO1xuICAgIH1cbiAgICAudGFiOmxhc3QtY2hpbGQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIG1hcmdpbi1sZWZ0OiB0b1Z3KDEwKTtcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIH1cbiAgfVxuICAudGFicyB7XG4gICAgaGVpZ2h0OiB0b1ZoKDMzKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4ucGFnZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMHB4O1xufVxuIl19 */";

/***/ }),

/***/ 9948:
/*!******************************************************************************!*\
  !*** ./src/app/ux-account-card-detail/ux-account-card-detail.component.scss ***!
  \******************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".card-detail {\n  width: 100%;\n  flex-shrink: 0;\n}\n.card-detail .content .item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding-right: 6.4vw;\n  padding-bottom: 1.9704433498vh;\n  background-color: transparent;\n}\n.card-detail .content .item > div {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n.card-detail .content .item > div p {\n  margin: 0px;\n}\n.card-detail .content .item > div .icon {\n  margin-left: 6.4vw;\n  margin-right: 3.2vw;\n  margin-top: 0.4310344828vh;\n}\n.card-detail .content .item > div .icon div {\n  background-color: white;\n  width: 10.6666666667vw;\n  height: 4.9261083744vh;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 3px 7.7333333333vw #00000029;\n}\n.card-detail .content .item > div .icon div img {\n  width: inherit;\n}\n.card-detail .content .item > div .details .txdate {\n  counter-reset: #656565;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: -0.12px;\n  line-height: 17px;\n}\n.card-detail .content .item > div .details .txmerchant {\n  color: #140f26;\n  text-align: left;\n  font-size: 14px;\n  font-weight: 800;\n  letter-spacing: -0.14px;\n  line-height: 15px;\n}\n.card-detail .content .item > div .details .txreference {\n  color: #656565;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: -0.12px;\n  line-height: 15px;\n  padding-bottom: 1.2623152709vh;\n}\n.card-detail .content .item > div .details .txothers {\n  text-align: left;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: -0.12px;\n  line-height: 14px;\n}\n.card-detail .content .item > div.bottom {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.card-detail .content .item > div.bottom .txtag {\n  color: #6c7b8a;\n  text-align: left;\n  font-size: 9px;\n  font-weight: 500;\n  letter-spacing: -0.09px;\n  text-transform: uppercase;\n  border-radius: 5px;\n  box-shadow: 0px 3px 7.7333333333vw #00000029;\n  padding: 4.5px 5px 4.5px 6px;\n  margin-left: 20.2666666667vw;\n  background-color: #f4f7f5;\n}\n.card-detail .content .item > div.bottom .txamount {\n  flex-grow: 1;\n  display: flex;\n  justify-content: flex-end;\n  color: #656565;\n  text-align: left;\n  font-size: 16px;\n  font-weight: 800;\n  letter-spacing: -0.16px;\n  line-height: 11px;\n}\n.card-detail .content .item > div.bottom .txamount .txcurrency {\n  color: #656565;\n  font-weight: 400;\n}\n.card-detail .content .item > div.bottom .txamount.credit {\n  color: #00a10b;\n}\n.card-detail .content .item:last-child {\n  margin-bottom: 24.8768472906vh;\n}\n.card-detail::-webkit-scrollbar {\n  opacity: 0;\n  width: 0px;\n  height: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV4LWFjY291bnQtY2FyZC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQWJGO0FBZ0JJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtBQWROO0FBZU07RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBYlI7QUFjUTtFQUNFLFdBQUE7QUFaVjtBQWVRO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBYlY7QUFjVTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRDQUFBO0FBWlo7QUFhWTtFQUNFLGNBQUE7QUFYZDtBQWdCVTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBbERPO0VBbURQLHVCQUFBO0VBQ0EsaUJBQUE7QUFkWjtBQWdCVTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkF2RFU7RUF3RFYsdUJBQUE7RUFDQSxpQkFBQTtBQWRaO0FBZ0JVO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQWxFTztFQW1FUCx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFkWjtBQWdCVTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQTFFTztFQTJFUCx1QkFBQTtFQUNBLGlCQUFBO0FBZFo7QUFpQlE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQWZWO0FBZ0JVO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQXZGTztFQXdGUCx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQWRaO0FBZ0JVO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFwR1U7RUFxR1YsdUJBQUE7RUFDQSxpQkFBQTtBQWRaO0FBZVk7RUFDRSxjQUFBO0VBQ0EsZ0JBN0dNO0FBZ0dwQjtBQWVZO0VBQ0UsY0FBQTtBQWJkO0FBbUJJO0VBQ0UsOEJBQUE7QUFqQk47QUFxQkE7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFsQkYiLCJmaWxlIjoidXgtYWNjb3VudC1jYXJkLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmdW5jdGlvbiB0b1Z3KCR2YWx1ZSkge1xuICBAcmV0dXJuICgkdmFsdWUgKiAxMDAvIDM3NSkgKyB2dztcbn1cblxuQGZ1bmN0aW9uIHRvVmgoJHZhbHVlKSB7XG4gIEByZXR1cm4gKCR2YWx1ZSAqIDEwMC8gODEyKSArIHZoO1xufVxuJGZvbnRXZWlnaHRMaWdodDogMzAwO1xuJGZvbnRXZWlnaHRSZWd1bGFyOiA0MDA7XG4kZm9udFdlaWdodE1lZGl1bTogNTAwO1xuJGZvbnRXZWlnaHRTZW1pQm9sZDogNjAwO1xuJGZvbnRXZWlnaHRCb2xkOiA3MDA7XG4kZm9udFdlaWdodEV4dHJhQm9sZDogODAwO1xuXG4uY2FyZC1kZXRhaWwge1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgLmNvbnRlbnQge1xuICAgIC5pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IHRvVncoMjQpO1xuICAgICAgcGFkZGluZy1ib3R0b206IHRvVmgoMTYpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICA+IGRpdiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogdG9WdygyNCk7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiB0b1Z3KDEyKTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiB0b1ZoKDMuNSk7XG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgd2lkdGg6IHRvVncoNDApO1xuICAgICAgICAgICAgaGVpZ2h0OiB0b1ZoKDQwKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCB0b1Z3KDI5KSAjMDAwMDAwMjk7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmRldGFpbHMge1xuICAgICAgICAgIC50eGRhdGUge1xuICAgICAgICAgICAgY291bnRlci1yZXNldDogIzY1NjU2NTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHRNZWRpdW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMTJweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudHhtZXJjaGFudCB7XG4gICAgICAgICAgICBjb2xvcjogIzE0MGYyNjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHRFeHRyYUJvbGQ7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudHhyZWZlcmVuY2Uge1xuICAgICAgICAgICAgY29sb3I6ICM2NTY1NjU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0TWVkaXVtO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjEycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiB0b1ZoKDEwLjI1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnR4b3RoZXJzIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHRNZWRpdW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMTJweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmJvdHRvbSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgLnR4dGFnIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNmM3YjhhO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0TWVkaXVtO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA5cHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCB0b1Z3KDI5KSAjMDAwMDAwMjk7XG4gICAgICAgICAgICBwYWRkaW5nOiA0LjVweCA1cHggNC41cHggNnB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IHRvVncoNzYpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjdmNTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnR4YW1vdW50IHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgY29sb3I6ICM2NTY1NjU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0RXh0cmFCb2xkO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTFweDtcbiAgICAgICAgICAgIC50eGN1cnJlbmN5IHtcbiAgICAgICAgICAgICAgY29sb3I6ICM2NTY1NjU7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodFJlZ3VsYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmNyZWRpdCB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDBhMTBiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuaXRlbTpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IHRvVmgoMjAyKTtcbiAgICB9XG4gIH1cbn1cbi5jYXJkLWRldGFpbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 38:
/*!****************************************************************!*\
  !*** ./src/app/ux-account-card/ux-account-card.component.scss ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".card {\n  width: 57.0666666667vw;\n  background-color: #ffffff;\n  border-radius: 5.3333333333vw;\n  margin: 0px;\n  margin-right: 5.3333333333vw;\n  flex-shrink: 0;\n  box-shadow: 0px 3px 7.7333333333vw #00000029;\n  opacity: 1;\n  background-blend-mode: soft-light;\n  padding-left: 3.2vw;\n  padding-top: 1.8472906404vh;\n  padding-bottom: 1.6009852217vh;\n  display: flex;\n  flex-direction: column;\n}\n.card > div {\n  display: flex;\n  flex-direction: column;\n  transform: translateX(1.0666666667vw) translateY(0.5333333333vw);\n}\n.card.active-card {\n  width: 57.0666666667vw;\n  padding-left: 3.2vw;\n  padding-bottom: 2.2167487685vh;\n}\n.card.active-card > div {\n  transform: translateX(0);\n}\n.card p {\n  margin-bottom: 0;\n}\n.card p.accountnumber {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.card p.accountnumber img {\n  width: 6.4vw;\n  height: 2.8854679803vh;\n  margin-right: 2.6666666667vw;\n}\n.card p.accountnumber span {\n  font-weight: 400;\n  font-size: 10px;\n  letter-spacing: 0px;\n  text-align: left;\n  line-height: 7px;\n  color: #656565;\n}\n.card p.accountname {\n  margin-top: 1.4581280788vh;\n  color: #656565;\n  opacity: 1;\n  text-align: left;\n  font-size: 10px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  line-height: 11px;\n  overflow-wrap: break-word;\n  max-width: 45.6vw;\n}\n.card p.balance {\n  margin-top: 1.2315270936vh;\n  color: #0b0b0b;\n  opacity: 1;\n  text-align: left;\n  font-size: 14px;\n  font-weight: 700;\n  letter-spacing: 0px;\n  line-height: 18px;\n}\n.card p.balance span {\n  font-weight: 300;\n}\n.card p.availablebalance {\n  margin-top: -3.5517241379vh;\n  opacity: 0;\n}\n.card p.availablebalance span {\n  display: block;\n  color: #8d8d8d;\n  opacity: 1;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: -0.12px;\n  line-height: 14px;\n}\n.card.active-card p.accountnumber span {\n  color: #656565;\n  opacity: 1;\n  text-align: left;\n  font-size: 10px;\n  font-weight: 500;\n  letter-spacing: -0.1px;\n  line-height: 7px;\n}\n.card.active-card p.accountname {\n  color: #656565;\n  opacity: 1;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: -0.12px;\n  line-height: 13px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.card.active-card p.balance {\n  color: #0b0b0b;\n  opacity: 1;\n  text-align: left;\n  font-size: 17px;\n  font-weight: 800;\n  letter-spacing: -0.17px;\n  line-height: 20px;\n}\n.card.active-card p.balance span {\n  font-weight: 400;\n}\n.card.active-card p.availablebalance {\n  opacity: 1;\n  margin-top: 1.8275862069vh;\n}\n.card.active-card p.availablebalance span {\n  display: block;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: -0.12px;\n  line-height: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV4LWFjY291bnQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQWRGO0FBZUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnRUFBQTtBQWJKO0FBZUU7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFiSjtBQWNJO0VBQ0Usd0JBQUE7QUFaTjtBQWtCRTtFQUNFLGdCQUFBO0FBZko7QUFnQkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQWROO0FBZU07RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQWJSO0FBZU07RUFDRSxnQkFqRFk7RUFrRFosZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFiUjtBQW1CSTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFsRWM7RUFtRWQsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFqQk47QUFzQkk7RUFDRSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBOUVXO0VBK0VYLG1CQUFBO0VBQ0EsaUJBQUE7QUFwQk47QUFxQk07RUFDRSxnQkF0RlU7QUFtRWxCO0FBeUJJO0VBQ0UsMkJBQUE7RUFDQSxVQUFBO0FBdkJOO0FBd0JNO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBbkdXO0VBb0dYLHVCQUFBO0VBQ0EsaUJBQUE7QUF0QlI7QUFnQ1E7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQXBIUztFQXFIVCxzQkFBQTtFQUNBLGdCQUFBO0FBN0JWO0FBbUNNO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFqSVc7RUFrSVgsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWpDUjtBQXNDTTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBN0ljO0VBOElkLHVCQUFBO0VBQ0EsaUJBQUE7QUFwQ1I7QUFxQ1E7RUFDRSxnQkFySlU7QUFrSHBCO0FBeUNNO0VBQ0UsVUFBQTtFQUNBLDBCQUFBO0FBdkNSO0FBd0NRO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQWpLUztFQWtLVCx1QkFBQTtFQUNBLGlCQUFBO0FBdENWIiwiZmlsZSI6InV4LWFjY291bnQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmdW5jdGlvbiB0b1Z3KCR2YWx1ZSkge1xuICBAcmV0dXJuICgkdmFsdWUgKiAxMDAvIDM3NSkgKyB2dztcbn1cblxuQGZ1bmN0aW9uIHRvVmgoJHZhbHVlKSB7XG4gIEByZXR1cm4gKCR2YWx1ZSAqIDEwMC8gODEyKSArIHZoO1xufVxuXG4kZm9udFdlaWdodExpZ2h0OiAzMDA7XG4kZm9udFdlaWdodFJlZ3VsYXI6IDQwMDtcbiRmb250V2VpZ2h0TWVkaXVtOiA1MDA7XG4kZm9udFdlaWdodFNlbWlCb2xkOiA2MDA7XG4kZm9udFdlaWdodEJvbGQ6IDcwMDtcbiRmb250V2VpZ2h0RXh0cmFCb2xkOiA4MDA7XG5cbi5jYXJkIHtcbiAgd2lkdGg6IHRvVncoMjE0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogdG9WdygyMCk7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IHRvVncoMjApO1xuICBmbGV4LXNocmluazogMDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCB0b1Z3KDI5KSAjMDAwMDAwMjk7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc29mdC1saWdodDtcbiAgcGFkZGluZy1sZWZ0OiB0b1Z3KDEyKTtcbiAgcGFkZGluZy10b3A6IHRvVmgoMTUpO1xuICBwYWRkaW5nLWJvdHRvbTogdG9WaCgxMyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKHRvVncoNCkpIHRyYW5zbGF0ZVkodG9WdygyKSk7XG4gIH1cbiAgJi5hY3RpdmUtY2FyZCB7XG4gICAgd2lkdGg6IHRvVncoMjE0KTtcbiAgICBwYWRkaW5nLWxlZnQ6IHRvVncoMTIpO1xuICAgIHBhZGRpbmctYm90dG9tOiB0b1ZoKDE4KTtcbiAgICA+IGRpdiB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICB9XG59XG5cbi5jYXJkIHtcbiAgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAmLmFjY291bnRudW1iZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IHRvVncoMjQpO1xuICAgICAgICBoZWlnaHQ6IHRvVmgoMjMuNDMpO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IHRvVncoMTApO1xuICAgICAgfVxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodFJlZ3VsYXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDdweDtcbiAgICAgICAgY29sb3I6ICM2NTY1NjU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcCB7XG4gICAgJi5hY2NvdW50bmFtZSB7XG4gICAgICBtYXJnaW4tdG9wOiB0b1ZoKDExLjg0KTtcbiAgICAgIGNvbG9yOiAjNjU2NTY1O1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHRSZWd1bGFyO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgIG1heC13aWR0aDogdG9WdygxNzEpO1xuICAgIH1cbiAgfVxuXG4gIHAge1xuICAgICYuYmFsYW5jZSB7XG4gICAgICBtYXJnaW4tdG9wOiB0b1ZoKDEwKTtcbiAgICAgIGNvbG9yOiAjMGIwYjBiO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHRCb2xkO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodExpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHAge1xuICAgICYuYXZhaWxhYmxlYmFsYW5jZSB7XG4gICAgICBtYXJnaW4tdG9wOiB0b1ZoKC0yOC44NCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogIzhkOGQ4ZDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHRNZWRpdW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4xMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNhcmQge1xuICAmLmFjdGl2ZS1jYXJkIHtcbiAgICBwIHtcbiAgICAgICYuYWNjb3VudG51bWJlciB7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjNjU2NTY1O1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0TWVkaXVtO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4xcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDdweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHAge1xuICAgICAgJi5hY2NvdW50bmFtZSB7XG4gICAgICAgIGNvbG9yOiAjNjU2NTY1O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodE1lZGl1bTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICYuYmFsYW5jZSB7XG4gICAgICAgIGNvbG9yOiAjMGIwYjBiO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodEV4dHJhQm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHRSZWd1bGFyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAmLmF2YWlsYWJsZWJhbGFuY2Uge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBtYXJnaW4tdG9wOiB0b1ZoKDE0Ljg0KTtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0TWVkaXVtO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4xMnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 5179:
/*!**********************************************!*\
  !*** ./src/app/_files/accountstatement.json ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('[{"merchantCode":" ","transactionAmountFormat":"654","description":"Flex Pay Limit Utilization","transactionDateOfTransaction":"04-10-2021","valueDate":"04-10-2021","transactionCode":"FP","transactionId":"16","merchantId":"10104","narrationDetail":"Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"443","description":"Flex Pay Limit Utilization","transactionDateOfTransaction":"04-10-2021","valueDate":"04-10-2021","transactionCode":"FP","transactionId":"14","merchantId":"10105","narrationDetail":"Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"175","description":"SEPA credit to Lars AnderrsonRef: Ref 10101 38","transactionDateOfTransaction":"04-10-2021","valueDate":"04-10-2021","transactionCode":"OPAY","transactionId":"13","merchantId":" ","narrationDetail":"SEPA credit to Lars AnderrsonRef: Ref 10101 38","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"400","description":"REWE Groceries Purchase","transactionDateOfTransaction":"04-10-2021","valueDate":"04-10-2021","transactionCode":"ECOMM","transactionId":"12","merchantId":"10103","narrationDetail":"REWE Groceries Purchase","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"7500","description":"Account Funding Transfer","transactionDateOfTransaction":"04-10-2021","valueDate":"04-10-2021","transactionCode":"TC","transactionId":"11","merchantId":" ","narrationDetail":"Account Funding Transfer","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"254","description":"Westwing Furniture Purchase","transactionDateOfTransaction":"04-10-2021","valueDate":"04-10-2021","transactionCode":"ECOMM","transactionId":"10","merchantId":"10115","narrationDetail":"Westwing Furniture Purchase","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"654","description":"Lufthansa Travel Expenses","transactionDateOfTransaction":"04-10-2021","valueDate":"04-10-2021","transactionCode":"POS","transactionId":"4","merchantId":"10104","narrationDetail":"Lufthansa Travel Expenses","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"515","description":"REWE Groceries Purchase","transactionDateOfTransaction":"04-10-2021","valueDate":"04-10-2021","transactionCode":"POS","transactionId":"3","merchantId":"10103","narrationDetail":"REWE Groceries Purchase","flexPayEligibility":"Yes","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"443","description":"Zalando Fashion Purchases","transactionDateOfTransaction":"04-10-2021","valueDate":"04-10-2021","transactionCode":"POS","transactionId":"2","merchantId":"10105","narrationDetail":"Zalando Fashion Purchases","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"323","description":"Tiger Stories","transactionDateOfTransaction":"04-10-2021","valueDate":"04-10-2021","transactionCode":"POS","transactionId":"1","merchantId":"10112","narrationDetail":"Tiger Stories","flexPayEligibility":"Yes","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"5005","description":"Apple Store Purchase","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"POS","transactionId":"198","merchantId":"10102","narrationDetail":"Apple Store Purchase","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"505","description":"Apotheke Pharmacy Purchases","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"POS","transactionId":"196","merchantId":"10109","narrationDetail":"Apotheke Pharmacy Purchases","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"1200","description":"Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"191","merchantId":"10110","narrationDetail":"Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"1200","description":"H & M, Hamburg","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"185","merchantId":"10110","narrationDetail":"H & M, Hamburg","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"1200","description":"H & M, Hamburg","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"184","merchantId":"10110","narrationDetail":"H & M, Hamburg","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"1200","description":"H & M, Hamburg","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"183","merchantId":"10110","narrationDetail":"H & M, Hamburg","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"1200","description":"H & M, Hamburg","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"182","merchantId":"10110","narrationDetail":"H & M, Hamburg","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"1200","description":"H & M, Hamburg","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"181","merchantId":"10110","narrationDetail":"H & M, Hamburg","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"1200","description":"H & M, Hamburg","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"180","merchantId":"10110","narrationDetail":"H & M, Hamburg","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"1200","description":"H & M, Hamburg","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"179","merchantId":"10110","narrationDetail":"H & M, Hamburg","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"1200","description":"H & M, Hamburg","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"178","merchantId":"10110","narrationDetail":"H & M, Hamburg","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"1200","description":"H & M, Hamburg","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"177","merchantId":"10110","narrationDetail":"H & M, Hamburg","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"1655","description":"Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"176","merchantId":"10115","narrationDetail":"Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"707","description":"Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"175","merchantId":"10104","narrationDetail":"Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"707","description":"Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"174","merchantId":"10104","narrationDetail":"Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"1299","description":"Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"173","merchantId":"10102","narrationDetail":"Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"570","description":"Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"172","merchantId":"10102","narrationDetail":"Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"570","description":"Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"171","merchantId":"10115","narrationDetail":"Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"570","description":"0111012600659-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"146","merchantId":"10115","narrationDetail":"0111012600659-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"1431","description":"0111012600642-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"143","merchantId":"10104","narrationDetail":"0111012600642-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"350","description":"0111012600635-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"142","merchantId":"10110","narrationDetail":"0111012600635-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"350","description":"0111012600628-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"141","merchantId":"10110","narrationDetail":"0111012600628-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"350","description":"0111012600611-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"140","merchantId":"10110","narrationDetail":"0111012600611-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"570","description":"0111012600604-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"139","merchantId":"10102","narrationDetail":"0111012600604-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"350","description":"0111012600594-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"138","merchantId":"10110","narrationDetail":"0111012600594-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"757","description":"0111012600587-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"137","merchantId":"10110","narrationDetail":"0111012600587-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"570","description":"0111012600570-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"136","merchantId":"10115","narrationDetail":"0111012600570-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"1299","description":"0111012600563-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"135","merchantId":"10102","narrationDetail":"0111012600563-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"443","description":"0111012600556-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"133","merchantId":"10106","narrationDetail":"0111012600556-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"350","description":"H & M, Hamburg","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"132","merchantId":"10110","narrationDetail":"H & M, Hamburg","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"350","description":"H & M, Hamburg","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"131","merchantId":"10110","narrationDetail":"H & M, Hamburg","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"350","description":"H & M, Hamburg","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"130","merchantId":"10110","narrationDetail":"H & M, Hamburg","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"757","description":"0111012600549-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"129","merchantId":" ","narrationDetail":"0111012600549-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"350","description":"H & M, Hamburg","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"128","merchantId":"10110","narrationDetail":"H & M, Hamburg","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"350","description":"H & M, Hamburg","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"127","merchantId":"10110","narrationDetail":"H & M, Hamburg","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"570","description":"0111012600532-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"126","merchantId":" ","narrationDetail":"0111012600532-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"757","description":"H & M, Hamburg","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"125","merchantId":"10110","narrationDetail":"H & M, Hamburg","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"757","description":"H & M, Hamburg","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"124","merchantId":"10110","narrationDetail":"H & M, Hamburg","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"570","description":"West Wing Furniture, Mainz","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"123","merchantId":"10115","narrationDetail":"West Wing Furniture, Mainz","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"570","description":"West Wing Furniture, Mainz","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"122","merchantId":"10115","narrationDetail":"West Wing Furniture, Mainz","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"570","description":"West Wing Furniture, Mainz","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"121","merchantId":"10115","narrationDetail":"West Wing Furniture, Mainz","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"570","description":"West Wing Furniture, Mainz","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"120","merchantId":"10115","narrationDetail":"West Wing Furniture, Mainz","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"570","description":"Apple Store, Frankfurt","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"119","merchantId":"10102","narrationDetail":"Apple Store, Frankfurt","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"570","description":"Apple Store, Frankfurt","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"118","merchantId":"10102","narrationDetail":"Apple Store, Frankfurt","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"707","description":"0111012600525-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"117","merchantId":" ","narrationDetail":"0111012600525-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"1299","description":"0111012600518-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"116","merchantId":" ","narrationDetail":"0111012600518-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"707","description":"0111012600491-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"105","merchantId":" ","narrationDetail":"0111012600491-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"1299","description":"0111012600484-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"103","merchantId":" ","narrationDetail":"0111012600484-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"1299","description":"Apple Store, Frankfurt","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"99","merchantId":"10102","narrationDetail":"Apple Store, Frankfurt","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"1299","description":"Apple Store, Frankfurt","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"98","merchantId":"10102","narrationDetail":"Apple Store, Frankfurt","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"1299","description":"Apple Store, Frankfurt","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"97","merchantId":"10102","narrationDetail":"Apple Store, Frankfurt","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"1299","description":"Apple Store, Frankfurt","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"96","merchantId":"10102","narrationDetail":"Apple Store, Frankfurt","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"707","description":"Travel Desk - Lufthansa","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"95","merchantId":"10104","narrationDetail":"Travel Desk - Lufthansa","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"707","description":"Travel Desk - Lufthansa","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"94","merchantId":"10104","narrationDetail":"Travel Desk - Lufthansa","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"707","description":"Travel Desk - Lufthansa","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"93","merchantId":"10104","narrationDetail":"Travel Desk - Lufthansa","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"707","description":"Travel Desk - Lufthansa","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"92","merchantId":"10104","narrationDetail":"Travel Desk - Lufthansa","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"707","description":"Travel Desk - Lufthansa","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"91","merchantId":"10104","narrationDetail":"Travel Desk - Lufthansa","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"707","description":"Travel Desk - Lufthansa","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"90","merchantId":"10104","narrationDetail":"Travel Desk - Lufthansa","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"707","description":"Travel Desk - Lufthansa","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"89","merchantId":"10104","narrationDetail":"Travel Desk - Lufthansa","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"308","description":"0111012600477-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"84","merchantId":" ","narrationDetail":"0111012600477-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"308","description":"Travel Desk - Lufthansa","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"83","merchantId":"10104","narrationDetail":"Travel Desk - Lufthansa","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"7500","description":"Internal Transfer","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"TC","transactionId":"82","merchantId":" ","narrationDetail":"Internal Transfer","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"1431","description":"Travel Desk - Lufthansa","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"81","merchantId":"10104","narrationDetail":"Travel Desk - Lufthansa","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"1019","description":"H & M, Berlin Store","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"80","merchantId":"10110","narrationDetail":"H & M, Berlin Store","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"770","description":"Media Market","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"79","merchantId":"10101","narrationDetail":"Media Market","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"5000","description":"Salary Posting","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"SP","transactionId":"78","merchantId":" ","narrationDetail":"Salary Posting","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"1655","description":"Westwing Furniture","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"77","merchantId":"10115","narrationDetail":"Westwing Furniture","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"1655","description":"Westwing Furniture","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"76","merchantId":"10115","narrationDetail":"Westwing Furniture","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"650","description":"0111012600460-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"75","merchantId":" ","narrationDetail":"0111012600460-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"1655","description":"0111012600446-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"65","merchantId":" ","narrationDetail":"0111012600446-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"790","description":"0111012600439-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"62","merchantId":" ","narrationDetail":"0111012600439-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"1655","description":"Westwing Furniture","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"60","merchantId":"10115","narrationDetail":"Westwing Furniture","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"1299","description":"Apple Store","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"59","merchantId":"10102","narrationDetail":"Apple Store","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"790","description":"Media Market","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"58","merchantId":"10101","narrationDetail":"Media Market","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"650","description":"Amazon DE","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"ECOMM","transactionId":"57","merchantId":"10106","narrationDetail":"Amazon DE","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"1","description":"Flex Payment","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FR","transactionId":"56","merchantId":"10101","narrationDetail":"Flex Payment","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"1","description":"Flex Payment","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FR","transactionId":"55","merchantId":"10101","narrationDetail":"Flex Payment","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"206.33","description":"Flex Payment 2/6","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FR","transactionId":"54","merchantId":"10101","narrationDetail":"Flex Payment 2/6","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"206.33","description":"Flex Payment 1/6","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FR","transactionId":"53","merchantId":"10101","narrationDetail":"Flex Payment 1/6","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"255","description":"Flex Payment 2/3","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FR","transactionId":"52","merchantId":"10101","narrationDetail":"Flex Payment 2/3","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"255","description":"Flex Payment 1/3","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FR","transactionId":"51","merchantId":"10101","narrationDetail":"Flex Payment 1/3","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"183.33","description":"Flex Payment 3/3","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FR","transactionId":"50","merchantId":"10101","narrationDetail":"Flex Payment 3/3","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"183.33","description":"Flex Payment 2/3","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FR","transactionId":"49","merchantId":"10101","narrationDetail":"Flex Payment 2/3","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"183.33","description":"Flex Payment 1/3","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FR","transactionId":"48","merchantId":"10101","narrationDetail":"Flex Payment 1/3","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"183.33","description":"Flex Payment 3/3","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FR","transactionId":"47","merchantId":"10101","narrationDetail":"Flex Payment 3/3","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"183.33","description":"Flex Payment 2/3","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FR","transactionId":"46","merchantId":"10101","narrationDetail":"Flex Payment 2/3","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"183.33","description":"Flex Payment 1/3","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FR","transactionId":"45","merchantId":"10101","narrationDetail":"Flex Payment 1/3","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"117.17","description":"Flex Payment 6/6","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FR","transactionId":"44","merchantId":"10101","narrationDetail":"Flex Payment 6/6","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"117.17","description":"Flex Payment 5/6","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FR","transactionId":"43","merchantId":"10101","narrationDetail":"Flex Payment 5/6","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"117.17","description":"Flex Payment 4/6","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FR","transactionId":"42","merchantId":"10101","narrationDetail":"Flex Payment 4/6","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"117.17","description":"Flex Payment 3/6","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FR","transactionId":"41","merchantId":"10101","narrationDetail":"Flex Payment 3/6","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"117.17","description":"Flex Payment 2/6","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FR","transactionId":"40","merchantId":"10101","narrationDetail":"Flex Payment 2/6","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"117.17","description":"Flex Payment 1/6","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FR","transactionId":"39","merchantId":"10101","narrationDetail":"Flex Payment 1/6","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"528","description":"0111012600415-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"38","merchantId":" ","narrationDetail":"0111012600415-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"462","description":"0111012600408-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"37","merchantId":" ","narrationDetail":"0111012600408-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"550","description":"0111012600398-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"36","merchantId":" ","narrationDetail":"0111012600398-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"1232","description":"0111012600381-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"35","merchantId":" ","narrationDetail":"0111012600381-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"765","description":"0111012600374-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"34","merchantId":" ","narrationDetail":"0111012600374-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"550","description":"0111012600367-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"33","merchantId":" ","narrationDetail":"0111012600367-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"697","description":"0111012600350-Flex Pay Limit Utilization","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"FP","transactionId":"32","merchantId":" ","narrationDetail":"0111012600350-Flex Pay Limit Utilization","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":"2","transactionAmountFormat":"600","description":"Amazon Purchase","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"TD","transactionId":"31","merchantId":"10106","narrationDetail":"Amazon Purchase","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"},{"merchantCode":" ","transactionAmountFormat":"5000","description":"Initial Deposit Transfer","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"TC","transactionId":"29","merchantId":" ","narrationDetail":"Initial Deposit Transfer","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"1656","description":"SEPA Credit toStefanie Maria-GrafPayer information","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"IPAY","transactionId":"102","merchantId":" ","narrationDetail":"SEPA Credit toStefanie Maria-GrafPayer information","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"C"},{"merchantCode":" ","transactionAmountFormat":"550","description":"SEPA credit to SebastianRef: Ref10101","transactionDateOfTransaction":"15-09-2021","valueDate":"15-09-2021","transactionCode":"OPAY","transactionId":"30","merchantId":" ","narrationDetail":"SEPA credit to SebastianRef: Ref10101","flexPayEligibility":"No","transactionCurrencyCode":"EUR","runningBalance":"0","debitCredit":"D"}]');

/***/ }),

/***/ 8976:
/*!********************************************!*\
  !*** ./src/app/_files/merchantdetail.json ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('[{"merchantId":"10101","icon":"Media Market.svg","category":"Electronics","merchantName":"Media Market"},{"merchantId":"10102","icon":"Apple Store - Frankfurt.svg","category":"Electronics","merchantName":"Apple Store - Frankfurt"},{"merchantId":"10103","icon":"REWE.svg","category":"Groceries ","merchantName":"REWE"},{"merchantId":"10104","icon":"LUFTHANSA.svg","category":"Travel Expenses","merchantName":"LUFTHANSA "},{"merchantId":"10105","icon":"ZALANDO.svg","category":"Fashion","merchantName":"ZALANDO "},{"merchantId":"10106","icon":"Amazon.svg","category":"Shopping","merchantName":"AMAZON.DE"},{"merchantId":"10107","icon":"STARBUCKS.svg","category":"Restaurants","merchantName":"STARBUCKS"},{"merchantId":"10109","icon":"APOTHEKE.svg","category":"Pharmacy & Healthcare ","merchantName":"APOTHEKE "},{"merchantId":"10110","icon":"H&H.svg","category":"Fashion","merchantName":"H&M"},{"merchantId":"10111","icon":"MJAM.svg","category":"Groceries ","merchantName":"MJAM "},{"merchantId":"10112","icon":"TIGER STORIES.svg","category":"Leisure & Hobbies ","merchantName":"TIGER STORIES"},{"merchantId":"10113","icon":"L\'OCCITANE EN PROVENCE.svg","category":"Cosmetics ","merchantName":"L\'OCCITANE EN PROVENCE"},{"merchantId":"10114","icon":"LIEFERANDO.DE.svg","category":"Restaurant & Cafe","merchantName":"LIEFERANDO.DE"},{"merchantId":"10115","icon":"WESTWING FURN.svg","category":"Home & Decoration","merchantName":"WESTWING FURNITURE"},{"merchantId":"10116","icon":"","category":"Taxi","merchantName":"UBER"},{"merchantId":"10117","icon":"mcdonald.svg\\n","category":"Restaurants","merchantName":"McDonalds"}]');

/***/ }),

/***/ 5103:
/*!***************************************************!*\
  !*** ./src/app/_files/transactioncodedetail.json ***!
  \***************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('[{"transactioncodeDescription":"SEPA Payment - Credit","icon":"","transactionCode":"SC","category":"Salary"},{"transactioncodeDescription":"FlexPay Payment","icon":"","transactionCode":"FT","category":"FlexPay"},{"transactioncodeDescription":"Own Account Transfer","icon":"","transactionCode":"OT","category":"Own Account "},{"transactioncodeDescription":"SEPA Inward","icon":"","transactionCode":"IPAY","category":"FlexPay"},{"transactioncodeDescription":"SEPA Outward","icon":"","transactionCode":"OPAY","category":"FlexPay"},{"transactioncodeDescription":"Transfer Credit","icon":"","transactionCode":"TC","category":"Own Account "},{"transactioncodeDescription":"Salary Payment","icon":"","transactionCode":"SP","category":"Salary"},{"transactioncodeDescription":"FlexPay Repayment","icon":"","transactionCode":"FR","category":"Financing"},{"transactioncodeDescription":"FlexPay Utilization","icon":"","transactionCode":"FP","category":"Refund"},{"transactioncodeDescription":"Card Payment","icon":"","transactionCode":"CP","category":"Credit Card "},{"transactioncodeDescription":"SEPA Payment - Energy","icon":"","transactionCode":"SE","category":"Energy"},{"transactioncodeDescription":"SEPA Payment - Insurance","icon":"","transactionCode":"SI","category":"Insurance"},{"transactioncodeDescription":"SEPA Payment - Rent","icon":"","transactionCode":"SR","category":"Rent"},{"transactioncodeDescription":"Transfer Debit","icon":"","transactionCode":"TD","category":"Own Account "}]');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map