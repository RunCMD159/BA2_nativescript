import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PerformanceService {

    constructor(private http: HttpClient) {
    }


    public runWarmUpPhase(): Observable<any> {
        let data = ['WARM UP'];
        return Observable.create((observer) => {
            observer.next(data)
        });
        // return this.http.get("")
    }

    public runPerformanceTest(data): Observable<any> {

        return Observable.create((observer) => {
            observer.next(data)
        });
        // return this.http.get("")
    }
}
