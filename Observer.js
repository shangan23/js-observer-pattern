/**
 * Observer pattern implementation with Javascript
 * Prerequisite : Prototype concept.
 * Rxjs: http://reactivex.io/rxjs/manual/tutorial.html
 */

function Observable(subscribe) {
  this.subscribe = subscribe;
}

const input = document.querySelector("input");
const p = document.querySelector("p");

Observable.fromEvent = (ele, name) => {
  return new Observable(ob => {
    const callback = (event) => ob.next(event);
    ele.addEventListener(name, callback, false);
    return () => ele.removeEventListener(name, callback, false);
  });
};

Observable.prototype.map = function(mapFunction){
  return new Observable(ob=>{
    return this.subscribe({
      next: val => ob.next(mapFunction(val))
    });
  });
}

const info = Observable.fromEvent(input, "input")
.map(event => event.target.value);

info.subscribe({
  next: val => {
    //val = val.target.value;
    console.log("Event message:", val);
    p.innerHTML = val;
  }
});



