enum Proficiency {
    Junior = 'junior',
    Regular = 'regular',
    Expert = 'expert'
}

interface Candidate{
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    mainLanguage: string,
    proficiency: string,
    hobbies: string[]
}

const candidate: Candidate = {
    firstName: 'John',
    lastName: 'Doe',
    age: 29,
    email: 'john.doe@com',
    mainLanguage: 'C#',
    proficiency: Proficiency.Expert,
    hobbies: ['sport', 'netflix', 'books']
}

interface Validator {
    isValid(candidate: Candidate): boolean;
}

class EmailValidator implements Validator{
    constructor(protected readonly minLength: number){}


    isValid({email}: Candidate): boolean {
        return email != null && email.length > this.minLength;
    }
}

class ProficiencyValidator implements Validator{
    constructor(protected readonly candidate: Partial<Candidate>) {}

    isValid({proficiency}: Candidate): boolean {
        if (this.candidate.age <25){
            return true;
        }

        return proficiency !== Proficiency.Junior && proficiency !== Proficiency.Regular;
    }
}

function getName(candidate: Candidate): string{
    return '${candidate.firstName} ${candidate.lastName}';
}

function processCandidate(candidate: Candidate) {
    const fullName = getName(candidate);
    console.log('Hello, '+fullName+ '!');
    const validators = [new EmailValidator(5), new ProficiencyValidator(candidate)];

    const isValid = validators.every(validator => validator.isValid(candidate))

    if(!isValid){
        return;
    }
    if (candidate.age.length < 2) {
        console.log('You are too young');
        return;
    }
    console.log('Your resume is being processed');
}

processCandidate(candidate)