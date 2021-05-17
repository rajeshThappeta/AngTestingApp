import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from './bikes/bikes.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { TestComponent } from './test/test.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


const routes: Routes = [
  
  { path:'home',component:HomeComponent},
  { path:'register',component:RegisterComponent},
  { path:'login',component:LoginComponent},
  { path:'contactus',component:ContactusComponent},
  {path:'test',component:TestComponent},
  {path:'test/:id',component:UserdetailsComponent},
  { path:'products',component:ProductsComponent,children:[
    {path:'mobiles',component:MobilesComponent},
    { path:"bikes",component:BikesComponent},
    {path:"televisions",component:TelevisionsComponent},
    {path:'',redirectTo:'/products/mobiles',pathMatch:'full'}
  ]},
  { path:'', redirectTo:'/login',pathMatch:'full'},
  
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
