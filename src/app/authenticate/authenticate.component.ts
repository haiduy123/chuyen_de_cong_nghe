import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent {
  constructor(
    private dialogRef: MatDialogRef<AuthenticateComponent>
  ) { }

  back() {
    this.dialogRef.close();
  }
}
