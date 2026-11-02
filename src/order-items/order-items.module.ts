import { Module } from '@nestjs/common';
import { OrderItemsService } from './order-items.service.js';
import { OrderItemsController } from './order-items.controller.js';

@Module({
  providers: [OrderItemsService],
  controllers: [OrderItemsController]
})
export class OrderItemsModule {}
