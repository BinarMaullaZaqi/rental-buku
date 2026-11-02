
import {
  Entity,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import type { Relation } from 'typeorm';
import type { Book } from '../books/book.entity.js';
import type { Author } from '../authors/author.entity.js';

@Entity('book_authors')
export class BookAuthor {
  @PrimaryColumn('uuid', { name: 'book_id' })
  bookId!: string;

  @PrimaryColumn('uuid', { name: 'author_id' })
  authorId!: string;

  @ManyToOne(
    'Book',
    'bookAuthors',
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'book_id', referencedColumnName: 'id' })
  book!: Relation<Book>;

  @ManyToOne(
    'Author',
    'bookAuthors',
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'author_id', referencedColumnName: 'id' })
  author!: Relation<Author>;
}
