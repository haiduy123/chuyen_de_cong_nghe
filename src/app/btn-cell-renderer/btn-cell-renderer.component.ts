import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';
@Component({
  selector: 'app-btn-cell-renderer',
  templateUrl: './btn-cell-renderer.component.html',
  styleUrls: ['./btn-cell-renderer.component.scss']
})
export class BtnCellRendererComponent implements OnInit, ICellRendererAngularComp{

  cellValue: any;
  constructor(private dialog: MatDialog) { }

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
    console.log(dataCLass.doc)
    this.dialog.open(EditComponent, {
      data: dataCLass,
      // panelClass: 'school-year',
      width: '525px',
      height: '586px'
    })
    // .afterClosed().subscribe(() => {
    //   // xem lại
    //   this.documentaryService.changeIsUpdate(true)
    //   this.toast.success("Thay đổi thành công");
    // })
  }
}
