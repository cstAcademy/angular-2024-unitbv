import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/_helpers/guards/auth.guard';

const routes: Routes = [
  {
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    path: '',
  },
  {
    path: 'table',
    loadChildren: () =>
      import('./table-module/table.module').then((m) => m.TableModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
