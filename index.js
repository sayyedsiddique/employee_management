let exmployeesData = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Johnson",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",
    email: "alice.johnson@example.com",
    contact: "123-456-7890",
    salary: "100,000",
    address: "San Francisco",
    dob: "1994-03-15",
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Smith",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",
    email: "bob.smith@example.com",
    contact: "987-654-3210",
    salary: "120,000",
    address: "New York",
    dob: "1988-07-20",
  },
  {
    id: 3,
    firstName: "Carol",
    lastName: "Williams",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",
    email: "carol.williams@example.com",
    contact: "456-789-0123",
    salary: "90,000",
    address: "Chicago",
    dob: "1996-05-10",
  },
  {
    id: 4,
    firstName: "David",
    lastName: "Brown",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",
    email: "david.brown@example.com",
    contact: "321-654-9870",
    salary: "110,000",
    address: "Austin",
    dob: "1991-11-25",
  },
  {
    id: 5,
    firstName: "Emma",
    lastName: "Davis",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",
    email: "emma.davis@example.com",
    contact: "234-567-8901",
    salary: "85,000",
    address: "Los Angeles",
    dob: "1998-02-18",
  },
  {
    id: 6,
    firstName: "Frank",
    lastName: "Miller",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",
    email: "frank.miller@example.com",
    contact: "789-012-3456",
    salary: "130,000",
    address: "Boston",
    dob: "1984-09-12",
  },
  {
    id: 7,
    firstName: "Grace",
    lastName: "Wilson",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",
    email: "grace.wilson@example.com",
    contact: "345-678-9012",
    salary: "95,000",
    address: "Seattle",
    dob: "1993-08-30",
  },
  {
    id: 8,
    firstName: "Henry",
    lastName: "Moore",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",
    email: "henry.moore@example.com",
    contact: "567-890-1234",
    salary: "105,000",
    address: "Denver",
    dob: "1995-06-22",
  },
  {
    id: 9,
    firstName: "Ivy",
    lastName: "Taylor",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",
    email: "ivy.taylor@example.com",
    contact: "678-901-2345",
    salary: "115,000",
    address: "Miami",
    dob: "1990-01-14",
  },
  {
    id: 10,
    firstName: "Jack",
    lastName: "Anderson",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",
    email: "jack.anderson@example.com",
    contact: "890-123-4567",
    salary: "80,000",
    address: "Philadelphia",
    dob: "1999-04-08",
  },
];

let seletedEmployeeId = exmployeesData[0].id;
let seletedEmployee = exmployeesData[0];

const employeeList = document.querySelector(".employees");
const employeeInfo = document.querySelector(".single_employee");
const addEmployeeBtnElement = document.querySelector(".add_employee_btn");
const addEmployeeBoxElement = document.querySelector(
  ".add_employee_main_container"
);
const addEmployeeFormElement = document.querySelectorAll(".add_emp_input");
const addEmployeeSubmitBtnElem = document.querySelector(".submit_btn");

let employeeObj = {
  firstName: "",
  lastName: "",
  imageUrl: "",
  email: "",
  contact: "",
  salary: "",
  address: "",
  dob: "",
};

const stringTrimmerHandler = (value) => {

  if(value.length > 5){
    console.log("chlaa")
    let trimmedStr = value.slice(0, 5)
    console.log("trimmedStr ", trimmedStr + "...")
    return trimmedStr + "..."
  }
}

// Add employee button handler
addEmployeeBtnElement.addEventListener("click", () => {
  addEmployeeBoxElement.classList.add("active");

  // Add employee form functionality
  addEmployeeFormElement.forEach((elem) => {
    elem.addEventListener("input", (e) => {
      employeeObj[e.target.id] = e.target.value;
      console.log("employeeObj ", employeeObj);
    });
  });
});

// Submit handler funtionality
addEmployeeSubmitBtnElem.addEventListener("click", () => {
  let lastEmployee = exmployeesData[exmployeesData.length - 1];
  employeeObj.id = lastEmployee.id
  exmployeesData.push(employeeObj)
  employeeObj = {
    firstName: "",
    lastName: "",
    imageUrl: "",
    email: "",
    contact: "",
    salary: "",
    address: "",
    dob: "",
  }
  console.log("exmployeesData ", exmployeesData);
  addEmployeeBoxElement.classList.remove("active")
  renderEmployees()
});


// close employee form
addEmployeeBoxElement.addEventListener("click", (e) => {
  e.target.classList.remove("active");
});

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
    employee.innerHTML = `${(emp?.firstName + emp?.lastName).length > 5 ? stringTrimmerHandler(emp?.firstName + emp?.lastName) : (emp?.firstName + emp?.lastName)}<i class="fa-solid fa-trash fa-xl" style="color: #c61022;"></i>`;
    employeeList.append(employee);
  });

  // Render single employee on click
  const renderSingleEmployee = () => {
    employeeInfo.innerHTML = `
    <img src="${seletedEmployee?.imageUrl ? seletedEmployee?.imageUrl : "./images/User-Profile.png"}" />
    <h1>${(seletedEmployee?.firstName + " " + seletedEmployee?.lastName)}</h1>
    <p>Email: ${seletedEmployee?.email}</p>
    <p>Contact: ${seletedEmployee?.contact}</p>
    <p>Salary: ${seletedEmployee?.salary}</p>
    <p>Address: ${seletedEmployee?.address}</p>
    <p>DOB: ${seletedEmployee?.dob}</p>
    `;
  };

  renderSingleEmployee();
};

renderEmployees();

