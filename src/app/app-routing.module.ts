import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SideBarComponent } from './side-bar/side-bar.component';

const routes: Routes = [
  { path: 'login', component: LoginpageComponent },
  { path: 'sidebar', component: SideBarComponent },
  { path: 'welcome', component: WelcomePageComponent },
  { path:'recipe', component: RecipeComponent},
  { path: '', redirectTo: '/welcome',pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
