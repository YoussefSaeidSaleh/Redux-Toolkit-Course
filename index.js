const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./features/iceCream/icecreamSlice").icecreamActions;

const store = require("./app/store");
const { fetchUsers } = require("./features/user/userSlice");

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Update State", store.getState()),
);

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());

// store.dispatch(cakeActions.reStocked(3));

// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());

// unsubscribe();

store.dispatch(fetchUsers());


