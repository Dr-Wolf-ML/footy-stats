// This is NOT Componsition

const rectangular = state => {
  return {
    area: () => {
      return state.width * state.height;
    }
  };
};

const openable = state => {
  return {
    toggleOpen: () => {
      return (state.open = !state.open);
    }
  };
};

const buildRectangleWindow = state => {
  return Object.assign(state, rectangular(state, openable(state)));
};

const rectangleWindow = buildRectangleWindow({
  height: 20,
  width: 20,
  open: false
});

rectangleWindow.open; // False
rectangleWindow.toggleOpen();
rectangleWindow.open; // True
