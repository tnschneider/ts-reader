import { MutationTree } from 'vuex';
import { DropboxState } from './types';

export const mutations: MutationTree<DropboxState> = {
    dataFetched(state, isFetched) {
        state.dataFetched = isFetched;
    },
};
