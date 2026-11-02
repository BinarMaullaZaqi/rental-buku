
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersService } from './customers.service.js';
import { CustomersController } from './customers.controller.js';
import { Customer } from './customer.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  providers: [CustomersService],
  controllers: [CustomersController],
})
export class CustomersModule {}
