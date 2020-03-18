USE employeeDB;

/* Insert Rows into tables */
INSERT INTO department (name)
VALUES ("Sales");


INSERT INTO role (title, salary, department_id)
VALUES ("CEO","100000","1");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Manager","50000","2");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Rep","20000","2");

INSERT INTO employee (first_name, last_name, role_id)
VALUES("Michael","Boss","1")

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Harrold","Sails","2",NULL)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Wendy","Buyers","3","1")

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`employee_db`.`employee`, CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`))
