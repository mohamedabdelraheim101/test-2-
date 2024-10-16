import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrls: ['./student-modal.component.scss']
})
export class StudentModalComponent implements OnInit {
  @Output() onSave = new EventEmitter<any>();
  studentForm: FormGroup;
  student: any;
  isEdit: boolean;
  genders = [
    { name: 'Male', value: 'Male' },
    { name: 'Female', value: 'Female' },
    { name: 'Other', value: 'Other' }
  ];

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.studentForm = this.fb.group({
      name: [this.student.name || '', Validators.required],
      email: [this.student.email || '', [Validators.required, Validators.email]],
      age: [this.student.age || '', [Validators.required, Validators.min(1)]],
      dob: [this.student.dob || '', Validators.required],
      gender: [this.student.gender || '', Validators.required]
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      this.onSave.emit(this.studentForm.value);
      this.bsModalRef.hide();
    }
  }
}
