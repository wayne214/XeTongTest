
// import SettingContainer from '../containers/mine/setting'
// export const SETTING_PAGE = {
// 	id: 'SETTING_PAGE',
// 	title: '设置',
// 	key: 'setting-page',
// 	component: SettingContainer
// }

// // import PageAContainer from '../containers/mine/pageA'
// // export const A_PAGE = {
// // 	id: 'A_PAGE',
// // 	title: 'PageA',
// // 	key: 'A-page',
// // 	component: PageAContainer
// // }

// export const Pages = [

// 	SETTING_PAGE,
// 	// A_PAGE,

// ];


import * as RouteType from '../constants/routeType'
import Login from  '../containers/mine/login'
const LOGIN_PAGE = {
    key: RouteType.LOGIN_PAGE,
    title: '登录',
    component: Login,
    type: 'bottom',
    needLogin: false
}

import Setting from  '../containers/mine/setting'
const SETTING_PAGE = {
    key: RouteType.SETTING_PAGE,
    title: '设置',
    component: Setting,
    needLogin: true,
}

import ChangePassword from '../containers/mine/changePassword'
const CHANGE_PWD_PAGE ={
	key: RouteType.CHANGE_PWD_PAGE,
	title: '修改密码',
	component: ChangePassword,
	needLogin: true
}
import AboutUs from '../containers/mine/aboutUs'
const ABOUT_US_PAGE ={
    key: RouteType.ABOUT_US_PAGE,
    title: '关于我们',
    component: AboutUs,
    needLogin: true
}
import ForgetPWD from '../containers/mine/forgetPWD'
const Forget_pwd_page ={
    key: RouteType.FORGETPWD_PAGE,
    title: '忘记密码',
    component: ForgetPWD,
    needLogin: true
}

import ChangeCodePWD from '../containers/mine/changeCodePWD'
const Change_code_PWD ={
    key: RouteType.CHANGE_CODE_PWD,
    title: '忘记密码',
    component: ChangeCodePWD,
    needLogin: true
}

import MsgList from '../containers/mine/msgList'
const MSGLIST_PAGE ={
	key: RouteType.MSGLIST_PAGE,
	title: '消息中心',
	component: MsgList,
	needLogin: true
}


import Login_sms from '../containers/mine/login_sms'
const LOGIN_SMS_PAGE = {
    key: RouteType.LOGIN_SMS_PAGE,
    title: '登录',
    component: Login_sms,
    needLogin: true
}


import CarInfo from '../containers/mine/carInfo'
const CAR_INFO_PAGE ={
    key: RouteType.CAR_INFO_PAGE,
    title: '车辆信息',
    component: CarInfo,
    needLogin: true
}

import PersonInfoContainer from '../containers/mine/personInfo'
const PERSON_INFO_PAGE = {
    key: RouteType.PERSON_INFO_PAGE,
    title: '个人信息',
    component: PersonInfoContainer,
    needLogin: true
}


import GoodsSourceDetails from '../containers/goodsSource/goodsSouceDetails'
const GOODS_SOURCE_DETAILS = {
    key: RouteType.GOODS_SOURCE_DETAILS,
    title: '货源详情',
    component: GoodsSourceDetails,
    needLogin: true
}

import OrdersToBeShippedDetails from '../containers/order/orderToBeShippedDetails'
const ORDERS_TO_BE_SHIPPED_DETAILS = {
    key: RouteType.ORDERS_TO_BE_SHIPPED_DETAILS,
    title: '订单详情',
    component: OrdersToBeShippedDetails,
    needLogin: true
}
import Search from '../containers/order/search'
const SEARCH_PAGE = {
    key: RouteType.SEARCH_PAGE,
    title: '搜索',
    component: Search,
    needLogin: true
}
import Scan from '../containers/order/scan'
const SCAN_PAGE = {
    key:RouteType.SCAN_PAGE,
    title:'扫描',
    component:Scan,
    needLogin:true
}
import Orders from '../containers/order/order'
const ORDERS_PAGE = {
    key:RouteType.ORDERS_PAGE,
    title:'订单',
    component:Orders,
    needLogin:true
}
import GoodSource from '../containers/goodsSource/goodsSource'
const GOODS_SOURCE_PAGE = {
    key: RouteType.GOODS_SOURCE_PAGE,
    title: '货源',
    component: GoodSource,
    needLogin: true
}
import baiduMap from '../common/baiduMap'
const MAP_PAGE = {
    key: RouteType.MAP_PAGE,
    title: '地图',
    component: baiduMap,
    needLogin: true
}
import searchHistory from '../containers/order/searchHistoryDetail'
const SEARCH_HISTORY = {
    key: RouteType.SEARCH_HISTORY,
    title: '搜索',
    component: searchHistory,
    needLogin: true
}

import orderToBeSignInDetail from '../containers/order/orderToBeSignInDetail'
const ORDERS_TO_SIGN_IN_DETAILS_PAGE = {
    key: RouteType.ORDERS_TO_SIGN_IN_DETAILS,
    title: '待签收',
    component: orderToBeSignInDetail,
    needLogin: true
}

import orderToBeWaitSureDetail from '../containers/order/orderToBeWaitSureDetail'
const ORDERS_TO_WAIT_SURE_DETAILS_PAGE = {
    key: RouteType.ORDERS_TO_WAIT_SURE_DETAILS,
    title: '待回单',
    component: orderToBeWaitSureDetail,
    needLogin: true
}

import orderToBeSureDetail from '../containers/order/orderToBeSureDetail'
const ORDERS_TO_SURE_DETAILS_PAGE = {
    key: RouteType.ORDERS_TO_SURE_DETAILS,
    title: '已回单',
    component: orderToBeSureDetail,
    needLogin: true
}

import SignPage from '../containers/order/SignPage'
const SIGN_PAGE = {
    key: RouteType.ORDERS_SIGN_IN,
    title: '签收',
    component: SignPage,
    needLogin: true
}
import MsgDetails from '../containers/mine/msgDetails'
const MSG_DETAILS_PAGE = {
    key: RouteType.MSG_DETAILS_PAGE,
    title: '消息详情',
    component: MsgDetails,
    needLogin: true
}

const Pages = [
	SETTING_PAGE,
	LOGIN_PAGE,
	CHANGE_PWD_PAGE,
	MSGLIST_PAGE,
    ABOUT_US_PAGE,
    Forget_pwd_page,
    LOGIN_SMS_PAGE,
    Change_code_PWD,
    CAR_INFO_PAGE,
    PERSON_INFO_PAGE,
    GOODS_SOURCE_DETAILS,
    ORDERS_TO_BE_SHIPPED_DETAILS,
    SEARCH_PAGE,
    SCAN_PAGE,
    GOODS_SOURCE_PAGE,
    ORDERS_PAGE,
    MAP_PAGE,
    SEARCH_HISTORY,
    ORDERS_TO_SIGN_IN_DETAILS_PAGE,
    ORDERS_TO_WAIT_SURE_DETAILS_PAGE,
    ORDERS_TO_SURE_DETAILS_PAGE,
    SIGN_PAGE,
    MSG_DETAILS_PAGE,
]

export default Pages

