const employees = [
  {
    "Id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "taskCounts":{
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Submit Project Report",
        "description": "Prepare and submit the final project report to the manager.",
        "date": "2025-05-12",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Team Meeting",
        "description": "Attend the weekly sprint planning meeting.",
        "date": "2025-05-10",
        "category": "Meeting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Client Feedback Review",
        "description": "Analyze the feedback provided by the client and note improvements.",
        "date": "2025-05-08",
        "category": "Review"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "Id": 2,
    "firstName": "Vihaan",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts":{
      "active": 3,
      "newTask": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Code Review",
        "description": "Review code changes submitted by the junior developers.",
        "date": "2025-05-11",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Database Backup",
        "description": "Backup the database before version upgrade.",
        "date": "2025-05-13",
        "category": "Maintenance"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "Id": 3,
    "firstName": "Ishaan",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts":{
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "UI Design Update",
        "description": "Implement new design components for the homepage.",
        "date": "2025-05-14",
        "category": "Design"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 0,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "Id": 4,
    "firstName": "Kavya",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts":{
      "active": 4,
      "newTask": 0,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Deploy Application",
        "description": "Deploy the new release to the staging server.",
        "date": "2025-05-09",
        "category": "Deployment"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Security Audit",
        "description": "Run a security audit for the application backend.",
        "date": "2025-05-08",
        "category": "Security"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Create API Documentation",
        "description": "Document all REST APIs for the mobile app.",
        "date": "2025-05-13",
        "category": "Documentation"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "Id": 5,
    "firstName": "Aanya",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts":{
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Bug Fix: Payment Module",
        "description": "Resolve transaction failure issue in payment module.",
        "date": "2025-05-12",
        "category": "Bug Fix"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Write Unit Tests",
        "description": "Add unit tests for the new payment gateway integration.",
        "date": "2025-05-15",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Performance Optimization",
        "description": "Optimize API response time for product search queries.",
        "date": "2025-05-09",
        "category": "Optimization"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
];

    
    const admin = [{
          "Id": 1,
          "email": "admin@example.com",
          "password": "123"
        }];
      

        export const setLocalStorage = ()=>{
            localStorage.setItem('employees', JSON.stringify(employees))
            localStorage.setItem('admin', JSON.stringify(admin))
        }
        export const getLocalStorage = ()=>{
         /*   const data = localStorage.getItem('employees')

            console.log(JSON.parse(data))   */

            const employees = JSON.parse(localStorage.getItem('employees'))

            const admin = JSON.parse(localStorage.getItem('admin'))

            return {employees, admin}
        }