import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { count, filter, from, fromEvent, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'angular-observables';

  data: any[] = [];

  @ViewChild('createbtn') createBtn : ElementRef;
   createBtnObs;
  
  array1 = [1,3,5,7,9];
  array2 = ['A','B','C','D'];


  //1.CREATE AN OBSERVABLE using observable constructor

  // myObservable=new Observable((observer) =>{
  //   //observer.next([1,2,3,4,5]);

  //   // streaming of data
  // setTimeout(() => {observer.next(1)}, 1000);
  // setTimeout(() => {observer.next(2)}, 2000);
  // setTimeout(() => {observer.next(3)}, 3000);
  // //setTimeout(() => {observer.error(new Error('Something went wrong. Please try again later.'))},4000);
  // setTimeout(() => {observer.next(4)}, 4000);
  // setTimeout(() => {observer.next(5)}, 5000);
  // setTimeout(() => {observer.complete()}, 6000);
  // });

  //2.Creat an observable using 'of' operator of rxjs

 // myObservable = of(this.array1,this.array2,20,30,'Hello',true);

 //3.Creat an observable using 'from' operator of rxjs

 //myObservable = from(this.array1);

 // converting promise into observable but it will emit the data same as promise
 promiseData = new Promise((resolve,reject) => {
      resolve([10,20,30,40,50]);
 })

 //myObservable = from(this.promiseData);

  // myObservable - 2,4,6,8,10,12
  //Result - 10,20,30,40,50,60
  myObservable = from([2,4,6,8,10,12]).pipe(map( (val) => {
    return val * 5;
}), filter( (val,i)=> {
 return  val % 4 === 0 ;
} ));

  // transformObs = 10,20,30,40,50,60
  // transformObs = this.myObservable.pipe(map( (val) => {
  //      return val * 5;
  // }), filter( (val,i)=> {
  //   return  val % 4 === 0 ;
  // } ))

  // 20,40,60
  // filteredObs = this.transformObs.pipe(filter( (val,i)=> {
  //   return  val % 4 === 0 ;
  // } ))

  GetAsyncData(){

    //Observer
    //next,error,complete
    // this.myObservable.subscribe((val:any) =>{
    //     this.data.push(val);       
    // },
    //   (err) =>{
    //       alert(err.message);
    //   },
    // () => {
    //   alert('All the data is streamed!');
    // });

    

    this.myObservable.subscribe({
      next: (val: any) => {
        this.data.push(val);
        console.log(val);
        
      },
      error(err){
        alert(err.message);
      },
      complete(){
        alert('All the data is streamed!');
      }
    })

  }

  // code for fromEvent operator

    // buttonClicked(){
    //   let count =0;
    //   this.createBtnObs = fromEvent(this.createBtn.nativeElement, 'click')
    //   .subscribe((data) => {
    //     console.log(data);
    //     this.showItem(++count);
    //   });
    // }

    // code for fromEvent operator

    ngAfterViewInit(){
     // this.buttonClicked()
    }

    // code for fromEvent operator

    // showItem(val){
    //   let div = document.createElement('div');
    //   div.innerText = 'Item' + val;
    //   div.className = 'data-list';
    //   document.getElementById('container').appendChild(div);
    // }

}
