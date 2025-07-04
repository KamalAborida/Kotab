// src/app/redux/features/user/userSelectors.ts
import { RootState } from '../../store';

export const selectUsername = (state: RootState) => state.user.username;
