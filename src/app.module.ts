import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TechniciansModule } from './technicians/technicians.module';
import { IncidentsModule } from './incidents/incidents.module';
import { LocationsModule } from './locations/locations.module';
import { IncidentCategoriesModule } from './incident-categories/incident-categories.module';
import { AssignmentsModule } from './incidents/assignments/assignments.module';
import { ResolutionsModule } from './incidents/resolutions/resolutions.module';


@Module({
  imports: [
  ConfigModule.forRoot({ isGlobal: true }),

  TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory: (config: ConfigService) => ({
      type: 'mysql',
      host: config.get<string>('DB_HOST'),
      port: config.get<number>('DB_PORT'),
      username: config.get<string>('DB_USERNAME'),
      password: config.get<string>('DB_PASSWORD'),
      database: config.get<string>('DB_NAME'),
      autoLoadEntities: true,
      synchronize: true,
    }),
  }),

  UsersModule,
  AuthModule,
  TechniciansModule,
  IncidentsModule,
  LocationsModule,
  IncidentCategoriesModule,
  AssignmentsModule,
  ResolutionsModule,
],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({ whitelist: true, transform: true }),
    },
  ],
})
export class AppModule {}