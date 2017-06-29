import * as actions from './actions';

describe('New Game', ()=> {
    it('Should return the action', () => {
        const action = actions.newGame();
        expect(action.type).toEqual(actions.NEW_GAME);
        expect(action.correctAnswer).toBeDefined();
        expect(action.correctAnswer).toBeGreaterThanOrEqual(1);
        expect(action.correctAnswer).toBeLessThanOrEqual(100);
    });
});

describe('Make Guess', () => {
    it('Should return the action', () => {
        const guess = 10;
        const action = actions.makeGuess(guess);
        expect(action.type).toEqual(actions.MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    });
});

describe('Toggle screen', () => {
    it('Should return the action', () => {
        const action = actions.toggleInfoModal();
        expect(action.type).toEqual(actions.TOGGLE_INFO_MODAL);
    });
});