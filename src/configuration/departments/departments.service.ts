import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}

  create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    const department: Department =
      this.departmentRepository.create(createDepartmentDto);
    return this.departmentRepository.save(department);
  }

  findAll(): Promise<Department[]> {
    return this.departmentRepository.find();
  }

  findOne(id: string): Promise<Department> {
    return this.departmentRepository.findOneBy({ id });
  }

  findOneByCodigo(codigo: string): Promise<Department> {
    return this.departmentRepository.findOneBy({ codigo });
  }

  async update(
    id: string,
    updateDepartmentDto: UpdateDepartmentDto,
  ): Promise<Department> {
    const department: Department = await this.departmentRepository.findOneBy({
      id,
    });
    const editedDepartment: Department = Object.assign(
      department,
      updateDepartmentDto,
    );
    return this.departmentRepository.save(editedDepartment);
  }

  async remove(id: string): Promise<Department> {
    const department: Department = await this.departmentRepository.findOneBy({
      id,
    });
    return this.departmentRepository.softRemove(department);
  }
}
