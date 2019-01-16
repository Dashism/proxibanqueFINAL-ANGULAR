(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"background\">\r\n    <app-survey-comp *ngIf=\"isSurvey; else elseFromTpl\">\r\n        \r\n    </app-survey-comp>\r\n    <ng-template #elseFromTpl>\r\n        <app-quotation></app-quotation>\r\n    </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./survey.service */ "./src/app/survey.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(service) {
        this.service = service;
        this.title = 'proxibanqueFINAL-angular';
        this.isSurvey = false;
    }
    // Définit si un sondage est en cours ou non, et envoie vers la page correspondante.
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.check().subscribe(function (survey) {
            if (survey != null) {
                _this.isSurvey = true;
            }
            else {
                _this.isSurvey = false;
            }
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
        // Classe principale de l'application Angular définit sur la balise <app-root>
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _survey_comp_survey_comp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./survey-comp/survey-comp.component */ "./src/app/survey-comp/survey-comp.component.ts");
/* harmony import */ var _quotation_quotation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quotation/quotation.component */ "./src/app/quotation/quotation.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _survey_comp_survey_comp_component__WEBPACK_IMPORTED_MODULE_6__["SurveyCompComponent"],
                _quotation_quotation_component__WEBPACK_IMPORTED_MODULE_7__["QuotationComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/client.ts":
/*!***************************!*\
  !*** ./src/app/client.ts ***!
  \***************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
// Définition des attributs liés à un client.
var Client = /** @class */ (function () {
    function Client(serialNumber, firstname, lastname, phone, email, id) {
        this.serialNumber = serialNumber;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.id = id;
    }
    return Client;
}());



/***/ }),

/***/ "./src/app/opinion.ts":
/*!****************************!*\
  !*** ./src/app/opinion.ts ***!
  \****************************/
/*! exports provided: Opinion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Opinion", function() { return Opinion; });
// Définition des attributs liés à une opinion d'un Sondage.
var Opinion = /** @class */ (function () {
    function Opinion(commentary, isThumbs, survey, client) {
        this.commentary = commentary;
        this.isThumbs = isThumbs;
        this.survey = survey;
        this.client = client;
    }
    return Opinion;
}());



/***/ }),

/***/ "./src/app/quotation/quotation.component.css":
/*!***************************************************!*\
  !*** ./src/app/quotation/quotation.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h2 {\r\n    font-family: 'Staatliches', cursive;\r\n    font-weight: 700;\r\n    color: #FE654F;\r\n    text-align: center;\r\n}\r\n\r\nh1 {\r\n    margin-top: 100px;\r\n}\r\n\r\nbutton:hover {\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n    transition: 1s;\r\n}\r\n\r\nbutton {\r\n    margin-left: 70%;\r\n    padding-left: 1%;\r\n    margin-bottom: 2%;\r\n    padding-right: 1%;\r\n    transition: 1s;\r\n}\r\n\r\nbutton.btn-secondary {\r\n    margin-top: 300px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGF0aW9uL3F1b3RhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxrQkFBa0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9xdW90YXRpb24vcXVvdGF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSwgaDIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTdGFhdGxpY2hlcycsIGN1cnNpdmU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICNGRTY1NEY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMSU7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxufVxyXG5cclxuYnV0dG9uLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgbWFyZ2luLXRvcDogMzAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/quotation/quotation.component.html":
/*!****************************************************!*\
  !*** ./src/app/quotation/quotation.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head\"></div>\r\n<div>\r\n    <h1>Obtenir un devis d'assurance Automobile</h1>\r\n    <h2>Simple - Rapide - Gratuit</h2>\r\n    <button onmouseover=\"this.innerHTML='Tel: 01-24-88-54-02';\" onmouseout=\"this.innerHTML='Telephone';\" class=\"btn btn-secondary\">Telephone</button>\r\n    <br/>\r\n    <button  onmouseover=\"this.innerHTML='proxibanque_support@proxi.com';\" onmouseout=\"this.innerHTML='Mail';\" class=\"btn btn-primary\">Par Mail</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/quotation/quotation.component.ts":
/*!**************************************************!*\
  !*** ./src/app/quotation/quotation.component.ts ***!
  \**************************************************/
