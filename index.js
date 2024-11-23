let exmployeesData = [
  {
    id: 1,
    name: "Alice Johnson",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",
    jobTitle: "Software Engineer",
    department: "IT",
    age: 29,
    city: "San Francisco",
    email: "alice.johnson@example.com",
  },
  {
    id: 2,
    name: "Bob Smith",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",
    jobTitle: "Product Manager",
    department: "Product",
    age: 35,
    city: "New York",
    email: "bob.smith@example.com",
  },
  {
    id: 3,
    name: "Carol Williams",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",
    jobTitle: "UX Designer",
    department: "Design",
    age: 27,
    city: "Chicago",
    email: "carol.williams@example.com",
  },
  {
    id: 4,
    name: "David Brown",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",
    jobTitle: "Data Scientist",
    department: "Data",
    age: 32,
    city: "Austin",
    email: "david.brown@example.com",
  },
  {
    id: 5,
    name: "Emma Davis",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",
    jobTitle: "Marketing Specialist",
    department: "Marketing",
    age: 26,
    city: "Los Angeles",
    email: "emma.davis@example.com",
  },
  {
    id: 6,
    name: "Frank Miller",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",
    jobTitle: "Sales Manager",
    department: "Sales",
    age: 40,
    city: "Boston",
    email: "frank.miller@example.com",
  },
  {
    id: 7,
    name: "Grace Wilson",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",
    jobTitle: "Human Resources",
    department: "HR",
    age: 30,
    city: "Seattle",
    email: "grace.wilson@example.com",
  },
  {
    id: 8,
    name: "Henry Moore",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",
    jobTitle: "DevOps Engineer",
    department: "IT",
    age: 28,
    city: "Denver",
    email: "henry.moore@example.com",
  },
  {
    id: 9,
    name: "Ivy Taylor",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",
    jobTitle: "Financial Analyst",
    department: "Finance",
    age: 33,
    city: "Miami",
    email: "ivy.taylor@example.com",
  },
  {
    id: 10,
    name: "Jack Anderson",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",
    jobTitle: "Content Writer",
    department: "Content",
    age: 25,
    city: "Philadelphia",
    email: "jack.anderson@example.com",
  },
];

let seletedEmployeeId = exmployeesData[0].id;
let seletedEmployee = exmployeesData[0];

const employeeList = document.querySelector(".employees");
const employeeInfo = document.querySelector(".single_employee");

// Select employee
employeeList.addEventListener("click", (emp) => {
  if (
    emp.target.tagName === "SPAN" &&
    parseInt(seletedEmployeeId) !== parseInt(emp.target.id)
  ) {
    seletedEmployeeId = emp.target.id;
    renderEmployees();
  }

  // Delete Functionality
  if (emp.target.tagName === "I") {
    let filteredEmployees = exmployeesData.filter((item) => {
      if (String(item.id) !== emp.target.parentNode.id) {
        if (emp.target.parentNode.className === "selected") {
          emp.target.parentNode.nextSibling.classList.add("selected");
          seletedEmployeeId = emp.target.parentNode.nextSibling.id;
        }
        return item;
      }
    });
    exmployeesData = filteredEmployees;
    renderEmployees();
  }
});

// Rendering employee list
const renderEmployees = () => {
  employeeList.innerHTML = "";

  exmployeesData.forEach((emp) => {
    const employee = document.createElement("span");
    // employee.classList.add("");

    if (parseInt(seletedEmployeeId) === emp.id) {
      employee.classList.add("selected");
      seletedEmployee = emp;
    }

    employee.setAttribute("id", emp.id);
    employee.innerHTML = `${emp.name} <i class="fa-solid fa-trash fa-xl" style="color: #c61022;"></i>`;
    employeeList.append(employee);
  });

  // Render single employee on click
  const renderSingleEmployee = () => {
    employeeInfo.innerHTML = `
    <img src="${seletedEmployee?.image}" />
    <h1>${seletedEmployee?.name}</h1>
    <p>Email: ${seletedEmployee?.email}</p>
    <p>Job Title: ${seletedEmployee?.jobTitle}</p>
    <p>Department: ${seletedEmployee?.department}</p>
    `;
  };

  renderSingleEmployee();
};

renderEmployees();
