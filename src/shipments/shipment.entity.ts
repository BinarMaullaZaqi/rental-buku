
import {
  Entity, PrimaryGeneratedColumn, Column,
  OneToOne, JoinColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';

@Entity('shipments')
export class Shipment {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'order_id', type: 'uuid', unique: true })
  orderId!: string;

  @OneToOne('Order', 'shipment', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'order_id' })
  order!: Relation<import('../orders/order.entity.js').Order>;

  @Column({ length: 100 })
  courier!: string;

@Column({
  name: 'tracking_number',
  type: 'varchar',
  length: 100,
  nullable: true,
})
trackingNumber!: string | null;

  @Column({ length: 30, default: 'pending' })
  status!: string;

  @Column({ name: 'shipped_at', type: 'timestamp', nullable: true })
  shippedAt!: Date | null;

  @Column({ name: 'delivered_at', type: 'timestamp', nullable: true })
  deliveredAt!: Date | null;
}
