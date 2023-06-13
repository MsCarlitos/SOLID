(()=>{
    // Ejemplo 
    // Archivos a evaluar - files to evaluate
    const fileToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true  },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 6, flagged: false },
        { id: 7, flagged: true  },
    ];

    const filesToDelete = fileToEvaluate.map( files => files.flagged );
    
    // Malos
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };
    
    // Mejor
    class User { };
    interface User { };

    // TODO: Tarea
    // dia de hoy - today
    const ddmmyyyy = new Date();
    const today = new Date();
    
    // dias transcurridos - elapsed time in days
    const d: number = 23;
    const elapsedTimeInDays = 23;

    // Número de archivos en un directorio - number of files in directory
    const dir = 33;
    const numberOfFilesInDirectory = 33;

    // primer nombre - first name
    const nombre = 'Carlos';
    const firstName = 'Carlos';

    // primer apellido - last name
    const apellido = 'Mendoza';
    const lastName = 'Mendoza';

    // dias desde la ultima modificacion - days since modification
    const dsm = 12;
    const daysSinceModification = 12;

    // cantidad maxima de clases por estudiante - max classes per student
    const max = 6;
    const maxClassesPerStudent = 6;
})();