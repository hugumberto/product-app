import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IAppState } from 'app/app-state';
import { SeoService } from 'app/shared/services/seo.service';
import { Observable } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  pageTitle!: string;
  isShowHome: boolean | undefined;

  purchases$ = this.store.pipe(select((state) => state.purchases));

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private seoService: SeoService,
    private store: Store<IAppState>
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.route),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((event) => {
        this.seoService.updateTitle(event.title);

        this.pageTitle = event.title;
        this.isShowHome = event.isShowHome;
      });
  }
  get amountBasket$(): Observable<number> {
    return this.purchases$.pipe(
      map((purchase) => purchase.reduce((total, p) => total + p.amount, 0))
    );
  }
}
