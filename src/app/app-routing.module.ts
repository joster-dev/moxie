import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ContactComponent } from './contact/contact.component'
import { MenuComponent } from './menu/menu.component'

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'menu', component: MenuComponent },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
