import { Component, Inject, OnInit } from '@angular/core';
import { AnotherService } from '../services/another.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-page',
  templateUrl: './delete-page.component.html',
  styleUrls: ['./delete-page.component.scss']
})
export class DeletePageComponent implements OnInit{
constructor(
  @Inject(MAT_DIALOG_DATA) public data : any,
  private dialogRef: MatDialogRef<DeletePageComponent>,
  private anotherService: AnotherService
) {}

ngOnInit(): void {
}
  onDismiss() {
    this.dialogRef.close();
  }

  onConfirm() {
    this.dialogRef.close();
    this.anotherService.deleteImage(this.data.doc.id).subscribe(res => {
      console.log(res)
    })
    this.dialogRef.close();
    window.location.reload();
  }
}
