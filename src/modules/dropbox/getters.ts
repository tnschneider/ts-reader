import { GetterTree } from 'vuex';
import { DropboxState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<DropboxState, RootState> = {
    dataFetched(state): boolean {
        const { dataFetched } = state;
        return dataFetched;
    }
};







