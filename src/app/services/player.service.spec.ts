import {PlayerService} from './player.service';
import {Player} from "../interfaces/player.interface";
import {from} from "rxjs";
import Mocked = jest.Mocked;
import DoneCallback = jest.DoneCallback;

describe('PlayerService', () => {
    let playerService: PlayerService;
    let httpServiceMock: Mocked<any>

    beforeEach(() => {
        httpServiceMock = {
            get: jest.fn(),
            delete: jest.fn()
        }
        playerService = new PlayerService(httpServiceMock)
    });

    it('should be created', () => {
        expect(playerService).toBeTruthy();
    });

    it('should return expected player list and call GET method', (done: DoneCallback) => {

        const expectedPlayers: Player[] = [
            {"id": 1, firstName: "AA", lastName: "BBB", skills: 1, defense: 1, attack: 1, image: "CCC", idPosition: 1},
            {"id": 2, firstName: "AA", lastName: "BBB", skills: 1, defense: 1, attack: 1, image: "CCC", idPosition: 1},
        ]

        const httpServiceSpy = jest.spyOn(httpServiceMock, 'get')
            .mockResolvedValueOnce(expectedPlayers)

        from(playerService.getPlayerList())
            .subscribe((players) => {
                // expected value
                expect(players).toEqual(expectedPlayers)

                // players length is expected to be greater than 0
                expect(players.length).toBeGreaterThan(0)

                players.forEach((player) => {
                    // firstName is expected not to be null
                    expect(player.firstName).not.toBeNull()
                })

                done()
            })

        expect(httpServiceSpy).toBeCalled();

    })

    it('should call DELETE method', () => {

        const httpServiceSpy = jest.spyOn(httpServiceMock, 'delete')

        playerService.deletePlayerById(1)

        expect(httpServiceSpy).toBeCalled();

    })
});
