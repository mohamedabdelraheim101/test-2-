import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgSelectModule } from '@ng-select/ng-select';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentModalComponent } from './components/student-modal/student-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    NgSelectModule
  ],
  providers: [BsModalService, BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
