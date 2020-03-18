const express = require('express');
const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql');
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 3005;
const connection = mysql.createConnection({
    host: "localhost",
    // port: 3306,
    user: "root",
    password: "",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
    start();
});

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



function start() {
    inquirer
        .prompt({
            name: "decision",
            type: "list",
            message: "What would you like to do?",
            choices: [
                
                "View Departments",
                "View Roles",
                "View Employees",
                "Add Department",
                "Add Role",
                "Add Employee",
                "Update Employee Role"
            ]
        })
        .then(function (data) {
            // conditional to write/read info
            console.log(data);
            switch (data.decision) {
                case "View Departments":
                viewDepartments();
                  break;
                case "View Roles":

                    break;
                case "View Employees":

                    break;
                case "Add Department":

                    break;
                case "Add Role":

                    break;
                case "Add Employee":

                    break;
                case "Update Employee Role":

            }
            
            
        })
    };
function viewDepartments() {
    console.log("View Departments:");
    connection.query("SELECT * FROM department", function (err, results) {
        if (err) throw err;
        console.table(results);
    });
};
function viewRoles() {
    console.log("View Roles:");
    connection.query("SELECT * FROM role", function (err, results) {
        if (err) throw err;
        console.table(results);
    });
};
function viewEmployees() {
    console.log("View Employees:");
    connection.query("SELECT * FROM employee", function (err, results) {
        if (err) throw err;
        console.table(results);
    });
};

function addDepartment() {
    console.log("Add Department Selected");
    inquirer
        .prompt({
            name: "department",
            type: "input",
            message: "Enter the department name you would like to add"
        })
        .then(function (response) {
            // console.log(response.department + " will be added");
            // response to input





        });
};

function addRole() {
    console.log("Here are the Department IDs for reference:");
    connection.query("SELECT * FROM department", function (err, results) {
        if (err) throw err;
        console.table(results);
    });

    inquirer
        .prompt([
            {
                name: "roleName",
                type: "input",
                message: "Enter the Role name you would like to add"
            },
            {
                name: "roleSalary",
                type: "input",
                message: "Enter the Salary for your role"
            },
            {
                name: "roleDepartment",
                type: "input",
                message: "Select the Department associated with the role"
            }
        ])
        .then(function (response) {
            console.log(response.roleName + " will be added");
            // response to input





        });
};
function addEmployee() {
    viewRoles();
    viewEmployees();
    inquirer
        .prompt([
            {
                name: "firstName",
                type: "input",
                message: "Enter Employee's first name"
            },
            {
                name: "lastName",
                type: "input",
                message: "Enter Employee's last name"
            },
            {
                name: "employeeRoleID",
                type: "input",
                message: "Enter Employee's Role ID"
            },
            {
                name: "employeeManagerID",
                type: "input",
                message: "Enter the ID of the Manager that the Employee will report to"
            }
        ])
        .then(function (response) {
            // response to input





        });
};

function updateEmployeeRole() {
    console.log("Update Employee Role Selected");
    viewEmployees();
    viewRoles();
    inquirer
        .prompt([
            {
                name: "employeeID",
                type: "input",
                message: "Enter the employee ID you would like to update"
            },
            {
                name: "roleID",
                type: "input",
                message: "Enter the Role ID you would like to update"
            }
        ])
        .then(function (response) {
            // response to input




        });
};
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
    // start();
});
