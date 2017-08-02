import React from 'react';
import {Row, Col} from 'antd';
import {Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';

export default class PCNewsContainer extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true
    };
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} class="container">
            <div class="leftContainer">
              <div class="carousel">
                <Carousel {...settings}>
                  <div><img src="http://img4.imgtn.bdimg.com/it/u=1741114194,2661513872&fm=11&gp=0.jpg"/></div>
                  <div><img src="http://img0.imgtn.bdimg.com/it/u=2995398665,2507124287&fm=26&gp=0.jpg"/></div>
                  <div><img src="http://img0.imgtn.bdimg.com/it/u=3126607402,4264686894&fm=26&gp=0.jpg"/></div>
                  <div><img src="http://img0.imgtn.bdimg.com/it/u=3511527348,3258609760&fm=26&gp=0.jpg"/></div>
                </Carousel>
              </div>
              <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"/>
            </div>
            <Tabs class="tabs_news">
              <TabPane tab="头条新闻" key="1">
                <PCNewsBlock count={22} type="top" with="100%" bordered="false"/>
              </TabPane>
              <TabPane tab="国际" key="2">
                <PCNewsBlock count={22} type="top" with="100%" bordered="false"/>
              </TabPane>
            </Tabs>
            <PCNewsImageBlock count={9} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="112px"/>
            <PCNewsImageBlock count={18} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="112px"/>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  };
}
