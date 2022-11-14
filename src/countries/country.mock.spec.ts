import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

export class CountryServiceMock {
  public async save(_dto: any): Promise<any> {
    return CountryServiceMock.mockResultCreateCountry;
  }

  public find = jest.fn().mockReturnThis();
  public create = jest.fn().mockReturnThis();
  public findOneOrFail = jest.fn().mockReturnThis();
  public delete = jest.fn().mockReturnThis();

  public createQueryBuilder = jest.fn(() => ({
    where: this.where,
    addSelect: this.addSelect,
    getOne: this.getOne,
    offset: this.offset,
    limit: this.limit,
    update: this.update,
    set: this.set,
    execute: this.execute,
  }));

  public where = jest.fn().mockReturnThis();
  public addSelect = jest.fn().mockReturnThis();
  public getOne = jest.fn().mockReturnThis();
  public offset = jest.fn().mockReturnThis();
  public limit = jest.fn().mockReturnThis();
  public update = jest.fn().mockReturnThis();
  public set = jest.fn().mockReturnThis();
  public execute = jest.fn().mockReturnThis();

  public static mockCreateDto: CreateCountryDto = {
    code: '001',
    description: 'Colombia',
    status: 1,
  };

  public static mockResultCreateCountry: Country = {
    id: '1',
    code: '001',
    description: 'Colombia',
    status: 1,
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
  };

  public static updateUser: UpdateCountryDto = {
    code: '001',
    description: 'Colombia',
    status: 1,
  };

  public static readonly mockFindAllCountryData: Country[] = [
    {
      id: '1',
      code: '001',
      description: 'Colombia',
      status: 1,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
    {
      id: '2',
      code: '002',
      description: 'Ecuador',
      status: 1,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
  ];
}
