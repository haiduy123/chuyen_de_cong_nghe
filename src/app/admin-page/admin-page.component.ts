import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { BtnCellRendererComponent } from '../btn-cell-renderer/btn-cell-renderer.component';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';
import { AnotherService } from '../services/another.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})

export class AdminPageComponent {

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private anotherService: AnotherService,
    private router: Router
  ) { }
  image: any = "";

  public columnDefs: ColDef[] = [
    {
      field: 'id',
      width: 20
    },
    {
      field: 'name',
      width: 100
    },
    {
      field: 'intro',
      width: 100
    },
    {
      field: 'description',
      width: 356
    },
    {
      headerName: "Image",
      field: 'pic',
      cellRenderer: (params: { data: { pic: any; }; }) => `<img style="height: 500px; width: 100%" src=${params.data.pic} />`
    },
    {
      headerName: "Button",
      field: 'bronze',
      cellRenderer: BtnCellRendererComponent
    }
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    wrapText: true,     // <-- HERE
    autoHeight: true,
  };

  public rowData$!: Observable<any[]>;

  onGridReady(params: GridReadyEvent) {
    params.api.sizeColumnsToFit();
    this.rowData$ = this.http
      .get<any[]>('http://localhost:8081/api/img');
  }

  add() {
    const dataCLass: any = {};
    dataCLass.action = 'Create';
    console.log(dataCLass.doc)
    this.dialog.open(EditComponent, {
      data: dataCLass,
      width: '525px',
      height: '750px'
    })
  }
}