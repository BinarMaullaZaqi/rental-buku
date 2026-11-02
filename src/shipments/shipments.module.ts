import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShipmentsService } from './shipments.service.js';
import { ShipmentsController } from './shipments.controller.js';
import { Shipment } from './shipment.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Shipment])],
  providers: [ShipmentsService],
  controllers: [ShipmentsController],
})
export class ShipmentsModule {}