import { Tesla, Audi, Toyota, Honda, Vehicle, Volvo } from './03-liskov-b';

(() => {
    
    const printCarSeats = ( cars: Vehicle[] ) => {
        
        // for (const car of cars) {
         
        //     if( car instanceof Tesla ) {
        //         console.log( 'Tesla', car.getNumberOfSeat() )
        //         continue;
        //     }
        //     if( car instanceof Audi ) {
        //         console.log( 'Audi', car.getNumberOfSeat() )
        //         continue;
        //     }
        //     if( car instanceof Toyota ) {
        //         console.log( 'Toyota', car.getNumberOfSeat() )
        //         continue;
        //     }
        //     if( car instanceof Honda ) {
        //         console.log( 'Honda', car.getNumberOfSeat() )
        //         continue;
        //     }         
        //     if( car instanceof Volvo ) {
        //         console.log( 'Volvo', car.getNumberOfSeat() )
        //         continue;
        //     }         
        // }

        cars.forEach( car => {
            console.log( car.constructor.name, car.getNumberOfSeat );
        })
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(2),
    ];

    printCarSeats( cars );

})();