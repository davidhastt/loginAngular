import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//componetnes personalizados
import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
// aqui tendrias que importar el dashboard

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
