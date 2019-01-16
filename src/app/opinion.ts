import { Survey } from './survey';
import { Client } from './client';

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
