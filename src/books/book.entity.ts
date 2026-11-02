
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Category } from '../categories/category.entity.js';
import { Publisher } from '../publishers/publisher.entity.js';
import { BookAuthor } from '../book-authors/book-author.entity.js';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 30 })
  title!: string;

  @Column({ type: 'varchar', length: 45, unique: true })
  isbn!: string;

  @Column({ type: 'int', default: 0 })
  publishedYear!: number;

  @Column({ type: 'boolean', default: true })
  isAvailable!: boolean;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  price!: string;

  @Column({ type: 'int', default: 0 })
  stock!: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt!: Date | null;

@ManyToOne(() => Category, { nullable: false })
@JoinColumn({ name: 'category_id' })
category!: Relation<Category>;

@ManyToOne(() => Publisher, { nullable: false })
@JoinColumn({ name: 'publisher_id' })
publisher!: Relation<Publisher>;

@OneToMany(
  () => BookAuthor,
  (bookAuthor) => bookAuthor.book,
)
bookAuthors!: Relation<BookAuthor[]>;
}
