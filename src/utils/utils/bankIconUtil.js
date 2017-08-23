/**
 * database tools class
 */
import React, {Component, PropTypes} from 'react';
import {
    Image,
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    bankIcon: {
        height: 30,
        width: 30,
        margin: 15
    }
});

class BankIconUtil {

    show(bankIcon) {
        switch (bankIcon) {
            case '上海浦东发展银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/上海浦东发展银行.png')}/>;
                break;
            case '上海银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/上海银行.png')}/>;
                break;
            case '东莞银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/东莞银行.png')}/>;
                break;
            case '中信银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/中信银行.png')}/>;
                break;
            case '中国光大银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/中国光大银行.png')}/>;
                break;
            case '中国农业发展银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/中国农业发展银行.png')}/>;
                break;
            case '中国农业银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/中国农业银行.png')}/>;
                break;
            case '中国工商银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/中国工商银行.png')}/>;
                break;
            case '中国建设银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/中国建设银行.png')}/>;
                break;
            case '中国邮政储蓄银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/中国邮政储蓄银行.png')}/>;
                break;
            case '中国银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/中国银行.png')}/>;
                break;
            case '中金支付':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/中金支付.png')}/>;
                break;
            case '临商银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/临商银行.png')}/>;
                break;
            case '乌鲁木齐商业银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/乌鲁木齐商业银行.png')}/>;
                break;
            case '交通银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/交通银行.png')}/>;
                break;
            case '兴业银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/兴业银行.png')}/>;
                break;
            case '包商银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/包商银行.png')}/>;
                break;
            case '北京农村商业银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/北京农村商业银行.png')}/>;
                break;
            case '北京银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/北京银行.png')}/>;
                break;
            case '华夏银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/华夏银行.png')}/>;
                break;
            case '南京银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/南京银行.png')}/>;
                break;
            case '南充市商业银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/南充市商业银行.png')}/>;
                break;
            case '厦门银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/厦门银行.png')}/>;
                break;
            case '吉林省农村信用社':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/吉林省农村信用社.png')}/>;
                break;
            case '哈尔滨银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/哈尔滨银行.png')}/>;
                break;
            case '大连银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/大连银行.png')}/>;
                break;
            case '天津银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/天津银行.png')}/>;
                break;
            case '宁夏银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/宁夏银行.png')}/>;
                break;
            case '宁波慈溪农村商业银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/宁波慈溪农村商业银行.png')}/>;
                break;
            case '宁波银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/宁波银行.png')}/>;
                break;
            case '安徽涡阳农村商业银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/安徽涡阳农村商业银行.png')}/>;
                break;
            case '平安银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/平安银行.png')}/>;
                break;
            case '广发银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/广发银行.png')}/>;
                break;
            case '广州银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/广州银行.png')}/>;
                break;
            case '廊坊银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/廊坊银行.png')}/>;
                break;
            case '张家口银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/张家口银行.png')}/>;
                break;
            case '徽商银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/徽商银行.png')}/>;
                break;
            case '恒丰银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/恒丰银行.png')}/>;
                break;
            case '成都银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/成都银行.png')}/>;
                break;
            case '抚顺银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/抚顺银行.png')}/>;
                break;
            case '招商银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/招商银行.png')}/>;
                break;
            case '无锡农村商业银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/无锡农村商业银行.png')}/>;
                break;
            case '杭州银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/杭州银行.png')}/>;
                break;
            case '民生银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/民生银行.png')}/>;
                break;
            case '汉口银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/汉口银行.png')}/>;
                break;
            case '江苏东台农村商业银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/江苏东台农村商业银行.png')}/>;
                break;
            case '江苏新沂农村商业银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/江苏新沂农村商业银行.png')}/>;
                break;
            case '江苏江南农村商业银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/江苏江南农村商业银行.png')}/>;
                break;
            case '江苏银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/江苏银行.png')}/>;
                break;
            case '沧州银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/沧州银行.png')}/>;
                break;
            case '河北银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/河北银行.png')}/>;
                break;
            case '洛阳银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/洛阳银行.png')}/>;
                break;
            case '浙商银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/浙商银行.png')}/>;
                break;
            case '浙江民泰商业银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/浙江民泰商业银行.png')}/>;
                break;
            case '浙江泰隆商业银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/浙江泰隆商业银行.png')}/>;
                break;
            case '渤海银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/渤海银行.png')}/>;
                break;
            case '温州银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/温州银行.png')}/>;
                break;
            case '湖北银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/湖北银行.png')}/>;
                break;
            case '湖州银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/湖州银行.png')}/>;
                break;
            case '烟台银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/烟台银行.png')}/>;
                break;
            case '焦作市商业银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/焦作市商业银行.png')}/>;
                break;
            case '珠海华润银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/珠海华润银行.png')}/>;
                break;
            case '盛京银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/盛京银行.png')}/>;
                break;
            case '福建海峡银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/福建海峡银行.png')}/>;
                break;
            case '绍兴银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/绍兴银行.png')}/>;
                break;
            case '苏州银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/苏州银行.png')}/>;
                break;
            case '葫芦岛银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/葫芦岛银行.png')}/>;
                break;
            case '辽阳银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/辽阳银行.png')}/>;
                break;
            case '邯郸银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/邯郸银行.png')}/>;
                break;
            case '郑州银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/郑州银行.png')}/>;
                break;
            case '金华银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/金华银行.png')}/>;
                break;
            case '锦州银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/锦州银行.png')}/>;
                break;
            case '青岛银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/青岛银行.png')}/>;
                break;
            case '齐商银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/齐商银行.png')}/>;
                break;
            case '齐鲁银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/齐鲁银行.png')}/>;
                break;
            case '龙江银行':
                return <Image style={styles.bankIcon} source={require('../../assets/bank/龙江银行.png')}/>;
                break;
            default:
                return <Image style={styles.bankIcon} source={require('../../assets/bank/广发银行.png')}/>;
                break;
        }
    }


}

const instance = new BankIconUtil();

export default instance;
