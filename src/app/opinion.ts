import { Survey } from './survey';
import { Client } from './client';

// Définition des attributs liés à une opinion d'un Sondage.
export class Opinion {
    commentary: string;
    isThumbs: string;
    client: Client;
    survey: Survey;

    constructor(commentary: string, isThumbs: string, survey?: Survey, client?: Client) {
        this.commentary = commentary;
        this.isThumbs = isThumbs;
        this.survey = survey;
        this.client = client;
    }

}
