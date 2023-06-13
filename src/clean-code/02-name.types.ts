(() => {
    // Arreglo de temperaturas celsius
    const arrayOfNums = [33.6,12.34];

    // Direccion ip del servidor
    const ip = '123.123.123.123';

    // Listado usuarios
    const people = [
        {
            id: 1,
            email: 'carlos@google.com'
        },
        {
            id: 2,
            email: 'alberto@google.com'
        },
        {
            id: 3,
            email: 'juan@google.com'
        }
    ];

    // Listado de emails de los usuarios
    const emails = people.map( u => u.email);

    // Variables booleanas de yb video juego
    const jump = false;
    const run = true;
    const noTieneItems = true;
    const loading = false;

    // Otros ejercicios
    // Tiempo inicial
    const start = new Date().getTime();
    // ...
    // 3 doritos despues
    // ...
    // Tiempo final
    const end = new Date().getTime() - start;

    // Funciones
    // Obtiene libros
    function book() {
        throw new Error("Function not implemented");
    }

    //Obtiene libros desde un URL
    function BooksUrl( u: string ) {
        throw new Error("Function not implemented");
    }

    // Obtiene el area de un cuadrado basado en sus lados
    function areaCuadrado( s: number ) {
        throw new Error("Function not implemented");
    }

    // Imprime el trabajo
    function printJobIsActive() {
        throw new Error("Function not implemented");
    }

    // TODO: Tarea

    const temperaturesCelsius = [33.6,12.34];

    const serverIP = '123.123.123.123';

    const users = [
        {
            id: 1,
            email: 'carlos@google.com'
        },
        {
            id: 2,
            email: 'alberto@google.com'
        },
        {
            id: 3,
            email: 'juan@google.com'
        }
    ];

    const userEmails = users.map( user => user.email);

    const canJump = false;
    const canRun = true;
    const hasItems = false;
    const isLoading = true;

    const startTime = new Date().getTime();
    // ...
    // 3 doritos despues
    // ...
    const endTime = new Date().getTime() - startTime;

    function getBooks() {
        throw new Error("Function not implemented");
    }

    function getBooksByUrl( url: string ) {
        throw new Error("Function not implemented");
    }

    function getSquareArea( side: number ) {
        throw new Error("Function not implemented");
    }

    function printJob() {
        throw new Error("Function not implemented");
    }
})()
