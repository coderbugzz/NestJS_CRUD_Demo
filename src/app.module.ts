import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestControllerController } from './test-controller/test-controller.controller';
import { TestServiceService } from './test-service/test-service.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User, UserModel } from './user.model';

@Module({
  imports: [
    // Add MongooseModule.forRoot with your MongoDB connection URI
    MongooseModule.forRoot('mongodb://localhost/tutorial'),

    // Add MongooseModule.forFeature to register the User model
    MongooseModule.forFeature([{ name: User.name, schema: UserModel }]),
  ],
  controllers: [AppController, TestControllerController, UserController], // Include UserController in the controllers array
  providers: [AppService, TestServiceService, UserService], // Include UserService in the providers array
})
export class AppModule {}
