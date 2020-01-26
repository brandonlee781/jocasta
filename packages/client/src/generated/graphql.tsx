import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};

export type Armor = {
   __typename?: 'Armor',
  id: Scalars['ID'],
  name: Scalars['String'],
  quantity: Scalars['Int'],
  encumberance: Scalars['Int'],
  description?: Maybe<Scalars['String']>,
  rarity: Scalars['Int'],
  hardPoints: Scalars['Int'],
  condition?: Maybe<GearCondition>,
  attachments: Array<Attachment>,
  defense?: Maybe<DefenseAttribute>,
  soak: Scalars['Int'],
  wearing: Scalars['Boolean'],
};


export type ArmorAttachmentsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['ID']>,
  before?: Maybe<Scalars['ID']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type ArmorCreateManyWithoutArmorInput = {
  create?: Maybe<Array<ArmorCreateWithoutCharacterInput>>,
  connect?: Maybe<Array<ArmorWhereUniqueInput>>,
};

export type ArmorCreateManyWithoutArmorsInput = {
  create?: Maybe<Array<ArmorCreateWithoutDefenseInput>>,
  connect?: Maybe<Array<ArmorWhereUniqueInput>>,
};

export type ArmorCreateOneWithoutArmorInput = {
  create?: Maybe<ArmorCreateWithoutAttachmentsInput>,
  connect?: Maybe<ArmorWhereUniqueInput>,
};

export type ArmorCreateWithoutAttachmentsInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  quantity?: Maybe<Scalars['Int']>,
  encumberance?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  rarity?: Maybe<Scalars['Int']>,
  hardPoints?: Maybe<Scalars['Int']>,
  condition?: Maybe<GearCondition>,
  soak: Scalars['Int'],
  wearing: Scalars['Boolean'],
  defense?: Maybe<DefenseAttributeCreateOneWithoutDefenseInput>,
  character?: Maybe<CharacterCreateOneWithoutCharacterInput>,
};

export type ArmorCreateWithoutCharacterInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  quantity?: Maybe<Scalars['Int']>,
  encumberance?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  rarity?: Maybe<Scalars['Int']>,
  hardPoints?: Maybe<Scalars['Int']>,
  condition?: Maybe<GearCondition>,
  soak: Scalars['Int'],
  wearing: Scalars['Boolean'],
  attachments?: Maybe<AttachmentCreateManyWithoutAttachmentsInput>,
  defense?: Maybe<DefenseAttributeCreateOneWithoutDefenseInput>,
};

export type ArmorCreateWithoutDefenseInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  quantity?: Maybe<Scalars['Int']>,
  encumberance?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  rarity?: Maybe<Scalars['Int']>,
  hardPoints?: Maybe<Scalars['Int']>,
  condition?: Maybe<GearCondition>,
  soak: Scalars['Int'],
  wearing: Scalars['Boolean'],
  attachments?: Maybe<AttachmentCreateManyWithoutAttachmentsInput>,
  character?: Maybe<CharacterCreateOneWithoutCharacterInput>,
};

export type ArmorFilter = {
  every?: Maybe<ArmorWhereInput>,
  some?: Maybe<ArmorWhereInput>,
  none?: Maybe<ArmorWhereInput>,
};

export type ArmorScalarWhereInput = {
  id?: Maybe<StringFilter>,
  name?: Maybe<StringFilter>,
  quantity?: Maybe<IntFilter>,
  encumberance?: Maybe<IntFilter>,
  description?: Maybe<NullableStringFilter>,
  rarity?: Maybe<IntFilter>,
  hardPoints?: Maybe<IntFilter>,
  condition?: Maybe<GearCondition>,
  attachments?: Maybe<AttachmentFilter>,
  soak?: Maybe<IntFilter>,
  wearing?: Maybe<BooleanFilter>,
  AND?: Maybe<Array<ArmorScalarWhereInput>>,
  OR?: Maybe<Array<ArmorScalarWhereInput>>,
  NOT?: Maybe<Array<ArmorScalarWhereInput>>,
};

export type ArmorUpdateManyDataInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  quantity?: Maybe<Scalars['Int']>,
  encumberance?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  rarity?: Maybe<Scalars['Int']>,
  hardPoints?: Maybe<Scalars['Int']>,
  condition?: Maybe<GearCondition>,
  soak?: Maybe<Scalars['Int']>,
  wearing?: Maybe<Scalars['Boolean']>,
};

export type ArmorUpdateManyWithoutCharacterInput = {
  create?: Maybe<Array<ArmorCreateWithoutCharacterInput>>,
  connect?: Maybe<Array<ArmorWhereUniqueInput>>,
  set?: Maybe<Array<ArmorWhereUniqueInput>>,
  disconnect?: Maybe<Array<ArmorWhereUniqueInput>>,
  delete?: Maybe<Array<ArmorWhereUniqueInput>>,
  update?: Maybe<Array<ArmorUpdateWithWhereUniqueWithoutCharacterInput>>,
  updateMany?: Maybe<Array<ArmorUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<ArmorScalarWhereInput>>,
  upsert?: Maybe<Array<ArmorUpsertWithWhereUniqueWithoutCharacterInput>>,
};

export type ArmorUpdateManyWithoutDefenseInput = {
  create?: Maybe<Array<ArmorCreateWithoutDefenseInput>>,
  connect?: Maybe<Array<ArmorWhereUniqueInput>>,
  set?: Maybe<Array<ArmorWhereUniqueInput>>,
  disconnect?: Maybe<Array<ArmorWhereUniqueInput>>,
  delete?: Maybe<Array<ArmorWhereUniqueInput>>,
  update?: Maybe<Array<ArmorUpdateWithWhereUniqueWithoutDefenseInput>>,
  updateMany?: Maybe<Array<ArmorUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<ArmorScalarWhereInput>>,
  upsert?: Maybe<Array<ArmorUpsertWithWhereUniqueWithoutDefenseInput>>,
};

export type ArmorUpdateManyWithWhereNestedInput = {
  where: ArmorScalarWhereInput,
  data: ArmorUpdateManyDataInput,
};

export type ArmorUpdateOneWithoutAttachmentsInput = {
  create?: Maybe<ArmorCreateWithoutAttachmentsInput>,
  connect?: Maybe<ArmorWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<ArmorUpdateWithoutAttachmentsDataInput>,
  upsert?: Maybe<ArmorUpsertWithoutAttachmentsInput>,
};

export type ArmorUpdateWithoutAttachmentsDataInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  quantity?: Maybe<Scalars['Int']>,
  encumberance?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  rarity?: Maybe<Scalars['Int']>,
  hardPoints?: Maybe<Scalars['Int']>,
  condition?: Maybe<GearCondition>,
  soak?: Maybe<Scalars['Int']>,
  wearing?: Maybe<Scalars['Boolean']>,
  defense?: Maybe<DefenseAttributeUpdateOneWithoutArmorsInput>,
  character?: Maybe<CharacterUpdateOneWithoutArmorInput>,
};

export type ArmorUpdateWithoutCharacterDataInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  quantity?: Maybe<Scalars['Int']>,
  encumberance?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  rarity?: Maybe<Scalars['Int']>,
  hardPoints?: Maybe<Scalars['Int']>,
  condition?: Maybe<GearCondition>,
  soak?: Maybe<Scalars['Int']>,
  wearing?: Maybe<Scalars['Boolean']>,
  attachments?: Maybe<AttachmentUpdateManyWithoutArmorInput>,
  defense?: Maybe<DefenseAttributeUpdateOneWithoutArmorsInput>,
};

export type ArmorUpdateWithoutDefenseDataInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  quantity?: Maybe<Scalars['Int']>,
  encumberance?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  rarity?: Maybe<Scalars['Int']>,
  hardPoints?: Maybe<Scalars['Int']>,
  condition?: Maybe<GearCondition>,
  soak?: Maybe<Scalars['Int']>,
  wearing?: Maybe<Scalars['Boolean']>,
  attachments?: Maybe<AttachmentUpdateManyWithoutArmorInput>,
  character?: Maybe<CharacterUpdateOneWithoutArmorInput>,
};

export type ArmorUpdateWithWhereUniqueWithoutCharacterInput = {
  where: ArmorWhereUniqueInput,
  data: ArmorUpdateWithoutCharacterDataInput,
};

export type ArmorUpdateWithWhereUniqueWithoutDefenseInput = {
  where: ArmorWhereUniqueInput,
  data: ArmorUpdateWithoutDefenseDataInput,
};

export type ArmorUpsertWithoutAttachmentsInput = {
  update: ArmorUpdateWithoutAttachmentsDataInput,
  create: ArmorCreateWithoutAttachmentsInput,
};

export type ArmorUpsertWithWhereUniqueWithoutCharacterInput = {
  where: ArmorWhereUniqueInput,
  update: ArmorUpdateWithoutCharacterDataInput,
  create: ArmorCreateWithoutCharacterInput,
};

export type ArmorUpsertWithWhereUniqueWithoutDefenseInput = {
  where: ArmorWhereUniqueInput,
  update: ArmorUpdateWithoutDefenseDataInput,
  create: ArmorCreateWithoutDefenseInput,
};

export type ArmorWhereInput = {
  id?: Maybe<StringFilter>,
  name?: Maybe<StringFilter>,
  quantity?: Maybe<IntFilter>,
  encumberance?: Maybe<IntFilter>,
  description?: Maybe<NullableStringFilter>,
  rarity?: Maybe<IntFilter>,
  hardPoints?: Maybe<IntFilter>,
  condition?: Maybe<GearCondition>,
  attachments?: Maybe<AttachmentFilter>,
  soak?: Maybe<IntFilter>,
  wearing?: Maybe<BooleanFilter>,
  AND?: Maybe<Array<ArmorWhereInput>>,
  OR?: Maybe<Array<ArmorWhereInput>>,
  NOT?: Maybe<Array<ArmorWhereInput>>,
  defense?: Maybe<DefenseAttributeWhereInput>,
  character?: Maybe<CharacterWhereInput>,
};

export type ArmorWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Attachment = {
   __typename?: 'Attachment',
  id: Scalars['ID'],
  name: Scalars['String'],
  hardPoints: Scalars['Int'],
  base: Scalars['String'],
  modifications: Scalars['String'],
};

export type AttachmentCreateManyWithoutAttachmentsInput = {
  create?: Maybe<Array<AttachmentCreateWithoutArmorInput>>,
  connect?: Maybe<Array<AttachmentWhereUniqueInput>>,
};

export type AttachmentCreateWithoutArmorInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  hardPoints: Scalars['Int'],
  base: Scalars['String'],
  modifications: Scalars['String'],
  weapon?: Maybe<WeaponCreateOneWithoutWeaponInput>,
};

export type AttachmentCreateWithoutWeaponInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  hardPoints: Scalars['Int'],
  base: Scalars['String'],
  modifications: Scalars['String'],
  armor?: Maybe<ArmorCreateOneWithoutArmorInput>,
};

export type AttachmentFilter = {
  every?: Maybe<AttachmentWhereInput>,
  some?: Maybe<AttachmentWhereInput>,
  none?: Maybe<AttachmentWhereInput>,
};

export type AttachmentScalarWhereInput = {
  id?: Maybe<StringFilter>,
  name?: Maybe<StringFilter>,
  hardPoints?: Maybe<IntFilter>,
  base?: Maybe<StringFilter>,
  modifications?: Maybe<StringFilter>,
  AND?: Maybe<Array<AttachmentScalarWhereInput>>,
  OR?: Maybe<Array<AttachmentScalarWhereInput>>,
  NOT?: Maybe<Array<AttachmentScalarWhereInput>>,
};

export type AttachmentUpdateManyDataInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  hardPoints?: Maybe<Scalars['Int']>,
  base?: Maybe<Scalars['String']>,
  modifications?: Maybe<Scalars['String']>,
};

export type AttachmentUpdateManyWithoutArmorInput = {
  create?: Maybe<Array<AttachmentCreateWithoutArmorInput>>,
  connect?: Maybe<Array<AttachmentWhereUniqueInput>>,
  set?: Maybe<Array<AttachmentWhereUniqueInput>>,
  disconnect?: Maybe<Array<AttachmentWhereUniqueInput>>,
  delete?: Maybe<Array<AttachmentWhereUniqueInput>>,
  update?: Maybe<Array<AttachmentUpdateWithWhereUniqueWithoutArmorInput>>,
  updateMany?: Maybe<Array<AttachmentUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<AttachmentScalarWhereInput>>,
  upsert?: Maybe<Array<AttachmentUpsertWithWhereUniqueWithoutArmorInput>>,
};

export type AttachmentUpdateManyWithoutWeaponInput = {
  create?: Maybe<Array<AttachmentCreateWithoutWeaponInput>>,
  connect?: Maybe<Array<AttachmentWhereUniqueInput>>,
  set?: Maybe<Array<AttachmentWhereUniqueInput>>,
  disconnect?: Maybe<Array<AttachmentWhereUniqueInput>>,
  delete?: Maybe<Array<AttachmentWhereUniqueInput>>,
  update?: Maybe<Array<AttachmentUpdateWithWhereUniqueWithoutWeaponInput>>,
  updateMany?: Maybe<Array<AttachmentUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<AttachmentScalarWhereInput>>,
  upsert?: Maybe<Array<AttachmentUpsertWithWhereUniqueWithoutWeaponInput>>,
};

export type AttachmentUpdateManyWithWhereNestedInput = {
  where: AttachmentScalarWhereInput,
  data: AttachmentUpdateManyDataInput,
};

export type AttachmentUpdateWithoutArmorDataInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  hardPoints?: Maybe<Scalars['Int']>,
  base?: Maybe<Scalars['String']>,
  modifications?: Maybe<Scalars['String']>,
  weapon?: Maybe<WeaponUpdateOneWithoutAttachmentsInput>,
};

export type AttachmentUpdateWithoutWeaponDataInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  hardPoints?: Maybe<Scalars['Int']>,
  base?: Maybe<Scalars['String']>,
  modifications?: Maybe<Scalars['String']>,
  armor?: Maybe<ArmorUpdateOneWithoutAttachmentsInput>,
};

export type AttachmentUpdateWithWhereUniqueWithoutArmorInput = {
  where: AttachmentWhereUniqueInput,
  data: AttachmentUpdateWithoutArmorDataInput,
};

export type AttachmentUpdateWithWhereUniqueWithoutWeaponInput = {
  where: AttachmentWhereUniqueInput,
  data: AttachmentUpdateWithoutWeaponDataInput,
};

export type AttachmentUpsertWithWhereUniqueWithoutArmorInput = {
  where: AttachmentWhereUniqueInput,
  update: AttachmentUpdateWithoutArmorDataInput,
  create: AttachmentCreateWithoutArmorInput,
};

export type AttachmentUpsertWithWhereUniqueWithoutWeaponInput = {
  where: AttachmentWhereUniqueInput,
  update: AttachmentUpdateWithoutWeaponDataInput,
  create: AttachmentCreateWithoutWeaponInput,
};

export type AttachmentWhereInput = {
  id?: Maybe<StringFilter>,
  name?: Maybe<StringFilter>,
  hardPoints?: Maybe<IntFilter>,
  base?: Maybe<StringFilter>,
  modifications?: Maybe<StringFilter>,
  AND?: Maybe<Array<AttachmentWhereInput>>,
  OR?: Maybe<Array<AttachmentWhereInput>>,
  NOT?: Maybe<Array<AttachmentWhereInput>>,
  weapon?: Maybe<WeaponWhereInput>,
  armor?: Maybe<ArmorWhereInput>,
};

export type AttachmentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type AuthPayload = {
   __typename?: 'AuthPayload',
  token: Scalars['String'],
  user: User,
};

export type BooleanFilter = {
  equals?: Maybe<Scalars['Boolean']>,
  not?: Maybe<Scalars['Boolean']>,
};

export type Career = {
   __typename?: 'Career',
  id: Scalars['Int'],
  name: Scalars['String'],
  skills: Array<Skill>,
  specializations: Array<Specialization>,
};


