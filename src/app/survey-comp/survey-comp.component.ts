import { Opinion } from './../opinion';
import { NgForm } from '@angular/forms';
import { Client } from './../client';
import { environment as ENV } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey } from '../survey';
import { SurveyService } from '../survey.service';


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
  isOk: boolean;
  calculJours: number;
  date: Date;


  constructor(private service: SurveyService) {
    this.wsUrl = ENV.apiUrl + '/survey';
    this.serialNumber = 'A';
    this.switchExpression = 0;
    this.client = new Client(undefined, undefined, undefined, undefined, undefined, undefined);
    this.opinion = new Opinion(undefined, undefined, undefined);
    this.survey = new Survey(undefined, undefined, undefined, undefined);
    this.isOk = false;
    this.calculJours = 0;
  }

  ngOnInit() {
    this.survey = this.service.getSurvey();
    // this.calculJours = this.getDays();
  }
  public indexReturn() {
    this.switchExpression = 0;
  }

  public thumbsUp() {
    this.switchExpression = 1;
    this.opinion.isThumbs = '1';


  }
  public thumbsDown() {
    this.switchExpression = 2;
    this.opinion.isThumbs = '0';
  }

  public onNumberValidated() {
    this.isOk = true;
  }
  

  public validateNeg(myForm: NgForm) {
    this.opinion.survey = this.survey;
    this.service.create(this.opinion).subscribe(() => {
      console.log('Avis négatif, crée avec succès dans BDD !');
    });
    myForm.resetForm(new Opinion(null, null, null));
  }

  public validatePos(myForm: NgForm) {
    this.opinion.survey = this.survey;
    this.service.checkClient(this.client.serialNumber).subscribe((client) => {
      this.opinion.client = client;
      this.service.create(this.opinion).subscribe(() => {
        console.log('Avis positif, créé avec succès sur BDD !');
      });
      this.getDays();
    });
    myForm.resetForm(new Opinion(null, null, null));
  }

  getDays() {
    const newDate = new Date(this.survey.supposedFinishDate[0], this.survey.supposedFinishDate[1] - 1, this.survey.supposedFinishDate[2]);
    console.log(Date.now());
    console.log(newDate.getTime());
    console.log(this.survey.supposedFinishDate);
    const reste = newDate.getTime() - Date.now();
    this.calculJours = Math.ceil(reste / (1000 * 60 * 60 * 24));
  }
}

