import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatCardModule, MatToolbarModule, MatToolbar, MatButtonModule, MatButton ,MatMenuModule } from '@angular/material';
import { HtmltoimageComponent } from './htmltoimage/htmltoimage.component';
import { HtmltopdfComponent } from './htmltopdf/htmltopdf.component';
import { routing } from './routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HtmltoimageComponent,
    HtmltopdfComponent
  ],
  imports: [
    routing,
    BrowserModule,
    MatCardModule, MatToolbarModule, MatButtonModule,MatMenuModule,
    BrowserAnimationsModule
  ],
  exports:[
    BrowserModule,
    MatCardModule, MatToolbarModule, MatButtonModule,MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
