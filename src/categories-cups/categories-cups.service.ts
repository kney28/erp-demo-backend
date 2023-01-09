import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoriesCupDto } from './dto/create-categories-cup.dto';
import { UpdateCategoriesCupDto } from './dto/update-categories-cup.dto';
import { CategoriesCup } from './entities/categories-cup.entity';

@Injectable()
export class CategoriesCupsService {
  constructor(
    @InjectRepository(CategoriesCup)
    private categoriesCupRepository: Repository<CategoriesCup>,
  ) {}

  create(
    createCategoriesCupDto: CreateCategoriesCupDto,
  ): Promise<CategoriesCup> {
    const categoriesCup: CategoriesCup = this.categoriesCupRepository.create(
      createCategoriesCupDto,
    );
    return this.categoriesCupRepository.save(categoriesCup);
  }

  findAll(): Promise<CategoriesCup[]> {
    return this.categoriesCupRepository.find();
  }

  findOne(id: string) {
    return this.categoriesCupRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateCategoriesCupDto: UpdateCategoriesCupDto,
  ): Promise<CategoriesCup> {
    const categoriesCup: CategoriesCup =
      await this.categoriesCupRepository.findOneBy({
        id,
      });
    const editedCategoriesCup: CategoriesCup = Object.assign(
      categoriesCup,
      updateCategoriesCupDto,
    );
    return this.categoriesCupRepository.save(editedCategoriesCup);
  }

  async remove(id: string): Promise<CategoriesCup> {
    const categoriesCup: CategoriesCup =
      await this.categoriesCupRepository.findOneBy({
        id,
      });
    return this.categoriesCupRepository.softRemove(categoriesCup);
  }
}
