import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/storage/store';

export const sessionSelector = createSelector(
  (state: RootState) => state.session,
  ({ user }) => ({
    user,
  })
);
