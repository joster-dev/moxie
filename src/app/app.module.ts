import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { ContactComponent } from './contact/contact.component'
import { MenuComponent } from './menu/menu.component'

@NgModule({
  declarations: [AppComponent, ContactComponent, MenuComponent],
  imports: [AppRoutingModule, BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
