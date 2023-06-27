export function createEmployeesObject(departmentName, employees) {
  const employeesObject = {
    [departmentName]: employees,
  };

  return employeesObject;
}

export function createReportObject(employeesList) {
  const report = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };

  return report;
}

