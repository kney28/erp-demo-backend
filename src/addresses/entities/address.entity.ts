import { IsNumberOptions } from 'class-validator';
import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity } from 'typeorm';

export enum AddressType {
  PERSONAL = 1,
  LABOR = 2,
  COMMERCIAL = 3,
  PROPERTYNOTIFICATION = 4,
  INDUSTRYNOTIFICATION = 5,
  RETELCANOTIFICATION = 6,
  LIGHTINGNOTIFICATION = 7,
  OTHERTAXESNOTIFICATION = 8,
  OTHERS = 9,
}

export enum AddressWayType {
  EMPTY = 1,
  AVENUESTREET = 2,
  AVENUECRA = 3,
  HIGHWAY = 4,
  AVENUE = 5,
  BOULEVARD = 6,
  ROUNDTRIP = 7,
  STREET = 8,
  CARRERA = 9,
  CORREGIMIENTO = 10,
  ROAD = 11,
  CIRCUMVALAR = 12,
  DIAGONAL = 13,
  KILOMETER = 14,
  TRUNK = 15,
  CROSS = 16,
  ROUTE = 17,
  SIDEWALK = 18,
  VARIANT = 19,
}

export enum AddressLetter {
  EMPTY = 1,
  A = 2,
  AA = 3,
  AB = 4,
  AC = 5,
  AD = 6,
  AE = 7,
  AF = 8,
  AG = 9,
  AH = 10,
  B = 11,
  BA = 12,
  BB = 13,
  BC = 14,
  BD = 15,
  BE = 16,
  BF = 17,
  BG = 18,
  BH = 19,
  C = 20,
  CA = 21,
  CB = 22,
  CC = 23,
  CD = 24,
  CE = 25,
  CF = 26,
  CG = 27,
  CH = 28,
  D = 29,
  DA = 30,
  DB = 31,
  DC = 32,
  DD = 33,
  DE = 34,
  DF = 35,
  DG = 36,
  DH = 37,
  E = 38,
  EA = 39,
  EB = 40,
  EC = 41,
  ED = 42,
  EE = 43,
  EF = 44,
  EG = 45,
  EH = 46,
  F = 47,
  FA = 48,
  FB = 49,
  FC = 50,
  FD = 51,
  FE = 52,
  FF = 53,
  FG = 54,
  FH = 55,
  G = 56,
  GA = 57,
  GB = 58,
  GC = 59,
  GD = 60,
  GE = 61,
  GF = 62,
  GG = 63,
  GH = 64,
  H = 65,
  HA = 66,
  HB = 67,
  HC = 68,
  HD = 69,
  HE = 70,
  HF = 71,
  HH = 72,
}

export enum AddressComplement1 {
  EMPTY = 1,
  EAST = 2,
  NORTH = 3,
  WEST = 4,
  SOUTH = 5,
}

export enum AddressComplement2 {
  EMPTY = 1,
  APARTMENT = 2,
  GROUP = 3,
  BLOCK = 4,
  WAREHOUSE = 5,
  PATH = 6,
  CELL = 7,
  HOUSE = 8,
  RESIDENTIAL = 9,
  JOINT = 10,
  CONSULTINGROOM = 11,
  BUILDING = 12,
  ENTRANCE = 13,
  CORNER = 14,
  STAGE = 15,
  INSIDE = 16,
  LOCAL = 17,
  STABLE = 18,
  MEZZANINE = 19,
  MODULE = 20,
  OFFICE = 21,
  PROMENADE = 22,
  PARCEL = 23,
  PENTHOUSE = 24,
  FLOOR = 25,
  BRIDGE = 26,
  PROPERTY = 27,
  COMMUNALLIVING = 28,
  SECTOR = 29,
  LOT = 30,
  SUPPERBLOCK = 31,
  TOWER = 32,
  UNIT = 33,
  RESIDENTIALUNIT = 34,
  URBANIZATION = 35,
  ZONE = 36,
}

export enum AddressSelection {
  YES = 1,
  NO = 2,
}

export enum AddresStatus {
  ACTIVE = 1,
  INACTIVE = 2,
}

@Entity()
export class Address extends BaseEntity {
  /*@Column()
  third: number;*/

  @Column({
    type: 'enum',
    enum: AddressType,
  })
  addresstype: number;

  /*@Column()
  town: number;*/

  @Column({
    type: 'enum',
    enum: AddressWayType,
  })
  waytype: AddressWayType;

  @Column()
  number1: number;

  @Column({
    type: 'enum',
    enum: AddressLetter,
  })
  letter1: AddressLetter;

  @Column({
    type: 'enum',
    enum: AddressComplement1,
  })
  complement1: AddressComplement1;

  @Column()
  number2: number;

  @Column({
    type: 'enum',
    enum: AddressLetter,
  })
  letter2: AddressLetter;

  @Column({
    type: 'enum',
    enum: AddressComplement1,
  })
  complement2: AddressComplement1;

  @Column()
  number3: number;

  @Column({
    type: 'enum',
    enum: AddressComplement2,
  })
  complement3: AddressComplement2;

  @Column()
  complement4: string;

  @Column()
  address: string;

  @Column()
  validaddress: string;

  @Column({
    type: 'enum',
    enum: AddressSelection,
  })
  mainaddress: AddressSelection;

  @Column({
    type: 'enum',
    enum: AddresStatus,
    default: AddresStatus.ACTIVE,
  })
  status: AddresStatus;
}
