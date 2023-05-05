import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { BtnCellRendererComponent } from '../btn-cell-renderer/btn-cell-renderer.component';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})

export class AdminPageComponent {

  constructor(
    private http: HttpClient,
    private dialog: MatDialog
  ) {}

  public columnDefs: ColDef[] = [
    { field: 'id'},
    { field: 'name'},
    { field: 'username'},
    { field: 'email' },
    { field: 'phone' },
    { field: 'website'},
    {
      headerName: "Button",
      field:'bronze',
      cellRenderer: BtnCellRendererComponent
    }
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  
  public rowData$!: Observable<any[]>;

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

  add() {
    const dataCLass: any = {};
    dataCLass.action = 'Create';
    console.log(dataCLass.doc)
    this.dialog.open(EditComponent, {
      data: dataCLass,
      // panelClass: 'school-year',
      width: '525px',
      height: '586px'
    })
  }
}