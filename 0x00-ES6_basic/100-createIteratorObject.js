export default function createIteratorObject(report) {
  const allEmployees = [];
  for (const department in report.allEmployees) {
    if (report.allEmployees.hasOwnProperty(department)) {
      allEmployees.push(...report.allEmployees[department]);
    }
  }

  return {
    [Symbol.iterator]: function* () {
      for (const employee of allEmployees) {
        yield employee;
      }
    }
  }
}

// eslint-disable-next-line no-unused-vars
function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees
  }
}

// eslint-disable-next-line no-unused-vars
function createReportObject(employees) {
  return {
    allEmployees: employees
  }
}