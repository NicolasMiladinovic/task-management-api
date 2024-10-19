import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    /* Later, add BDD pg */
    /* TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'your-username',
      password: 'your-password',
      database: 'taskmanagement',
      autoLoadEntities: true,
      synchronize: true,
    }), */
    TasksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
