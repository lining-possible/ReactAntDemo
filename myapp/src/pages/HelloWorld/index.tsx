import React, { Component } from 'react';





export default class HelloWorld extends Component {


  componentDidMount() {
    var name = this.props.match.params.name;
    var age = this.props.match.params.age;

    console.log("name is:", name, "age is:", age);
  }
  render() {
    return (
      <div>

        {/* var data = JSON.parse(this.props.params.name); */}
        {/* {console.log("name", this.props.match.params.name)} */}
        hello world
        {/* <div>
          <Button onClick={this.addNewCard}> 添加卡片 </Button>
        </div> */}
      </div>
    );
  }
}

