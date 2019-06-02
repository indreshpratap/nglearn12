import { Component, OnDestroy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, filter, retry } from 'rxjs/operators';

@Component({
    selector: 'app-observables',
    template: `<button (click)="start()">Start</button>`,
    styles: [``]
})
export class ObservableComponent implements OnDestroy {

    sub2;
    start() {
        let counter = 1;
        let obser = new Observable(ob => {

            ob.next(1);
            ob.next(2);
            setTimeout(() => {
                ob.next(3);
                //  ob.complete();
            }, 1000);
            setTimeout(() => {
                console.log("Send the data")
                ob.next(4);
                ob.next(2);
                // ob.error(new Error("Failed"))

            }, 2000);
            setTimeout(() => {
                ob.next(5);
                ob.next(3);

            }, 3000);


        });


        let obser2 = interval(1000);
        this.sub2 = obser2.subscribe((data) => {
            console.log("Interval = ", data);
        });

        // setTimeout(() => {
        //     this.sub2.unsubscribe();
        // }, 4000);


        // obser
        //     .pipe(map((item: number) => item * 10))
        //     .subscribe(res => {
        //         console.log("Data is = ", res);
        //     });

        let sub = obser
            .pipe(
                retry(2),
                filter(item => item > 2),
                //   map(item => { return { count: item } })
            )
            .subscribe((res) => {
                console.log("Second = ", res);
            }, (err) => {
                console.log("error here", err)
            }, () => {
                console.log("Completed");
            });

        //connector is cancelling the request
        setTimeout(() => {
            console.log("unsubscribing");
            sub.unsubscribe();
        }, 1400);
    }


    ngOnDestroy() {
        console.log("Destroying...");
        if (this.sub2) {
            this.sub2.unsubscribe();
        }

    }




}
