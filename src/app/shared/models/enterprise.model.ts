import {Sector} from './sector.enum';

export interface Enterprise {
  id: number;
  name: string;
  sector: Sector;
  siren: number;
  results: number[];
}
