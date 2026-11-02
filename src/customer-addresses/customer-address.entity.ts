
import {
  Entity, PrimaryGeneratedColumn, Column,
  CreateDateColumn, UpdateDateColumn, ManyToOne,
} from 'typeorm';
import type { Relation } from 'typeorm';

@Entity('customer_addresses')
export class CustomerAddress {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'customer_id', type: 'uuid' })
  customerId!: string;

  @ManyToOne('Customer', 'addresses', { onDelete: 'CASCADE' })
  customer!: Relation<import('../customers/customer.entity.js').Customer>;

  @Column({ name: 'recipient_name', length: 150 })
  recipientName!: string;

  @Column({ length: 20 })
  phone!: string;

  @Column({ type: 'text' })
  address!: string;

  @Column({ length: 100 })
  city!: string;

  @Column({ name: 'postal_code', length: 10 })
  postalCode!: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt!: Date;
}
