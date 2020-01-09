import { CategorieService } from './service/categorie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentComponent } from './layout/content/content.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CategorieComponent } from './admin/categorie/categorie.component';
import { ArticleComponent } from './admin/article/article.component';
import { ContactComponent } from './admin/contact/contact.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    AdminComponent,
    CategorieComponent,
    ArticleComponent,
    ContactComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ CategorieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
