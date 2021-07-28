import styles from "./index.less";
import React, { useState } from "react";
import { Form, Row, Col, Input, Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { getSearchHeros } from "../service";
import { connect, Dispatch } from 'umi';

const AdvancedSearchForm = (props: any) => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const getFields = () => {
    //const count = expand ? 10 : 6;
    const children = [];
    children.push(
      <Col span={8} key='hero'>
        <Form.Item
          name={`hero`}
          label={`英雄`}
          rules={[
            {
              required: true,
              message: "Input something!",
            },
          ]}
        >
          <Input placeholder="请输入搜索英雄" />
        </Form.Item>
      </Col>
    );
    children.push(
      <Col span={8} key='skin' >
        <Form.Item
          name={`skin`}
          label={`皮肤`}
          rules={[
            {
              required: true,
              message: "Input something!",
            },
          ]}
        >
          <Input placeholder="请输入搜索皮肤" />
        </Form.Item>
      </Col>
    );
    // for (let i = 0; i < count; i++) {
    //   children.push(
    //     <Col span={8} key={i}>
    //       <Form.Item
    //         name={`field-${i}`}
    //         label={`Field ${i}`}
    //         rules={[
    //           {
    //             required: true,
    //             message: "Input something!",
    //           },
    //         ]}
    //       >
    //         <Input placeholder="placeholder" />
    //       </Form.Item>
    //     </Col>
    //   );
    // }
    return children;
  };

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    //let result = await getSearchHeros(values)

    //console.log("result:", result)
    console.log("props:", props)
    // props.dispatch({
    //   type: 'heros/fetcheHerosList',

    // })
    props.dispatch({
      type: 'heros/fetcheHerosList',
      payload: values
    })

  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={24}>{getFields()}</Row>
      <Row>
        <Col span={24} style={{ textAlign: "right" }}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            style={{ marginLeft: 8 }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>


          {/* 扩展按钮 */}
          {/* <a
            style={{ marginLeft: 8, fontSize: 12 }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <UpOutlined /> : <DownOutlined />} Collapse
          </a> */}
        </Col>
      </Row>
    </Form>
  );
};

const SearchPage = (props: any) => {
  return (
    <div className={styles.container}>
      <div id="components-form-demo-advanced-search">
        <div>
          <AdvancedSearchForm dispatch={props.dispatch} />
          <div className="search-result-list">Search Result List</div>
        </div>
      </div>
    </div>
  )

}
export default connect(({ heros }: any) => ({ heros }))(SearchPage);
