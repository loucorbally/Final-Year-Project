import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { FAQPage } from './FAQ';

@NgModule({
  declarations: [
    FAQPage,
  ],
  imports: [
    IonicPageModule.forChild(FAQPage),
    TranslateModule.forChild()
  ],
  exports: [
    FAQPage
  ]
})
export class FAQPageModule { }
