import { ActionTree } from 'vuex';
import { DropboxState } from './types';
import { RootState } from '../types';


export const actions: ActionTree<DropboxState, RootState> = {
    fetchData({ commit }): any {
        commit('dataFetched', true);
        // axios({
        //     url: 'https://....'
        // }).then((response: { data: any; }) => {
        //     const payload: User = response && response.data;
        //     commit('profileLoaded', payload);
        // }, (error: any) => {
        //     // tslint:disable-next-line: no-console
        //     console.log(error);
        //     commit('profileError');
        // });
    },
};
