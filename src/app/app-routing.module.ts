import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErorpageComponent} from './erorpage/erorpage.component';

const routes: Routes = [
  {path:'',component: HomeComponent },
  {path:'contact', component: ContactComponent },
  {path:'header',component: HeaderComponent },
  {path:'footer',component: FooterComponent },
  {path:'**',component: ErorpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
