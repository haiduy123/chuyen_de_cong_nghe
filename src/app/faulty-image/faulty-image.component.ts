import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AnotherService } from '../services/another.service';
import { Router } from '@angular/router';
import { FaultyCellRendererComponent } from '../faulty-cell-renderer/faulty-cell-renderer.component';

@Component({
  selector: 'app-faulty-image',
  templateUrl: './faulty-image.component.html',
  styleUrls: ['./faulty-image.component.scss']
})
export class FaultyImageComponent {

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private anotherService: AnotherService,
    private router: Router
  ) { }
  image: any = "";

  public columnDefs: ColDef[] = [
    {
      field: 'faultyImgId',
      width: 20
    },
    {
      field: 'userLabel',
      width: 100
    },
    {
      headerName: "Image",
      field: 'img',
      cellRenderer: (params: { data: { img: any; }; }) => `<img style="height: 500px; width: 100%" src=${params.data.img} />`
    },
    {
      headerName: "Action",
      field: 'bronze',
      cellRenderer: FaultyCellRendererComponent
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
      .get<any[]>('http://localhost:8081/api/img/faulty');
  }
}
