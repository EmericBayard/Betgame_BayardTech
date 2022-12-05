import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { Constants } from 'src/models/contants.models';

@Injectable({
providedIn: 'root'
})
export class AuthService {
constructor(
private httpService: HttpService,
private storageService: StorageService,
private router: Router
) {}

login(postData: any): Observable<any> {
return this.httpService.post('auth/login', postData);
}

signup(postData: any): Observable<any> {
return this.httpService.post('auth/signup', postData);
}

logout() {
this.storageService.removeStorageItem(Constants.AUTH).then(res => {
this.router.navigate(['auth/login']);
});
}
}
