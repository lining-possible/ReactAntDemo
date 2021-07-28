import Dispatcher from '@/.umi/plugin-model/helpers/dispatcher';
import React, { Component } from 'react';
import { connect, Dispatch } from 'umi';
import { Table, Tag, Space } from 'antd';
// cname: "廉颇"
// ename: 105
// hero_type: 3
// new_type: 0
// skin_name: "正义爆轰|地狱岩魂"
// title: "正义爆轰"

import FormAdvancedSearch from './FormAdvancedSearch';
const columns = [
  {
    title: '名字',
    //索引   必须和数据内列名称一致
    dataIndex: 'cname',
    key: 'cname',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'ename',
    dataIndex: 'ename',
    key: 'ename',
  },
  {
    title: 'hero_type',
    dataIndex: 'hero_type',
    key: 'hero_type',
  },
  {
    title: 'skin_name',
    dataIndex: 'skin_name',
    key: 'skin_name',
  },
  {
    title: 'title',
    key: 'title',
    dataIndex: 'title',
    render: (tags) => (
      <>
        <p>描述：{tags}</p>
      </>
    ),
  },
];
const data = [];

const HersoPage = (props: any) => {
  // console.log("1------------------");
  // fetch('/api/heros').then((res) => {
  //   return res.json();
  // }).then((res) => {
  //   console.log(res);
  // })
  // getHeros().then((res) => {
  //   console.log(res)
  // })
  let { dispatch, heros } = props;

  let clickFn = () => {
    console.log('clickFn');
    console.log(props); //herosNew 是 namespace

    dispatch({
      type: 'heros/fetcheHerosList2',
    });
  };

  return (
    <div>
      <FormAdvancedSearch />
      <div>eeeeeeeeeeee</div>
      <button onClick={clickFn}>获取英雄</button>
      {/* <ul>
       {heros3.herolist.map((item: any, i: any) => {
         return (
           <li>{item.cname}</li>
         )
       })}
      </ul> */}
      <Table columns={columns} dataSource={heros.herolist} />
    </div>
  );
}; //heros3  heros3 这里的参数写的是命名空间的参数

export default connect(({ heros }: any) => ({
  heros,
}))(HersoPage);
