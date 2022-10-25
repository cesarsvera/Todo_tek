import { Component, OnInit, ViewChild } from '@angular/core';
import { DbLaravelService } from '../services/db-laravel.service';
import { IData } from '../interfaces/IData.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalAdminComponent } from '../modal-admin/modal-admin.component';


@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {

  name: string = '';
  mail: string = '';
  rol: string = '';
  ELEMENT_DATA: IData[] = []
  dataSource = new MatTableDataSource<IData>([]);


  onClickNewAdmin = () => {
    const dialogRef = this.dialog.open(ModalAdminComponent, {
      width: '250px',
      data: { name: this.name, mail: this.mail, rol: this.rol },
    });



    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        console.log(result);
        this.name = result.name;
        this.mail = result.mail;
        this.rol = result.rol;

        this.data.postAdministrador({ "name": this.name, 'mail': this.mail, 'rol': this.rol }).subscribe(data => {
          this.name = '';
          this.mail = '';
          this.rol = '';
          this.dataAdministrator()
          this.ngAfterViewInit()
        })

      }



    });
  }

  dataAdministrator = () => {
    this.data.getAdministrador().subscribe({
      next: (data) => {
        
        this.ELEMENT_DATA = data
        this.dataSource = new MatTableDataSource<IData>(this.ELEMENT_DATA);
        this.ngAfterViewInit()
      }
    })
  }


  displayedColumns: string[] = ['position', 'name', 'mail', 'rol'];
  resultsLength = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private dataService: DbLaravelService, public dialog: MatDialog, private data: DbLaravelService) { }

  ngOnInit(): void {

    this.dataAdministrator()
    
  }

}
