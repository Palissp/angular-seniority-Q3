import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, debounceTime, Observable, Subject, takeUntil } from 'rxjs';
import { Player } from '../../interfaces/player-interface';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  search:FormControl = new FormControl();

  subItems$: BehaviorSubject<string> = new BehaviorSubject('');
  player$!: Observable<Player>;
  listOfPlayers$!: Observable<Player[]>;
 

  destroy$: Subject<boolean> = new Subject<boolean>()

  constructor() {
    this.observerChangePublicSearch();
   }

  ngOnInit(): void {
  }
  
  observerChangePublicSearch() {
    this.search.valueChanges
      .pipe(
        debounceTime(500),
        takeUntil(this.destroy$)
      ).subscribe(value => this.subItems$.next(value ))
  }
  
}
