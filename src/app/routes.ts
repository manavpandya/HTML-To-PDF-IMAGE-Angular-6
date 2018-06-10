import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmltoimageComponent } from './htmltoimage/htmltoimage.component';
import { HtmltopdfComponent } from './htmltopdf/htmltopdf.component';


const appRoutes: Routes = [
    { path: '', redirectTo:'toimage',pathMatch:'full' },
    { path: 'toimage', component: HtmltoimageComponent },
    { path: 'topdf', component: HtmltopdfComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);