import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() type: string;
  @Input() isClear: boolean;
  @Output() submitEmit: EventEmitter<any> = new EventEmitter<any>();

  userForm: FormGroup;

  isEmail = false;
  isPassword = false;
  isConfirmPassword = false;

  constructor(formBuilder: FormBuilder) {
    this.userForm = formBuilder.group({
      email: null,
      password: null,
      confirmPassword: null
    });
  }

  ngOnInit(): void {
    this.setUpForm();
  }

  private setUpForm(): void {
    const formTypes = {
      register: () => {
        this.isEmail = true;
        this.isPassword = true;
        this.isConfirmPassword = true;
      },
      default: () => {
        this.isEmail = true;
        this.isPassword = true;
        this.isConfirmPassword = false;
      }
    };

    return (formTypes[this.type] || formTypes.default)();
  }

  submit(): void {
    if (this.userForm.valid) {
      this.submitEmit.emit(this.userForm.value);
    }
  }

  resetForm(): void {
    this.userForm.reset();
  }
}
