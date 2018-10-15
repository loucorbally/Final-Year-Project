import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent }  from './contact/contact.component';


const appRoutes: Routes = [
    {
      path: 'contact',
      component: ContactComponent,
      outlet: 'popup'
    },
    
    { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
   // { path: '**', component: PageNotFoundComponent }
  ];
  /** 
   * Contact does not direct not a route : URL Segment
   */

  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        {
          enableTracing: false, // <-- debugging purposes only
         
        }
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }
  