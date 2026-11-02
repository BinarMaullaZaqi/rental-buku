
import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne,
} from 'typeorm';
import type { Relation } from 'typeorm';

@Entity('order_items')
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'order_id', type: 'uuid' })
  orderId!: string;

  @ManyToOne('Order', 'items', { onDelete: 'CASCADE' })
  order!: Relation<import('../orders/order.entity.js').Order>;

  @Column({ name: 'book_id', type: 'uuid' })
  bookId!: string;

  @ManyToOne('Book', 'orderItems')
  book!: Relation<import('../books/book.entity.js').Book>;

  @Column({ type: 'int' })
  quantity!: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  price!: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  subtotal!: string;
}
