import { MatButtonModule, MatMenuModule, MatListModule, MatCardModule, MatInputModule, MatTableModule, MatIconModule, MatExpansionModule, MatProgressSpinnerModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, MatListModule, MatCardModule, MatInputModule,
    MatMenuModule, MatTableModule, MatIconModule, MatExpansionModule,
    MatProgressSpinnerModule
  ],
  exports: [MatButtonModule, MatMenuModule, MatListModule, MatCardModule, MatInputModule,
    MatTableModule, MatIconModule, MatExpansionModule, MatProgressSpinnerModule]
})
export class MaterialImportsModule { }