import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { AnotherService } from '../services/another.service';

@Component({
  selector: 'app-approve-image',
  templateUrl: './approve-image.component.html',
  styleUrls: ['./approve-image.component.css']
})
export class ApproveImageComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data : any,
    private fb: FormBuilder,
    private anotherService: AnotherService,
    private dialogRef: MatDialogRef<ApproveImageComponent>
    ) { }


  ngOnInit(): void {
    console.log(this.data);
  }

  labelId: number = 0;

  approveImage() {
    this.anotherService.approveImage(this.data.doc.faultyImgId, this.labelId).subscribe(res => {
      console.log(res)
    })
    this.dialogRef.close();
    window.location.reload();
  }

  back() {
    this.dialogRef.close();
  }
}
