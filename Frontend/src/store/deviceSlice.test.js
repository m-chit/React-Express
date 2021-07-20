import devicesSlice from "./devicesSlice";

const initialStore = {
  allDevices: [],
  fail: false,
  activePage: 1,
};

describe("devicesSlice", () => {
  test("Should return the initial state", () => {
    expect(devicesSlice.reducer(undefined, {})).toEqual(initialStore);
  });
});
