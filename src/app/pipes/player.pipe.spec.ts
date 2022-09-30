import { Player } from "../interfaces";
import { PlayerPipe } from "./player.pipe";

describe("PlayerPipe", () => {
  it("create an instance", () => {
    const pipe = new PlayerPipe();
    expect(pipe).toBeTruthy();
  });

  it("shoudl pipe return a list players by name", () => {
    const pipe = new PlayerPipe();
    const players: Player[] = [
      {
        attack: 1,
        defense: 1,
        firstName: "Lio",
        lastName: "Messi",
        idPosition: 1,
        image: "",
        skills: 1,
        id: 1,
        idAuthor: 3,
      },
    ];

    const result = pipe.transform(players, "Lio");
    expect(result).toHaveLength(1);
  });
});
