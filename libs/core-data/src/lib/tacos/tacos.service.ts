import { Injectable, ɵALLOW_MULTIPLE_PLATFORMS } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE_URL = `https://level-up-api-snfwxrkzok.now.sh`;

@Injectable({
  providedIn: 'root'
})
export class TacosService {
  model = 'tacos';

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get<any>(this.getUrl())
      .pipe(map(res => res));
  }

  create(taco) {
    return this.http.post(this.getUrl(), taco);
  }

  update(taco) {
    return this.http.patch(this.getUrlForId(taco.id), taco);
  }

  delete(tacoId) {
    return this.http.delete(this.getUrlForId(tacoId));
  }
}
