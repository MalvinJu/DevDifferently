import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Folder } from '../../core/models/Folder';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {
    constructor(
        private httpClient: HttpClient
    ) 
    { 

    }

    public getAllFolder(): Observable<Folder[]> {
        return this.httpClient
            .get<Folder[]>("/assets/data/folder.json", {
                responseType: 'json',
            })
            .pipe(
                catchError(res => this.handleError(res)),
            );
    }

    private handleError(err: any): Observable<any> {
        if (err == null) { return of([]); }
        console.log(err);
        return of(err);
    }
}
