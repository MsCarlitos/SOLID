(()=> {

    //No aplicando el principio de responsabilidad unica

    type Gender = 'M'|'F'

    interface PersonProps {
        birthdate: Date;
        gender   : Gender;
        name     : string;
    }

    class Person {
        public birthdate: Date;
        public gender   : Gender;
        public name     : string;

        constructor({ birthdate, gender, name }: PersonProps) {
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }
    }

    interface UserProps {
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class User extends Person {
        public lastAccess: Date;
        public email: string;
        public role: string;
        constructor({ email, role, name, gender, birthdate }: UserProps) {
            super({name, gender, birthdate});
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }
        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate
        }:  UserSettingsProps) {
            super({ email, role, name, gender, birthdate });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const user:UserSettingsProps = {
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'carlos40033@gmail.com',
        role: 'admin',
        name: 'Carlos',
        gender: 'M',
        birthdate: new Date('1995-12-14'),
    }
    const userSettings = new UserSettings( user );

    console.log({ userSettings });
})();
