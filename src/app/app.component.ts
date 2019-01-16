import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SurveyService } from './survey.service';
import { Survey } from './survey';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Classe principale de l'application Angular définit sur la balise <app-root>
export class AppComponent implements OnInit {
  isSurvey: boolean;
  title = 'proxibanqueFINAL-angular';

  constructor(private service: SurveyService) {
    this.isSurvey = false;
  }

  // Définit si un sondage est en cours ou non, et envoie vers la page correspondante.
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
