import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassWordPage } from './pass-word.page';

const routes: Routes = [
  {
    path: '',
    component: PassWordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassWordPageRoutingModule {}
