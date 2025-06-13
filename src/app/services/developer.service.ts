import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Developer } from '../models/developer.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  private apiUrl2 = "https://jsonplaceholder.typicode.com/users";
  private apiUrl = "assets/developers.json";

  constructor(private http: HttpClient) { }

  
  getDevelopers(): Observable<Developer[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => users.map(u => new Developer(u.id, 
                                                u.name, 
                                                u.email, 
                                                u.role, 
                                                u.imageUrl, 
                                                u.videoUrls, 
                                                u.expertise, 
                                                u.technologies, 
                                                u.experience,
                                                u.location,
                                                u.description)))
    );
  }

  getDeveloperById(id:number): Observable<Developer | undefined>{
      return this.getDevelopers().pipe(
        map(developers => developers.find(dev => dev.id === id))
      );
  }
}
