import { Component, OnInit, AfterViewInit, Input, ViewChild, ViewChildren, TemplateRef } from '@angular/core';
import { CommonTableComponent } from "../common-table/common-table.component";
import { TableColumn } from "@swimlane/ngx-datatable";
import { ITablePaging } from "../models/interfaces/ITablePaging";
import { tablePaging } from "../models/tablePaging";

declare var UIkit: any;

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  private _results: any[];
  private _columns: TableColumn[];
  private _tablePaging: ITablePaging;
  @ViewChild(CommonTableComponent) private _commonTable: CommonTableComponent;
  @ViewChild('rowDropDownTemplate') rowDropDownTemplate: TemplateRef<any>;

  constructor() {
    
    this._tablePaging = new tablePaging();
  }

  public get tablePaging(): ITablePaging {
    return this._tablePaging;
  }

  public get columns(): TableColumn[] {
    return this._columns;
  }

  @Input()
  public set results(results: any[]) {
    this._results = results;
    this._tablePaging.count = results && results.length || 0;
    this._tablePaging.limit = results && results[0].count || 0;
  }

  public get results(): any[] {
    return this._results;
  }

  ngAfterViewInit() {
    //this.setColumns();
  }

  public get tableData(): any[] {

    
    let tableData: any[] = [];
    
      //Testing
      tableData = [
        {
          name: "Name",
          positions: "",
          experience: 10,
          level: "",
          education: ""
        },
        {
          name: "Name",
          positions: "",
          experience: 10,
          level: "",
          education: ""
        }
      ];

      this._tablePaging.count = 2;
      this._tablePaging.limit = 2;
      this._tablePaging.offset = 5;
    

    return tableData;
  }

  ngOnInit() {
    this.setColumns();
  }
  public onPaging(pageInfo) {
    console.log("on paging");
    //TODO:  Call service for results
  }

  private setColumns(): void {
    this._columns = [];

    let templateTest: TemplateRef<any>;

    let dropDownColumn: TableColumn = {
      width: 50,
      resizeable: false,
      sortable: false,
      draggable: false,
      canAutoResize: false,
      cellTemplate: this.rowDropDownTemplate,
    }
    this._columns.push(dropDownColumn);

    let nameColumn: TableColumn = {
      name: "Name",
      width: 120
    };
    this._columns.push(nameColumn);

    let positionsColumn: TableColumn = {
      name: "Positions",
      width: 200
    };
    this._columns.push(positionsColumn);

    let experienceColumn: TableColumn = {
      name: "Experience",
      width: 80
    };
    this._columns.push(experienceColumn);

    let leveleColumn: TableColumn = {
      name: "Level",
      width: 80
    };
    this._columns.push(leveleColumn);

    let educationeColumn: TableColumn = {
      name: "Education",
      width: 80
    };
    this._columns.push(educationeColumn);

  }

  public toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this._commonTable.table.rowDetail.toggleExpandRow(row);
  }

}
