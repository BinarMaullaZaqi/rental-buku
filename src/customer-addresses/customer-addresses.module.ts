import { Module } from '@nestjs/common';
import { CustomerAddressesService } from './customer-addresses.service.js';
import { CustomerAddressesController } from './customer-addresses.controller.js';

@Module({
  providers: [CustomerAddressesService],
  controllers: [CustomerAddressesController]
})
export class CustomerAddressesModule {}
