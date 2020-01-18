import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  constructor() {
    this.subscription = this.regresaObservable()
    .subscribe(
      numero => console.log( 'Subs ', numero),
      error => console.log( 'Error en el Obs ', error),
      () => console.log( 'Termino en el Obs ')
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('La pagina se va a cerrar');
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable( (observe: Subscriber<any>) => {
        let contador = 0;
        let intervalo = setInterval ( () => {
          contador ++;
          const Salida = {
            valor: contador
          };
        observe.next( Salida );
        // if (contador === 5) {
        //   clearInterval( intervalo );
        //   observe.complete();
        // }

        }, 1000 );
      }).pipe(
        map(resp => resp.valor ),
        filter( (valor, index ) => {
          if ((valor % 2) === 1 ) {
            return true; // es impar
          } else {
            return false; // es par
          }
        }
        )
       );
  }

  // constructor() {
  //   this.regresaObservable().pipe( retry(2) )
  //   .subscribe(
  //     numero => console.log( 'Subs ', numero),
  //     error => console.log( 'Error en el Obs ', error),
  //     () => console.log( 'Termino en el Obs ')
  //   );
  // }

  // regresaObservable(): Observable<number> {
  //   return new Observable( (observe: Subscriber<number>) => {
  //       let contador = 0;
  //       let intervalo = setInterval ( () => {
  //         contador += 1;
  //       observe.next( contador );
  //       if (contador === 5) {
  //         clearInterval( intervalo );
  //         observe.complete();
  //       }
  //       if (contador === 2 ) {
  //         clearInterval( intervalo );
  //         observe.error('Auxilio!');
  //       }
  //       }, 1000 );
  //     });
  // }

}
