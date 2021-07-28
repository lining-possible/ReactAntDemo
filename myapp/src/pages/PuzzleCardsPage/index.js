import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards';

const mapStateToProps = (state) => {
    console.log("into mapStateToProps");
    const cardList = state[namespace];
    console.log("cardList", cardList);
    return {
        cardList,
    };
};


//connect 是连接 dva 和 React 两个平行世界的关键，一定要理解
// connect 让组件获取到两样东西：1. model 中的数据；2. 驱动 model 改变的方法。
// connect 本质上只是一个 javascript 函数，通过 @ 装饰器语法使用，放置在组件定义的上方；
// connect 既然是函数，就可以接受入参，第一个入参是最常用的，它需要是一个函数，我们习惯给它命名叫做
// mapStateToProps，顾名思义就是把 dva model 中的 state 通过组件的 props 注入给组件。
// 通过实现这个函数，我们就能实现把 dva model 的 state 注入给组件。
// @connect(mapStateToProps)
// export default class PuzzleCardsPage extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.counter = 10;
//     //     this.state = {
//     //         cardList: [
//     //             {
//     //                 id: 1,
//     //                 setup: 'Did you hear about the two silk worms in a race?',
//     //                 punchline: 'It ended in a tie',
//     //             },
//     //             {
//     //                 id: 2,
//     //                 setup: 'What happens to a frog\'s car when it breaks down?',
//     //                 punchline: 'It gets toad away',
//     //             },
//     //         ],
//     //     }
//     // }

//     // addNewCard = () => {
//     //     this.setState(prevState => {
//     //         const prevCardList = prevState.cardList;
//     //         this.counter += 1;
//     //         const card = {
//     //             id: this.counter,
//     //             setup: "counter:" + this.counter + "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
//     //             punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     //         };
//     //         return {
//     //             cardList: prevCardList.concat(card),
//     //         };
//     //     });
//     // }

//     render() {
//         return (
//             <div>
//                 {
//                     this.state.cardList.map(card => {
//                         return (
//                             <Card key={card.id}>
//                                 <div>Q: {card.setup}</div>
//                                 <div>
//                                     <strong>A: {card.punchline}</strong>
//                                 </div>
//                             </Card>
//                         );
//                     })
//                 }
//                 {/* <div>
//                     <Button onClick={this.addNewCard}>添加卡片</Button>
//                 </div> */}
//             </div>
//         );
//     }
// }

@connect(mapStateToProps)
export default class PuzzleCardsPage extends Component {
    render() {
        return (
            <div>
                {
                    this.props.cardList.map(card => {
                        return (
                            <Card key={card.id}>
                                <div>Q: {card.setup}</div>
                                <div>
                                    <strong>A: {card.punchline}</strong>
                                </div>
                            </Card>
                        );
                    })
                }
                {/* <div>
          <Button onClick={this.addNewCard}> 添加卡片 </Button>
        </div> */}
            </div>
        );
    }
}