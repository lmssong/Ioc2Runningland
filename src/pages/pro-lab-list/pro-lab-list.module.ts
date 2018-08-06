import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProLabListPage } from './pro-lab-list';

@NgModule({
  declarations: [
    ProLabListPage,
  ],
  imports: [
    IonicPageModule.forChild(ProLabListPage),
  ],
})
export class ProLabListPageModule {}
