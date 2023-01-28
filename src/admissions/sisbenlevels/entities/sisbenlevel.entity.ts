import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique } from 'typeorm'; 

export enum SisbenLevelStatus {
	ACTIVE = 1,
	INACTIVE = 2,
  }
  
  export enum SisbenLevelType {
	NONE = 0,
	LEVEL_1 = 1,
	LEVEL_2 = 2,
  }
  
  export enum SisbenLevelGroup {
	NONE = 0,
	GROUP_A = 1,
	GROUP_B = 2,
	GROUP_C = 3,
	GROUP_D = 4,
  }
  
  export enum SisbenLevelSubgroup {
	NONE = 0,
	A1 = 1,
	A2 = 2,
	A3 = 3,
	A4 = 4,
	A5 = 5,
	B1 = 6,
	B2 = 7,
	B3 = 8,
	B4 = 9,
	B5 = 10,
	B6 = 11,
	B7 = 12,
	C1 = 13,
	C2 = 14,
	C3 = 15,
	C4 = 16,
	C5 = 17,
	C6 = 18,
	C7 = 19,
	C8 = 20,
	C9 = 21,
	C10 = 22,
	C11 = 23,
	C12 = 24,
	C13 = 25,
	C14 = 26,
	C15 = 27,
	C16 = 28,
	C17 = 29,
	C18 = 30,
	D1 = 31,
	D2 = 32,
	D3 = 33,
	D4 = 34,
	D5 = 35,
	D6 = 36,
	D7 = 37,
	D8 = 38,
	D9 = 39,
	D10 = 40,
	D11 = 41,
	D12 = 42,
	D13 = 43,
	D14 = 44,
	D15 = 45,
	D16 = 46,
	D17 = 47,
	D18 = 48,
	D19 = 49,
	D20 = 50,
	D21 = 51,
  }

@Entity() 
@Unique(['code']) 
export class Sisbenlevel extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string;

	@Column({
		type: 'enum',
		enum: SisbenLevelType,
		default: SisbenLevelType.NONE,
	  })
	  sisbenlevel: SisbenLevelType;
	
	  @Column({
		type: 'enum',
		enum: SisbenLevelGroup,
		default: SisbenLevelGroup.NONE,
	  })
	  sisbengroup: SisbenLevelGroup;
		
	  @Column({
		type: 'enum',
		enum: SisbenLevelSubgroup,
		default: SisbenLevelSubgroup.NONE,
	  })
	  sisbensubgroup: SisbenLevelSubgroup;
		
	  @Column({
		type: 'enum',
		enum: SisbenLevelStatus,
		default: SisbenLevelStatus.ACTIVE,
	  })
	  status: SisbenLevelStatus;
} 
