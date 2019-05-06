import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'delete-dialog-component',
  templateUrl: 'delete.dialog.html',
})
export class DeleteDialog {
  constructor(public dialogRef: MatDialogRef<DeleteDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any) {}

  onDeleteClick(): void {
    this.dialogRef.close('delete');
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
