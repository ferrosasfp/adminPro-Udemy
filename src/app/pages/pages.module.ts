import { NgModule } from '@angular/core';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

import { FormsModule } from '@angular/forms';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';

// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

@NgModule({
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ],
    exports: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        PagesComponent
    ],
    declarations: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent,
    ],
    providers: [],
})

export class PagesModule { }
