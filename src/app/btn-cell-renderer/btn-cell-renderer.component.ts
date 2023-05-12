import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';
import { DeletePageComponent } from '../delete-page/delete-page.component';
import { AnotherService } from '../services/another.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-btn-cell-renderer',
  templateUrl: './btn-cell-renderer.component.html',
  styleUrls: ['./btn-cell-renderer.component.scss']
})
export class BtnCellRendererComponent implements OnInit, ICellRendererAngularComp {

  cellValue: any;
  constructor(
    private dialog: MatDialog,
    private anotherService: AnotherService,
    private toast: ToastrService,
  ) { }

  agInit(params: any): void {
    this.cellValue = params
  }

  refresh(params: any) {
    // set value into cell again
    return true
  }
  ngOnInit(): void {
  }

  openEdit(action: string): void {
    const dataCLass: any = {};
    dataCLass.action = action;
    dataCLass.doc = this.cellValue.data;
    console.log(dataCLass)
    this.dialog.open(EditComponent, {
      data: dataCLass,
      width: '525px',
      height: '750px'
    })
  }

  openDelete(): void {
    const dataCLass: any = {};
    dataCLass.doc = this.cellValue.data;
    console.log(dataCLass)
    this.dialog.open(DeletePageComponent, {
      data: dataCLass,
      width: '500px',
      height: '300px'
    })
  }
}
