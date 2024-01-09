/*

Задача: у нас є об'єкт з зарплатами по всіх відділах.
Написати функцію, яка повертає загальну суму, витрачену на зарплатню всіх відділів

*/

const departmentSalaryInCompany1 = {
  HR: 120000,
  development: 5500000,
  PR: 50000,
  marketing: 120000,
  assistant: undefined
}

const departmentSalaryInCompany2 = {
  HR: 500000,
  JS: 5500000,
  PR: 50000,
  QA: 800000,
  clojure: 250000,
  frontend: 365800,
  strategyExecution: undefined,
  cLevelel: undefined
}


function sumSalary(salaryObject) {
  let sum = 0;

  for(let key in salaryObject) {
    if(typeof salaryObject[key] === 'number') {
      sum += salaryObject[key];
    }
  }

  return sum;
}