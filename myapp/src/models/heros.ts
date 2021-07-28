import { Effect, Reducer } from 'umi';  // request 是 demo 项目脚手架中提供的一个做 http 请求的方法，是对于 fetch 的封装，返回 Promise
import { getHeros, getSearchHeros } from '@/pages/EmptyPage/service';


const HerosModelNew: any = {
    namespace: 'heros',
    state: {
        herolist: [],
    },
    effects: {


        *fetcheHerosList({ payload }: any, { call, put }: any) {
            const res = yield call(getSearchHeros, payload);
            console.log("fetcheHerosList", res)
            yield put({
                type: 'addNewCard',
                payload: res
            });
        },

        *fetcheHerosList2(_, { call, put }: any) {
            const res = yield call(getHeros);
            console.log("fetcheHerosList2", res)
            yield put({
                type: 'addNewCard',
                payload: res
            });
        },

        // *fetcheHerosList(_, { call, put }: any) {
        //     const res = yield call(getHeros);
        //     console.log("res2222", res)
        //     yield put({
        //         type: 'addNewCard',
        //         payload: res
        //     });
        // },
    },
    reducers: {
        addNewCard(state: any, action: any) {
            console.log(" addNewCard")
            return {
                ...state,
                herolist: action.payload
            };
        }
    },
};
export default HerosModelNew