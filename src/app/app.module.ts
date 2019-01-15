import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SurveyCompComponent } from './survey-comp/survey-comp.component';
import { QuotationComponent } from './quotation/quotation.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyCompComponent,
    QuotationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
