import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CountriesService } from './countries.service';
import { Country } from './entities/country.entity';

describe('CountriesService', () => {
  let service: CountriesService;
  let repo: Repository<Country>;

  const countryCode = '001';
  const countryDescription = 'Col';
  const countryStatus = 1;

  const oneCountry = new Country(
    countryCode,
    countryDescription,
    countryStatus,
  );

  const countriesArray = [
    oneCountry,
    new Country('002', 'Bol', 1),
    new Country('003', 'Ecu', 1),
    new Country('004', 'Chi', 1),
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CountriesService,
        {
          provide: getRepositoryToken(Country),
          useValue: {
            find: jest.fn().mockResolvedValue(countriesArray),
            findOneBy: jest.fn().mockResolvedValue(oneCountry),
            create: jest.fn().mockReturnValue(oneCountry),
            save: jest.fn(),
            delete: jest.fn().mockResolvedValue(true),
          },
        },
      ],
    }).compile();

    service = module.get<CountriesService>(CountriesService);
    repo = module.get<Repository<Country>>(getRepositoryToken(Country));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of countries', async () => {
      const countries = await service.findAll();
      expect(countries).toEqual(countriesArray);
    });
  });

  describe('findOne', () => {
    it('should get a single country', () => {
      const repoSpy = jest.spyOn(repo, 'findOneBy');
      expect(service.findOne('1')).resolves.toEqual(oneCountry);
      expect(repoSpy).toBeCalledWith({ id: '1' });
    });
  });

  describe('create', () => {
    it('should successfully insert a country', () => {
      expect(
        service.create({
          code: countryCode,
          description: countryDescription,
          status: countryStatus,
        }),
      ).resolves.toEqual(oneCountry);
      expect(repo.create).toBeCalledTimes(1);
      expect(repo.create).toBeCalledWith({
        code: countryCode,
        description: countryDescription,
        status: countryStatus,
      });
      expect(repo.save).toBeCalledTimes(1);
    });
  });

  describe('update', () => {
    it('should call the update method', async () => {
      const country = await service.update('1', {
        code: countryCode,
        description: countryDescription,
        status: countryStatus,
      });
      expect(country).toEqual(oneCountry);
      expect(repo.update).toBeCalledTimes(1);
      expect(repo.update).toBeCalledWith('1', {
        code: countryCode,
        description: countryDescription,
        status: countryStatus,
      });
    });
  });

  describe('delete', () => {
    it('should return {deleted: true}', () => {
      expect(service.deleteOne('a uuid')).resolves.toEqual({ deleted: true });
    });
    it('should return {deleted: false, message: err.message}', () => {
      const repoSpy = jest
        .spyOn(repo, 'delete')
        .mockRejectedValueOnce(new Error('Bad Delete Method.'));
      expect(service.deleteOne('a bad uuid')).resolves.toEqual({
        deleted: false,
        message: 'Bad Delete Method.',
      });
      expect(repoSpy).toBeCalledWith({ id: 'a bad uuid' });
      expect(repoSpy).toBeCalledTimes(1);
    });
  });
});
