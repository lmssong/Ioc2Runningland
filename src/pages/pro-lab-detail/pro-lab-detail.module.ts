import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProLabDetailPage } from './pro-lab-detail';

@NgModule({
  declarations: [
    ProLabDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ProLabDetailPage),
  ],
})
export class ProLabDetailPageModule {}
