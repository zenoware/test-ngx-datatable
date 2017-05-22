import {ITablePaging} from "./interfaces/ITablePaging";

export class tablePaging implements ITablePaging {
    public count: number;
    public offset: number;
    public limit: number;

    constructor(tablePaging?: ITablePaging) {
        this.count = tablePaging && tablePaging.count || 0;
        this.offset = tablePaging && tablePaging.offset || 0;
        this.limit = tablePaging && tablePaging.limit || 0;
    }

}