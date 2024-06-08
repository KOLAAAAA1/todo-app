import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Put,
} from '@nestjs/common';
import { TodosService } from '../../modules/todos/services/todos.service';
import { ToDosResponse, ToDoResponse } from 'src/common/constants/todos.constant';
import { BaseResponse } from 'src/common/constants/base.constant';

@Controller('to-dos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async getAllTodos(): Promise<ToDosResponse> {
    const toDos = this.todosService.getAllTodos();

    return {
      success: true,
      todos: toDos,
    };
  }

  @Get(':id')
  async getTodoById(@Param('id') id: string): Promise<ToDoResponse> {
    const toDo = this.todosService.getTodoById(id);

    return {
      success: true,
      todo: toDo,
    };
  }

  @Post()
  async createTodo(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Promise<ToDoResponse> {
    const toDo = this.todosService.createTodo(title, description);

    return {
      success: true,
      todo: toDo,
    };
  }

  @Patch(':id')
  async updateTodo(
    @Param('id') id: string,
    @Body('title') title?: string,
    @Body('description') description?: string,
    @Body('done') done?: boolean,
  ): Promise<ToDoResponse> {
    const toDo = this.todosService.updateTodo(id, title, description, done);

    return {
      success: true,
      todo: toDo,
    };
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string): Promise<BaseResponse> {
    this.todosService.deleteTodo(id);
    return {
      success: true,
    };
  }
}
