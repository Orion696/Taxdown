import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../src/redux/reducers';

import Dashboard from '../src/components/Dashboard';

test('renders dashboard', () => {

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: {},
  });


  const { getByText } = render(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );


  expect(getByText('Dashboard')).toBeInTheDocument();
});
