import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { AnotherService } from '../services/another.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data : any,
    private fb: FormBuilder,
    private anotherService: AnotherService,
    private dialogRef: MatDialogRef<EditComponent>
    ) { }

  userAddForm: any = FormGroup;
  image = { id: "", pic: "", name: "", intro: "", description: ""}

  ngOnInit(): void {
    console.log(this.data);
    this.userAddForm = this.fb.group({
      pic: [''],
      name: [''],
      description: [''],
      intro: ['']
    });
    if(this.data.action == "edit") {
      this.getDataEdit();
    }
  }

  getDataEdit() {
    this.image.pic = this.data.doc.pic;
    this.image.name = this.data.doc.name;
    this.image.description = this.data.doc.description;
    this.image.intro = this.data.doc.intro;
  }

  saveImage() {
    const data = {
      id: this.data.doc.id,
      pic: this.image.pic,
      name: this.image.name, 
      description : this.image.description,
      intro: this.image.intro
    }
    this.anotherService.saveImage(data).subscribe(res => {
      console.log(res)
    })
    this.dialogRef.close();
    window.location.reload();
  }

  back() {
    this.dialogRef.close();
  }
}
