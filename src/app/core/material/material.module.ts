import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  exports: [CommonModule, MatSidenavModule],
  providers: []
})
export class MaterialModule {}
