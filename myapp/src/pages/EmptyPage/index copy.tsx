import Dispatcher from '@/.umi/plugin-model/helpers/dispatcher';
import React, { Component } from 'react';
import { connect, Dispatch } from 'umi';



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

  let { dispatch, heros3 } = props

  let clickFn = () => {
    console.log("clickFn")
    console.log(props)
    dispatch({ type: "heros3/fetcheHerosList" })
  }


  return (
    <div>
      <div>eeeeeeeeeeee</div>
      <button onClick={clickFn}>获取英雄</button>
      <ul>
        {heros3.herolist.map((item: any, i: any) => {
          return (
            <li>{item.cname}</li>
          )
        })}
      </ul>
    </div>
  );

};

//heros3  heros3 这里的参数写的是命名空间的参数
export default connect(({ heros3 }: any) => ({ heros3 }))(HersoPage)
