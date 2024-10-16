import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StudentModalComponent } from '../student-modal/student-modal.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  students = [
    // Example data
    { name: 'John Doe', email: 'john@example.com', age: 20, dob: new Date('2002-01-01'), gender: 'Male', selected: false },
    { name: 'Jane Doe', email: 'jane@example.com', age: 22, dob: new Date('2000-01-01'), gender: 'Female', selected: false }
  ];
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModal() {
    this.bsModalRef = this.modalService.show(StudentModalComponent, {
      initialState: {
        student: {},
        isEdit: false
      }
    });

    this.bsModalRef.content.onSave.subscribe((newStudent) => {
      this.students.push(newStudent);
    });
  }

  editStudent(index: number) {
    this.bsModalRef = this.modalService.show(StudentModalComponent, {
      initialState: {
        student: { ...this.students[index] },
        isEdit: true
      }
    });

    this.bsModalRef.content.onSave.subscribe((updatedStudent) => {
      this.students[index] = updatedStudent;
    });
  }

  deleteSelected() {
    this.students = this.students.filter(student => !student.selected);
  }

  selectAll(selected: boolean) {
    this.students.forEach(student => student.selected = selected);
  }

  hasSelectedStudents(): boolean {
    return this.students.some(student => student.selected);
  }
}
