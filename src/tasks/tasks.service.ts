import { Injectable } from '@nestjs/common';
import { CreateTaskDto, Task, TaskStatus, UpdateTaskDto } from './models/task.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }

    createTask(createTaskDto: CreateTaskDto): Task {
        const { title, description } = createTaskDto;

        const task: Task = {
            id: uuidv4(),
            title,
            description,
            status: TaskStatus.PENDING,
        }
        this.tasks.push(task);

        return task;
    }

    updateTask(id: string, updateTaskDto: UpdateTaskDto): Task {
        const task: Task = this.getTaskById(id);

        if (task) {
            task.title = updateTaskDto.title ?? task.title;
            task.description = updateTaskDto.description ?? task.description;
            task.status = updateTaskDto.status ?? task.status;
        }

        return task;
    }

    deleteTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}
