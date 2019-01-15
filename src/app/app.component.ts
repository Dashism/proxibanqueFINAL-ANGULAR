import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SurveyService } from './survey.service';
import { Survey } from './survey';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isSurvey: boolean;
  title = 'proxibanqueFINAL-angular';

  constructor(private service: SurveyService) {
    this.isSurvey = false;
  }

  ngOnInit(): void {
    this.service.check().subscribe( (survey: Survey) => {
      if (survey != null) {
        this.isSurvey = true;
      } else {
        this.isSurvey = false;
      }
    });
  }



}