export type CareerSkillsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type CareerSpecializationsArgs = {
  orderBy?: Maybe<CareerSpecializationsOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type CareerCreateManyWithoutCareersInput = {
  create?: Maybe<Array<CareerCreateWithoutSkillsInput>>,
  connect?: Maybe<Array<CareerWhereUniqueInput>>,
};

export type CareerCreateOneWithoutCareerInput = {
  create?: Maybe<CareerCreateWithoutSpecializationsInput>,
  connect?: Maybe<CareerWhereUniqueInput>,
};

export type CareerCreateWithoutSkillsInput = {
  id: Scalars['Int'],
  name: Scalars['String'],
  specializations?: Maybe<SpecializationCreateManyWithoutSpecializationsInput>,
};

export type CareerCreateWithoutSpecializationsInput = {
  id: Scalars['Int'],
  name: Scalars['String'],
  skills?: Maybe<SkillCreateManyWithoutSkillsInput>,
};

export type CareerFilter = {
  every?: Maybe<CareerWhereInput>,
  some?: Maybe<CareerWhereInput>,
  none?: Maybe<CareerWhereInput>,
};

export type CareerScalarWhereInput = {
  id?: Maybe<IntFilter>,
  name?: Maybe<StringFilter>,
  skills?: Maybe<SkillFilter>,
  specializations?: Maybe<SpecializationFilter>,
  AND?: Maybe<Array<CareerScalarWhereInput>>,
  OR?: Maybe<Array<CareerScalarWhereInput>>,
  NOT?: Maybe<Array<CareerScalarWhereInput>>,
};

export type CareerSpecializationsOrderByInput = {
  id?: Maybe<OrderByArg>,
  name?: Maybe<OrderByArg>,
};

export type CareerUpdateManyDataInput = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type CareerUpdateManyWithoutSkillsInput = {
  create?: Maybe<Array<CareerCreateWithoutSkillsInput>>,
  connect?: Maybe<Array<CareerWhereUniqueInput>>,
  set?: Maybe<Array<CareerWhereUniqueInput>>,
  disconnect?: Maybe<Array<CareerWhereUniqueInput>>,
  delete?: Maybe<Array<CareerWhereUniqueInput>>,
  update?: Maybe<Array<CareerUpdateWithWhereUniqueWithoutSkillsInput>>,
  updateMany?: Maybe<Array<CareerUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<CareerScalarWhereInput>>,
  upsert?: Maybe<Array<CareerUpsertWithWhereUniqueWithoutSkillsInput>>,
};

export type CareerUpdateManyWithWhereNestedInput = {
  where: CareerScalarWhereInput,
  data: CareerUpdateManyDataInput,
};

export type CareerUpdateOneWithoutSpecializationsInput = {
  create?: Maybe<CareerCreateWithoutSpecializationsInput>,
  connect?: Maybe<CareerWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<CareerUpdateWithoutSpecializationsDataInput>,
  upsert?: Maybe<CareerUpsertWithoutSpecializationsInput>,
};

export type CareerUpdateWithoutSkillsDataInput = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  specializations?: Maybe<SpecializationUpdateManyWithoutCareerInput>,
};

export type CareerUpdateWithoutSpecializationsDataInput = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  skills?: Maybe<SkillUpdateManyWithoutCareersInput>,
};

export type CareerUpdateWithWhereUniqueWithoutSkillsInput = {
  where: CareerWhereUniqueInput,
  data: CareerUpdateWithoutSkillsDataInput,
};

export type CareerUpsertWithoutSpecializationsInput = {
  update: CareerUpdateWithoutSpecializationsDataInput,
  create: CareerCreateWithoutSpecializationsInput,
};

export type CareerUpsertWithWhereUniqueWithoutSkillsInput = {
  where: CareerWhereUniqueInput,
  update: CareerUpdateWithoutSkillsDataInput,
  create: CareerCreateWithoutSkillsInput,
};

export type CareerWhereInput = {
  id?: Maybe<IntFilter>,
  name?: Maybe<StringFilter>,
  skills?: Maybe<SkillFilter>,
  specializations?: Maybe<SpecializationFilter>,
  AND?: Maybe<Array<CareerWhereInput>>,
  OR?: Maybe<Array<CareerWhereInput>>,
  NOT?: Maybe<Array<CareerWhereInput>>,
};

export type CareerWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type Character = {
   __typename?: 'Character',
  id: Scalars['ID'],
  name: Scalars['String'],
  system: System,
  career: Scalars['String'],
  species: Scalars['String'],
  specializations: Array<Specialization>,
  characteristics?: Maybe<Characteristic>,
  derivedAttributes?: Maybe<DerivedAttribute>,
  skills: Array<CharacterSkills>,
  talents: Array<TalentTreeNode>,
  gear: Array<Gear>,
  weapons: Array<Weapon>,
  armor: Array<Armor>,
  encumberance?: Maybe<Threshold>,
  experience?: Maybe<Experience>,
  resources?: Maybe<Scalars['String']>,
  credits?: Maybe<Scalars['Int']>,
  injuries?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  motivation?: Maybe<Scalars['String']>,
  duties: Array<Duty>,
  imageUrl?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  user: User,
};


export type CharacterSpecializationsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type CharacterGearArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['ID']>,
  before?: Maybe<Scalars['ID']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type CharacterWeaponsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['ID']>,
  before?: Maybe<Scalars['ID']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type CharacterArmorArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['ID']>,
  before?: Maybe<Scalars['ID']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type CharacterDutiesArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['ID']>,
  before?: Maybe<Scalars['ID']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type CharacterCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  system: System,
  species: Scalars['String'],
  career: Scalars['String'],
  resources?: Maybe<Scalars['String']>,
  credits?: Maybe<Scalars['Int']>,
  injuries?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  motivation?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  specializations?: Maybe<SpecializationCreateManyWithoutSpecializationsInput>,
  characteristics?: Maybe<CharacteristicCreateOneWithoutCharacteristicsInput>,
  derivedAttributes?: Maybe<DerivedAttributeCreateOneWithoutDerivedAttributesInput>,
  skills?: Maybe<CharacterSkillCreateManyWithoutSkillsInput>,
  talents?: Maybe<CharacterTalentCreateManyWithoutTalentsInput>,
  gear?: Maybe<GearCreateManyWithoutGearInput>,
  weapons?: Maybe<WeaponCreateManyWithoutWeaponsInput>,
  armor?: Maybe<ArmorCreateManyWithoutArmorInput>,
  encumberance?: Maybe<ThresholdCreateOneWithoutEncumberanceInput>,
  experience?: Maybe<ExperienceCreateOneWithoutExperienceInput>,
  duties?: Maybe<DutyCreateManyWithoutDutiesInput>,
  user: UserCreateOneWithoutUserInput,
};

export type CharacterCreateManyWithoutCharactersInput = {
  create?: Maybe<Array<CharacterCreateWithoutSpecializationsInput>>,
  connect?: Maybe<Array<CharacterWhereUniqueInput>>,
};

export type CharacterCreateOneWithoutCharacterInput = {
  create?: Maybe<CharacterCreateWithoutWeaponsInput>,
  connect?: Maybe<CharacterWhereUniqueInput>,
};

export type CharacterCreateWithoutArmorInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  system: System,
  species: Scalars['String'],
  career: Scalars['String'],
  resources?: Maybe<Scalars['String']>,
  credits?: Maybe<Scalars['Int']>,
  injuries?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  motivation?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  specializations?: Maybe<SpecializationCreateManyWithoutSpecializationsInput>,
  characteristics?: Maybe<CharacteristicCreateOneWithoutCharacteristicsInput>,
  derivedAttributes?: Maybe<DerivedAttributeCreateOneWithoutDerivedAttributesInput>,
  skills?: Maybe<CharacterSkillCreateManyWithoutSkillsInput>,
  talents?: Maybe<CharacterTalentCreateManyWithoutTalentsInput>,
  gear?: Maybe<GearCreateManyWithoutGearInput>,
  weapons?: Maybe<WeaponCreateManyWithoutWeaponsInput>,
  encumberance?: Maybe<ThresholdCreateOneWithoutEncumberanceInput>,
  experience?: Maybe<ExperienceCreateOneWithoutExperienceInput>,
  duties?: Maybe<DutyCreateManyWithoutDutiesInput>,
  user: UserCreateOneWithoutUserInput,
};

export type CharacterCreateWithoutDerivedAttributesInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  system: System,
  species: Scalars['String'],
  career: Scalars['String'],
  resources?: Maybe<Scalars['String']>,
  credits?: Maybe<Scalars['Int']>,
  injuries?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  motivation?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  specializations?: Maybe<SpecializationCreateManyWithoutSpecializationsInput>,
  characteristics?: Maybe<CharacteristicCreateOneWithoutCharacteristicsInput>,
  skills?: Maybe<CharacterSkillCreateManyWithoutSkillsInput>,
  talents?: Maybe<CharacterTalentCreateManyWithoutTalentsInput>,
  gear?: Maybe<GearCreateManyWithoutGearInput>,
  weapons?: Maybe<WeaponCreateManyWithoutWeaponsInput>,
  armor?: Maybe<ArmorCreateManyWithoutArmorInput>,
  encumberance?: Maybe<ThresholdCreateOneWithoutEncumberanceInput>,
  experience?: Maybe<ExperienceCreateOneWithoutExperienceInput>,
  duties?: Maybe<DutyCreateManyWithoutDutiesInput>,
  user: UserCreateOneWithoutUserInput,
};

export type CharacterCreateWithoutEncumberanceInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  system: System,
  species: Scalars['String'],
  career: Scalars['String'],
  resources?: Maybe<Scalars['String']>,
  credits?: Maybe<Scalars['Int']>,
  injuries?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  motivation?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  specializations?: Maybe<SpecializationCreateManyWithoutSpecializationsInput>,
  characteristics?: Maybe<CharacteristicCreateOneWithoutCharacteristicsInput>,
  derivedAttributes?: Maybe<DerivedAttributeCreateOneWithoutDerivedAttributesInput>,
  skills?: Maybe<CharacterSkillCreateManyWithoutSkillsInput>,
  talents?: Maybe<CharacterTalentCreateManyWithoutTalentsInput>,
  gear?: Maybe<GearCreateManyWithoutGearInput>,
  weapons?: Maybe<WeaponCreateManyWithoutWeaponsInput>,
  armor?: Maybe<ArmorCreateManyWithoutArmorInput>,
  experience?: Maybe<ExperienceCreateOneWithoutExperienceInput>,
  duties?: Maybe<DutyCreateManyWithoutDutiesInput>,
  user: UserCreateOneWithoutUserInput,
};

export type CharacterCreateWithoutSkillsInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  system: System,
  species: Scalars['String'],
  career: Scalars['String'],
  resources?: Maybe<Scalars['String']>,
  credits?: Maybe<Scalars['Int']>,
  injuries?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  motivation?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  specializations?: Maybe<SpecializationCreateManyWithoutSpecializationsInput>,
  characteristics?: Maybe<CharacteristicCreateOneWithoutCharacteristicsInput>,
  derivedAttributes?: Maybe<DerivedAttributeCreateOneWithoutDerivedAttributesInput>,
  talents?: Maybe<CharacterTalentCreateManyWithoutTalentsInput>,
  gear?: Maybe<GearCreateManyWithoutGearInput>,
  weapons?: Maybe<WeaponCreateManyWithoutWeaponsInput>,
  armor?: Maybe<ArmorCreateManyWithoutArmorInput>,
  encumberance?: Maybe<ThresholdCreateOneWithoutEncumberanceInput>,
  experience?: Maybe<ExperienceCreateOneWithoutExperienceInput>,
  duties?: Maybe<DutyCreateManyWithoutDutiesInput>,
  user: UserCreateOneWithoutUserInput,
};

export type CharacterCreateWithoutSpecializationsInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  system: System,
  species: Scalars['String'],
  career: Scalars['String'],
  resources?: Maybe<Scalars['String']>,
  credits?: Maybe<Scalars['Int']>,
  injuries?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  motivation?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  characteristics?: Maybe<CharacteristicCreateOneWithoutCharacteristicsInput>,
  derivedAttributes?: Maybe<DerivedAttributeCreateOneWithoutDerivedAttributesInput>,
  skills?: Maybe<CharacterSkillCreateManyWithoutSkillsInput>,
  talents?: Maybe<CharacterTalentCreateManyWithoutTalentsInput>,
  gear?: Maybe<GearCreateManyWithoutGearInput>,
  weapons?: Maybe<WeaponCreateManyWithoutWeaponsInput>,
  armor?: Maybe<ArmorCreateManyWithoutArmorInput>,
  encumberance?: Maybe<ThresholdCreateOneWithoutEncumberanceInput>,
  experience?: Maybe<ExperienceCreateOneWithoutExperienceInput>,
  duties?: Maybe<DutyCreateManyWithoutDutiesInput>,
  user: UserCreateOneWithoutUserInput,
};

export type CharacterCreateWithoutTalentsInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  system: System,
  species: Scalars['String'],
  career: Scalars['String'],
  resources?: Maybe<Scalars['String']>,
  credits?: Maybe<Scalars['Int']>,
  injuries?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  motivation?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  specializations?: Maybe<SpecializationCreateManyWithoutSpecializationsInput>,
  characteristics?: Maybe<CharacteristicCreateOneWithoutCharacteristicsInput>,
  derivedAttributes?: Maybe<DerivedAttributeCreateOneWithoutDerivedAttributesInput>,
  skills?: Maybe<CharacterSkillCreateManyWithoutSkillsInput>,
  gear?: Maybe<GearCreateManyWithoutGearInput>,
  weapons?: Maybe<WeaponCreateManyWithoutWeaponsInput>,
  armor?: Maybe<ArmorCreateManyWithoutArmorInput>,
  encumberance?: Maybe<ThresholdCreateOneWithoutEncumberanceInput>,
  experience?: Maybe<ExperienceCreateOneWithoutExperienceInput>,
  duties?: Maybe<DutyCreateManyWithoutDutiesInput>,
  user: UserCreateOneWithoutUserInput,
};

export type CharacterCreateWithoutWeaponsInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  system: System,
  species: Scalars['String'],
  career: Scalars['String'],
  resources?: Maybe<Scalars['String']>,
  credits?: Maybe<Scalars['Int']>,
  injuries?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  motivation?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  specializations?: Maybe<SpecializationCreateManyWithoutSpecializationsInput>,
  characteristics?: Maybe<CharacteristicCreateOneWithoutCharacteristicsInput>,
  derivedAttributes?: Maybe<DerivedAttributeCreateOneWithoutDerivedAttributesInput>,
  skills?: Maybe<CharacterSkillCreateManyWithoutSkillsInput>,
  talents?: Maybe<CharacterTalentCreateManyWithoutTalentsInput>,
  gear?: Maybe<GearCreateManyWithoutGearInput>,
  armor?: Maybe<ArmorCreateManyWithoutArmorInput>,
  encumberance?: Maybe<ThresholdCreateOneWithoutEncumberanceInput>,
  experience?: Maybe<ExperienceCreateOneWithoutExperienceInput>,
  duties?: Maybe<DutyCreateManyWithoutDutiesInput>,
  user: UserCreateOneWithoutUserInput,
};

export type CharacterFilter = {
  every?: Maybe<CharacterWhereInput>,
  some?: Maybe<CharacterWhereInput>,
  none?: Maybe<CharacterWhereInput>,
};

export type Characteristic = {
   __typename?: 'Characteristic',
  id: Scalars['ID'],
  Brawn: Scalars['Int'],
  Agility: Scalars['Int'],
  Intellect: Scalars['Int'],
  Cunning: Scalars['Int'],
  Willpower: Scalars['Int'],
  Presence: Scalars['Int'],
};

export type CharacteristicCreateOneWithoutCharacteristicsInput = {
  create?: Maybe<CharacteristicCreateWithoutCharactersInput>,
  connect?: Maybe<CharacteristicWhereUniqueInput>,
};

export type CharacteristicCreateWithoutCharactersInput = {
  id?: Maybe<Scalars['ID']>,
  Brawn?: Maybe<Scalars['Int']>,
  Agility?: Maybe<Scalars['Int']>,
  Intellect?: Maybe<Scalars['Int']>,
  Cunning?: Maybe<Scalars['Int']>,
  Willpower?: Maybe<Scalars['Int']>,
  Presence?: Maybe<Scalars['Int']>,
};

export enum CharacteristicName {
  Brawn = 'Brawn',
  Agility = 'Agility',
  Intellect = 'Intellect',
  Cunning = 'Cunning',
  Willpower = 'Willpower',
  Presence = 'Presence'
}

export type CharacteristicUpdateOneWithoutCharactersInput = {
  create?: Maybe<CharacteristicCreateWithoutCharactersInput>,
  connect?: Maybe<CharacteristicWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<CharacteristicUpdateWithoutCharactersDataInput>,
  upsert?: Maybe<CharacteristicUpsertWithoutCharactersInput>,
};

export type CharacteristicUpdateWithoutCharactersDataInput = {
  id?: Maybe<Scalars['ID']>,
  Brawn?: Maybe<Scalars['Int']>,
  Agility?: Maybe<Scalars['Int']>,
  Intellect?: Maybe<Scalars['Int']>,
  Cunning?: Maybe<Scalars['Int']>,
  Willpower?: Maybe<Scalars['Int']>,
  Presence?: Maybe<Scalars['Int']>,
};

export type CharacteristicUpsertWithoutCharactersInput = {
  update: CharacteristicUpdateWithoutCharactersDataInput,
  create: CharacteristicCreateWithoutCharactersInput,
};

export type CharacteristicWhereInput = {
  id?: Maybe<StringFilter>,
  Brawn?: Maybe<IntFilter>,
  Agility?: Maybe<IntFilter>,
  Intellect?: Maybe<IntFilter>,
  Cunning?: Maybe<IntFilter>,
  Willpower?: Maybe<IntFilter>,
  Presence?: Maybe<IntFilter>,
  characters?: Maybe<CharacterFilter>,
  AND?: Maybe<Array<CharacteristicWhereInput>>,
  OR?: Maybe<Array<CharacteristicWhereInput>>,
  NOT?: Maybe<Array<CharacteristicWhereInput>>,
};

