import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListAdminComponent } from '../list-admin/list-admin.component';
import { IModal } from '../interfaces/IModal.interface';

@Component({
  selector: 'app-modal-admin',
  templateUrl: './modal-admin.component.html',
  styleUrls: ['./modal-admin.component.css']
})
export class ModalAdminComponent implements OnInit {

  hola: string = ''

  constructor(
    public dialogRef: MatDialogRef<ListAdminComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IModal,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
