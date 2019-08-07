import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { DropboxState } from './types';
import { RootState } from '../types';

export const state: DropboxState = {
    dataFetched: false
};

const namespaced: boolean = true;

export const dropbox: Module<DropboxState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};