export type CharacteristicWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type CharacterScalarWhereInput = {
  id?: Maybe<StringFilter>,
  name?: Maybe<StringFilter>,
  system?: Maybe<System>,
  species?: Maybe<StringFilter>,
  career?: Maybe<StringFilter>,
  specializations?: Maybe<SpecializationFilter>,
  skills?: Maybe<CharacterSkillFilter>,
  talents?: Maybe<CharacterTalentFilter>,
  gear?: Maybe<GearFilter>,
  weapons?: Maybe<WeaponFilter>,
  armor?: Maybe<ArmorFilter>,
  resources?: Maybe<NullableStringFilter>,
  credits?: Maybe<NullableIntFilter>,
  injuries?: Maybe<NullableStringFilter>,
  background?: Maybe<NullableStringFilter>,
  description?: Maybe<NullableStringFilter>,
  motivation?: Maybe<NullableStringFilter>,
  duties?: Maybe<DutyFilter>,
  imageUrl?: Maybe<NullableStringFilter>,
  notes?: Maybe<NullableStringFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  AND?: Maybe<Array<CharacterScalarWhereInput>>,
  OR?: Maybe<Array<CharacterScalarWhereInput>>,
  NOT?: Maybe<Array<CharacterScalarWhereInput>>,
};

export type CharacterSkillCreateManyWithoutCharacterSkillsInput = {
  create?: Maybe<Array<CharacterSkillCreateWithoutSkillInput>>,
  connect?: Maybe<Array<CharacterSkillWhereUniqueInput>>,
};

export type CharacterSkillCreateManyWithoutSkillsInput = {
  create?: Maybe<Array<CharacterSkillCreateWithoutCharacterInput>>,
  connect?: Maybe<Array<CharacterSkillWhereUniqueInput>>,
};

export type CharacterSkillCreateWithoutCharacterInput = {
  id?: Maybe<Scalars['ID']>,
  career?: Maybe<Scalars['Boolean']>,
  rank?: Maybe<Scalars['Int']>,
  skill: SkillCreateOneWithoutSkillInput,
};

export type CharacterSkillCreateWithoutSkillInput = {
  id?: Maybe<Scalars['ID']>,
  career?: Maybe<Scalars['Boolean']>,
  rank?: Maybe<Scalars['Int']>,
  character?: Maybe<CharacterCreateOneWithoutCharacterInput>,
};

export type CharacterSkillFilter = {
  every?: Maybe<CharacterSkillWhereInput>,
  some?: Maybe<CharacterSkillWhereInput>,
  none?: Maybe<CharacterSkillWhereInput>,
};

export type CharacterSkills = {
   __typename?: 'CharacterSkills',
  id: Scalars['ID'],
  skillId: Scalars['Int'],
  name: Scalars['String'],
  characteristic: CharacteristicName,
  type: SkillType,
  career: Scalars['Boolean'],
  rank: Scalars['Int'],
};

export type CharacterSkillScalarWhereInput = {
  id?: Maybe<StringFilter>,
  career?: Maybe<BooleanFilter>,
  rank?: Maybe<IntFilter>,
  AND?: Maybe<Array<CharacterSkillScalarWhereInput>>,
  OR?: Maybe<Array<CharacterSkillScalarWhereInput>>,
  NOT?: Maybe<Array<CharacterSkillScalarWhereInput>>,
};

export type CharacterSkillUpdateManyDataInput = {
  id?: Maybe<Scalars['ID']>,
  career?: Maybe<Scalars['Boolean']>,
  rank?: Maybe<Scalars['Int']>,
};

export type CharacterSkillUpdateManyWithoutCharacterInput = {
  create?: Maybe<Array<CharacterSkillCreateWithoutCharacterInput>>,
  connect?: Maybe<Array<CharacterSkillWhereUniqueInput>>,
  set?: Maybe<Array<CharacterSkillWhereUniqueInput>>,
  disconnect?: Maybe<Array<CharacterSkillWhereUniqueInput>>,
  delete?: Maybe<Array<CharacterSkillWhereUniqueInput>>,
  update?: Maybe<Array<CharacterSkillUpdateWithWhereUniqueWithoutCharacterInput>>,
  updateMany?: Maybe<Array<CharacterSkillUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<CharacterSkillScalarWhereInput>>,
  upsert?: Maybe<Array<CharacterSkillUpsertWithWhereUniqueWithoutCharacterInput>>,
};

export type CharacterSkillUpdateManyWithoutSkillInput = {
  create?: Maybe<Array<CharacterSkillCreateWithoutSkillInput>>,
  connect?: Maybe<Array<CharacterSkillWhereUniqueInput>>,
  set?: Maybe<Array<CharacterSkillWhereUniqueInput>>,
  disconnect?: Maybe<Array<CharacterSkillWhereUniqueInput>>,
  delete?: Maybe<Array<CharacterSkillWhereUniqueInput>>,
  update?: Maybe<Array<CharacterSkillUpdateWithWhereUniqueWithoutSkillInput>>,
  updateMany?: Maybe<Array<CharacterSkillUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<CharacterSkillScalarWhereInput>>,
  upsert?: Maybe<Array<CharacterSkillUpsertWithWhereUniqueWithoutSkillInput>>,
};

export type CharacterSkillUpdateManyWithWhereNestedInput = {
  where: CharacterSkillScalarWhereInput,
  data: CharacterSkillUpdateManyDataInput,
};

export type CharacterSkillUpdateWithoutCharacterDataInput = {
  id?: Maybe<Scalars['ID']>,
  career?: Maybe<Scalars['Boolean']>,
  rank?: Maybe<Scalars['Int']>,
  skill?: Maybe<SkillUpdateOneRequiredWithoutCharacterSkillsInput>,
};

export type CharacterSkillUpdateWithoutSkillDataInput = {
  id?: Maybe<Scalars['ID']>,
  career?: Maybe<Scalars['Boolean']>,
  rank?: Maybe<Scalars['Int']>,
  character?: Maybe<CharacterUpdateOneWithoutSkillsInput>,
};

export type CharacterSkillUpdateWithWhereUniqueWithoutCharacterInput = {
  where: CharacterSkillWhereUniqueInput,
  data: CharacterSkillUpdateWithoutCharacterDataInput,
};

export type CharacterSkillUpdateWithWhereUniqueWithoutSkillInput = {
  where: CharacterSkillWhereUniqueInput,
  data: CharacterSkillUpdateWithoutSkillDataInput,
};

export type CharacterSkillUpsertWithWhereUniqueWithoutCharacterInput = {
  where: CharacterSkillWhereUniqueInput,
  update: CharacterSkillUpdateWithoutCharacterDataInput,
  create: CharacterSkillCreateWithoutCharacterInput,
};

export type CharacterSkillUpsertWithWhereUniqueWithoutSkillInput = {
  where: CharacterSkillWhereUniqueInput,
  update: CharacterSkillUpdateWithoutSkillDataInput,
  create: CharacterSkillCreateWithoutSkillInput,
};

export type CharacterSkillWhereInput = {
  id?: Maybe<StringFilter>,
  career?: Maybe<BooleanFilter>,
  rank?: Maybe<IntFilter>,
  AND?: Maybe<Array<CharacterSkillWhereInput>>,
  OR?: Maybe<Array<CharacterSkillWhereInput>>,
  NOT?: Maybe<Array<CharacterSkillWhereInput>>,
  skill?: Maybe<SkillWhereInput>,
  character?: Maybe<CharacterWhereInput>,
};

export type CharacterSkillWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type CharacterTalent = {
   __typename?: 'CharacterTalent',
  id: Scalars['ID'],
  talent: TalentTreeNode,
};

export type CharacterTalentCreateManyWithoutCharacterTalentsInput = {
  create?: Maybe<Array<CharacterTalentCreateWithoutTalentInput>>,
  connect?: Maybe<Array<CharacterTalentWhereUniqueInput>>,
};

export type CharacterTalentCreateManyWithoutTalentsInput = {
  create?: Maybe<Array<CharacterTalentCreateWithoutCharacterInput>>,
  connect?: Maybe<Array<CharacterTalentWhereUniqueInput>>,
};

export type CharacterTalentCreateWithoutCharacterInput = {
  id?: Maybe<Scalars['ID']>,
  talent: TalentTreeNodeCreateOneWithoutTalentInput,
};

export type CharacterTalentCreateWithoutTalentInput = {
  id?: Maybe<Scalars['ID']>,
  character?: Maybe<CharacterCreateOneWithoutCharacterInput>,
};

export type CharacterTalentFilter = {
  every?: Maybe<CharacterTalentWhereInput>,
  some?: Maybe<CharacterTalentWhereInput>,
  none?: Maybe<CharacterTalentWhereInput>,
};

export type CharacterTalentScalarWhereInput = {
  id?: Maybe<StringFilter>,
  AND?: Maybe<Array<CharacterTalentScalarWhereInput>>,
  OR?: Maybe<Array<CharacterTalentScalarWhereInput>>,
  NOT?: Maybe<Array<CharacterTalentScalarWhereInput>>,
};

export type CharacterTalentUpdateManyDataInput = {
  id?: Maybe<Scalars['ID']>,
};

export type CharacterTalentUpdateManyWithoutCharacterInput = {
  create?: Maybe<Array<CharacterTalentCreateWithoutCharacterInput>>,
  connect?: Maybe<Array<CharacterTalentWhereUniqueInput>>,
  set?: Maybe<Array<CharacterTalentWhereUniqueInput>>,
  disconnect?: Maybe<Array<CharacterTalentWhereUniqueInput>>,
  delete?: Maybe<Array<CharacterTalentWhereUniqueInput>>,
  update?: Maybe<Array<CharacterTalentUpdateWithWhereUniqueWithoutCharacterInput>>,
  updateMany?: Maybe<Array<CharacterTalentUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<CharacterTalentScalarWhereInput>>,
  upsert?: Maybe<Array<CharacterTalentUpsertWithWhereUniqueWithoutCharacterInput>>,
};

export type CharacterTalentUpdateManyWithoutTalentInput = {
  create?: Maybe<Array<CharacterTalentCreateWithoutTalentInput>>,
  connect?: Maybe<Array<CharacterTalentWhereUniqueInput>>,
  set?: Maybe<Array<CharacterTalentWhereUniqueInput>>,
  disconnect?: Maybe<Array<CharacterTalentWhereUniqueInput>>,
  delete?: Maybe<Array<CharacterTalentWhereUniqueInput>>,
  update?: Maybe<Array<CharacterTalentUpdateWithWhereUniqueWithoutTalentInput>>,
  updateMany?: Maybe<Array<CharacterTalentUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<CharacterTalentScalarWhereInput>>,
  upsert?: Maybe<Array<CharacterTalentUpsertWithWhereUniqueWithoutTalentInput>>,
};

export type CharacterTalentUpdateManyWithWhereNestedInput = {
  where: CharacterTalentScalarWhereInput,
  data: CharacterTalentUpdateManyDataInput,
};

export type CharacterTalentUpdateWithoutCharacterDataInput = {
  id?: Maybe<Scalars['ID']>,
  talent?: Maybe<TalentTreeNodeUpdateOneRequiredWithoutCharacterTalentsInput>,
};

export type CharacterTalentUpdateWithoutTalentDataInput = {
  id?: Maybe<Scalars['ID']>,
  character?: Maybe<CharacterUpdateOneWithoutTalentsInput>,
};

export type CharacterTalentUpdateWithWhereUniqueWithoutCharacterInput = {
  where: CharacterTalentWhereUniqueInput,
  data: CharacterTalentUpdateWithoutCharacterDataInput,
};

export type CharacterTalentUpdateWithWhereUniqueWithoutTalentInput = {
  where: CharacterTalentWhereUniqueInput,
  data: CharacterTalentUpdateWithoutTalentDataInput,
};

export type CharacterTalentUpsertWithWhereUniqueWithoutCharacterInput = {
  where: CharacterTalentWhereUniqueInput,
  update: CharacterTalentUpdateWithoutCharacterDataInput,
  create: CharacterTalentCreateWithoutCharacterInput,
};

export type CharacterTalentUpsertWithWhereUniqueWithoutTalentInput = {
  where: CharacterTalentWhereUniqueInput,
  update: CharacterTalentUpdateWithoutTalentDataInput,
  create: CharacterTalentCreateWithoutTalentInput,
};

export type CharacterTalentWhereInput = {
  id?: Maybe<StringFilter>,
  AND?: Maybe<Array<CharacterTalentWhereInput>>,
  OR?: Maybe<Array<CharacterTalentWhereInput>>,
  NOT?: Maybe<Array<CharacterTalentWhereInput>>,
  talent?: Maybe<TalentTreeNodeWhereInput>,
  character?: Maybe<CharacterWhereInput>,
};

export type CharacterTalentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type CharacterUpdateInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  system?: Maybe<System>,
  species?: Maybe<Scalars['String']>,
  career?: Maybe<Scalars['String']>,
  resources?: Maybe<Scalars['String']>,
  credits?: Maybe<Scalars['Int']>,
  injuries?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  motivation?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  specializations?: Maybe<SpecializationUpdateManyWithoutCharactersInput>,
  characteristics?: Maybe<CharacteristicUpdateOneWithoutCharactersInput>,
  derivedAttributes?: Maybe<DerivedAttributeUpdateOneWithoutCharacterInput>,
  skills?: Maybe<CharacterSkillUpdateManyWithoutCharacterInput>,
  talents?: Maybe<CharacterTalentUpdateManyWithoutCharacterInput>,
  gear?: Maybe<GearUpdateManyWithoutCharacterInput>,
  weapons?: Maybe<WeaponUpdateManyWithoutCharacterInput>,
  armor?: Maybe<ArmorUpdateManyWithoutCharacterInput>,
  encumberance?: Maybe<ThresholdUpdateOneWithoutCharactersInput>,
  experience?: Maybe<ExperienceUpdateOneWithoutCharactersInput>,
  duties?: Maybe<DutyUpdateManyWithoutCharacterInput>,
  user?: Maybe<UserUpdateOneRequiredWithoutCharactersInput>,
};

export type CharacterUpdateManyDataInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  system?: Maybe<System>,
  species?: Maybe<Scalars['String']>,
  career?: Maybe<Scalars['String']>,
  resources?: Maybe<Scalars['String']>,
  credits?: Maybe<Scalars['Int']>,
  injuries?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  motivation?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type CharacterUpdateManyWithoutEncumberanceInput = {
  create?: Maybe<Array<CharacterCreateWithoutEncumberanceInput>>,
  connect?: Maybe<Array<CharacterWhereUniqueInput>>,
  set?: Maybe<Array<CharacterWhereUniqueInput>>,
  disconnect?: Maybe<Array<CharacterWhereUniqueInput>>,
  delete?: Maybe<Array<CharacterWhereUniqueInput>>,
  update?: Maybe<Array<CharacterUpdateWithWhereUniqueWithoutEncumberanceInput>>,
  updateMany?: Maybe<Array<CharacterUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<CharacterScalarWhereInput>>,
  upsert?: Maybe<Array<CharacterUpsertWithWhereUniqueWithoutEncumberanceInput>>,
};

export type CharacterUpdateManyWithoutSpecializationsInput = {
  create?: Maybe<Array<CharacterCreateWithoutSpecializationsInput>>,
  connect?: Maybe<Array<CharacterWhereUniqueInput>>,
  set?: Maybe<Array<CharacterWhereUniqueInput>>,
  disconnect?: Maybe<Array<CharacterWhereUniqueInput>>,
  delete?: Maybe<Array<CharacterWhereUniqueInput>>,
  update?: Maybe<Array<CharacterUpdateWithWhereUniqueWithoutSpecializationsInput>>,
  updateMany?: Maybe<Array<CharacterUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<CharacterScalarWhereInput>>,
  upsert?: Maybe<Array<CharacterUpsertWithWhereUniqueWithoutSpecializationsInput>>,
};

export type CharacterUpdateManyWithWhereNestedInput = {
  where: CharacterScalarWhereInput,
  data: CharacterUpdateManyDataInput,
};

export type CharacterUpdateOneWithoutArmorInput = {
  create?: Maybe<CharacterCreateWithoutArmorInput>,
  connect?: Maybe<CharacterWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<CharacterUpdateWithoutArmorDataInput>,
  upsert?: Maybe<CharacterUpsertWithoutArmorInput>,
};

export type CharacterUpdateOneWithoutDerivedAttributesInput = {
  create?: Maybe<CharacterCreateWithoutDerivedAttributesInput>,
  connect?: Maybe<CharacterWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<CharacterUpdateWithoutDerivedAttributesDataInput>,
  upsert?: Maybe<CharacterUpsertWithoutDerivedAttributesInput>,
};

export type CharacterUpdateOneWithoutSkillsInput = {
  create?: Maybe<CharacterCreateWithoutSkillsInput>,
  connect?: Maybe<CharacterWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<CharacterUpdateWithoutSkillsDataInput>,
  upsert?: Maybe<CharacterUpsertWithoutSkillsInput>,
};

