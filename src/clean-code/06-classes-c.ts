(()=> {

    // Aplicando el principio de responsabilidad unica
    // Priorizar la composicion frernte a la herencia

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
    }

    class User {
        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({ email, role }: UserProps) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }
        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor({
            workingDirectory,
            lastOpenFolder,
        }:  SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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

    class UserSettings {
        public person   : Person;
        public user     : User;
        public settings : Settings;

        constructor({
            email, role,
            name, gender, birthdate,
            workingDirectory,
            lastOpenFolder
        }: UserSettingsProps) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory });
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'carlos40033@gmail.com',
        role: 'admin',
        name: 'Carlos',
        gender: 'M',
        birthdate: new Date('1995-12-14'),
    });

    console.log({ userSettings });
})();
