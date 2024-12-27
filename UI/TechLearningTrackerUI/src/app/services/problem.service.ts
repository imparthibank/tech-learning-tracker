import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ProblemItem {
  id: number;
  title: string;
  description: string;
  solution: string;
  dateSolved: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProblemService {
  private apiUrl = `${environment.apiBaseUrl}/problem`;

  constructor(private http: HttpClient) {}

  getProblemItems(): Observable<ProblemItem[]> {
    return this.http.get<ProblemItem[]>(this.apiUrl);
  }

  addProblemItem(item: ProblemItem): Observable<ProblemItem> {
    return this.http.post<ProblemItem>(this.apiUrl, item);
  }
}
