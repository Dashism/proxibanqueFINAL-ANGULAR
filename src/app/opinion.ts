import { Survey } from './survey';
import { Client } from './client';

export class Opinion {
    id: number;
    commentary: string;
    isThumbs: string;
    client: Client;
    survey: Survey;

    constructor(id: number, commentary: string, isThumbs: string , survey?: Survey, client?: Client) {
        this.id = id;
        this.commentary = commentary;
        this.isThumbs = isThumbs;
        this.survey = survey;
        this.client = client;
    }

}
