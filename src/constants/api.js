import { HOST } from '../constants/setting'

export const API_TEMPLATE = 'http://116.211.167.106/api/live/aggregation?uid=133825214&interest=1'

export const API_FORGET_IDENTIFY_CODE = HOST + 'app/message/getForgetIdentifyCode' //忘记密码获取验证码接口

export const API_LOGIN_WITH_PWD = HOST +'app/login/loginWithPassword'


export const API_LOGIN_WITH_MSM_CODE = HOST + 'app/login/loginWithVerificationCode'

export const API_GET_VCODE_FOR_LOGIN = HOST + 'app/message/getLoginIdentifyCode'

export const API_MODIFY_PASSWORD = HOST + 'app/user/modifyPassword' //修改密码接口


export const API_FORGET_NEXT_PAGE = 'http://mproxy-test.xianyiscm.com/app/message/checkForgetIdentifyCode' //效验忘记密码验证码接口

export const API_FORGET_CHANGE_CODE_PAGE = 'http://mproxy-test.xianyiscm.com/app/user/forgetPassword' //效验忘记密码验证码接口

export const API_GET_CARINFO_BY_DRIVERPHONE = HOST+'app/rmc/getCarInfoByDriverPhone'//获取车辆信息

export const API_GET_DRIVERINFO_BY_DRIVERPHONE = HOST+'app/rmc/getDriverInfoByDriverPhone'//获取司机个人信息

export const API_GET_GOOD_SOURCE = HOST+'app/transport/getGoodsSource'//获取货源信息

export const API_RECEIVE_ORDER = HOST+'app/transport/receiveOrder'//接单接口

export const API_REFUSE_ORDER = HOST+'app/transport/refuseOrder'//拒单接口

export const API_GET_ORDER_DETAIL = HOST+'app/transport/myOrder'//获取订单详情接口

export const API_GET_ORDER_SEARCH_BY_NO = HOST+'app/transport/findTransDetailByNo'//获取订单详情接口

export const API_GET_RECEIVER_OR_REFUSE_ORDER_COUNT = HOST+'app/transport/receiveOrRefuseOrderCount'//获取接单拒单数量接口

export const API_WAITINGSURE_UPLOAD_RECEIPT = HOST+'/app/transport/returnBillInfo'//待回单页面点击上传回单

export const API_SEND_ORDER = HOST+'/app/transport/sendTransportInfo'//待发运订单详情->发运

export const API_GET_SIGN_IN = HOST+'/app/transport/signTransportInfo'//待签收订单详情->签收
