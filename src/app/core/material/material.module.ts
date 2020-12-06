import { NgModule } from '@angular/core';
import { ChartistModule } from 'ng-chartist';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';




const materialModules = [
  MatIconModule,
  MatMenuModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatBadgeModule,
  ChartistModule,
  MatTableModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
  MatSortModule,
  MatCardModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSlideToggleModule
];
@NgModule({
  declarations: [],
  imports: [
    ...materialModules,
  ],
  exports: [
    ...materialModules,
  ]
})
export class MaterialModule { }
