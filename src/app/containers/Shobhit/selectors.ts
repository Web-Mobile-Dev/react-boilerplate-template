import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.shobhit || initialState;

export const selectShobhit = createSelector(
  [selectDomain],
  shobhitState => shobhitState,
);
