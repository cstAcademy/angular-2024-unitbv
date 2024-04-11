import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    NzTableModule,
    NzNotificationModule,
    NzSpinModule,
  ],
})
export class TableModule {}
