// Complete the js code
function Car(make, model) {
	constructor(make,model){
		this._make = make;
		this._model = model;
	}
	getMakeModel(){
		return `${this.make} ${this.model}`;
	}
}

function SportsCar(make, model, topSpeed) extends Car {
    constructor(make, model, topSpeed){
		super(make, model,topSpeed){
			this._topspeed = topSpeed;
		}
	}
	getTopSpeed(){
		return `${this.topSpeed}`;
	}
	
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
