import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'dialog-component',
  templateUrl: 'register.dialog.html',
})
export class RegisterDialog {
  constructor(public dialogRef: MatDialogRef<RegisterDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any) {}

  onOkClick(): void {
    this.dialogRef.close();
  }
}
