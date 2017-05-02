# Todo API API documentation version v1
http://api.todo.com

---

## /todos
Todo's base route. It is used to get all and create Todos.

### /todos

* **get**: Return all available todo's
* **post**: Create a Todo

Use application/x-www-form-urlencoded content type to create a todo with key value pair

### /todos/{id}
Route to get, update and delete a single Todo resource

* **get**: Get a single Todo based on the id
* **patch**: Partial update to a single Todo based on the id
* **delete**: Delete a single Todo based on the id

