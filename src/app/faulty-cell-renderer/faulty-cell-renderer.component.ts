import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';
import { DeletePageComponent } from '../delete-page/delete-page.component';
import { AnotherService } from '../services/another.service';
import { ToastrService } from 'ngx-toastr';
import { ApproveImageComponent } from '../approve-image/approve-image.component';

@Component({
  selector: 'app-faulty-cell-renderer',
  templateUrl: './faulty-cell-renderer.component.html',
  styleUrls: ['./faulty-cell-renderer.component.scss']
})
export class FaultyCellRendererComponent implements OnInit, ICellRendererAngularComp {

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

  openApprove(): void {
    const dataCLass: any = {};
    dataCLass.doc = this.cellValue.data;
    console.log(dataCLass)
    this.dialog.open(ApproveImageComponent, {
      data: dataCLass,
      width: '525px',
      height: '400px'
    })
  }

  openDelete(action: string): void {
    const dataCLass: any = {};
    dataCLass.action = action;
    dataCLass.doc = this.cellValue.data;
    console.log(dataCLass)
    this.dialog.open(DeletePageComponent, {
      data: dataCLass,
      width: '500px',
      height: '300px'
    })
  }
}
