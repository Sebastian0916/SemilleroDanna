//export * from "./table/table.component"

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
import { AngularModule } from '@sinco/angular';

const componentes=[
    TableComponent
]
@NgModule({
  declarations: [...componentes],
  exports: [...componentes],
  imports: [CommonModule,AngularModule],
})
export class ComponentesModule {}
