import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { HectorComponent } from './pages/hector/hector.component';

const app_routes: Routes  = [
    {path: '', component: PortafolioComponent},
    {path: 'about', component: AboutComponent},
    {path: 'item', component: ItemComponent},
    {path: 'hector', component: HectorComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingMoule { }