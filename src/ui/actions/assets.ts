import { ACTION, createAction } from './constants';

export const getAsset = createAction(ACTION.GET_ASSETS);
export const updateAsset = createAction(ACTION.UPDATE_ASSET);
export const setActiveAccount = createAction(ACTION.SET_ACTIVE_ACCOUNT);
