import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubcategoriesCupDto } from './dto/create-subcategories-cup.dto';
import { UpdateSubcategoriesCupDto } from './dto/update-subcategories-cup.dto';
import { SubcategoriesCup } from './entities/subcategories-cup.entity';

@Injectable()
export class SubcategoriesCupsService {
  constructor(
    @InjectRepository(SubcategoriesCup)
    private subcategoriesCupRepository: Repository<SubcategoriesCup>,
  ) {}

  create(createSubcategoriesCupDto: CreateSubcategoriesCupDto) {
    const subcategoriesCup: SubcategoriesCup =
      this.subcategoriesCupRepository.create(createSubcategoriesCupDto);
    return this.subcategoriesCupRepository.save(subcategoriesCup);
  }

  findAll() {
    return this.subcategoriesCupRepository.find();
  }

  findOne(id: string) {
    return this.subcategoriesCupRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateSubcategoriesCupDto: UpdateSubcategoriesCupDto,
  ) {
    const groupsCup: SubcategoriesCup =
      await this.subcategoriesCupRepository.findOneBy({
        id,
      });

    const sditedSubcategoriesCupRepository: SubcategoriesCup = Object.assign(
      groupsCup,
      updateSubcategoriesCupDto,
    );

    return this.subcategoriesCupRepository.save(
      sditedSubcategoriesCupRepository,
    );
  }

  async remove(id: string) {
    const groupsCup: SubcategoriesCup =
      await this.subcategoriesCupRepository.findOneBy({
        id,
      });
    return this.subcategoriesCupRepository.softRemove(groupsCup);
  }
}
