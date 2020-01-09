import { ContactComponent } from './admin/contact/contact.component';
import { CategorieComponent } from './admin/categorie/categorie.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ArticleComponent } from './admin/article/article.component';

const routes: Routes = [


  { path: '' , component: HomeComponent },
  { path: 'admin', component: AdminComponent ,

    children: [
      {  path: 'categorie' , component: CategorieComponent  },
      { path: 'contact' , component: ContactComponent },
      { path: '' , component : DashboardComponent  },
      { path : 'article', component: ArticleComponent }

    ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
