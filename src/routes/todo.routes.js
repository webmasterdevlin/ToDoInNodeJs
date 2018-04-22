import {
  addNewTodo, deleteTodo,
  getTodos,
  getTodoWithID,
  updateTodo
} from '../controllers/todo.controller'

const routes = app => {
  app
    .route("/api/todos")
    .get((req, res, next) => {

      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request from: ${req.method}`);
      next();
    }, getTodos)

    // POST endpoint
    .post(addNewTodo);

  app
    .route("/api/todos/:todoId")

    // Get specific todo
    .get(getTodoWithID)

    // Put request
    .put(updateTodo)

    // Delete request
    .delete(deleteTodo);
};

export default routes;
