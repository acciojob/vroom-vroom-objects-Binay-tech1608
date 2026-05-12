// Complete the js code
class Car {
	constructor(make,model){
		this._make = make;
		this._model = model;
	}
	get make(){
		return this._make;
	}
	get model(){
		return this._model;
	}
	getMakeModel(){
		return `${this.make} ${this.model}`;
	}
}

class SportsCar extends Car {
    constructor(make, model, topSpeed){
		super(make, model);
			this._topSpeed = topSpeed;
		
	}
	get topSpeed(){
		return this._topSpeed;
	}
	getTopSpeed(){
		return `${this.topSpeed}`;
	}
	
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
