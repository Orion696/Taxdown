import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import rootReducer from '../src/redux/reducers';
import LoginForm from './components/LoginForm';

test('renders login form', () => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: {},
  });

  render(
    <Provider store={store}>
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByText('Iniciar sesión')).toBeInTheDocument();
});
