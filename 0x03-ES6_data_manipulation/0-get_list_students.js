// Step 1: Define the function getListStudents
function getListStudents() {
  // Step 2: Create an empty array to store the student objects
  var students = [];

  // Step 3: Create the first student object and add it to the array
  var student1 = {
    id: 1,
    firstName: "Guillaume",
    location: "San Francisco"
  };
  students.push(student1);

  // Step 4: Create the second student object and add it to the array
  var student2 = {
    id: 2,
    firstName: "James",
    location: "Columbia"
  };
  students.push(student2);

  // Step 5: Create the third student object and add it to the array
  var student3 = {
    id: 5,
    firstName: "Serena",
    location: "San Francisco"
  };
  students.push(student3);

  // Step 6: Return the array of student objects
  return students;
}

// Step 7: Call the function and store the result in a variable
var studentList = getListStudents();

// Step 8: Print the student list
console.log(studentList);

