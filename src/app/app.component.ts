import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  observable$: Observable<number[]>;
  observer: (data: number[]) => void;
  ngOnInit(): void {
    this.observable$ = new Observable<number[]>((data) => {
      data.next([1, 2]);
      data.next([3, 4]);
      data.error("hatta var !!!");
      data.next([5, 6]);
      data.complete();
      data.next([8, 9]);
    });

    //observer = (data) => { write code...} bu Funuksiadi

    this.observer = (data: number[]) => {
      console.log("observerA", data);
    };
    this.observable$.subscribe(this.observer);

    this.observable$.subscribe((data) => {
      console.log("observerB", data);
    });
  }
}
