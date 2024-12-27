import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface LearningItem {
  id: number;
  technology: string;
  description: string;
  dateStarted: string;
  isCompleted: boolean;
}

@Injectable({
  providedIn: 'root'
})


export class LearningService {
  private apiUrl = `${environment.apiBaseUrl}/learning`;

  constructor(private http: HttpClient) { }

  getLearningItems(): Observable<LearningItem[]> {
    return this.http.get<LearningItem[]>(this.apiUrl);
  }

  addLearningItem(item: LearningItem): Observable<LearningItem> {
    return this.http.post<LearningItem>(this.apiUrl, item);
  }
}
