// search.service.ts
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchValue = new BehaviorSubject<string>('');

  setSearchValue(value: string) {
    this.searchValue.next(value);
  }

  getSearchValue() {
    return this.searchValue.asObservable();
  }
}
