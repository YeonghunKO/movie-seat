import { STATE_TYPE } from './constants.js';

const isValidate = state => {
  if (!state || !Object.entries(state).length) {
    throw new Error(`state 에서 에러 발생`);
  }

  for (const key in state) {
    const value = state[key];
    if (!STATE_TYPE[key]) {
      throw new Error(`${key}에서 에러 발생`);
    }

    if (!STATE_TYPE[key].includes(typeof value)) {
      throw new Error(`${value}에서 에러 발생`);
    }
  }

  return true;
};

const isChangedState = (curr, next) => {
  const needRender = [];
  const currentState = Object.entries(curr);
  const nextState = Object.entries(next);

  currentState.forEach((curr, ind) => {
    const currStringified = JSON.stringify(curr[1]);
    const nextStringified = JSON.stringify(nextState[ind][1]);

    if (currStringified !== nextStringified) {
      needRender.push(curr[0]);
    }
  });

  if (needRender.length) {
    return needRender;
  } else {
    throw new Error(`render하는 과정에서 에러 발생`);
  }
};

export { isValidate, isChangedState };
