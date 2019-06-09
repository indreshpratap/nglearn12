import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiPath;

export interface ApiResponse {
    status:boolean;
    data?:any;
    error?:string;
}
@Injectable({ providedIn: 'root' })
export class ApiClient {


    constructor(private http: HttpClient) {}

    public get(route: String) {
        return this.http.get<ApiResponse>(this.getUrl(route));
    }

    public post(route: String, data: any) {
        return this.http.post<ApiResponse>(this.getUrl(route), data);
    }

    private getUrl(path) {
        return API_URL + path;
    }
}