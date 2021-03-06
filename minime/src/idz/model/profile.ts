import { AimeId } from "../../model";

export interface Profile {
  aimeId: AimeId;
  name: string;
  lv: number;
  exp: number;
  fame: number;
  dpoint: number;
  mileage: number;
  accessTime: Date;
  registerTime: Date;
}
