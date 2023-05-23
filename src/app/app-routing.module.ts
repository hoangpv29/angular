import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Product_detailComponent } from './pages/product_detail/product_detail.component';
import { Not_foundComponent } from './Not_found/Not_found.component';
import { CategoryComponent } from './pages/category/category.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/logup/logup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: Product_detailComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logup', component: SignupComponent },
  // { path: 'product/:id', component: Product_detailComponent },
  { path: '**', component: Not_foundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
