import { NgForm } from '@angular/forms';
import { Client } from './../client';
import { environment as ENV } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey } from '../survey';
import { SurveyService } from '../survey.service';
import { Opinion } from '../opinion';


@Component({
  selector: 'app-survey-comp',
  templateUrl: './survey-comp.component.html',
  styleUrls: ['./survey-comp.component.css']
})
export class SurveyCompComponent implements OnInit {
  wsUrl: string;
  survey: Survey;
  switchExpression: number;
  serialNumber: string;
  client: Client;
  opinion: Opinion;

  constructor(private service: SurveyService) {
    this.wsUrl = ENV.apiUrl + '/survey';
    this.serialNumber = 'A';
    this.switchExpression = 0;
    this.client = new Client(undefined, undefined, undefined, undefined, undefined, undefined);
    this.opinion = new Opinion(undefined, undefined, undefined);
    this.survey = new Survey(undefined, undefined, undefined, undefined);
  }

  ngOnInit() {
    this.survey = this.service.getSurvey();
  }
  public thumbsUp() {
    this.switchExpression = 1;

  }
  public thumbsDown() {
    this.switchExpression = 2;
  }

  public validateNeg(myForm: NgForm) {

    this.service.create(this.opinion).subscribe(() => {
      console.log('Avis négatif, crée avec succès dans BDD !');
    });
    myForm.resetForm(new Opinion(null, null, null));
  }

  public validatePos(myForm: NgForm) {

    this.opinion.survey = this.survey;
    this.service.checkClient(this.customer.clientNumber).subscribe((customer) => {
      this.opinion.customer = customer;
      this.service.create(this.opinion).subscribe(() => {
        console.log('Avis positif, créé avec succès sur BDD !');
      });
      this.getDays();
    });

    myForm.resetForm(new Opinion(null, null));
  }

}

