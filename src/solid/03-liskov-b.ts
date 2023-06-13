export abstract class Vehicle {
    
    // getNumberOfSeats():number {
    //     throw new Error("Method not implemented");
    // }

    abstract getNumberOfSeat():number;
}

export class Tesla extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeat() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle { 

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeat() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeat() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeat() {
        return this.numberOfSeats;
    }
}

export class Volvo extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeat() {
        return this.numberOfSeats;
    }
}