/*! exports provided: QuotationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationComponent", function() { return QuotationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuotationComponent = /** @class */ (function () {
    function QuotationComponent() {
    }
    QuotationComponent.prototype.ngOnInit = function () {
    };
    QuotationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quotation',
            template: __webpack_require__(/*! ./quotation.component.html */ "./src/app/quotation/quotation.component.html"),
            styles: [__webpack_require__(/*! ./quotation.component.css */ "./src/app/quotation/quotation.component.css")]
        })
        // Composant mettant en oeuvre l'affichage d'une page s'il n'y a pas de sondage en cours.
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuotationComponent);
    return QuotationComponent;
}());



/***/ }),

/***/ "./src/app/survey-comp/survey-comp.component.css":
/*!*******************************************************!*\
  !*** ./src/app/survey-comp/survey-comp.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font-family: 'Staatliches', cursive;\r\n    font-weight: 700;\r\n    color: #FE654F;\r\n    text-align: center;\r\n    margin: 10%;\r\n}\r\n\r\ndiv.presentation2 {\r\n\ttext-align: center;\r\n\twidth: 300px;\r\n\tmargin: auto;\r\n}\r\n\r\nimg {\r\n    width: 300px;\r\n    padding: 0px 0px;\r\n    transition: .5s;\r\n\r\n}\r\n\r\nimg:hover {\r\n    -webkit-transform: scale(1.3);\r\n    transform: scale(1.3);\r\n}\r\n\r\nimg.img2 {\r\n    margin-left: 100px;\r\n}\r\n\r\ndiv.image {\r\n    width: 700px;\r\n    margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5LWNvbXAvc3VydmV5LWNvbXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0NBQ2Y7O0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLGFBQWE7Q0FDYjs7QUFFRDtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCOztDQUVuQjs7QUFFRDtJQUNJLDhCQUE4QjtJQUM5QixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS1jb21wL3N1cnZleS1jb21wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBmb250LWZhbWlseTogJ1N0YWF0bGljaGVzJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogI0ZFNjU0RjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTAlO1xyXG59XHJcblxyXG5kaXYucHJlc2VudGF0aW9uMiB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHdpZHRoOiAzMDBweDtcclxuXHRtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG5cclxufVxyXG5cclxuaW1nOmhvdmVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG59XHJcblxyXG5pbWcuaW1nMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbn1cclxuXHJcbmRpdi5pbWFnZSB7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/survey-comp/survey-comp.component.html":
/*!********************************************************!*\
  !*** ./src/app/survey-comp/survey-comp.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Voudriez-vous adhérer à un service d’assurance automobile Proxibanque?</h1>\r\n<div [ngSwitch]=\"switchExpression\">\r\n\r\n  <div class=\"image\" *ngSwitchCase=\"0\">\r\n    <label for=\"img\">\r\n      <img class=\"img1\" src=\"./assets/thumbs_up.png\" id=\"img\" (click)=\"thumbsUp()\">\r\n    </label>\r\n    <label for=\"img\">\r\n      <img class=\"img2\" src=\"./assets/thumbs_down.png\" id=\"img2\" (click)=\"thumbsDown()\">\r\n    </label>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n  <div *ngSwitchCase=\"1\">\r\n    <div class=\"presentation2\">\r\n      <div *ngIf=\"!isOk\">\r\n        <form (ngSubmit)=\"validatePos(clientForm)\" #clientForm=\"ngForm\">\r\n          <div class=\"form-group\">\r\n            <label for=\"serialNumber\">Entrez votre numéro d'identifiant, si vous possédez un compte ProxiBanque.\r\n            </label>\r\n            <br>\r\n            <input [(ngModel)]=\"client.serialNumber\" id=\"serialNumber\" name=\"serialNumber\" class=\"form-control\">\r\n            <br>\r\n            <button class=\"btn btn-success\"> Valider </button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div *ngIf=\"isOk\">\r\n        <div *ngIf=\"verif ; else elseFromTpl\">\r\n          <h4>Vous serez contacté(e) dans un délai de {{ calculJours }} jours\r\n            par un de nos conseillers expert en assurance auto.</h4>\r\n        </div>\r\n        <ng-template #elseFromTpl>\r\n          <h2>\r\n            Merci d'avoir participé à ce sondage, n'hésitez pas à venir nous voir.\r\n          </h2>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngSwitchCase=\"2\" class=\"presentation2\">\r\n    <div *ngIf=\"!isOk\" class=\"presentation2\">\r\n      <form (ngSubmit)=\"validateNeg(opinionForm)\" #opinionForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"commentary\">Entrez votre commentaire :</label>\r\n          <br>\r\n          <input [(ngModel)]=\"opinion.commentary\" id=\"commentary\" name=\"commentary\" class=\"form-control\">\r\n\r\n          <br>\r\n          <button class=\"btn btn-success\"> Valider </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n      <div *ngIf=\"isOk\">\r\n        <h4>Merci d'avoir participer au sondage.</h4>\r\n      </div>\r\n    \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/survey-comp/survey-comp.component.ts":
/*!******************************************************!*\
  !*** ./src/app/survey-comp/survey-comp.component.ts ***!
  \******************************************************/
