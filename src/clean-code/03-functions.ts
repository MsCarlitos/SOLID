(() => {
    // Funcion para obtener informacion de una pelicula por id
    function getAllMovies( movieId: string ) {
        console.log({ movieId });
    }

    function getMovieById( id: string ) {
        console.log({ id });
    }

    // Funcion para obtener informacion de los actores de una pelicula - Actores o cast
    // id = movieId getMovieCast
    function getAllMovieActors( id: string ) {
        console.log({ id });
    }

    function getMovieActorById( id: string ){
        console.log({ id });
    }

    // Funcion para obtener el bio del actor por el id
    function getUsuario( ActorId: string ) {
        console.log({ ActorId });
    }

    function getActorBioById( id: string ) {
        console.log({ id });
    }

    // Crear una pelicula
    function movie( title: string, description: string, rating: string, cast: string[] ) {
        console.log({ title, description, rating, cast });
    }

    interface Movie {
        cast:        string[];
        description: string;
        title:       string;
        rating:      string;
    }

    function createMovie({ title, description, rating, cast }: Movie ) {
        console.log({ title, description, rating, cast });
    }


    // Crear un nuevo actor
    function createActorIfActorNotExists( fullName: string, birthdate: Date ): boolean {
        // Tarea asincrona para verificar nombre
        // ...
        // ...
        if(fullName === 'Carlos Mendoza') return false;

        console.log('Crear actor', birthdate);
        return true;
    }

    function createActor( fullName: string, birthdate: Date ): boolean {

        // Tarea asincrona para verificar nombre
        // ...
        // ...
        if(fullName === 'Carlos Mendoza') return false;

        console.log('Crear actor',birthdate);
        return true;
    }

    // Continuacion

    const getPayAmountOriginal= ({isDead = false, isSeparate = true, isRetired = false }) => {
        let result;
        if( isDead ) {
            result = 1500;
        } else {
            if( isSeparate ) {
                result = 2500;
            } else {
                if( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000;
                }
            }
        }
        return result;
    }

    const getPayAmount = ({isDead = false, isSeparate = true, isRetired = false }): number => {

        if( isDead ) return 1500;

        if( isSeparate ) return 2500;

        return ( isRetired ) ? 3000 : 4000;
    }

} )();