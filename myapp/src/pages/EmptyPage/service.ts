// @ts-ignore
/* eslint-disable */
import { request } from 'umi';


/** 获取规则列表 GET /api/rule */
export async function getHeros() {
  return request('/api/heros');
}


export async function getSearchHeros(params: any) {
  return request('/api/SearchHeros', {
    method: 'POST',
    data: params
  });
}
