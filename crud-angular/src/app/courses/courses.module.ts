import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './containers/courses/courses.component';
import { CourseFormComponent } from './containers/course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesListComponent } from './components/courses-list/courses-list.component';

@NgModule({
  declarations: [CoursesComponent, CourseFormComponent, CoursesListComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
})
export class CoursesModule {}
