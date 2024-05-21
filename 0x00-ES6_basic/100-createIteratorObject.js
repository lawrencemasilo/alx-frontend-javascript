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
/* eslint-disable comma-dangle, semi, object-shorthand, func-names, no-prototype-builtins */
function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees
  }
}

function createReportObject(employees) {
  return {
    allEmployees: employees
  }
}
