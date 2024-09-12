import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit{

  ngOnInit(){
    // Subject emits next set of values
    
    // Difference between Subject and Observable
     // let obs =  new Observable((observer)=> {observer.next(Math.random())});

     //Subscriber 1
     //obs.subscribe((data) => {console.log(data)});

     //Subscriber 2
    // obs.subscribe((data) => {console.log(data)});

     //const subject = new Subject();

      //Subscriber 1
    //  subject.subscribe((data) => {console.log(data)});

      //Subscriber 2
    //  subject.subscribe((data) => {console.log(data)});

    //  subject.next(Math.random());

    //AJAX call
  //  const data = ajax('https://randomuser.me/api/')

  //   data.subscribe((res)=>console.log(res));
  //   data.subscribe((res)=>console.log(res));
  //   data.subscribe((res)=>console.log(res));

    //AJAX call
    // const subject = new Subject();
    // const data = ajax('https://randomuser.me/api/')

    // subject.subscribe((res)=>console.log(res));
    // subject.subscribe((res)=>console.log(res));
    // subject.subscribe((res)=>console.log(res));
    
    // data.subscribe(subject);

    // BehaviourSubject : Behavior Subject  emits present and  next set of values

    // const subject = new BehaviorSubject<number>(100);

    // //Subscriber 1
    // subject.subscribe((data) => {console.log("Subscriber 1: " + data)});

    //   //Subscriber 2
    // subject.subscribe((data) => {console.log("Subscriber 2: " + data)});

    // subject.next(2020);

    // //Subscriber 3
    // subject.subscribe((data) => {console.log("Subscriber 3: " + data)});

    // subject.next(2023);

    //ReplaySubject

    //const subject = new Subject();
    //const subject = new BehaviorSubject<number>(100);

    //Subscriber 1
    //subject.subscribe((data) => {console.log("Subscriber 1: " + data)});

      //Subscriber 2
   // subject.subscribe((data) => {console.log("Subscriber 2: " + data)});

   // subject.next(2020);

    //Subscriber 3
   // subject.subscribe((data) => {console.log("Subscriber 3: " + data)});

   // subject.next(2023);


    // ReplaySubject : Replay Subject  emits previous,present and  next set of values.

    //const subject = new Subject();
    // const subject = new ReplaySubject<number>(2);

    // subject.next(100);
    // subject.next(200);
    // subject.next(300);
    

    // //Subscriber 1
    // subject.subscribe((data) => {console.log("Subscriber 1: " + data)});

    //   //Subscriber 2
    // subject.subscribe((data) => {console.log("Subscriber 2: " + data)});

    // subject.next(2020);

    // //Subscriber 3
    // subject.subscribe((data) => {console.log("Subscriber 3: " + data)});

    // subject.next(2023);

    // AsyncSubject

    // const asyncSubject = new AsyncSubject();

    // asyncSubject.next(100);
    // asyncSubject.next(200);
    // asyncSubject.next(300);

    // asyncSubject.subscribe((data)=>console.log(`Subscriber 1: ${data}`));

    // asyncSubject.complete();
    // asyncSubject.next(400);
    

    // asyncSubject.subscribe((data)=>console.log(`Subscriber 2: ${data}`));

    //Promise vs Observable 

    const promise = new Promise((resolve,reject)=>{
      console.log('Promise is called');
      resolve(100);
      resolve(200);
      resolve(300);
    });

    promise.then((data)=>{
      console.log(data);      
    })

    const obs = new Observable((sub)=>{
      console.log('Observable is called');
      sub.next(100);
      sub.next(200);
      sub.next(300);
    });

    obs.subscribe((data)=>{
      console.log(data);      
    });
    
  }

}
