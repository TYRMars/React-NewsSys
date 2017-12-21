import React from 'react';
import {Row, Col} from 'antd';
import {
  Menu,
  Icon,
  Tabs,
  message,
  Form,
  Input,
  Button,
  CheckBox,
  Modal,
  Card,
  notification,
  Upload
} from 'antd';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
import {Router, Route, Link, browserHistory} from 'react-router';

export default class PCUserCenter extends React.Component {
  constructor(){
    super();
    this.state = {
      usercollection:'',
      previewImage:'',
      previewVisible: false
    }
  };
  setModalVisible(value)
	{
		this.setState({previewVisible: value});
	};
  componentDidMount(){
    var myFetchOptions = {
      method:'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid"+localStorage.userid,myFetchOptions)
    .then(response=>response.json())
    .then(json=>{
      this.setState({usercollection:json});
    });
  };
  render(){
    const props = {
      action: 'http://newsapi.gugujiankong.com/handler.ashx',
      header:{
        "Access-Control-Allow-Origin":"*"
      },
      listType:'picture-card',
      defaultFileList:[
        {
          uid:-1,
          name:'xxx.png',
          state:'done',
          url:'https://os.alipayobjects.com/rmsportal/NDbkJhpzmlxtPhB.png',
          thumbUrl:'https://os.alipayobjects.com/rmsportal/NDbkJhpzmlxtPhB.png',
        }
      ],
      onPreview:(file)=>{
        this.setState({previewImage:file.url,previewVisible:true});
      }
    };
    const {usercollection} = this.state;
    const usercollectionList = usercollection.length ?
    usercollection.map((uc,index)=>(
      <Card key={index} title={uc.uniquekey} extra={<a target="_blank" href={`/#/details/${uc.uniquekey}`}>查看新闻详情</a>}>
        <p>{uc.Title}</p>
      </Card>
    ))
    :
    '您还没收藏任何新闻，赶紧去收藏一些吧(:';
    return(
      <div>
        <PCHeader/>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Tabs>
              <TabPane tab="我的收藏列表" key="1">
                <div class="comment">
                  <Row>
                    <Col span={24}>
                      {usercollectionList}
                    </Col>
                  </Row>
                </div>
              </TabPane>
              <TabPane tab="我的评论列表" key="2">

              </TabPane>
              <TabPane tab="头像设置" key="3">
                <div class="clearfix">
                  <Upload {...props}>
                    <Icon type="plus"/>
                    <div className="ant-upload-text">上传图片</div>
                  </Upload>
                  <Modal visible={this.state.previewVisible} footer={null} onCancel={()=>this.setModalVisible(false)}>
                    <img alt="预览" src={this.state.previewImage}/>
                  </Modal>
                </div>
              </TabPane>
            </Tabs>
            <PCFooter/>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  };
}
