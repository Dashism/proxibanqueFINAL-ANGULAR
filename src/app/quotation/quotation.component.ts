import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
// Composant mettant en oeuvre l'affichage d'une page s'il n'y a pas de sondage en cours.
export class QuotationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
