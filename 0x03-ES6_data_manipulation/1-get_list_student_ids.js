/* eslint-disable linebreak-style */
function getListStudentIds(students) {
  // Check if the input is an array
  if (!Array.isArray(students)) {
    return [];
  }

  // Map the array of objects to an array of ids
  return students.map(student => student.id);
}
