
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  title!: string;

  @IsString()
  @MinLength(1)
  @MaxLength(45)
  isbn!: string;

  @IsInt()
  @Min(0)
  @Max(9999)
  publishedYear!: number;

  @IsBoolean()
  isAvailable = true;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  price!: number;

  @IsInt()
  @Min(0)
  stock!: number;

  @IsUUID()
  categoryId!: string;

  @IsUUID()
  publisherId!: string;
}