export type CharacterUpdateOneWithoutTalentsInput = {
  create?: Maybe<CharacterCreateWithoutTalentsInput>,
  connect?: Maybe<CharacterWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<CharacterUpdateWithoutTalentsDataInput>,
  upsert?: Maybe<CharacterUpsertWithoutTalentsInput>,
};

export type CharacterUpdateOneWithoutWeaponsInput = {
  create?: Maybe<CharacterCreateWithoutWeaponsInput>,
  connect?: Maybe<CharacterWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<CharacterUpdateWithoutWeaponsDataInput>,
  upsert?: Maybe<CharacterUpsertWithoutWeaponsInput>,
};

export type CharacterUpdateWithoutArmorDataInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  system?: Maybe<System>,
  species?: Maybe<Scalars['String']>,
  career?: Maybe<Scalars['String']>,
  resources?: Maybe<Scalars['String']>,
  credits?: Maybe<Scalars['Int']>,
  injuries?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  motivation?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  specializations?: Maybe<SpecializationUpdateManyWithoutCharactersInput>,
  characteristics?: Maybe<CharacteristicUpdateOneWithoutCharactersInput>,
  derivedAttributes?: Maybe<DerivedAttributeUpdateOneWithoutCharacterInput>,
  skills?: Maybe<CharacterSkillUpdateManyWithoutCharacterInput>,
  talents?: Maybe<CharacterTalentUpdateManyWithoutCharacterInput>,
  gear?: Maybe<GearUpdateManyWithoutCharacterInput>,
  weapons?: Maybe<WeaponUpdateManyWithoutCharacterInput>,
  encumberance?: Maybe<ThresholdUpdateOneWithoutCharactersInput>,
  experience?: Maybe<ExperienceUpdateOneWithoutCharactersInput>,
  duties?: Maybe<DutyUpdateManyWithoutCharacterInput>,
  user?: Maybe<UserUpdateOneRequiredWithoutCharactersInput>,
};

export type CharacterUpdateWithoutDerivedAttributesDataInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  system?: Maybe<System>,
  species?: Maybe<Scalars['String']>,
  career?: Maybe<Scalars['String']>,
  resources?: Maybe<Scalars['String']>,
  credits?: Maybe<Scalars['Int']>,
  injuries?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  motivation?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  specializations?: Maybe<SpecializationUpdateManyWithoutCharactersInput>,
  characteristics?: Maybe<CharacteristicUpdateOneWithoutCharactersInput>,
  skills?: Maybe<CharacterSkillUpdateManyWithoutCharacterInput>,
  talents?: Maybe<CharacterTalentUpdateManyWithoutCharacterInput>,
  gear?: Maybe<GearUpdateManyWithoutCharacterInput>,
  weapons?: Maybe<WeaponUpdateManyWithoutCharacterInput>,
  armor?: Maybe<ArmorUpdateManyWithoutCharacterInput>,
  encumberance?: Maybe<ThresholdUpdateOneWithoutCharactersInput>,
  experience?: Maybe<ExperienceUpdateOneWithoutCharactersInput>,
  duties?: Maybe<DutyUpdateManyWithoutCharacterInput>,
  user?: Maybe<UserUpdateOneRequiredWithoutCharactersInput>,
};

export type CharacterUpdateWithoutEncumberanceDataInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  system?: Maybe<System>,
  species?: Maybe<Scalars['String']>,
  career?: Maybe<Scalars['String']>,
  resources?: Maybe<Scalars['String']>,
  credits?: Maybe<Scalars['Int']>,
  injuries?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  motivation?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  specializations?: Maybe<SpecializationUpdateManyWithoutCharactersInput>,
  characteristics?: Maybe<CharacteristicUpdateOneWithoutCharactersInput>,
  derivedAttributes?: Maybe<DerivedAttributeUpdateOneWithoutCharacterInput>,
  skills?: Maybe<CharacterSkillUpdateManyWithoutCharacterInput>,
  talents?: Maybe<CharacterTalentUpdateManyWithoutCharacterInput>,
  gear?: Maybe<GearUpdateManyWithoutCharacterInput>,
  weapons?: Maybe<WeaponUpdateManyWithoutCharacterInput>,
  armor?: Maybe<ArmorUpdateManyWithoutCharacterInput>,
  experience?: Maybe<ExperienceUpdateOneWithoutCharactersInput>,
  duties?: Maybe<DutyUpdateManyWithoutCharacterInput>,
  user?: Maybe<UserUpdateOneRequiredWithoutCharactersInput>,
};

export type CharacterUpdateWithoutSkillsDataInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  system?: Maybe<System>,
  species?: Maybe<Scalars['String']>,
  career?: Maybe<Scalars['String']>,
  resources?: Maybe<Scalars['String']>,
  credits?: Maybe<Scalars['Int']>,
  injuries?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  motivation?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  specializations?: Maybe<SpecializationUpdateManyWithoutCharactersInput>,
  characteristics?: Maybe<CharacteristicUpdateOneWithoutCharactersInput>,
  derivedAttributes?: Maybe<DerivedAttributeUpdateOneWithoutCharacterInput>,
  talents?: Maybe<CharacterTalentUpdateManyWithoutCharacterInput>,
  gear?: Maybe<GearUpdateManyWithoutCharacterInput>,
  weapons?: Maybe<WeaponUpdateManyWithoutCharacterInput>,
  armor?: Maybe<ArmorUpdateManyWithoutCharacterInput>,
  encumberance?: Maybe<ThresholdUpdateOneWithoutCharactersInput>,
  experience?: Maybe<ExperienceUpdateOneWithoutCharactersInput>,
  duties?: Maybe<DutyUpdateManyWithoutCharacterInput>,
  user?: Maybe<UserUpdateOneRequiredWithoutCharactersInput>,
};

export type CharacterUpdateWithoutSpecializationsDataInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  system?: Maybe<System>,
  species?: Maybe<Scalars['String']>,
  career?: Maybe<Scalars['String']>,
  resources?: Maybe<Scalars['String']>,
  credits?: Maybe<Scalars['Int']>,
  injuries?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  motivation?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  characteristics?: Maybe<CharacteristicUpdateOneWithoutCharactersInput>,
  derivedAttributes?: Maybe<DerivedAttributeUpdateOneWithoutCharacterInput>,
  skills?: Maybe<CharacterSkillUpdateManyWithoutCharacterInput>,
  talents?: Maybe<CharacterTalentUpdateManyWithoutCharacterInput>,
  gear?: Maybe<GearUpdateManyWithoutCharacterInput>,
  weapons?: Maybe<WeaponUpdateManyWithoutCharacterInput>,
  armor?: Maybe<ArmorUpdateManyWithoutCharacterInput>,
  encumberance?: Maybe<ThresholdUpdateOneWithoutCharactersInput>,
  experience?: Maybe<ExperienceUpdateOneWithoutCharactersInput>,
  duties?: Maybe<DutyUpdateManyWithoutCharacterInput>,
  user?: Maybe<UserUpdateOneRequiredWithoutCharactersInput>,
};

export type CharacterUpdateWithoutTalentsDataInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  system?: Maybe<System>,
  species?: Maybe<Scalars['String']>,
  career?: Maybe<Scalars['String']>,
  resources?: Maybe<Scalars['String']>,
  credits?: Maybe<Scalars['Int']>,
  injuries?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  motivation?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  specializations?: Maybe<SpecializationUpdateManyWithoutCharactersInput>,
  characteristics?: Maybe<CharacteristicUpdateOneWithoutCharactersInput>,
  derivedAttributes?: Maybe<DerivedAttributeUpdateOneWithoutCharacterInput>,
  skills?: Maybe<CharacterSkillUpdateManyWithoutCharacterInput>,
  gear?: Maybe<GearUpdateManyWithoutCharacterInput>,
  weapons?: Maybe<WeaponUpdateManyWithoutCharacterInput>,
  armor?: Maybe<ArmorUpdateManyWithoutCharacterInput>,
  encumberance?: Maybe<ThresholdUpdateOneWithoutCharactersInput>,
  experience?: Maybe<ExperienceUpdateOneWithoutCharactersInput>,
  duties?: Maybe<DutyUpdateManyWithoutCharacterInput>,
  user?: Maybe<UserUpdateOneRequiredWithoutCharactersInput>,
};

export type CharacterUpdateWithoutWeaponsDataInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  system?: Maybe<System>,
  species?: Maybe<Scalars['String']>,
  career?: Maybe<Scalars['String']>,
  resources?: Maybe<Scalars['String']>,
  credits?: Maybe<Scalars['Int']>,
  injuries?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  motivation?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  specializations?: Maybe<SpecializationUpdateManyWithoutCharactersInput>,
  characteristics?: Maybe<CharacteristicUpdateOneWithoutCharactersInput>,
  derivedAttributes?: Maybe<DerivedAttributeUpdateOneWithoutCharacterInput>,
  skills?: Maybe<CharacterSkillUpdateManyWithoutCharacterInput>,
  talents?: Maybe<CharacterTalentUpdateManyWithoutCharacterInput>,
  gear?: Maybe<GearUpdateManyWithoutCharacterInput>,
  armor?: Maybe<ArmorUpdateManyWithoutCharacterInput>,
  encumberance?: Maybe<ThresholdUpdateOneWithoutCharactersInput>,
  experience?: Maybe<ExperienceUpdateOneWithoutCharactersInput>,
  duties?: Maybe<DutyUpdateManyWithoutCharacterInput>,
  user?: Maybe<UserUpdateOneRequiredWithoutCharactersInput>,
};

export type CharacterUpdateWithWhereUniqueWithoutEncumberanceInput = {
  where: CharacterWhereUniqueInput,
  data: CharacterUpdateWithoutEncumberanceDataInput,
};

export type CharacterUpdateWithWhereUniqueWithoutSpecializationsInput = {
  where: CharacterWhereUniqueInput,
  data: CharacterUpdateWithoutSpecializationsDataInput,
};

export type CharacterUpsertWithoutArmorInput = {
  update: CharacterUpdateWithoutArmorDataInput,
  create: CharacterCreateWithoutArmorInput,
};

export type CharacterUpsertWithoutDerivedAttributesInput = {
  update: CharacterUpdateWithoutDerivedAttributesDataInput,
  create: CharacterCreateWithoutDerivedAttributesInput,
};

export type CharacterUpsertWithoutSkillsInput = {
  update: CharacterUpdateWithoutSkillsDataInput,
  create: CharacterCreateWithoutSkillsInput,
};

export type CharacterUpsertWithoutTalentsInput = {
  update: CharacterUpdateWithoutTalentsDataInput,
  create: CharacterCreateWithoutTalentsInput,
};

export type CharacterUpsertWithoutWeaponsInput = {
  update: CharacterUpdateWithoutWeaponsDataInput,
  create: CharacterCreateWithoutWeaponsInput,
};

export type CharacterUpsertWithWhereUniqueWithoutEncumberanceInput = {
  where: CharacterWhereUniqueInput,
  update: CharacterUpdateWithoutEncumberanceDataInput,
  create: CharacterCreateWithoutEncumberanceInput,
};

export type CharacterUpsertWithWhereUniqueWithoutSpecializationsInput = {
  where: CharacterWhereUniqueInput,
  update: CharacterUpdateWithoutSpecializationsDataInput,
  create: CharacterCreateWithoutSpecializationsInput,
};

export type CharacterWhereInput = {
  id?: Maybe<StringFilter>,
  name?: Maybe<StringFilter>,
  system?: Maybe<System>,
  species?: Maybe<StringFilter>,
  career?: Maybe<StringFilter>,
  specializations?: Maybe<SpecializationFilter>,
  skills?: Maybe<CharacterSkillFilter>,
  talents?: Maybe<CharacterTalentFilter>,
  gear?: Maybe<GearFilter>,
  weapons?: Maybe<WeaponFilter>,
  armor?: Maybe<ArmorFilter>,
  resources?: Maybe<NullableStringFilter>,
  credits?: Maybe<NullableIntFilter>,
  injuries?: Maybe<NullableStringFilter>,
  background?: Maybe<NullableStringFilter>,
  description?: Maybe<NullableStringFilter>,
  motivation?: Maybe<NullableStringFilter>,
  duties?: Maybe<DutyFilter>,
  imageUrl?: Maybe<NullableStringFilter>,
  notes?: Maybe<NullableStringFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  AND?: Maybe<Array<CharacterWhereInput>>,
  OR?: Maybe<Array<CharacterWhereInput>>,
  NOT?: Maybe<Array<CharacterWhereInput>>,
  characteristics?: Maybe<CharacteristicWhereInput>,
  derivedAttributes?: Maybe<DerivedAttributeWhereInput>,
  encumberance?: Maybe<ThresholdWhereInput>,
  experience?: Maybe<ExperienceWhereInput>,
  user?: Maybe<UserWhereInput>,
};

export type CharacterWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>,
  not?: Maybe<Scalars['DateTime']>,
  in?: Maybe<Array<Scalars['DateTime']>>,
  notIn?: Maybe<Array<Scalars['DateTime']>>,
  lt?: Maybe<Scalars['DateTime']>,
  lte?: Maybe<Scalars['DateTime']>,
  gt?: Maybe<Scalars['DateTime']>,
  gte?: Maybe<Scalars['DateTime']>,
};

export type DefenseAttribute = {
   __typename?: 'DefenseAttribute',
  id: Scalars['ID'],
  ranged: Scalars['Int'],
  melee: Scalars['Int'],
};

export type DefenseAttributeCreateOneWithoutDefenseInput = {
  create?: Maybe<DefenseAttributeCreateWithoutDerivedAttributeInput>,
  connect?: Maybe<DefenseAttributeWhereUniqueInput>,
};

export type DefenseAttributeCreateWithoutArmorsInput = {
  id?: Maybe<Scalars['ID']>,
  ranged?: Maybe<Scalars['Int']>,
  melee?: Maybe<Scalars['Int']>,
  derivedAttribute?: Maybe<DerivedAttributeCreateOneWithoutDerivedAttributeInput>,
};

export type DefenseAttributeCreateWithoutDerivedAttributeInput = {
  id?: Maybe<Scalars['ID']>,
  ranged?: Maybe<Scalars['Int']>,
  melee?: Maybe<Scalars['Int']>,
  armors?: Maybe<ArmorCreateManyWithoutArmorsInput>,
};

export type DefenseAttributeUpdateOneRequiredWithoutDerivedAttributeInput = {
  create?: Maybe<DefenseAttributeCreateWithoutDerivedAttributeInput>,
  connect?: Maybe<DefenseAttributeWhereUniqueInput>,
  update?: Maybe<DefenseAttributeUpdateWithoutDerivedAttributeDataInput>,
  upsert?: Maybe<DefenseAttributeUpsertWithoutDerivedAttributeInput>,
};

export type DefenseAttributeUpdateOneWithoutArmorsInput = {
  create?: Maybe<DefenseAttributeCreateWithoutArmorsInput>,
  connect?: Maybe<DefenseAttributeWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<DefenseAttributeUpdateWithoutArmorsDataInput>,
  upsert?: Maybe<DefenseAttributeUpsertWithoutArmorsInput>,
};

export type DefenseAttributeUpdateWithoutArmorsDataInput = {
  id?: Maybe<Scalars['ID']>,
  ranged?: Maybe<Scalars['Int']>,
  melee?: Maybe<Scalars['Int']>,
  derivedAttribute?: Maybe<DerivedAttributeUpdateOneWithoutDefenseInput>,
};

export type DefenseAttributeUpdateWithoutDerivedAttributeDataInput = {
  id?: Maybe<Scalars['ID']>,
  ranged?: Maybe<Scalars['Int']>,
  melee?: Maybe<Scalars['Int']>,
  armors?: Maybe<ArmorUpdateManyWithoutDefenseInput>,
};

export type DefenseAttributeUpsertWithoutArmorsInput = {
  update: DefenseAttributeUpdateWithoutArmorsDataInput,
  create: DefenseAttributeCreateWithoutArmorsInput,
};

export type DefenseAttributeUpsertWithoutDerivedAttributeInput = {
  update: DefenseAttributeUpdateWithoutDerivedAttributeDataInput,
  create: DefenseAttributeCreateWithoutDerivedAttributeInput,
};

export type DefenseAttributeWhereInput = {
  id?: Maybe<StringFilter>,
  ranged?: Maybe<IntFilter>,
  melee?: Maybe<IntFilter>,
  armors?: Maybe<ArmorFilter>,
  AND?: Maybe<Array<DefenseAttributeWhereInput>>,
  OR?: Maybe<Array<DefenseAttributeWhereInput>>,
  NOT?: Maybe<Array<DefenseAttributeWhereInput>>,
  derivedAttribute?: Maybe<DerivedAttributeWhereInput>,
};

export type DefenseAttributeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type DerivedAttribute = {
   __typename?: 'DerivedAttribute',
  id: Scalars['ID'],
  soak: Scalars['Int'],
  wounds: Threshold,
  strain: Threshold,
  defense: DefenseAttribute,
};

export type DerivedAttributeCreateOneWithoutDerivedAttributeInput = {
  create?: Maybe<DerivedAttributeCreateWithoutDefenseInput>,
  connect?: Maybe<DerivedAttributeWhereUniqueInput>,
};

