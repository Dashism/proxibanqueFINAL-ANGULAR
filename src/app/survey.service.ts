import { Client } from './client';
import { Survey } from './survey';
import { Injectable } from '@angular/core';
import { environment as ENV } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Opinion } from './opinion';


@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  wsUrl: string;
  survey: Survey;
  opUrl: string;
  clUrl: string;

  constructor(private httpClient: HttpClient) {
    this.wsUrl = ENV.apiUrl + '/survey';
    this.opUrl = ENV.apiUrl + '/opinion';
    this.clUrl = ENV.apiUrl + '/client';
  }

  public check(): Observable<Survey> {
    return this.httpClient.get<Survey>(this.wsUrl).pipe(tap((survey) => this.survey = survey));
  }

  public getSurvey(): Survey {
    return this.survey;
  }
  public create(opinion: Opinion): Observable<Opinion> {
    const newOpinion = new Opinion(undefined, opinion.commentary, '0');
    return this.httpClient.post<Opinion>(this.opUrl, newOpinion);
  }
  public checkClient(serialNumber: string): Observable<Client> {
   return this.httpClient.get<Client>(this.clUrl + `/${serialNumber}`);
  }


}
