import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { FaultyImageComponent } from './faulty-image/faulty-image.component';
const routes: Routes = [
  {
    path: 'admin',
    component: AdminPageComponent
  },
  {
    path: 'faulty',
    component: FaultyImageComponent
  },
  {
    path: '**',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
