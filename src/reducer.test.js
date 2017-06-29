import reducer from './reducer';
import * as actions from './actions';

describe('Reducer', ()=>{

  it('should set inital state', () => {
    const state = reducer(undefined, {type: '_UNDEFINED'});
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.correctAnswer).toBeDefined();
    expect(state.showInfoModal).toBeFalsy();
  });

  it('should reset the state on new game', () => {
    const firstState = reducer(undefined, {type: '_UNDEFINED'});
    const firstAnswer = firstState.correctAnswer;
    const newState = reducer(firstState, {type: actions.NEW_GAME});
    const newAnswer = newState.correctAnswer;
    expect(firstAnswer === newAnswer).toBe(false);
  });

  it('should toggle info modal in the state', () => {
    const firstState = reducer(undefined, {type: '_UNDEFINED'});
    const firstInfo = firstState.showInfoModal;
    const newState = reducer(firstState, {type: actions.TOGGLE_INFO_MODAL});
    const newInfo = newState.showInfoModal;
    expect(firstInfo === newInfo).toBe(false);
  });

  it('should reject invalid input', () => {
    const state = reducer(undefined, {type: actions.MAKE_GUESS, guess:'A string'});
    expect(state.feedback).toEqual('Please enter a valid number');
  });

  it('should accept valid entry and provide correct feeback', () => {
    let state = reducer(undefined, {type: '_UNDEFINED'});
    const answer = state.correctAnswer;
    
    state = reducer(state, {type: actions.MAKE_GUESS, guess: answer - 50});
    expect(state.feedback).toEqual('You\'re Ice Cold...');

    state = reducer(state, {type: actions.MAKE_GUESS, guess: answer - 30});
   
    expect(state.feedback).toEqual('You\'re Cold...');

    state = reducer(state, {type: actions.MAKE_GUESS, guess: answer - 10});
    expect(state.feedback).toEqual('You\'re Warm');

    state = reducer(state, {type: actions.MAKE_GUESS, guess: answer - 1});
    expect(state.feedback).toEqual('You\'re Hot!');

    state = reducer(state, {type: actions.MAKE_GUESS, guess: answer + 50});
    expect(state.feedback).toEqual('You\'re Ice Cold...');

    state = reducer(state, {type: actions.MAKE_GUESS, guess: answer + 30});
    expect(state.feedback).toEqual('You\'re Cold...');

    state = reducer(state, {type: actions.MAKE_GUESS, guess: answer + 10});
    expect(state.feedback).toEqual('You\'re Warm');

    state = reducer(state, {type: actions.MAKE_GUESS, guess: answer + 1});
    expect(state.feedback).toEqual('You\'re Hot!');

    state = reducer(state, {type: actions.MAKE_GUESS, guess: answer});
    expect(state.feedback).toEqual('You got it!');
    
  });
});