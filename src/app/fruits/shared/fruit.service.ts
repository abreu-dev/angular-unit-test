import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Fruit } from './fruit.model';

@Injectable()
export class FruitService {
    public serviceUrl: string;

    constructor(private httpClient: HttpClient) { 
        this.serviceUrl = `${environment.apiUrl}/fruits`;
    }

    public getAll(): Observable<Fruit[]> {
        return this.httpClient.get<Fruit[]>(this.serviceUrl);
    }

    public getById(id: number): Observable<Fruit> {
        return this.httpClient.get<Fruit>(`${this.serviceUrl}/${id}`);
    }

    public add(fruit: Fruit): Observable<any> {
        return this.httpClient.post(this.serviceUrl, fruit);
    }

    public update(fruit: Fruit): Observable<any> {
        return this.httpClient.put(`${this.serviceUrl}/${fruit.id}`, fruit);
    }

    public delete(id: number): Observable<any> {
        return this.httpClient.delete(`${this.serviceUrl}/${id}`);
    }
}