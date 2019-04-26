import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ControlsPage } from './controls';

@NgModule({
  declarations: [
    ControlsPage,
  ],
  imports: [
    IonicPageModule.forChild(ControlsPage),
    TranslateModule.forChild()
  ],
  exports: [
    ControlsPage
  ]
})
export class ControlsPageModule { }
