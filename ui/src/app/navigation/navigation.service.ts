import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private _activeSectionObservable = new BehaviorSubject<string>(null);
  private _activeSection: string;

  enter(section: string) {
    this._activeSectionObservable.next(section);
    this._activeSection = section;
    console.log('enter', section);
  }

  get activeSection(): string {
    return this._activeSection;
  }

  get activeSectionObservable(): BehaviorSubject<string> {
    return this._activeSectionObservable;
  }
}
