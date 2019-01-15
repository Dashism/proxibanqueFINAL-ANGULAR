export class Opinion {
    id: number;
    commentary: string;
    isThumbs: string;
    constructor(id: number, commentary: string, isThumbs: string) {
        this.id = id;
        this.commentary = commentary;
        this.isThumbs = isThumbs;
    }

}
