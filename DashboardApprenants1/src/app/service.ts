import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8080';

  public registerApprenant(apprenantData: any) {
    return this.http.post(this.API + '/apprenants', apprenantData);
  }

  public getApprenant() {
    return this.http.get(this.API + '/apprenants');
  }

  public deleteApprenant(id: any) {
    return this.http.delete(this.API + '/apprenants?id=' + id);
  }

  public updateApprenant(apprenant: any) {
    return this.http.put(this.API + '/apprenants', apprenant);
  }

  public registerFormateur(formateurData: any) {
    return this.http.post(this.API + '/formateurs', formateurData);
  }

  public getFormateur() {
    return this.http.get(this.API + '/formateurs');
  }

  public deleteFormateur(id: any) {
    return this.http.delete(this.API + '/formateurs?id=' + id);
  }

  public updateFormateur(formateur: any) {
    return this.http.put(this.API + '/formateurs', formateur);
  }

  public dateInterval(dateDebut:any,dateFin:any){
    return this.http.get(this.API+"/entre/"+dateDebut+"&"+dateFin)
  }

  public ListOne(ide:any){
    return this.http.get(this.API+"/find/nid="+ide)
  }

  public ListDate(jour:any){
    return this.http.get(this.API+"/find/date="+jour)
  }

  public ListWeek(semaine:any) {
    return this.http.get(this.API+"/find/week="+semaine)
  }

  public ListMois(mois:any) {
    return this.http.get(this.API+"/find/month="+mois)
  }

  public verification(login: string, password: string) {
    return this.http.get(this.API+"/admin/"+login+"&"+password)
  }
}