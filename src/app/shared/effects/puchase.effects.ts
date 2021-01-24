import {
  refreshPurchaseDone,
  refreshPurchaseRequest,
} from '@actions/purchase.action';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class PurchaseEffects {
  constructor(private actions$: Actions) {}

  // refreshPurchase$=createEffect(()=>this.actions$.pipe(
  //     ofType(refreshPurchaseRequest),

  //     switchMap(()=>{
  //         if(sessionStorage.getItem('app-state'))
  //         return JSON.parse(sessionStorage.getItem('app-state')).pur.pipe(
  //             map(purchase=> refreshPurchaseDone())
  //         )
  //     })
  // ));
}
