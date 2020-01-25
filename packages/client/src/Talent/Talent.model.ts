export enum TalentActivation {
  Passive = 'Passive',
  Action = 'Action',
  Maneuver = 'Maneuver',
  Incidental = 'Incidental',
  OutOfTurn = 'OutOfTurn'
}

export interface Talent {
  id?: number;
  name?: string;
  page?: string;
  description?: string;
  ranked?: boolean;
  activation?: TalentActivation;
  force?: boolean;
}