let globalSum = 0;

// Impure function as modifies out of scope variable
function addNumbers(num1, num2){
    globalSum += num1 + num2;
    return num1 + num2;
}



// Impure function as return different value each time
function getProbablity(){
    return Math.random();
}



// Impure function as side effect
function printName(name){
    console.log("The name is " + name);
}



// Pure function as no side effects and no mutations
function reverse(input){
    let output = "";
    for(let index = input.length-1; index >= 0; index--){
        output += input[index];
    }
    return output;
}



const student = {
    name : "Mitansh",
    isGraduated : false
}

// Impure function as input object mutated
function setGraduated(student){
    student.isGraduated = true;
    return student;
}


// Pure function as new object created and modified
function setGraduatedPure(student){
    const newStudent = Object.create(student);
    newStudent.isGraduated = true;
    return newStudent;
}



// Addition advantage of pure functions -
// Concurrency - as they do not produce side effects hence,
// can be processed concurrently in the processor. 