export type DerivedAttributeCreateOneWithoutDerivedAttributesInput = {
  create?: Maybe<DerivedAttributeCreateWithoutCharacterInput>,
  connect?: Maybe<DerivedAttributeWhereUniqueInput>,
};

export type DerivedAttributeCreateOneWithoutStrainThresholdInput = {
  create?: Maybe<DerivedAttributeCreateWithoutStrainInput>,
  connect?: Maybe<DerivedAttributeWhereUniqueInput>,
};

export type DerivedAttributeCreateOneWithoutWoundsThresholdInput = {
  create?: Maybe<DerivedAttributeCreateWithoutWoundsInput>,
  connect?: Maybe<DerivedAttributeWhereUniqueInput>,
};

export type DerivedAttributeCreateWithoutCharacterInput = {
  id?: Maybe<Scalars['ID']>,
  soak: Scalars['Int'],
  wounds: ThresholdCreateOneWithoutWoundsInput,
  strain: ThresholdCreateOneWithoutStrainInput,
  defense: DefenseAttributeCreateOneWithoutDefenseInput,
};

export type DerivedAttributeCreateWithoutDefenseInput = {
  id?: Maybe<Scalars['ID']>,
  soak: Scalars['Int'],
  wounds: ThresholdCreateOneWithoutWoundsInput,
  strain: ThresholdCreateOneWithoutStrainInput,
  character?: Maybe<CharacterCreateOneWithoutCharacterInput>,
};

export type DerivedAttributeCreateWithoutStrainInput = {
  id?: Maybe<Scalars['ID']>,
  soak: Scalars['Int'],
  wounds: ThresholdCreateOneWithoutWoundsInput,
  defense: DefenseAttributeCreateOneWithoutDefenseInput,
  character?: Maybe<CharacterCreateOneWithoutCharacterInput>,
};

export type DerivedAttributeCreateWithoutWoundsInput = {
  id?: Maybe<Scalars['ID']>,
  soak: Scalars['Int'],
  strain: ThresholdCreateOneWithoutStrainInput,
  defense: DefenseAttributeCreateOneWithoutDefenseInput,
  character?: Maybe<CharacterCreateOneWithoutCharacterInput>,
};

export type DerivedAttributeUpdateOneWithoutCharacterInput = {
  create?: Maybe<DerivedAttributeCreateWithoutCharacterInput>,
  connect?: Maybe<DerivedAttributeWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<DerivedAttributeUpdateWithoutCharacterDataInput>,
  upsert?: Maybe<DerivedAttributeUpsertWithoutCharacterInput>,
};

export type DerivedAttributeUpdateOneWithoutDefenseInput = {
  create?: Maybe<DerivedAttributeCreateWithoutDefenseInput>,
  connect?: Maybe<DerivedAttributeWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<DerivedAttributeUpdateWithoutDefenseDataInput>,
  upsert?: Maybe<DerivedAttributeUpsertWithoutDefenseInput>,
};

export type DerivedAttributeUpdateOneWithoutStrainInput = {
  create?: Maybe<DerivedAttributeCreateWithoutStrainInput>,
  connect?: Maybe<DerivedAttributeWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<DerivedAttributeUpdateWithoutStrainDataInput>,
  upsert?: Maybe<DerivedAttributeUpsertWithoutStrainInput>,
};

export type DerivedAttributeUpdateOneWithoutWoundsInput = {
  create?: Maybe<DerivedAttributeCreateWithoutWoundsInput>,
  connect?: Maybe<DerivedAttributeWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<DerivedAttributeUpdateWithoutWoundsDataInput>,
  upsert?: Maybe<DerivedAttributeUpsertWithoutWoundsInput>,
};

export type DerivedAttributeUpdateWithoutCharacterDataInput = {
  id?: Maybe<Scalars['ID']>,
  soak?: Maybe<Scalars['Int']>,
  wounds?: Maybe<ThresholdUpdateOneRequiredWithoutWoundsThresholdInput>,
  strain?: Maybe<ThresholdUpdateOneRequiredWithoutStrainThresholdInput>,
  defense?: Maybe<DefenseAttributeUpdateOneRequiredWithoutDerivedAttributeInput>,
};

export type DerivedAttributeUpdateWithoutDefenseDataInput = {
  id?: Maybe<Scalars['ID']>,
  soak?: Maybe<Scalars['Int']>,
  wounds?: Maybe<ThresholdUpdateOneRequiredWithoutWoundsThresholdInput>,
  strain?: Maybe<ThresholdUpdateOneRequiredWithoutStrainThresholdInput>,
  character?: Maybe<CharacterUpdateOneWithoutDerivedAttributesInput>,
};

export type DerivedAttributeUpdateWithoutStrainDataInput = {
  id?: Maybe<Scalars['ID']>,
  soak?: Maybe<Scalars['Int']>,
  wounds?: Maybe<ThresholdUpdateOneRequiredWithoutWoundsThresholdInput>,
  defense?: Maybe<DefenseAttributeUpdateOneRequiredWithoutDerivedAttributeInput>,
  character?: Maybe<CharacterUpdateOneWithoutDerivedAttributesInput>,
};

export type DerivedAttributeUpdateWithoutWoundsDataInput = {
  id?: Maybe<Scalars['ID']>,
  soak?: Maybe<Scalars['Int']>,
  strain?: Maybe<ThresholdUpdateOneRequiredWithoutStrainThresholdInput>,
  defense?: Maybe<DefenseAttributeUpdateOneRequiredWithoutDerivedAttributeInput>,
  character?: Maybe<CharacterUpdateOneWithoutDerivedAttributesInput>,
};

export type DerivedAttributeUpsertWithoutCharacterInput = {
  update: DerivedAttributeUpdateWithoutCharacterDataInput,
  create: DerivedAttributeCreateWithoutCharacterInput,
};

export type DerivedAttributeUpsertWithoutDefenseInput = {
  update: DerivedAttributeUpdateWithoutDefenseDataInput,
  create: DerivedAttributeCreateWithoutDefenseInput,
};

export type DerivedAttributeUpsertWithoutStrainInput = {
  update: DerivedAttributeUpdateWithoutStrainDataInput,
  create: DerivedAttributeCreateWithoutStrainInput,
};

export type DerivedAttributeUpsertWithoutWoundsInput = {
  update: DerivedAttributeUpdateWithoutWoundsDataInput,
  create: DerivedAttributeCreateWithoutWoundsInput,
};

export type DerivedAttributeWhereInput = {
  id?: Maybe<StringFilter>,
  soak?: Maybe<IntFilter>,
  AND?: Maybe<Array<DerivedAttributeWhereInput>>,
  OR?: Maybe<Array<DerivedAttributeWhereInput>>,
  NOT?: Maybe<Array<DerivedAttributeWhereInput>>,
  wounds?: Maybe<ThresholdWhereInput>,
  strain?: Maybe<ThresholdWhereInput>,
  defense?: Maybe<DefenseAttributeWhereInput>,
  character?: Maybe<CharacterWhereInput>,
};

export type DerivedAttributeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Duty = {
   __typename?: 'Duty',
  id: Scalars['ID'],
  type: Scalars['String'],
  description: Scalars['String'],
  current: Scalars['Int'],
};

export type DutyCreateManyWithoutDutiesInput = {
  create?: Maybe<Array<DutyCreateWithoutCharacterInput>>,
  connect?: Maybe<Array<DutyWhereUniqueInput>>,
};

export type DutyCreateWithoutCharacterInput = {
  id?: Maybe<Scalars['ID']>,
  type: Scalars['String'],
  description: Scalars['String'],
  current?: Maybe<Scalars['Int']>,
};

export type DutyFilter = {
  every?: Maybe<DutyWhereInput>,
  some?: Maybe<DutyWhereInput>,
  none?: Maybe<DutyWhereInput>,
};

export type DutyScalarWhereInput = {
  id?: Maybe<StringFilter>,
  type?: Maybe<StringFilter>,
  description?: Maybe<StringFilter>,
  current?: Maybe<IntFilter>,
  AND?: Maybe<Array<DutyScalarWhereInput>>,
  OR?: Maybe<Array<DutyScalarWhereInput>>,
  NOT?: Maybe<Array<DutyScalarWhereInput>>,
};

export type DutyUpdateManyDataInput = {
  id?: Maybe<Scalars['ID']>,
  type?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  current?: Maybe<Scalars['Int']>,
};

export type DutyUpdateManyWithoutCharacterInput = {
  create?: Maybe<Array<DutyCreateWithoutCharacterInput>>,
  connect?: Maybe<Array<DutyWhereUniqueInput>>,
  set?: Maybe<Array<DutyWhereUniqueInput>>,
  disconnect?: Maybe<Array<DutyWhereUniqueInput>>,
  delete?: Maybe<Array<DutyWhereUniqueInput>>,
  update?: Maybe<Array<DutyUpdateWithWhereUniqueWithoutCharacterInput>>,
  updateMany?: Maybe<Array<DutyUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<DutyScalarWhereInput>>,
  upsert?: Maybe<Array<DutyUpsertWithWhereUniqueWithoutCharacterInput>>,
};

export type DutyUpdateManyWithWhereNestedInput = {
  where: DutyScalarWhereInput,
  data: DutyUpdateManyDataInput,
};

export type DutyUpdateWithoutCharacterDataInput = {
  id?: Maybe<Scalars['ID']>,
  type?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  current?: Maybe<Scalars['Int']>,
};

export type DutyUpdateWithWhereUniqueWithoutCharacterInput = {
  where: DutyWhereUniqueInput,
  data: DutyUpdateWithoutCharacterDataInput,
};

export type DutyUpsertWithWhereUniqueWithoutCharacterInput = {
  where: DutyWhereUniqueInput,
  update: DutyUpdateWithoutCharacterDataInput,
  create: DutyCreateWithoutCharacterInput,
};

export type DutyWhereInput = {
  id?: Maybe<StringFilter>,
  type?: Maybe<StringFilter>,
  description?: Maybe<StringFilter>,
  current?: Maybe<IntFilter>,
  AND?: Maybe<Array<DutyWhereInput>>,
  OR?: Maybe<Array<DutyWhereInput>>,
  NOT?: Maybe<Array<DutyWhereInput>>,
  character?: Maybe<CharacterWhereInput>,
};

export type DutyWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Experience = {
   __typename?: 'Experience',
  id: Scalars['ID'],
  total: Scalars['Int'],
  available: Scalars['Int'],
};

export type ExperienceCreateOneWithoutExperienceInput = {
  create?: Maybe<ExperienceCreateWithoutCharactersInput>,
  connect?: Maybe<ExperienceWhereUniqueInput>,
};

export type ExperienceCreateWithoutCharactersInput = {
  id?: Maybe<Scalars['ID']>,
  total: Scalars['Int'],
  available: Scalars['Int'],
};

export type ExperienceUpdateOneWithoutCharactersInput = {
  create?: Maybe<ExperienceCreateWithoutCharactersInput>,
  connect?: Maybe<ExperienceWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<ExperienceUpdateWithoutCharactersDataInput>,
  upsert?: Maybe<ExperienceUpsertWithoutCharactersInput>,
};

export type ExperienceUpdateWithoutCharactersDataInput = {
  id?: Maybe<Scalars['ID']>,
  total?: Maybe<Scalars['Int']>,
  available?: Maybe<Scalars['Int']>,
};

export type ExperienceUpsertWithoutCharactersInput = {
  update: ExperienceUpdateWithoutCharactersDataInput,
  create: ExperienceCreateWithoutCharactersInput,
};

export type ExperienceWhereInput = {
  id?: Maybe<StringFilter>,
  total?: Maybe<IntFilter>,
  available?: Maybe<IntFilter>,
  characters?: Maybe<CharacterFilter>,
  AND?: Maybe<Array<ExperienceWhereInput>>,
  OR?: Maybe<Array<ExperienceWhereInput>>,
  NOT?: Maybe<Array<ExperienceWhereInput>>,
};

export type ExperienceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Gear = {
   __typename?: 'Gear',
  id: Scalars['ID'],
  name: Scalars['String'],
  quantity: Scalars['Int'],
  encumberance: Scalars['Int'],
  description?: Maybe<Scalars['String']>,
  rarity: Scalars['Int'],
};

export enum GearCondition {
  None = 'NONE',
  Minor = 'MINOR',
  Moderate = 'MODERATE',
  Major = 'MAJOR'
}

export type GearCreateManyWithoutGearInput = {
  create?: Maybe<Array<GearCreateWithoutCharacterInput>>,
  connect?: Maybe<Array<GearWhereUniqueInput>>,
};

export type GearCreateWithoutCharacterInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  quantity?: Maybe<Scalars['Int']>,
  encumberance?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  rarity?: Maybe<Scalars['Int']>,
};

export type GearFilter = {
  every?: Maybe<GearWhereInput>,
  some?: Maybe<GearWhereInput>,
  none?: Maybe<GearWhereInput>,
};

export type GearScalarWhereInput = {
  id?: Maybe<StringFilter>,
  name?: Maybe<StringFilter>,
  quantity?: Maybe<IntFilter>,
  encumberance?: Maybe<IntFilter>,
  description?: Maybe<NullableStringFilter>,
  rarity?: Maybe<IntFilter>,
  AND?: Maybe<Array<GearScalarWhereInput>>,
  OR?: Maybe<Array<GearScalarWhereInput>>,
  NOT?: Maybe<Array<GearScalarWhereInput>>,
};

export type GearUpdateManyDataInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  quantity?: Maybe<Scalars['Int']>,
  encumberance?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  rarity?: Maybe<Scalars['Int']>,
};

export type GearUpdateManyWithoutCharacterInput = {
  create?: Maybe<Array<GearCreateWithoutCharacterInput>>,
  connect?: Maybe<Array<GearWhereUniqueInput>>,
  set?: Maybe<Array<GearWhereUniqueInput>>,
  disconnect?: Maybe<Array<GearWhereUniqueInput>>,
  delete?: Maybe<Array<GearWhereUniqueInput>>,
  update?: Maybe<Array<GearUpdateWithWhereUniqueWithoutCharacterInput>>,
  updateMany?: Maybe<Array<GearUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<GearScalarWhereInput>>,
  upsert?: Maybe<Array<GearUpsertWithWhereUniqueWithoutCharacterInput>>,
};

export type GearUpdateManyWithWhereNestedInput = {
  where: GearScalarWhereInput,
  data: GearUpdateManyDataInput,
};

export type GearUpdateWithoutCharacterDataInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  quantity?: Maybe<Scalars['Int']>,
  encumberance?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  rarity?: Maybe<Scalars['Int']>,
};

export type GearUpdateWithWhereUniqueWithoutCharacterInput = {
  where: GearWhereUniqueInput,
  data: GearUpdateWithoutCharacterDataInput,
};

export type GearUpsertWithWhereUniqueWithoutCharacterInput = {
  where: GearWhereUniqueInput,
  update: GearUpdateWithoutCharacterDataInput,
  create: GearCreateWithoutCharacterInput,
};

export type GearWhereInput = {
  id?: Maybe<StringFilter>,
  name?: Maybe<StringFilter>,
  quantity?: Maybe<IntFilter>,
  encumberance?: Maybe<IntFilter>,
  description?: Maybe<NullableStringFilter>,
  rarity?: Maybe<IntFilter>,
  AND?: Maybe<Array<GearWhereInput>>,
  OR?: Maybe<Array<GearWhereInput>>,
  NOT?: Maybe<Array<GearWhereInput>>,
  character?: Maybe<CharacterWhereInput>,
};

export type GearWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>,
  not?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Scalars['Int']>>,
  notIn?: Maybe<Array<Scalars['Int']>>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  signup: AuthPayload,
  login: AuthPayload,
  createOneCharacter: Character,
  updateOneCharacter?: Maybe<Character>,
  deleteOneCharacter?: Maybe<Character>,
};