/*! exports provided: SurveyCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyCompComponent", function() { return SurveyCompComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _opinion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../opinion */ "./src/app/opinion.ts");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../client */ "./src/app/client.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _survey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../survey */ "./src/app/survey.ts");
/* harmony import */ var _survey_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../survey.service */ "./src/app/survey.service.ts");







var SurveyCompComponent = /** @class */ (function () {
    function SurveyCompComponent(service) {
        this.service = service;
        this.wsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/survey';
        this.serialNumber = 'A';
        this.switchExpression = 0;
        this.client = new _client__WEBPACK_IMPORTED_MODULE_2__["Client"](undefined, undefined, undefined, undefined, undefined, undefined);
        this.opinion = new _opinion__WEBPACK_IMPORTED_MODULE_1__["Opinion"](undefined, undefined, undefined);
        this.survey = new _survey__WEBPACK_IMPORTED_MODULE_5__["Survey"](undefined, undefined, undefined, undefined);
        this.isOk = false;
        this.calculJours = 0;
        this.verif = true;
    }
    // Récupèration du sondage en cours avec la méthode getSurvey() du service.
    SurveyCompComponent.prototype.ngOnInit = function () {
        this.survey = this.service.getSurvey();
        // this.calculJours = this.getDays();
    };
    // Changements d'affichage dynamique en fonction du choix de l'utilisateur (évènement clique)
    SurveyCompComponent.prototype.indexReturn = function () {
        this.switchExpression = 0;
    };
    // Changements d'affichage dynamique en fonction du choix de l'utilisateur (évènement clique)
    SurveyCompComponent.prototype.thumbsUp = function () {
        this.switchExpression = 1;
        this.opinion.isThumbs = '1';
    };
    // Changements d'affichage dynamique en fonction du choix de l'utilisateur (évènement clique)
    SurveyCompComponent.prototype.thumbsDown = function () {
        this.switchExpression = 2;
        this.opinion.isThumbs = '0';
    };
    // Envoies des données utilisateurs(commentaire) dans la BDD grâce à la fonction subscribe().
    SurveyCompComponent.prototype.validateNeg = function (myForm) {
        var _this = this;
        this.opinion.survey = this.survey;
        this.service.create(this.opinion).subscribe(function () {
            console.log('Avis négatif, crée avec succès dans BDD !');
            _this.isOk = true;
        });
        myForm.resetForm(new _opinion__WEBPACK_IMPORTED_MODULE_1__["Opinion"](null, null, null));
    };
    // Vérification des données utilisateurs(serialNumber) dans la BDD et ajout
    SurveyCompComponent.prototype.validatePos = function (myForm) {
        var _this = this;
        this.opinion.survey = this.survey;
        this.service.checkClient(this.client.serialNumber).subscribe(function (client) {
            if (client) {
                _this.opinion.client = client;
                _this.service.create(_this.opinion).subscribe(function () {
                    console.log('Avis positif du client enregistré créé avec succès sur BDD !');
                    _this.isOk = true;
                });
                _this.getDays();
            }
            else {
                _this.verif = false;
                _this.service.create(_this.opinion).subscribe(function () {
                    console.log('Avis positif client non enregistré créé avec succès sur BDD !');
                    _this.isOk = true;
                });
            }
            myForm.resetForm(new _opinion__WEBPACK_IMPORTED_MODULE_1__["Opinion"](null, null, null));
        });
    };
    // Calcule des jours restant avant la fin du sondage en cours.
    SurveyCompComponent.prototype.getDays = function () {
        var newDate = new Date(this.survey.supposedFinishDate[0], this.survey.supposedFinishDate[1] - 1, this.survey.supposedFinishDate[2]);
        console.log(Date.now());
        console.log(newDate.getTime());
        console.log(this.survey.supposedFinishDate);
        var reste = newDate.getTime() - Date.now();
        this.calculJours = Math.ceil(reste / (1000 * 60 * 60 * 24));
    };
    SurveyCompComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-survey-comp',
            template: __webpack_require__(/*! ./survey-comp.component.html */ "./src/app/survey-comp/survey-comp.component.html"),
            styles: [__webpack_require__(/*! ./survey-comp.component.css */ "./src/app/survey-comp/survey-comp.component.css")]
        })
        // Composant mettant en oeuvre l'affichage d'une page s'il y a un sondage en cours.
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_survey_service__WEBPACK_IMPORTED_MODULE_6__["SurveyService"]])
    ], SurveyCompComponent);
    return SurveyCompComponent;
}());



