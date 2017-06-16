
import * as RouteType from '../constants/routeType'
import Login from  '../containers/login'
const LOGIN_PAGE = {
    key: RouteType.LOGIN_PAGE,
    title: '登录',
    component: Login,
    type: 'bottom',
    needLogin: false
}

import ReadingCarouselDetail from  '../containers/reading/readingCarouselDetail'
const READING_CAROUSEL_DETAIL = {
    key: RouteType.READING_CAROUSEL_DETAIL,
    title: '详情',
    component: ReadingCarouselDetail,
}

import ReadingEssayDetail from '../containers/reading/readingEssayDetail'
const READING_ESSAY_DETAIL = {
    key: RouteType.READING_ESSAY_DETAIL,
    title: '短篇详情',
    component: ReadingEssayDetail
}

import ReadingSerialDetail from '../containers/reading/readingSerialDetail'
const READING_SERIAL_DETAIL = {
    key: RouteType.READING_SERIAL_DETAIL,
    title: '连载详情',
    component: ReadingSerialDetail
}

import ReadingQuestionDetail from '../containers/reading/readingQuestionDetail'
const READING_QUESTION_DETAIL = {
    key: RouteType.READING_QUESTION_DETAIL,
    title: '问答详情',
    component: ReadingQuestionDetail
}

import Mine from '../containers/mine/mine'
const PERSONAL_CENTER = {
    key: RouteType.PERSONAL_CENTER,
    title: '个人中心',
    component: Mine,
}



const Pages = [
	  LOGIN_PAGE,
    READING_CAROUSEL_DETAIL,
    READING_ESSAY_DETAIL,
    READING_SERIAL_DETAIL,
    READING_QUESTION_DETAIL,
    PERSONAL_CENTER,

]

export default Pages

