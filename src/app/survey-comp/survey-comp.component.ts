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
// Composant mettant en oeuvre l'affichage d'une page s'il y a un sondage en cours.
export class SurveyCompComponent implements OnInit {
  wsUrl: string;
  survey: Survey;
  switchExpression: number;
  serialNumber: string;
  client: Client;
  opinion: Opinion;
  isOk: boolean;
  calculJours: number;
  verif: boolean;

  constructor(private service: SurveyService) {
    this.wsUrl = ENV.apiUrl + '/survey';
    this.serialNumber = 'A';
    this.switchExpression = 0;
    this.client = new Client(undefined, undefined, undefined, undefined, undefined, undefined);
    this.opinion = new Opinion(undefined, undefined, undefined);
    this.survey = new Survey(undefined, undefined, undefined, undefined);
    this.isOk = false;
    this.calculJours = 0;
    this.verif = true;
  }

  // Récupèration du sondage en cours avec la méthode getSurvey() du service.
  ngOnInit() {
    this.survey = this.service.getSurvey();
    // this.calculJours = this.getDays();
  }

  // Changements d'affichage dynamique en fonction du choix de l'utilisateur (évènement clique)
  public indexReturn() {
    this.switchExpression = 0;
  }

  // Changements d'affichage dynamique en fonction du choix de l'utilisateur (évènement clique)
  public thumbsUp() {
    this.switchExpression = 1;
    this.opinion.isThumbs = '1';
  }

  // Changements d'affichage dynamique en fonction du choix de l'utilisateur (évènement clique)
  public thumbsDown() {
    this.switchExpression = 2;
    this.opinion.isThumbs = '0';
  }

  // Afficher les messages de validation quand l'utilisateur valide son formulaire
  public onNumberValidated() {
    this.isOk = true;
  }

  // Envoies des données utilisateurs(commentaire) dans la BDD grâce à la fonction subscribe().
  public validateNeg(myForm: NgForm) {
    this.opinion.survey = this.survey;
    this.service.create(this.opinion).subscribe(() => {
      console.log('Avis négatif, crée avec succès dans BDD !');
    });
    myForm.resetForm(new Opinion(null, null, null));
  }

  // Vérification des données utilisateurs(serialNumber) dans la BDD et ajout
  public validatePos(myForm: NgForm) {
    this.opinion.survey = this.survey;
    this.service.checkClient(this.client.serialNumber).subscribe((client) => {
      if (client) {
        this.opinion.client = client;
        this.service.create(this.opinion).subscribe(() => {
          console.log('Avis positif du client enregistré créé avec succès sur BDD !');
        });
        this.getDays();
      } else {
        this.verif = false;
        this.service.create(this.opinion).subscribe(() => {
          console.log('Avis positif client non enregistré créé avec succès sur BDD !');
        });
      }
      myForm.resetForm(new Opinion(null, null, null));
    });
  }

  // Calcule des jours restant avant la fin du sondage en cours.
  getDays() {
    const newDate = new Date(this.survey.supposedFinishDate[0], this.survey.supposedFinishDate[1] - 1, this.survey.supposedFinishDate[2]);
    console.log(Date.now());
    console.log(newDate.getTime());
    console.log(this.survey.supposedFinishDate);
    const reste = newDate.getTime() - Date.now();
    this.calculJours = Math.ceil(reste / (1000 * 60 * 60 * 24));
  }
}

