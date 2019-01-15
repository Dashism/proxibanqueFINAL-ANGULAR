import { environment as ENV } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey } from '../survey';

@Component({
  selector: 'app-survey-comp',
  templateUrl: './survey-comp.component.html',
  styleUrls: ['./survey-comp.component.css']
})
export class SurveyCompComponent implements OnInit {
  wsUrl: string;
  survey: Survey;

  constructor(private httpClient: HttpClient) {
    this.wsUrl = ENV.apiUrl + '/survey';
   }
  ngOnInit() {
  }

  public getSurvey(): Survey {
    this.httpClient.get(this.wsUrl).subscribe( (survey: Survey) => this.survey = survey);
    return this.survey;
  }
}
