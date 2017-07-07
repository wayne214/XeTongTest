/**
 * Created by wayne on 2017/4/27.
 */
import React from 'react';
import Immutable from 'immutable'
import * as ActionType from '../constants/actionType'

import Home from '../containers/home/home'
import Reading from '../containers/reading/reading'
import Music from '../containers/music/music'
import Movie from '../containers/movie/movie'


import homen from '../../assets/img/home.png'
import homeActive from '../../assets/img/home_active.png'
import reading from '../../assets/img/reading.png'
import readingActive from '../../assets/img/reading_active.png'
import music from '../../assets/img/music.png'
import musicActive from '../../assets/img/music_active.png'
import move from '../../assets/img/movie.png'
import moveActive from '../../assets/img/movie_active.png'
const initState = Immutable.fromJS({
    currentTab: 'home',
    routes: [
        {
            title: '首页',
            key: 'home',
            badgeCount: 0,
            component: <Home />,
            withStatusBar: false,
            renderIcon: homen,
            renderSelectedIcon: homeActive,
        },
        {
            title: '阅读',
            key: 'reading',
            badgeCount: 0,
            component: <Reading />,
            withStatusBar: true,
            renderIcon: reading,
            renderSelectedIcon: readingActive,
        },
        {
            title: '音乐',
            key: 'music',
            badgeCount: 0,
            component: <Music />,
            withStatusBar: true,
            renderIcon: music,
            renderSelectedIcon: musicActive,
        },
        {
            title: '我的',
            key: 'movie',
            badgeCount: 0,
            component: <Movie />,
            withStatusBar: false,
            renderIcon: move,
            renderSelectedIcon: moveActive,
        }
    ],

})

export default (state = initState, action) => {
    let _state = state;
    switch (action.type) {
        case ActionType.ACTION_CHANGE_TAB:
            _state = _state.set('currentTab',action.payload.tab)
            return _state;
        default:
            return state;
    }
}