export interface CreatePlayerModel {
  firstName: string;
  lastName: string;
  image: string;
  attack: number;
  defense: number;
  skills: number;
  idAuthor?: number;
  idPosition?: number;
}
