import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';


import { CreatorsPage } from './creators';

@NgModule({
  declarations: [
    CreatorsPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatorsPage),
    TranslateModule.forChild()
  ],
  exports: [
    CreatorsPage
  ]
})
export class CreatorsPageModule { }
