import { Component } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-learning-modal',
  standalone: true,
  imports: [
    FormsModule, // Required for [(ngModel)]
    MatDialogModule, 
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
],
  template: `
    <h2 mat-dialog-title>Add Learning Item</h2>
    <mat-dialog-content>
      <form>
        <mat-form-field appearance="fill" class="full-width">
          <mat-label>Technology</mat-label>
          <input matInput [(ngModel)]="learningItem.technology" required />
        </mat-form-field>
        <mat-form-field appearance="fill" class="full-width">
          <mat-label>Description</mat-label>
          <textarea matInput [(ngModel)]="learningItem.description" required></textarea>
        </mat-form-field>
        <mat-form-field appearance="fill" class="full-width">
          <mat-label>Date Started</mat-label>
          <input matInput [(ngModel)]="learningItem.dateStarted" [matDatepicker]="picker" />
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-raised-button color="primary" (click)="onCancel()">Cancel</button>
      <button mat-raised-button color="primary" (click)="onSave()">Save</button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      .full-width {
        width: 100%;
      }
    `,
  ],
})
export class LearningModalComponent {
  learningItem = {
    technology: String,
    description: String,
    dateStarted: new Date().toISOString(),
    isCompleted: Boolean
  };

  constructor(public dialogRef: MatDialogRef<LearningModalComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.learningItem);
  }
}
