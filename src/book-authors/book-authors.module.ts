
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookAuthor } from './book-author.entity.js';
import { BookAuthorsController } from './book-authors.controller.js';
import { BookAuthorsService } from './book-authors.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([BookAuthor])],
  controllers: [BookAuthorsController],
  providers: [BookAuthorsService],
})
export class BookAuthorsModule {}
