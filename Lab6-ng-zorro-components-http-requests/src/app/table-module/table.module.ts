import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table/table.component';
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [TableComponent, CreateUserFormComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    NzTableModule,
    NzNotificationModule,
    NzSpinModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,

    // *required for forms!
    ReactiveFormsModule,
  ],
})
export class TableModule {}