export type MutationSignupArgs = {
  name?: Maybe<Scalars['String']>,
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationCreateOneCharacterArgs = {
  data: CharacterCreateInput
};


export type MutationUpdateOneCharacterArgs = {
  data: CharacterUpdateInput,
  where: CharacterWhereUniqueInput
};


export type MutationDeleteOneCharacterArgs = {
  where: CharacterWhereUniqueInput
};

export type NullableIntFilter = {
  equals?: Maybe<Scalars['Int']>,
  not?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Scalars['Int']>>,
  notIn?: Maybe<Array<Scalars['Int']>>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
};

export type NullableStringFilter = {
  equals?: Maybe<Scalars['String']>,
  not?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Scalars['String']>>,
  notIn?: Maybe<Array<Scalars['String']>>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  contains?: Maybe<Scalars['String']>,
  startsWith?: Maybe<Scalars['String']>,
  endsWith?: Maybe<Scalars['String']>,
};

export enum OrderByArg {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
   __typename?: 'Query',
  me?: Maybe<User>,
  character?: Maybe<Character>,
  characters: Array<Character>,
  career?: Maybe<Career>,
  careers: Array<Career>,
  skill?: Maybe<Skill>,
  skills: Array<Skill>,
  talent?: Maybe<Talent>,
  talents: Array<Talent>,
  user?: Maybe<User>,
};


export type QueryCharacterArgs = {
  where: CharacterWhereUniqueInput
};


export type QueryCharactersArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['ID']>,
  before?: Maybe<Scalars['ID']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCareerArgs = {
  where: CareerWhereUniqueInput
};


export type QueryCareersArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QuerySkillArgs = {
  where: SkillWhereUniqueInput
};


export type QuerySkillsArgs = {
  where?: Maybe<QuerySkillsWhereInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryTalentArgs = {
  where: TalentWhereUniqueInput
};


export type QueryTalentsArgs = {
  where?: Maybe<QueryTalentsWhereInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput
};

export type QuerySkillsWhereInput = {
  type?: Maybe<SkillType>,
};

export type QueryTalentsWhereInput = {
  name?: Maybe<StringFilter>,
};

export enum Range {
  Engaged = 'Engaged',
  Short = 'Short',
  Medium = 'Medium',
  Long = 'Long',
  Extreme = 'Extreme'
}

export type Skill = {
   __typename?: 'Skill',
  id: Scalars['Int'],
  name: Scalars['String'],
  characteristic: CharacteristicName,
  type: SkillType,
  careers: Array<Career>,
};


export type SkillCareersArgs = {
  orderBy?: Maybe<SkillCareersOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type SkillCareersOrderByInput = {
  id?: Maybe<OrderByArg>,
  name?: Maybe<OrderByArg>,
};

export type SkillCreateManyWithoutSkillsInput = {
  create?: Maybe<Array<SkillCreateWithoutCareersInput>>,
  connect?: Maybe<Array<SkillWhereUniqueInput>>,
};

export type SkillCreateOneWithoutSkillInput = {
  create?: Maybe<SkillCreateWithoutCharacterSkillsInput>,
  connect?: Maybe<SkillWhereUniqueInput>,
};

export type SkillCreateWithoutCareersInput = {
  id: Scalars['Int'],
  name: Scalars['String'],
  characteristic: CharacteristicName,
  type: SkillType,
  specializations?: Maybe<SpecializationCreateManyWithoutSpecializationsInput>,
  characterSkills?: Maybe<CharacterSkillCreateManyWithoutCharacterSkillsInput>,
};

export type SkillCreateWithoutCharacterSkillsInput = {
  id: Scalars['Int'],
  name: Scalars['String'],
  characteristic: CharacteristicName,
  type: SkillType,
  careers?: Maybe<CareerCreateManyWithoutCareersInput>,
  specializations?: Maybe<SpecializationCreateManyWithoutSpecializationsInput>,
};

export type SkillCreateWithoutSpecializationsInput = {
  id: Scalars['Int'],
  name: Scalars['String'],
  characteristic: CharacteristicName,
  type: SkillType,
  careers?: Maybe<CareerCreateManyWithoutCareersInput>,
  characterSkills?: Maybe<CharacterSkillCreateManyWithoutCharacterSkillsInput>,
};

export type SkillFilter = {
  every?: Maybe<SkillWhereInput>,
  some?: Maybe<SkillWhereInput>,
  none?: Maybe<SkillWhereInput>,
};

export type SkillScalarWhereInput = {
  id?: Maybe<IntFilter>,
  name?: Maybe<StringFilter>,
  characteristic?: Maybe<CharacteristicName>,
  type?: Maybe<SkillType>,
  careers?: Maybe<CareerFilter>,
  specializations?: Maybe<SpecializationFilter>,
  characterSkills?: Maybe<CharacterSkillFilter>,
  AND?: Maybe<Array<SkillScalarWhereInput>>,
  OR?: Maybe<Array<SkillScalarWhereInput>>,
  NOT?: Maybe<Array<SkillScalarWhereInput>>,
};

export enum SkillType {
  General = 'General',
  Combat = 'Combat',
  Knowledge = 'Knowledge'
}

export type SkillUpdateManyDataInput = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  characteristic?: Maybe<CharacteristicName>,
  type?: Maybe<SkillType>,
};

export type SkillUpdateManyWithoutCareersInput = {
  create?: Maybe<Array<SkillCreateWithoutCareersInput>>,
  connect?: Maybe<Array<SkillWhereUniqueInput>>,
  set?: Maybe<Array<SkillWhereUniqueInput>>,
  disconnect?: Maybe<Array<SkillWhereUniqueInput>>,
  delete?: Maybe<Array<SkillWhereUniqueInput>>,
  update?: Maybe<Array<SkillUpdateWithWhereUniqueWithoutCareersInput>>,
  updateMany?: Maybe<Array<SkillUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<SkillScalarWhereInput>>,
  upsert?: Maybe<Array<SkillUpsertWithWhereUniqueWithoutCareersInput>>,
};

export type SkillUpdateManyWithoutSpecializationsInput = {
  create?: Maybe<Array<SkillCreateWithoutSpecializationsInput>>,
  connect?: Maybe<Array<SkillWhereUniqueInput>>,
  set?: Maybe<Array<SkillWhereUniqueInput>>,
  disconnect?: Maybe<Array<SkillWhereUniqueInput>>,
  delete?: Maybe<Array<SkillWhereUniqueInput>>,
  update?: Maybe<Array<SkillUpdateWithWhereUniqueWithoutSpecializationsInput>>,
  updateMany?: Maybe<Array<SkillUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<SkillScalarWhereInput>>,
  upsert?: Maybe<Array<SkillUpsertWithWhereUniqueWithoutSpecializationsInput>>,
};

export type SkillUpdateManyWithWhereNestedInput = {
  where: SkillScalarWhereInput,
  data: SkillUpdateManyDataInput,
};

export type SkillUpdateOneRequiredWithoutCharacterSkillsInput = {
  create?: Maybe<SkillCreateWithoutCharacterSkillsInput>,
  connect?: Maybe<SkillWhereUniqueInput>,
  update?: Maybe<SkillUpdateWithoutCharacterSkillsDataInput>,
  upsert?: Maybe<SkillUpsertWithoutCharacterSkillsInput>,
};

export type SkillUpdateWithoutCareersDataInput = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  characteristic?: Maybe<CharacteristicName>,
  type?: Maybe<SkillType>,
  specializations?: Maybe<SpecializationUpdateManyWithoutSkillsInput>,
  characterSkills?: Maybe<CharacterSkillUpdateManyWithoutSkillInput>,
};

export type SkillUpdateWithoutCharacterSkillsDataInput = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  characteristic?: Maybe<CharacteristicName>,
  type?: Maybe<SkillType>,
  careers?: Maybe<CareerUpdateManyWithoutSkillsInput>,
  specializations?: Maybe<SpecializationUpdateManyWithoutSkillsInput>,
};

export type SkillUpdateWithoutSpecializationsDataInput = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  characteristic?: Maybe<CharacteristicName>,
  type?: Maybe<SkillType>,
  careers?: Maybe<CareerUpdateManyWithoutSkillsInput>,
  characterSkills?: Maybe<CharacterSkillUpdateManyWithoutSkillInput>,
};

export type SkillUpdateWithWhereUniqueWithoutCareersInput = {
  where: SkillWhereUniqueInput,
  data: SkillUpdateWithoutCareersDataInput,
};

export type SkillUpdateWithWhereUniqueWithoutSpecializationsInput = {
  where: SkillWhereUniqueInput,
  data: SkillUpdateWithoutSpecializationsDataInput,
};

export type SkillUpsertWithoutCharacterSkillsInput = {
  update: SkillUpdateWithoutCharacterSkillsDataInput,
  create: SkillCreateWithoutCharacterSkillsInput,
};

export type SkillUpsertWithWhereUniqueWithoutCareersInput = {
  where: SkillWhereUniqueInput,
  update: SkillUpdateWithoutCareersDataInput,
  create: SkillCreateWithoutCareersInput,
};

export type SkillUpsertWithWhereUniqueWithoutSpecializationsInput = {
  where: SkillWhereUniqueInput,
  update: SkillUpdateWithoutSpecializationsDataInput,
  create: SkillCreateWithoutSpecializationsInput,
};

export type SkillWhereInput = {
  id?: Maybe<IntFilter>,
  name?: Maybe<StringFilter>,
  characteristic?: Maybe<CharacteristicName>,
  type?: Maybe<SkillType>,
  careers?: Maybe<CareerFilter>,
  specializations?: Maybe<SpecializationFilter>,
  characterSkills?: Maybe<CharacterSkillFilter>,
  AND?: Maybe<Array<SkillWhereInput>>,
  OR?: Maybe<Array<SkillWhereInput>>,
  NOT?: Maybe<Array<SkillWhereInput>>,
};

export type SkillWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type Specialization = {
   __typename?: 'Specialization',
  id: Scalars['Int'],
  name: Scalars['String'],
  skills: Array<Skill>,
  career?: Maybe<Career>,
  talents: Array<Talent>,
  talentTree: Array<TalentTreeNode>,
};


export type SpecializationSkillsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type SpecializationTalentsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type SpecializationTalentTreeArgs = {
  orderBy?: Maybe<SpecializationTalentTreeOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type SpecializationCreateManyWithoutSpecializationsInput = {
  create?: Maybe<Array<SpecializationCreateWithoutSkillsInput>>,
  connect?: Maybe<Array<SpecializationWhereUniqueInput>>,
};

export type SpecializationCreateOneWithoutSpecializationInput = {
  create?: Maybe<SpecializationCreateWithoutTalentTreeInput>,
  connect?: Maybe<SpecializationWhereUniqueInput>,
};

export type SpecializationCreateWithoutCareerInput = {
  id: Scalars['Int'],
  name: Scalars['String'],
  skills?: Maybe<SkillCreateManyWithoutSkillsInput>,
  talents?: Maybe<TalentCreateManyWithoutTalentsInput>,
  talentTree?: Maybe<TalentTreeNodeCreateManyWithoutTalentTreeInput>,
  characters?: Maybe<CharacterCreateManyWithoutCharactersInput>,
};

export type SpecializationCreateWithoutCharactersInput = {
  id: Scalars['Int'],
  name: Scalars['String'],
  skills?: Maybe<SkillCreateManyWithoutSkillsInput>,
  career?: Maybe<CareerCreateOneWithoutCareerInput>,
  talents?: Maybe<TalentCreateManyWithoutTalentsInput>,
  talentTree?: Maybe<TalentTreeNodeCreateManyWithoutTalentTreeInput>,
};

export type SpecializationCreateWithoutSkillsInput = {
  id: Scalars['Int'],
  name: Scalars['String'],
  career?: Maybe<CareerCreateOneWithoutCareerInput>,
  talents?: Maybe<TalentCreateManyWithoutTalentsInput>,
  talentTree?: Maybe<TalentTreeNodeCreateManyWithoutTalentTreeInput>,
  characters?: Maybe<CharacterCreateManyWithoutCharactersInput>,
};

export type SpecializationCreateWithoutTalentsInput = {
  id: Scalars['Int'],
  name: Scalars['String'],
  skills?: Maybe<SkillCreateManyWithoutSkillsInput>,
  career?: Maybe<CareerCreateOneWithoutCareerInput>,
  talentTree?: Maybe<TalentTreeNodeCreateManyWithoutTalentTreeInput>,
  characters?: Maybe<CharacterCreateManyWithoutCharactersInput>,
};

export type SpecializationCreateWithoutTalentTreeInput = {
  id: Scalars['Int'],
  name: Scalars['String'],
  skills?: Maybe<SkillCreateManyWithoutSkillsInput>,
  career?: Maybe<CareerCreateOneWithoutCareerInput>,
  talents?: Maybe<TalentCreateManyWithoutTalentsInput>,
  characters?: Maybe<CharacterCreateManyWithoutCharactersInput>,
};

export type SpecializationFilter = {
  every?: Maybe<SpecializationWhereInput>,
  some?: Maybe<SpecializationWhereInput>,
  none?: Maybe<SpecializationWhereInput>,
};

export type SpecializationScalarWhereInput = {
  id?: Maybe<IntFilter>,
  name?: Maybe<StringFilter>,
  skills?: Maybe<SkillFilter>,
  talents?: Maybe<TalentFilter>,
  talentTree?: Maybe<TalentTreeNodeFilter>,
  characters?: Maybe<CharacterFilter>,
  AND?: Maybe<Array<SpecializationScalarWhereInput>>,
  OR?: Maybe<Array<SpecializationScalarWhereInput>>,
  NOT?: Maybe<Array<SpecializationScalarWhereInput>>,
};

export type SpecializationTalentTreeOrderByInput = {
  row?: Maybe<OrderByArg>,
};

export type SpecializationUpdateManyDataInput = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type SpecializationUpdateManyWithoutCareerInput = {
  create?: Maybe<Array<SpecializationCreateWithoutCareerInput>>,
  connect?: Maybe<Array<SpecializationWhereUniqueInput>>,
  set?: Maybe<Array<SpecializationWhereUniqueInput>>,
  disconnect?: Maybe<Array<SpecializationWhereUniqueInput>>,
  delete?: Maybe<Array<SpecializationWhereUniqueInput>>,
  update?: Maybe<Array<SpecializationUpdateWithWhereUniqueWithoutCareerInput>>,
  updateMany?: Maybe<Array<SpecializationUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<SpecializationScalarWhereInput>>,
  upsert?: Maybe<Array<SpecializationUpsertWithWhereUniqueWithoutCareerInput>>,
};

export type SpecializationUpdateManyWithoutCharactersInput = {
  create?: Maybe<Array<SpecializationCreateWithoutCharactersInput>>,
  connect?: Maybe<Array<SpecializationWhereUniqueInput>>,
  set?: Maybe<Array<SpecializationWhereUniqueInput>>,
  disconnect?: Maybe<Array<SpecializationWhereUniqueInput>>,
  delete?: Maybe<Array<SpecializationWhereUniqueInput>>,
  update?: Maybe<Array<SpecializationUpdateWithWhereUniqueWithoutCharactersInput>>,
  updateMany?: Maybe<Array<SpecializationUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<SpecializationScalarWhereInput>>,
  upsert?: Maybe<Array<SpecializationUpsertWithWhereUniqueWithoutCharactersInput>>,
};

export type SpecializationUpdateManyWithoutSkillsInput = {
  create?: Maybe<Array<SpecializationCreateWithoutSkillsInput>>,
  connect?: Maybe<Array<SpecializationWhereUniqueInput>>,
  set?: Maybe<Array<SpecializationWhereUniqueInput>>,
  disconnect?: Maybe<Array<SpecializationWhereUniqueInput>>,
  delete?: Maybe<Array<SpecializationWhereUniqueInput>>,
  update?: Maybe<Array<SpecializationUpdateWithWhereUniqueWithoutSkillsInput>>,
  updateMany?: Maybe<Array<SpecializationUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<SpecializationScalarWhereInput>>,
  upsert?: Maybe<Array<SpecializationUpsertWithWhereUniqueWithoutSkillsInput>>,
};

export type SpecializationUpdateManyWithoutTalentsInput = {
  create?: Maybe<Array<SpecializationCreateWithoutTalentsInput>>,
  connect?: Maybe<Array<SpecializationWhereUniqueInput>>,
  set?: Maybe<Array<SpecializationWhereUniqueInput>>,
  disconnect?: Maybe<Array<SpecializationWhereUniqueInput>>,
  delete?: Maybe<Array<SpecializationWhereUniqueInput>>,
  update?: Maybe<Array<SpecializationUpdateWithWhereUniqueWithoutTalentsInput>>,
  updateMany?: Maybe<Array<SpecializationUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<SpecializationScalarWhereInput>>,
  upsert?: Maybe<Array<SpecializationUpsertWithWhereUniqueWithoutTalentsInput>>,
};

export type SpecializationUpdateManyWithWhereNestedInput = {
  where: SpecializationScalarWhereInput,
  data: SpecializationUpdateManyDataInput,
};

export type SpecializationUpdateOneRequiredWithoutTalentTreeInput = {
  create?: Maybe<SpecializationCreateWithoutTalentTreeInput>,
  connect?: Maybe<SpecializationWhereUniqueInput>,
  update?: Maybe<SpecializationUpdateWithoutTalentTreeDataInput>,
  upsert?: Maybe<SpecializationUpsertWithoutTalentTreeInput>,
};

export type SpecializationUpdateWithoutCareerDataInput = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  skills?: Maybe<SkillUpdateManyWithoutSpecializationsInput>,
  talents?: Maybe<TalentUpdateManyWithoutSpecializationsInput>,
  talentTree?: Maybe<TalentTreeNodeUpdateManyWithoutSpecializationInput>,
  characters?: Maybe<CharacterUpdateManyWithoutSpecializationsInput>,
};

export type SpecializationUpdateWithoutCharactersDataInput = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  skills?: Maybe<SkillUpdateManyWithoutSpecializationsInput>,
  career?: Maybe<CareerUpdateOneWithoutSpecializationsInput>,
  talents?: Maybe<TalentUpdateManyWithoutSpecializationsInput>,
  talentTree?: Maybe<TalentTreeNodeUpdateManyWithoutSpecializationInput>,
};

