import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RawgGameResponse } from '../interfaces/gameDatabaseApi';

@Injectable({
    providedIn: 'root',
})
export class GameDatabaseApiService {
    constructor(private http: HttpClient) {}

    private apiKey = 'key=7871b3c74d5c40f2a506864ad6e9390e';
    private url = 'https://api.rawg.io/api/';

    public connect(year : number): Observable<RawgGameResponse> {
        const url = `${this.url}games?${this.apiKey}&dates=${year}-01-01,${year}-12-31`;
        return this.http.get<RawgGameResponse>(url);
    }
}