/***/ }),

/***/ "./src/app/survey.service.ts":
/*!***********************************!*\
  !*** ./src/app/survey.service.ts ***!
  \***********************************/
/*! exports provided: SurveyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyService", function() { return SurveyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _opinion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./opinion */ "./src/app/opinion.ts");






var SurveyService = /** @class */ (function () {
    function SurveyService(httpClient) {
        this.httpClient = httpClient;
        this.wsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/survey';
        this.opUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/opinion';
        this.clUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/client';
    }
    SurveyService.prototype.check = function () {
        var _this = this;
        return this.httpClient.get(this.wsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (survey) { return _this.survey = survey; }));
    };
    SurveyService.prototype.getSurvey = function () {
        return this.survey;
    };
    SurveyService.prototype.create = function (opinion) {
        var newOpinion = new _opinion__WEBPACK_IMPORTED_MODULE_5__["Opinion"](opinion.commentary, opinion.isThumbs, opinion.survey, opinion.client);
        return this.httpClient.post(this.opUrl, newOpinion);
    };
    SurveyService.prototype.checkClient = function (serialNumber) {
        return this.httpClient.get(this.clUrl + ("/" + serialNumber));
    };
    SurveyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SurveyService);
    return SurveyService;
}());



/***/ }),

/***/ "./src/app/survey.ts":
/*!***************************!*\
  !*** ./src/app/survey.ts ***!
  \***************************/
/*! exports provided: Survey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Survey", function() { return Survey; });
var Survey = /** @class */ (function () {
    function Survey(beginDate, supposedFinishDate, endDate, id) {
        this.beginDate = beginDate;
        this.supposedFinishDate = supposedFinishDate;
        this.endDate = endDate;
        this.id = id;
    }
    return Survey;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:8080/proxibanqueV4_Benoit_Bixente_Omar/webservices'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! S:\workspaces\proxibanqueFINAL-ANGULAR\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map