import { Component } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { User } from '../helpers/models/user';
import { UserService } from '../helpers/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  users: User[] = [];

  isAddNewUserFormVisible: boolean = false;
  isLoading: boolean = true;

  constructor(
    private userService: UserService,
    private notificationService: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.getListOfUsers();
  }

  getListOfUsers() {
    this.userService.getListOfUsers().subscribe({
      next: (res) => {
        this.isLoading = false;
        this.users = res;
        this.notificationService.success(
          'Succes',
          'The list was succesfully retrived'
        );
      },
      error: (err) => {
        this.users = [];
        this.notificationService.error('Error', 'Something went wrong');
      },
    });
  }

  toggleAddUser() {
    this.isAddNewUserFormVisible = true;
  }
}
