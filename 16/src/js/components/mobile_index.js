import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Tabs,Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import MoblieList from './mobile_list';
export default class MobileIndex extends React.Component {
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
				<MobileHeader></MobileHeader>
				<Tabs>
					<TabPane tab="头条" key="1">
						<div class="carousel">
							<Carousel {...settings}>
								<div><img src="http://img4.imgtn.bdimg.com/it/u=1741114194,2661513872&fm=11&gp=0.jpg"/></div>
								<div><img src="http://img0.imgtn.bdimg.com/it/u=2995398665,2507124287&fm=26&gp=0.jpg"/></div>
								<div><img src="http://img0.imgtn.bdimg.com/it/u=3126607402,4264686894&fm=26&gp=0.jpg"/></div>
								<div><img src="http://img0.imgtn.bdimg.com/it/u=3511527348,3258609760&fm=26&gp=0.jpg"/></div>
							</Carousel>
						</div>
						<MoblieList count={20} type="top" />
					</TabPane>
					<TabPane tab="社会" key="2">
						<MoblieList count={20} type="shehui" />
					</TabPane>
					<TabPane tab="国内" key="3">
						<MoblieList count={20} type="guonei" />
					</TabPane>
					<TabPane tab="国际" key="4">
						<MoblieList count={20} type="guoji" />
					</TabPane>
					<TabPane tab="娱乐" key="5">
						<MoblieList count={20} type="yule" />
					</TabPane>
				</Tabs>
				<MobileFooter></MobileFooter>
			</div>
		);
	};
}
