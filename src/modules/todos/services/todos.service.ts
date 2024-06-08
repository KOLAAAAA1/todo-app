import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from 'src/schemas/todos.schema';
import { randomId } from 'src/common/utils/random-id';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: string): Todo {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new NotFoundException('Todo not found');
    }
    return todo;
  }

  createTodo(title: string, description: string): Todo {
    const currentDate = new Date();
    const todo = new Todo(
      randomId(),
      title,
      description,
      false,
      currentDate,
      currentDate,
    );
    this.todos.push(todo);
    return todo;
  }

  updateTodo(
    id: string,
    title?: string,
    description?: string,
    done?: boolean,
  ): Todo {
    const currentDate = new Date();

    const todo = this.getTodoById(id);
    if (title) todo.title = title;
    if (description) todo.description = description;
    if (done) todo.done = done;
    todo.updated_at = currentDate;

    return todo;
  }

  updateTodoStatus(id: string, done: boolean): Todo {
    const currentDate = new Date();

    const todo = this.getTodoById(id);
    todo.done = done;
    todo.updated_at = currentDate;

    return todo;
  }

  deleteTodo(id: string): void {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      throw new NotFoundException('Todo not found');
    }
    this.todos.splice(index, 1);
  }
}
