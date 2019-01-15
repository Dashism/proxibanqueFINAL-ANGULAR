import { Survey } from './survey';
import { Injectable } from '@angular/core';
import { environment as ENV } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  wsUrl: string;
  survey: Survey;

  constructor(private httpClient: HttpClient) {
    this.wsUrl = ENV.apiUrl + '/survey';
   }

  //  check(): Observable<Survey> {
    //  return this.httpClient.get(this.wsUrl);
  //  }
}
