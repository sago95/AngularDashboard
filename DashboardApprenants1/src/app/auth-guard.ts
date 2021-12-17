import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AuthGuard implements CanActivate {

    private user:any;

    constructor(private route: Router ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):Observable<boolean> | Promise<boolean> | boolean {
        this.user = JSON.parse(localStorage.getItem('Admin')!);
        if(this.user!=null) {
            return true;
        }else {
            this.route.navigate(['/login']);
        }
    }
}