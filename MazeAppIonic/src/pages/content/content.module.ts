
import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { ContentPage } from './content';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ContentPage,
  
  ],
  imports: [
    IonicPageModule.forChild(ContentPage),
    TranslateModule.forChild()
  ],
  exports: [
    ContentPage,
   
  ]
})
export class ContentPageModule { }
