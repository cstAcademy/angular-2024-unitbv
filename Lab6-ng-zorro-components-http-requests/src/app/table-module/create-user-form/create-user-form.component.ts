import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../helpers/user.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { LetterValidator } from '../helpers/form.helper';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.scss'],
})
export class CreateUserFormComponent implements OnInit {
  userForm!: FormGroup<any>;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private notificationService: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.createUserForm();
  }

  createUserForm() {
    this.userForm = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(3),
          LetterValidator,
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(3),
          LetterValidator,
        ],
      ],
      job: ['', [Validators.required]],
    });
  }

  addNewUser() {
    const name =
      this.userForm.controls['firstName'].value +
      ' ' +
      this.userForm.controls['lastName'].value;
    const job = this.userForm.controls['job'].value;

    this.userService.createNewUser(name, job).subscribe({
      next: () => {
        this.notificationService.success('Success', 'User added successfully');
      },
      error: () => {
        this.notificationService.error('Error', 'Something went wrong');
      },
    });
  }

  // -------------- form getters ------------------
  get firstName(): AbstractControl {
    return this.userForm.controls['firstName'];
  }

  get lastName(): AbstractControl {
    return this.userForm.controls['lastName'];
  }

  get job(): AbstractControl {
    return this.userForm.controls['job'];
  }
}
