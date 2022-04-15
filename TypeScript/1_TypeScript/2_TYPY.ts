let fiirstName = 'Przemek';
const lasName = 'Smyrdek';

let email: 'przemek.smyrdek@gmail.com' = 'przemek.smyrdek@gmail.com';

type GridSize = 8 | 16

function createStage(gridSize: GridSize): GridSize{
    return 8;
}
//createStage(8);
///////////////////////////////////////////////////////////////////////////////////////////////////////

//UNIE
type Margin = string | number;

function setMargin(element: HTMLElement, verticalMargin: Margin, horizontalMargin: Margin){
    let vertical = '';
    let horizontal = '';

    vertical = typeof verticalMargin === 'string'
        ? `${verticalMargin}px`
        : `${verticalMargin.toString()}px`

    horizontal = typeof horizontalMargin === 'string'
        ? `${horizontalMargin}px`
        : `${horizontalMargin.toString()}px`

    element.style.margin = `${vertical} ${horizontal}`;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////

//UNIE_2

class Book{
    read() {}
    lend() {}
}

class Leaflet{
    read(){}
    throwAway(){}
}

function consume(readable: Book | Leaflet){
    readable.read()

    if (readable instanceof Book){
        readable.lend()
        readable.read()
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
//INTERSECTION TYPES

interface ColdShower {
    refresh();
}

interface HotShower {
    relax();
}

type Shower = ColdShower & HotShower;

function takeShower(shower: Shower){
    shower.relax()
    shower.refresh()
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
//INTERSECTION TYPES_2

interface Logger {
    log(msg: string)
}

interface Person {
    firstName: string;
}

type LoggablePerson = Person & Logger;

function processPerson(person: LoggablePerson){
    person.log(person.firstName);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
//UTILITY TYPES

interface Student{
    id?: string;
    age?: string;
    email?: string;
    firstName: string;
    lastname: string;
}

function process(student: Required<Student>){
}

function checkData(student: Partial<Student>){
}

function greet(student: Pick<Student, 'firstName' | 'lastname'>){
    console.log(`${student.firstName} ${student.lastname}`)
}

type GreetFn = (student: Pick<Student, 'firstName' | 'lastname'>) => Student;

type ParamsOfGreet = Parameters<GreetFn>;
type ResultOfGreet = ReturnType<GreetFn>;