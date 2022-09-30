import { PlayerPipe } from './player.pipe';
import {Player} from "../interfaces/player.interface";

describe('PlayerPipe', () => {
  const playerPipe = new PlayerPipe();

  it('create an instance', () => {
    expect(playerPipe).toBeTruthy();
  });

  it('transforms "inputArray" to "expectedArray" based on filters', () => {

    const inputArray: Player[] = [
      {"id": 1, firstName: "Cristiano", lastName: "Ronaldo", skills: 1, defense: 1, attack: 1, image: "CCC", idPosition: 1},
      {"id": 2, firstName: "Leonel", lastName: "Messi", skills: 1, defense: 1, attack: 1, image: "CCC", idPosition: 1},
    ]

    const filter:string = "cris"

    const expectArray: Player[] = [
      {"id": 1, firstName: "Cristiano", lastName: "Ronaldo", skills: 1, defense: 1, attack: 1, image: "CCC", idPosition: 1}
    ]

    // expected array
    expect(playerPipe.transform(inputArray, filter)).toStrictEqual(expectArray);

  });

  it('transforms "inputArray" to same array based on null array', () => {
    const inputArray: null = null

    const expectArray: null = null


    // expected array
    expect(playerPipe.transform(inputArray, "")).toStrictEqual(expectArray);
  });


});
