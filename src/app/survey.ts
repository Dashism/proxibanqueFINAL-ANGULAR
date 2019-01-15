export class Survey {
    id: number;
    beginDate: Date;
    supposedFinishDate: Date;
    endDate: Date;

    constructor (beginDate: Date, supposedFinishDate: Date, endDate: Date, id: number) {
        this.beginDate = beginDate;
        this.supposedFinishDate = supposedFinishDate;
        this.endDate = endDate;
        this.id = id;
    }
}