export type SpecializationUpdateWithoutSkillsDataInput = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  career?: Maybe<CareerUpdateOneWithoutSpecializationsInput>,
  talents?: Maybe<TalentUpdateManyWithoutSpecializationsInput>,
  talentTree?: Maybe<TalentTreeNodeUpdateManyWithoutSpecializationInput>,
  characters?: Maybe<CharacterUpdateManyWithoutSpecializationsInput>,
};

export type SpecializationUpdateWithoutTalentsDataInput = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  skills?: Maybe<SkillUpdateManyWithoutSpecializationsInput>,
  career?: Maybe<CareerUpdateOneWithoutSpecializationsInput>,
  talentTree?: Maybe<TalentTreeNodeUpdateManyWithoutSpecializationInput>,
  characters?: Maybe<CharacterUpdateManyWithoutSpecializationsInput>,
};

export type SpecializationUpdateWithoutTalentTreeDataInput = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  skills?: Maybe<SkillUpdateManyWithoutSpecializationsInput>,
  career?: Maybe<CareerUpdateOneWithoutSpecializationsInput>,
  talents?: Maybe<TalentUpdateManyWithoutSpecializationsInput>,
  characters?: Maybe<CharacterUpdateManyWithoutSpecializationsInput>,
};

export type SpecializationUpdateWithWhereUniqueWithoutCareerInput = {
  where: SpecializationWhereUniqueInput,
  data: SpecializationUpdateWithoutCareerDataInput,
};

export type SpecializationUpdateWithWhereUniqueWithoutCharactersInput = {
  where: SpecializationWhereUniqueInput,
  data: SpecializationUpdateWithoutCharactersDataInput,
};

export type SpecializationUpdateWithWhereUniqueWithoutSkillsInput = {
  where: SpecializationWhereUniqueInput,
  data: SpecializationUpdateWithoutSkillsDataInput,
};

export type SpecializationUpdateWithWhereUniqueWithoutTalentsInput = {
  where: SpecializationWhereUniqueInput,
  data: SpecializationUpdateWithoutTalentsDataInput,
};

export type SpecializationUpsertWithoutTalentTreeInput = {
  update: SpecializationUpdateWithoutTalentTreeDataInput,
  create: SpecializationCreateWithoutTalentTreeInput,
};

export type SpecializationUpsertWithWhereUniqueWithoutCareerInput = {
  where: SpecializationWhereUniqueInput,
  update: SpecializationUpdateWithoutCareerDataInput,
  create: SpecializationCreateWithoutCareerInput,
};

export type SpecializationUpsertWithWhereUniqueWithoutCharactersInput = {
  where: SpecializationWhereUniqueInput,
  update: SpecializationUpdateWithoutCharactersDataInput,
  create: SpecializationCreateWithoutCharactersInput,
};

export type SpecializationUpsertWithWhereUniqueWithoutSkillsInput = {
  where: SpecializationWhereUniqueInput,
  update: SpecializationUpdateWithoutSkillsDataInput,
  create: SpecializationCreateWithoutSkillsInput,
};

export type SpecializationUpsertWithWhereUniqueWithoutTalentsInput = {
  where: SpecializationWhereUniqueInput,
  update: SpecializationUpdateWithoutTalentsDataInput,
  create: SpecializationCreateWithoutTalentsInput,
};

export type SpecializationWhereInput = {
  id?: Maybe<IntFilter>,
  name?: Maybe<StringFilter>,
  skills?: Maybe<SkillFilter>,
  talents?: Maybe<TalentFilter>,
  talentTree?: Maybe<TalentTreeNodeFilter>,
  characters?: Maybe<CharacterFilter>,
  AND?: Maybe<Array<SpecializationWhereInput>>,
  OR?: Maybe<Array<SpecializationWhereInput>>,
  NOT?: Maybe<Array<SpecializationWhereInput>>,
  career?: Maybe<CareerWhereInput>,
};

export type SpecializationWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>,
  not?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Scalars['String']>>,
  notIn?: Maybe<Array<Scalars['String']>>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  contains?: Maybe<Scalars['String']>,
  startsWith?: Maybe<Scalars['String']>,
  endsWith?: Maybe<Scalars['String']>,
};

export enum System {
  Aor = 'AOR',
  Eote = 'EOTE',
  Fad = 'FAD'
}

export type Talent = {
   __typename?: 'Talent',
  id: Scalars['Int'],
  name: Scalars['String'],
  page?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  ranked: Scalars['Boolean'],
  activation: TalentActivation,
  force: Scalars['Boolean'],
  specializations: Array<Specialization>,
};


export type TalentSpecializationsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export enum TalentActivation {
  Passive = 'Passive',
  Action = 'Action',
  Maneuver = 'Maneuver',
  Incidental = 'Incidental',
  OutOfTurn = 'OutOfTurn'
}

export type TalentCreateManyWithoutTalentsInput = {
  create?: Maybe<Array<TalentCreateWithoutSpecializationsInput>>,
  connect?: Maybe<Array<TalentWhereUniqueInput>>,
};

export type TalentCreateOneWithoutTalentInput = {
  create?: Maybe<TalentCreateWithoutTalentTreeNodesInput>,
  connect?: Maybe<TalentWhereUniqueInput>,
};

export type TalentCreateWithoutSpecializationsInput = {
  id: Scalars['Int'],
  name: Scalars['String'],
  activation: TalentActivation,
  ranked: Scalars['Boolean'],
  force: Scalars['Boolean'],
  page?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  talentTreeNodes?: Maybe<TalentTreeNodeCreateManyWithoutTalentTreeNodesInput>,
};

export type TalentCreateWithoutTalentTreeNodesInput = {
  id: Scalars['Int'],
  name: Scalars['String'],
  activation: TalentActivation,
  ranked: Scalars['Boolean'],
  force: Scalars['Boolean'],
  page?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  specializations?: Maybe<SpecializationCreateManyWithoutSpecializationsInput>,
};

export type TalentFilter = {
  every?: Maybe<TalentWhereInput>,
  some?: Maybe<TalentWhereInput>,
  none?: Maybe<TalentWhereInput>,
};

export type TalentScalarWhereInput = {
  id?: Maybe<IntFilter>,
  name?: Maybe<StringFilter>,
  activation?: Maybe<TalentActivation>,
  ranked?: Maybe<BooleanFilter>,
  force?: Maybe<BooleanFilter>,
  page?: Maybe<NullableStringFilter>,
  description?: Maybe<NullableStringFilter>,
  specializations?: Maybe<SpecializationFilter>,
  talentTreeNodes?: Maybe<TalentTreeNodeFilter>,
  AND?: Maybe<Array<TalentScalarWhereInput>>,
  OR?: Maybe<Array<TalentScalarWhereInput>>,
  NOT?: Maybe<Array<TalentScalarWhereInput>>,
};

export type TalentTreeNode = {
   __typename?: 'TalentTreeNode',
  id: Scalars['String'],
  row: Scalars['Int'],
  column: Scalars['Int'],
  connections: Array<Scalars['Int']>,
  talent: Talent,
};

export type TalentTreeNodeCreateconnectionsInput = {
  set?: Maybe<Array<Scalars['Int']>>,
};

export type TalentTreeNodeCreateManyWithoutTalentTreeInput = {
  create?: Maybe<Array<TalentTreeNodeCreateWithoutSpecializationInput>>,
  connect?: Maybe<Array<TalentTreeNodeWhereUniqueInput>>,
};

export type TalentTreeNodeCreateManyWithoutTalentTreeNodesInput = {
  create?: Maybe<Array<TalentTreeNodeCreateWithoutTalentInput>>,
  connect?: Maybe<Array<TalentTreeNodeWhereUniqueInput>>,
};

export type TalentTreeNodeCreateOneWithoutTalentInput = {
  create?: Maybe<TalentTreeNodeCreateWithoutCharacterTalentsInput>,
  connect?: Maybe<TalentTreeNodeWhereUniqueInput>,
};

export type TalentTreeNodeCreateWithoutCharacterTalentsInput = {
  id: Scalars['String'],
  row: Scalars['Int'],
  column: Scalars['Int'],
  connections?: Maybe<TalentTreeNodeCreateconnectionsInput>,
  talent: TalentCreateOneWithoutTalentInput,
  specialization: SpecializationCreateOneWithoutSpecializationInput,
};

export type TalentTreeNodeCreateWithoutSpecializationInput = {
  id: Scalars['String'],
  row: Scalars['Int'],
  column: Scalars['Int'],
  connections?: Maybe<TalentTreeNodeCreateconnectionsInput>,
  talent: TalentCreateOneWithoutTalentInput,
  characterTalents?: Maybe<CharacterTalentCreateManyWithoutCharacterTalentsInput>,
};

export type TalentTreeNodeCreateWithoutTalentInput = {
  id: Scalars['String'],
  row: Scalars['Int'],
  column: Scalars['Int'],
  connections?: Maybe<TalentTreeNodeCreateconnectionsInput>,
  specialization: SpecializationCreateOneWithoutSpecializationInput,
  characterTalents?: Maybe<CharacterTalentCreateManyWithoutCharacterTalentsInput>,
};

export type TalentTreeNodeFilter = {
  every?: Maybe<TalentTreeNodeWhereInput>,
  some?: Maybe<TalentTreeNodeWhereInput>,
  none?: Maybe<TalentTreeNodeWhereInput>,
};

export type TalentTreeNodeScalarWhereInput = {
  id?: Maybe<StringFilter>,
  row?: Maybe<IntFilter>,
  column?: Maybe<IntFilter>,
  characterTalents?: Maybe<CharacterTalentFilter>,
  AND?: Maybe<Array<TalentTreeNodeScalarWhereInput>>,
  OR?: Maybe<Array<TalentTreeNodeScalarWhereInput>>,
  NOT?: Maybe<Array<TalentTreeNodeScalarWhereInput>>,
};

export type TalentTreeNodeUpdateconnectionsInput = {
  set?: Maybe<Array<Scalars['Int']>>,
};

export type TalentTreeNodeUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>,
  row?: Maybe<Scalars['Int']>,
  column?: Maybe<Scalars['Int']>,
  connections?: Maybe<TalentTreeNodeUpdateconnectionsInput>,
};

export type TalentTreeNodeUpdateManyWithoutSpecializationInput = {
  create?: Maybe<Array<TalentTreeNodeCreateWithoutSpecializationInput>>,
  connect?: Maybe<Array<TalentTreeNodeWhereUniqueInput>>,
  set?: Maybe<Array<TalentTreeNodeWhereUniqueInput>>,
  disconnect?: Maybe<Array<TalentTreeNodeWhereUniqueInput>>,
  delete?: Maybe<Array<TalentTreeNodeWhereUniqueInput>>,
  update?: Maybe<Array<TalentTreeNodeUpdateWithWhereUniqueWithoutSpecializationInput>>,
  updateMany?: Maybe<Array<TalentTreeNodeUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<TalentTreeNodeScalarWhereInput>>,
  upsert?: Maybe<Array<TalentTreeNodeUpsertWithWhereUniqueWithoutSpecializationInput>>,
};

export type TalentTreeNodeUpdateManyWithoutTalentInput = {
  create?: Maybe<Array<TalentTreeNodeCreateWithoutTalentInput>>,
  connect?: Maybe<Array<TalentTreeNodeWhereUniqueInput>>,
  set?: Maybe<Array<TalentTreeNodeWhereUniqueInput>>,
  disconnect?: Maybe<Array<TalentTreeNodeWhereUniqueInput>>,
  delete?: Maybe<Array<TalentTreeNodeWhereUniqueInput>>,
  update?: Maybe<Array<TalentTreeNodeUpdateWithWhereUniqueWithoutTalentInput>>,
  updateMany?: Maybe<Array<TalentTreeNodeUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<TalentTreeNodeScalarWhereInput>>,
  upsert?: Maybe<Array<TalentTreeNodeUpsertWithWhereUniqueWithoutTalentInput>>,
};

export type TalentTreeNodeUpdateManyWithWhereNestedInput = {
  where: TalentTreeNodeScalarWhereInput,
  data: TalentTreeNodeUpdateManyDataInput,
};

export type TalentTreeNodeUpdateOneRequiredWithoutCharacterTalentsInput = {
  create?: Maybe<TalentTreeNodeCreateWithoutCharacterTalentsInput>,
  connect?: Maybe<TalentTreeNodeWhereUniqueInput>,
  update?: Maybe<TalentTreeNodeUpdateWithoutCharacterTalentsDataInput>,
  upsert?: Maybe<TalentTreeNodeUpsertWithoutCharacterTalentsInput>,
};

export type TalentTreeNodeUpdateWithoutCharacterTalentsDataInput = {
  id?: Maybe<Scalars['String']>,
  row?: Maybe<Scalars['Int']>,
  column?: Maybe<Scalars['Int']>,
  connections?: Maybe<TalentTreeNodeUpdateconnectionsInput>,
  talent?: Maybe<TalentUpdateOneRequiredWithoutTalentTreeNodesInput>,
  specialization?: Maybe<SpecializationUpdateOneRequiredWithoutTalentTreeInput>,
};

export type TalentTreeNodeUpdateWithoutSpecializationDataInput = {
  id?: Maybe<Scalars['String']>,
  row?: Maybe<Scalars['Int']>,
  column?: Maybe<Scalars['Int']>,
  connections?: Maybe<TalentTreeNodeUpdateconnectionsInput>,
  talent?: Maybe<TalentUpdateOneRequiredWithoutTalentTreeNodesInput>,
  characterTalents?: Maybe<CharacterTalentUpdateManyWithoutTalentInput>,
};

export type TalentTreeNodeUpdateWithoutTalentDataInput = {
  id?: Maybe<Scalars['String']>,
  row?: Maybe<Scalars['Int']>,
  column?: Maybe<Scalars['Int']>,
  connections?: Maybe<TalentTreeNodeUpdateconnectionsInput>,
  specialization?: Maybe<SpecializationUpdateOneRequiredWithoutTalentTreeInput>,
  characterTalents?: Maybe<CharacterTalentUpdateManyWithoutTalentInput>,
};

export type TalentTreeNodeUpdateWithWhereUniqueWithoutSpecializationInput = {
  where: TalentTreeNodeWhereUniqueInput,
  data: TalentTreeNodeUpdateWithoutSpecializationDataInput,
};

export type TalentTreeNodeUpdateWithWhereUniqueWithoutTalentInput = {
  where: TalentTreeNodeWhereUniqueInput,
  data: TalentTreeNodeUpdateWithoutTalentDataInput,
};

export type TalentTreeNodeUpsertWithoutCharacterTalentsInput = {
  update: TalentTreeNodeUpdateWithoutCharacterTalentsDataInput,
  create: TalentTreeNodeCreateWithoutCharacterTalentsInput,
};

export type TalentTreeNodeUpsertWithWhereUniqueWithoutSpecializationInput = {
  where: TalentTreeNodeWhereUniqueInput,
  update: TalentTreeNodeUpdateWithoutSpecializationDataInput,
  create: TalentTreeNodeCreateWithoutSpecializationInput,
};

export type TalentTreeNodeUpsertWithWhereUniqueWithoutTalentInput = {
  where: TalentTreeNodeWhereUniqueInput,
  update: TalentTreeNodeUpdateWithoutTalentDataInput,
  create: TalentTreeNodeCreateWithoutTalentInput,
};

export type TalentTreeNodeWhereInput = {
  id?: Maybe<StringFilter>,
  row?: Maybe<IntFilter>,
  column?: Maybe<IntFilter>,
  characterTalents?: Maybe<CharacterTalentFilter>,
  AND?: Maybe<Array<TalentTreeNodeWhereInput>>,
  OR?: Maybe<Array<TalentTreeNodeWhereInput>>,
  NOT?: Maybe<Array<TalentTreeNodeWhereInput>>,
  talent?: Maybe<TalentWhereInput>,
  specialization?: Maybe<SpecializationWhereInput>,
};

export type TalentTreeNodeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>,
};

export type TalentUpdateManyDataInput = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  activation?: Maybe<TalentActivation>,
  ranked?: Maybe<Scalars['Boolean']>,
  force?: Maybe<Scalars['Boolean']>,
  page?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type TalentUpdateManyWithoutSpecializationsInput = {
  create?: Maybe<Array<TalentCreateWithoutSpecializationsInput>>,
  connect?: Maybe<Array<TalentWhereUniqueInput>>,
  set?: Maybe<Array<TalentWhereUniqueInput>>,
  disconnect?: Maybe<Array<TalentWhereUniqueInput>>,
  delete?: Maybe<Array<TalentWhereUniqueInput>>,
  update?: Maybe<Array<TalentUpdateWithWhereUniqueWithoutSpecializationsInput>>,
  updateMany?: Maybe<Array<TalentUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<TalentScalarWhereInput>>,
  upsert?: Maybe<Array<TalentUpsertWithWhereUniqueWithoutSpecializationsInput>>,
};

export type TalentUpdateManyWithWhereNestedInput = {
  where: TalentScalarWhereInput,
  data: TalentUpdateManyDataInput,
};

