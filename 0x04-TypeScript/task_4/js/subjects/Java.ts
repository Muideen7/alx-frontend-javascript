namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }


    export class Java extends Subject{
        getRequirements () {
            return 'Here is the list of requirements for Java';
        }

        getAvailableTeacher () {
            const experience = this.teacher.experienceTeachingJava;
            return experience > 0 ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
        }
    }
}
