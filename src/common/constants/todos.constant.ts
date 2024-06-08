import { Todo } from 'src/schemas/todos.schema';
import { BaseResponse } from './base.constant';

export type ToDosResponse = BaseResponse & {
  todos: Todo[];
};

export type ToDoResponse = BaseResponse & {
  todo: Todo;
};
