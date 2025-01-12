export interface IBike {
  id:number;
  title: string;
  description: string;
  stolen_location: string;
  large_img: string;
  date_stolen: number | null;
}