export type TalentUpdateOneRequiredWithoutTalentTreeNodesInput = {
  create?: Maybe<TalentCreateWithoutTalentTreeNodesInput>,
  connect?: Maybe<TalentWhereUniqueInput>,
  update?: Maybe<TalentUpdateWithoutTalentTreeNodesDataInput>,
  upsert?: Maybe<TalentUpsertWithoutTalentTreeNodesInput>,
};

export type TalentUpdateWithoutSpecializationsDataInput = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  activation?: Maybe<TalentActivation>,
  ranked?: Maybe<Scalars['Boolean']>,
  force?: Maybe<Scalars['Boolean']>,
  page?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  talentTreeNodes?: Maybe<TalentTreeNodeUpdateManyWithoutTalentInput>,
};

export type TalentUpdateWithoutTalentTreeNodesDataInput = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  activation?: Maybe<TalentActivation>,
  ranked?: Maybe<Scalars['Boolean']>,
  force?: Maybe<Scalars['Boolean']>,
  page?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  specializations?: Maybe<SpecializationUpdateManyWithoutTalentsInput>,
};

export type TalentUpdateWithWhereUniqueWithoutSpecializationsInput = {
  where: TalentWhereUniqueInput,
  data: TalentUpdateWithoutSpecializationsDataInput,
};

export type TalentUpsertWithoutTalentTreeNodesInput = {
  update: TalentUpdateWithoutTalentTreeNodesDataInput,
  create: TalentCreateWithoutTalentTreeNodesInput,
};

export type TalentUpsertWithWhereUniqueWithoutSpecializationsInput = {
  where: TalentWhereUniqueInput,
  update: TalentUpdateWithoutSpecializationsDataInput,
  create: TalentCreateWithoutSpecializationsInput,
};

export type TalentWhereInput = {
  id?: Maybe<IntFilter>,
  name?: Maybe<StringFilter>,
  activation?: Maybe<TalentActivation>,
  ranked?: Maybe<BooleanFilter>,
  force?: Maybe<BooleanFilter>,
  page?: Maybe<NullableStringFilter>,
  description?: Maybe<NullableStringFilter>,
  specializations?: Maybe<SpecializationFilter>,
  talentTreeNodes?: Maybe<TalentTreeNodeFilter>,
  AND?: Maybe<Array<TalentWhereInput>>,
  OR?: Maybe<Array<TalentWhereInput>>,
  NOT?: Maybe<Array<TalentWhereInput>>,
};

export type TalentWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type Threshold = {
   __typename?: 'Threshold',
  id: Scalars['ID'],
  threshold: Scalars['Int'],
  current: Scalars['Int'],
};

export type ThresholdCreateOneWithoutEncumberanceInput = {
  create?: Maybe<ThresholdCreateWithoutCharactersInput>,
  connect?: Maybe<ThresholdWhereUniqueInput>,
};

export type ThresholdCreateOneWithoutStrainInput = {
  create?: Maybe<ThresholdCreateWithoutStrainThresholdInput>,
  connect?: Maybe<ThresholdWhereUniqueInput>,
};

export type ThresholdCreateOneWithoutWoundsInput = {
  create?: Maybe<ThresholdCreateWithoutWoundsThresholdInput>,
  connect?: Maybe<ThresholdWhereUniqueInput>,
};

export type ThresholdCreateWithoutCharactersInput = {
  id?: Maybe<Scalars['ID']>,
  threshold: Scalars['Int'],
  current: Scalars['Int'],
  woundsThreshold?: Maybe<DerivedAttributeCreateOneWithoutWoundsThresholdInput>,
  strainThreshold?: Maybe<DerivedAttributeCreateOneWithoutStrainThresholdInput>,
};

export type ThresholdCreateWithoutStrainThresholdInput = {
  id?: Maybe<Scalars['ID']>,
  threshold: Scalars['Int'],
  current: Scalars['Int'],
  woundsThreshold?: Maybe<DerivedAttributeCreateOneWithoutWoundsThresholdInput>,
  characters?: Maybe<CharacterCreateManyWithoutCharactersInput>,
};

export type ThresholdCreateWithoutWoundsThresholdInput = {
  id?: Maybe<Scalars['ID']>,
  threshold: Scalars['Int'],
  current: Scalars['Int'],
  strainThreshold?: Maybe<DerivedAttributeCreateOneWithoutStrainThresholdInput>,
  characters?: Maybe<CharacterCreateManyWithoutCharactersInput>,
};

export type ThresholdUpdateOneRequiredWithoutStrainThresholdInput = {
  create?: Maybe<ThresholdCreateWithoutStrainThresholdInput>,
  connect?: Maybe<ThresholdWhereUniqueInput>,
  update?: Maybe<ThresholdUpdateWithoutStrainThresholdDataInput>,
  upsert?: Maybe<ThresholdUpsertWithoutStrainThresholdInput>,
};

export type ThresholdUpdateOneRequiredWithoutWoundsThresholdInput = {
  create?: Maybe<ThresholdCreateWithoutWoundsThresholdInput>,
  connect?: Maybe<ThresholdWhereUniqueInput>,
  update?: Maybe<ThresholdUpdateWithoutWoundsThresholdDataInput>,
  upsert?: Maybe<ThresholdUpsertWithoutWoundsThresholdInput>,
};

export type ThresholdUpdateOneWithoutCharactersInput = {
  create?: Maybe<ThresholdCreateWithoutCharactersInput>,
  connect?: Maybe<ThresholdWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<ThresholdUpdateWithoutCharactersDataInput>,
  upsert?: Maybe<ThresholdUpsertWithoutCharactersInput>,
};

export type ThresholdUpdateWithoutCharactersDataInput = {
  id?: Maybe<Scalars['ID']>,
  threshold?: Maybe<Scalars['Int']>,
  current?: Maybe<Scalars['Int']>,
  woundsThreshold?: Maybe<DerivedAttributeUpdateOneWithoutWoundsInput>,
  strainThreshold?: Maybe<DerivedAttributeUpdateOneWithoutStrainInput>,
};

export type ThresholdUpdateWithoutStrainThresholdDataInput = {
  id?: Maybe<Scalars['ID']>,
  threshold?: Maybe<Scalars['Int']>,
  current?: Maybe<Scalars['Int']>,
  woundsThreshold?: Maybe<DerivedAttributeUpdateOneWithoutWoundsInput>,
  characters?: Maybe<CharacterUpdateManyWithoutEncumberanceInput>,
};

export type ThresholdUpdateWithoutWoundsThresholdDataInput = {
  id?: Maybe<Scalars['ID']>,
  threshold?: Maybe<Scalars['Int']>,
  current?: Maybe<Scalars['Int']>,
  strainThreshold?: Maybe<DerivedAttributeUpdateOneWithoutStrainInput>,
  characters?: Maybe<CharacterUpdateManyWithoutEncumberanceInput>,
};

export type ThresholdUpsertWithoutCharactersInput = {
  update: ThresholdUpdateWithoutCharactersDataInput,
  create: ThresholdCreateWithoutCharactersInput,
};

export type ThresholdUpsertWithoutStrainThresholdInput = {
  update: ThresholdUpdateWithoutStrainThresholdDataInput,
  create: ThresholdCreateWithoutStrainThresholdInput,
};

export type ThresholdUpsertWithoutWoundsThresholdInput = {
  update: ThresholdUpdateWithoutWoundsThresholdDataInput,
  create: ThresholdCreateWithoutWoundsThresholdInput,
};

export type ThresholdWhereInput = {
  id?: Maybe<StringFilter>,
  threshold?: Maybe<IntFilter>,
  current?: Maybe<IntFilter>,
  characters?: Maybe<CharacterFilter>,
  AND?: Maybe<Array<ThresholdWhereInput>>,
  OR?: Maybe<Array<ThresholdWhereInput>>,
  NOT?: Maybe<Array<ThresholdWhereInput>>,
  woundsThreshold?: Maybe<DerivedAttributeWhereInput>,
  strainThreshold?: Maybe<DerivedAttributeWhereInput>,
};

export type ThresholdWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  email: Scalars['String'],
  characters: Array<Character>,
};


export type UserCharactersArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['ID']>,
  before?: Maybe<Scalars['ID']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type UserCreateOneWithoutUserInput = {
  create?: Maybe<UserCreateWithoutCharactersInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateWithoutCharactersInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  password: Scalars['String'],
  name?: Maybe<Scalars['String']>,
};

export type UserUpdateOneRequiredWithoutCharactersInput = {
  create?: Maybe<UserCreateWithoutCharactersInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  update?: Maybe<UserUpdateWithoutCharactersDataInput>,
  upsert?: Maybe<UserUpsertWithoutCharactersInput>,
};

export type UserUpdateWithoutCharactersDataInput = {
  id?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type UserUpsertWithoutCharactersInput = {
  update: UserUpdateWithoutCharactersDataInput,
  create: UserCreateWithoutCharactersInput,
};

export type UserWhereInput = {
  id?: Maybe<StringFilter>,
  email?: Maybe<StringFilter>,
  password?: Maybe<StringFilter>,
  name?: Maybe<NullableStringFilter>,
  characters?: Maybe<CharacterFilter>,
  AND?: Maybe<Array<UserWhereInput>>,
  OR?: Maybe<Array<UserWhereInput>>,
  NOT?: Maybe<Array<UserWhereInput>>,
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
};

export type Weapon = {
   __typename?: 'Weapon',
  id: Scalars['ID'],
  name: Scalars['String'],
  quantity: Scalars['Int'],
  encumberance: Scalars['Int'],
  description?: Maybe<Scalars['String']>,
  rarity: Scalars['Int'],
  hardPoints: Scalars['Int'],
  condition?: Maybe<GearCondition>,
  attachments: Array<Attachment>,
  make?: Maybe<Scalars['String']>,
  range: Range,
  skill: WeaponSkill,
  damage: Scalars['Int'],
  critical: Scalars['Int'],
};


export type WeaponAttachmentsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['ID']>,
  before?: Maybe<Scalars['ID']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type WeaponCreateManyWithoutWeaponsInput = {
  create?: Maybe<Array<WeaponCreateWithoutCharacterInput>>,
  connect?: Maybe<Array<WeaponWhereUniqueInput>>,
};

export type WeaponCreateOneWithoutWeaponInput = {
  create?: Maybe<WeaponCreateWithoutAttachmentsInput>,
  connect?: Maybe<WeaponWhereUniqueInput>,
};

export type WeaponCreateWithoutAttachmentsInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  quantity?: Maybe<Scalars['Int']>,
  encumberance?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  rarity?: Maybe<Scalars['Int']>,
  hardPoints?: Maybe<Scalars['Int']>,
  condition?: Maybe<GearCondition>,
  make?: Maybe<Scalars['String']>,
  range: Range,
  skill: WeaponSkill,
  damage: Scalars['Int'],
  critical: Scalars['Int'],
  character?: Maybe<CharacterCreateOneWithoutCharacterInput>,
};

export type WeaponCreateWithoutCharacterInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  quantity?: Maybe<Scalars['Int']>,
  encumberance?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  rarity?: Maybe<Scalars['Int']>,
  hardPoints?: Maybe<Scalars['Int']>,
  condition?: Maybe<GearCondition>,
  make?: Maybe<Scalars['String']>,
  range: Range,
  skill: WeaponSkill,
  damage: Scalars['Int'],
  critical: Scalars['Int'],
  attachments?: Maybe<AttachmentCreateManyWithoutAttachmentsInput>,
};

export type WeaponFilter = {
  every?: Maybe<WeaponWhereInput>,
  some?: Maybe<WeaponWhereInput>,
  none?: Maybe<WeaponWhereInput>,
};

export type WeaponScalarWhereInput = {
  id?: Maybe<StringFilter>,
  name?: Maybe<StringFilter>,
  quantity?: Maybe<IntFilter>,
  encumberance?: Maybe<IntFilter>,
  description?: Maybe<NullableStringFilter>,
  rarity?: Maybe<IntFilter>,
  hardPoints?: Maybe<IntFilter>,
  condition?: Maybe<GearCondition>,
  attachments?: Maybe<AttachmentFilter>,
  make?: Maybe<NullableStringFilter>,
  range?: Maybe<Range>,
  skill?: Maybe<WeaponSkill>,
  damage?: Maybe<IntFilter>,
  critical?: Maybe<IntFilter>,
  AND?: Maybe<Array<WeaponScalarWhereInput>>,
  OR?: Maybe<Array<WeaponScalarWhereInput>>,
  NOT?: Maybe<Array<WeaponScalarWhereInput>>,
};

export enum WeaponSkill {
  Brawl = 'Brawl',
  RangedLight = 'RangedLight',
  RangedHeavy = 'RangedHeavy',
  Melee = 'Melee',
  Gunnery = 'Gunnery',
  Lightsaber = 'Lightsaber'
}

export type WeaponUpdateManyDataInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  quantity?: Maybe<Scalars['Int']>,
  encumberance?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  rarity?: Maybe<Scalars['Int']>,
  hardPoints?: Maybe<Scalars['Int']>,
  condition?: Maybe<GearCondition>,
  make?: Maybe<Scalars['String']>,
  range?: Maybe<Range>,
  skill?: Maybe<WeaponSkill>,
  damage?: Maybe<Scalars['Int']>,
  critical?: Maybe<Scalars['Int']>,
};

export type WeaponUpdateManyWithoutCharacterInput = {
  create?: Maybe<Array<WeaponCreateWithoutCharacterInput>>,
  connect?: Maybe<Array<WeaponWhereUniqueInput>>,
  set?: Maybe<Array<WeaponWhereUniqueInput>>,
  disconnect?: Maybe<Array<WeaponWhereUniqueInput>>,
  delete?: Maybe<Array<WeaponWhereUniqueInput>>,
  update?: Maybe<Array<WeaponUpdateWithWhereUniqueWithoutCharacterInput>>,
  updateMany?: Maybe<Array<WeaponUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<WeaponScalarWhereInput>>,
  upsert?: Maybe<Array<WeaponUpsertWithWhereUniqueWithoutCharacterInput>>,
};

export type WeaponUpdateManyWithWhereNestedInput = {
  where: WeaponScalarWhereInput,
  data: WeaponUpdateManyDataInput,
};

export type WeaponUpdateOneWithoutAttachmentsInput = {
  create?: Maybe<WeaponCreateWithoutAttachmentsInput>,
  connect?: Maybe<WeaponWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<WeaponUpdateWithoutAttachmentsDataInput>,
  upsert?: Maybe<WeaponUpsertWithoutAttachmentsInput>,
};

export type WeaponUpdateWithoutAttachmentsDataInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  quantity?: Maybe<Scalars['Int']>,
  encumberance?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  rarity?: Maybe<Scalars['Int']>,
  hardPoints?: Maybe<Scalars['Int']>,
  condition?: Maybe<GearCondition>,
  make?: Maybe<Scalars['String']>,
  range?: Maybe<Range>,
  skill?: Maybe<WeaponSkill>,
  damage?: Maybe<Scalars['Int']>,
  critical?: Maybe<Scalars['Int']>,
  character?: Maybe<CharacterUpdateOneWithoutWeaponsInput>,
};

export type WeaponUpdateWithoutCharacterDataInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  quantity?: Maybe<Scalars['Int']>,
  encumberance?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  rarity?: Maybe<Scalars['Int']>,
  hardPoints?: Maybe<Scalars['Int']>,
  condition?: Maybe<GearCondition>,
  make?: Maybe<Scalars['String']>,
  range?: Maybe<Range>,
  skill?: Maybe<WeaponSkill>,
  damage?: Maybe<Scalars['Int']>,
  critical?: Maybe<Scalars['Int']>,
  attachments?: Maybe<AttachmentUpdateManyWithoutWeaponInput>,
};

export type WeaponUpdateWithWhereUniqueWithoutCharacterInput = {
  where: WeaponWhereUniqueInput,
  data: WeaponUpdateWithoutCharacterDataInput,
};

export type WeaponUpsertWithoutAttachmentsInput = {
  update: WeaponUpdateWithoutAttachmentsDataInput,
  create: WeaponCreateWithoutAttachmentsInput,
};

export type WeaponUpsertWithWhereUniqueWithoutCharacterInput = {
  where: WeaponWhereUniqueInput,
  update: WeaponUpdateWithoutCharacterDataInput,
  create: WeaponCreateWithoutCharacterInput,
};

export type WeaponWhereInput = {
  id?: Maybe<StringFilter>,
  name?: Maybe<StringFilter>,
  quantity?: Maybe<IntFilter>,
  encumberance?: Maybe<IntFilter>,
  description?: Maybe<NullableStringFilter>,
  rarity?: Maybe<IntFilter>,
  hardPoints?: Maybe<IntFilter>,
  condition?: Maybe<GearCondition>,
  attachments?: Maybe<AttachmentFilter>,
  make?: Maybe<NullableStringFilter>,
  range?: Maybe<Range>,
  skill?: Maybe<WeaponSkill>,
  damage?: Maybe<IntFilter>,
  critical?: Maybe<IntFilter>,
  AND?: Maybe<Array<WeaponWhereInput>>,
  OR?: Maybe<Array<WeaponWhereInput>>,
  NOT?: Maybe<Array<WeaponWhereInput>>,
  character?: Maybe<CharacterWhereInput>,
};

export type WeaponWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};


