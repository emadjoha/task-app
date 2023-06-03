# Task App API

The Task App API is a RESTful API for managing tasks in a ToDo list application. It is built with Node.js, Express, and MongoDB.

## Features

- Create new tasks with a title and description.
- Retrieve a list of all tasks.
- Retrieve a single task by its ID.
- Update a task's title, description, and status.
- Delete a task.
- Pagination support for retrieving a subset of tasks.

## Prerequisites

Before running the Task App API, ensure you have the following installed:

- Node.js (v12 or later)
- MongoDB

## Getting Started

1. Clone the repository:

   ```shell
   git clone https://github.com/emadjoha/task-app.git

## Install the dependencies:

cd task-app
npm install

## Start the server:
npx ts-node src/index.ts
The API server will be running at http://localhost:3000.



## API Endpoints
1. Create a Task
  Endpoint: /tasks
  Method: POST
Request Body:
  {
    "title": "Task Title",
    "description": "Task Description"
  }
Response:
{
  "id": "1",
  "title": "Task Title",
  "description": "Task Description",
  "status": "pending"
}

## Get All Tasks
Endpoint: /tasks
Method: GET
Response:
[
  {
    "id": "1",
    "title": "Task1",
    "description": "Task Description 1 ",
    "status": "pending"
  },
  {
    "id": "2",
    "title": "Task2 ",
    "description": "Another Description 2",
    "status": "completed"
  }
]

## Get a Task by ID
  Endpoint: /tasks/{id}
  Method: GET
  Response:
{
  "id": "1",
  "title": "Task Title",
  "description": "Task Description",
  "status": "pending"
}
## Update a Task
Endpoint: /tasks/{id}
Method: PUT
Request Body:
{
  "title": "Updated Task Title",
  "description": "Updated Task Description",
  "status": "completed"
}
Response:
{
  "id": "1",
  "title": "Updated Task Title",
  "description": "Updated Task Description",
  "status": "completed"
}

## Delete a Task
Endpoint: /tasks/{id}
Method: DELETE
Response: Task deleted successfully

## Pagination
To retrieve a subset of tasks, you can use the following query parameters:

limit: Specifies the maximum number of tasks to return.
offset: Specifies the number of tasks to skip before starting to return results.
