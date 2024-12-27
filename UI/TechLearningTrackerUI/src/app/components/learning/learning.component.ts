import { Component, OnInit } from '@angular/core';
import { LearningService, LearningItem } from '../../services/learning.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LearningModalComponent } from './add-learning-dialog.component';


@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [CommonModule,MatTableModule,MatButtonModule, MatCardModule,DatePipe], // Import CommonModule for *ngFor and other structural directives
  templateUrl: './learning.component.html',
  providers: [DatePipe], // Add DatePipe here 
})
export class LearningComponent implements OnInit {
  

  displayedColumns: string[] = ['id', 'technology', 'description','dateStarted','isCompleted'];

  learningItems: LearningItem[] = [];

  constructor(public dialog: MatDialog,private learningService: LearningService) {}

  openAddModal(): void {
    const dialogRef = this.dialog.open(LearningModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const newId = this.learningItems.length + 1;
        this.learningItems.push({ id: newId, ...result });
      }
    });
  }

  ngOnInit(): void {

    this.learningService.getLearningItems().subscribe({
      next: (items) => {
        console.log('API Response:', items); // Log the API response
        
        this.learningItems = items.map((item) => ({
          ...item,
        }));
      },
      error: (err) => {
        console.error('Error fetching learning items:', err); // Log any errors
      },
    });
  }  
}
