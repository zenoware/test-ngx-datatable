import { Component, ViewEncapsulation, OnInit, AfterViewInit, Input, Output, ViewChild, TemplateRef, EventEmitter } from '@angular/core';
import { TableColumn } from "@swimlane/ngx-datatable";
import { ITablePaging } from "../models/interfaces/ITablePaging";
import { tablePaging } from "../models/tablePaging";

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.css']
})
export class CommonTableComponent implements OnInit {

  private _columns: TableColumn[];
  private _emitPaging: EventEmitter<any>;
  private _data: any[];
  private _rowDetails: TemplateRef<any>;
  private _hasServerPaging : boolean;
  private _pagingData: ITablePaging;
  private _rowDetailHeight: number;

  @ViewChild('myTable') table: any;

  constructor() { 
    this._columns = [];
    this._data = [];
    this._rowDetails = null;
    this._pagingData = new tablePaging();
    this._rowDetailHeight = 0;
    this._emitPaging = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.table.columns = this._columns;
  }
  
  public get rowDetailHeight() : number {
    return this._rowDetailHeight;
  }
  
  @Input()
  public set rowDetailHeight(v : number) {
    this._rowDetailHeight = v;
  }
  

  public get hasDetails(): boolean {
    return this._rowDetails !== null;
  }

  public get hasServerPaging() : boolean {
    return this._hasServerPaging;
  }
  
  @Input()
  public set hasServerPaging(v : boolean) {
    this._hasServerPaging = v;
  }
  
  public get tablePaging(): ITablePaging {
    return this._pagingData;
  }

  @Input()
  public set tablePaging(v: ITablePaging) {
    this._pagingData = v;
  }

  @Output()
  public get onPaging(): EventEmitter<any> {
    return this._emitPaging;
  }
  
  public get data() : any[] {
    return this._data;
  }

  @Input()
  public set data(v : any[]) {
    this._data = v;
  }
  
  public get rowDetails() : TemplateRef<any> {
    return this._rowDetails;
  }

  @Input()
  public set rowDetails(v : TemplateRef<any>) {
    this._rowDetails = v;
  }
  

  public get columns() : TableColumn[] {
    return this._columns;
  }
  
  @Input()
  public set columns(v : TableColumn[]) {
    this._columns = v;
  }

  public setPage(pageInfo) {
    this._pagingData.offset = pageInfo.offset;
    this._emitPaging.emit(pageInfo);
  }

    public onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }

}
