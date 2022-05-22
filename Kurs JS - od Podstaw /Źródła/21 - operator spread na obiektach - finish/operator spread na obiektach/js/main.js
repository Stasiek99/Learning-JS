const person = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 30
};

const programmer = {
    job: "programista",
    salary: 15000
};

// const employee = Object.assign({}, person, programmer);

const employee = {
    ...person,
    ...programmer
};

console.log(employee);
