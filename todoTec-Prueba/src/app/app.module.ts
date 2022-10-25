import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DbLaravelService } from './services/db-laravel.service';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import { ModalAdminComponent } from './modal-admin/modal-admin.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListAdminComponent,
    ModalAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DbLaravelService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalAdminComponent]
})
export class AppModule { }
