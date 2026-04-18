const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/iceCream/icecreamSlice");
const { logger } = require("redux-logger");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
  middleware: (getDefaultMiddle) => getDefaultMiddle().concat(logger),
});

module.exports = store;
