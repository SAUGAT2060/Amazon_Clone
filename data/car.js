export class Car{
  brand ;
  model ;
  speed= 0;
  isTrunkOpen= false;

  constructor(CarDetails){

    this.brand = CarDetails.brand;
    this.model = CarDetails.model;
    


  }

  displayInfo(){

     return  console.log(`${this.brand} ${this.model} ${this.speed} km/hr ${this.isTrunkOpen}`);

  }

  go(){
     this.speed+=5;
    if(this.speed>200){
      this.speed =200;
    }
  }
  brake(){
     this.speed-=5;
    if(this.speed<0){
      this.speed=0;
    }
  }

  openTrunk(){
    if(this.isTrunkOpen){
      this.isTrunkOpen = false;
    }
    else{
      this.isTrunkOpen = true;
    }
  }
  closeTrunk(){
    if(!this.isTrunkOpen){
      this.isTrunkOpen = true;
    }
    else{
      this.isTrunkOpen = false;
    }
  }

}
const obj1 = new Car({

  brand:'Toyota',
  model:'Corolla'
});
const obj2= new Car({

  brand:'Tesla',
  model:'Model3'

});

obj1.go();
obj1.go();
obj1.go();
obj1.go();
obj1.displayInfo();

obj2.brake();
obj2.brake();
obj2.brake();
obj2.brake();
obj2.displayInfo();



