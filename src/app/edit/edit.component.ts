import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ElementRef, Component, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Admin } from '../model/admin';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data : any,
    private fb: FormBuilder,
    ) { }

  userAddForm: any = FormGroup;
  admin = { id: "", email: "", name: "", phone: "", website: "", username: "" }

  ngOnInit(): void {
    this.data = null;
    console.log(this.data);
    this.userAddForm = this.fb.group({
      email: ['', [Validators.required]],
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      website: ['', [Validators.required]],
      username: [''],
    });
    if(this.data.action == "edit") {
      this.getDataEdit();
    }
  }


  getDataEdit() {
    this.admin.email = this.data.doc.email;
    this.admin.name = this.data.doc.name;
    this.admin.phone = this.data.doc.phone;
    this.admin.website = this.data.doc.website;
    this.admin.username = this.data.doc.username;
  }
}
