
import {
  Entity, PrimaryGeneratedColumn, Column,
  CreateDateColumn, UpdateDateColumn, ManyToOne,
  OneToMany, OneToOne,
} from 'typeorm';
import type { Relation } from 'typeorm';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'customer_id', type: 'uuid' })
  customerId!: string;

  @ManyToOne('Customer', 'orders')
  customer!: Relation<import('../customers/customer.entity.js').Customer>;

  @Column({ name: 'order_number', length: 50, unique: true })
  orderNumber!: string;

  @Column({ length: 30, default: 'pending' })
  status!: string;

  @Column({ name: 'total_amount', type: 'decimal', precision: 12, scale: 2 })
  totalAmount!: string;

  @OneToMany('OrderItem', 'order')
  items!: Relation<import('../order-items/order-item.entity.js').OrderItem[]>;

  @OneToOne('Payment', 'order')
  payment!: Relation<import('../payments/payment.entity.js').Payment>;

  @OneToOne('Shipment', 'order')
  shipment!: Relation<import('../shipments/shipment.entity.js').Shipment>;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt!: Date;
}
