interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const firstStudent : Student ={
    firstName: 'James',
    lastName: 'Bond',
    age: 22,
    location: 'Nigeria'
}

const secondStudent : Student = {
    firstName: 'Taiwo',
    lastName: 'Samuel',
    age: 20,
    location: 'Nigeria'
}

const studentsList: Student[] = [firstStudent, secondStudent];


function renderTable() {
    const table = document.createElement('table');
  
    studentsList.forEach((student) => {
      const row = document.createElement('tr');
      const firstNameCell = document.createElement('td');
      const locationCell = document.createElement('td');
  
      firstNameCell.textContent = student.firstName;
      locationCell.textContent = student.location;
  
      row.appendChild(firstNameCell);
      row.appendChild(locationCell);
  
      table.appendChild(row);
    });
    document.body.appendChild(table);
}

renderTable();
