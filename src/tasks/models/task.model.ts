export class Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}

export enum TaskStatus {
    PENDING = 'pending',
    IN_PROGRESS = 'in-progress',
    DONE = 'done',
}

export class CreateTaskDto {
    title: string;
    description: string;
}

export class UpdateTaskDto {
    title?: string;
    description?: string;
    status?: TaskStatus;
}

/* Later update Task to entity BDD PG */
/* 
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.PENDING,
  })
  status: TaskStatus;
}
*/