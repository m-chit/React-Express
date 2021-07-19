import devicesSlice from '../store/devicesSlice'

  const initialStore = {
    allDevices: [],
    fail: false
}

test('Should return the initial state', () => {
  expect(devicesSlice.reducer(undefined, {})).toEqual(initialStore)
})

