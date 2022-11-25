import { MatSnackBar } from '@angular/material/snack-bar';
import { CoursesService } from '../../services/courses.service';
import { Component } from '@angular/core';

import { Course } from '../../model/course';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses$: Observable<Course[]> | null = null;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  refresh() {
    this.courses$ = this.coursesService.list().pipe(
      catchError((error) => {
        console.log('Erro ao carregar cursos.');
        return of([]);
      })
    );
  }

  onEdit(course: Course) {
    this.router.navigate(['edit', course._id], { relativeTo: this.route });
  }

  onRemove(course: Course) {
    this.refresh();
    this.coursesService.remove(course._id).subscribe(() => {
      this.snackBar.open('Curso removido com sucesso!', 'X', {
        duration: 50000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    });
  }
}
