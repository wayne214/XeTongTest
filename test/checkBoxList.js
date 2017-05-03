/**
 * Created by wayne on 2017/5/3.
 */

'use strict';

import React,{ Component ,PropTypes} from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    Image,
    ListView,
    StyleSheet
} from 'react-native';

// import BaseComponent from './BaseComponent'
// import Styles from './styles'

const propTypes = {
    options: React.PropTypes.array.isRequired,
    selectedOptions: React.PropTypes.array,
    maxSelectedOptions: React.PropTypes.number,
    onSelection: React.PropTypes.func,
    renderIndicator: React.PropTypes.func,
    renderSeparator: React.PropTypes.func,
    renderRow: React.PropTypes.func,
    renderText: React.PropTypes.func,
    style: View.propTypes.style,
    optionStyle: View.propTypes.style,
    disabled: PropTypes.bool
};
const defaultProps = {
    options: [],
    selectedOptions: [],
    onSelection(option){},
    style:{},
    optionStyle:{},
    disabled: false
};

class CheckboxList extends Component {

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => true});
        this.ds = ds;

        this.state = {
            dataSource: ds.cloneWithRows(this.props.options),
            selectedOptions: this.props.selectedOptions || [],
            disabled: this.props.disabled
        };

        this._updateSelectedOptions = this._updateSelectedOptions.bind(this)
        this._isSelected = this._isSelected.bind(this)
        this._renderIndicator = this._renderIndicator.bind(this)
        this._selectOption = this._selectOption.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this._updateSelectedOptions(nextProps.selectedOptions);
        this.setState({
            disabled: nextProps.disabled
        });
    }
    _updateSelectedOptions(selectedOptions) {
        this.setState({
            selectedOptions,
            dataSource: this.ds.cloneWithRows(this.props.options)
        });
    }

    _validateMaxSelectedOptions() {
        const maxSelectedOptions = this.props.maxSelectedOptions;
        const selectedOptions = this.state.selectedOptions;

        if (maxSelectedOptions && selectedOptions.length > 0 && selectedOptions.length >= maxSelectedOptions) {
            selectedOptions.splice(0, 1);
        }

        this._updateSelectedOptions(selectedOptions);
    }

    _selectOption(selectedOption) {

        let selectedOptions = this.state.selectedOptions;
        console.log(selectedOption);
        console.log(selectedOptions);
        if(typeof(selectedOption.value) != 'undefined'){
            var index = selectedOptions.indexOf(selectedOption.value);
        }else{
            var index = selectedOptions.indexOf(selectedOption);
        }
        if (index === -1) {
            this._validateMaxSelectedOptions();
            if(typeof(selectedOption.value) != 'undefined'){
                selectedOptions.push(selectedOption.value);
            }else{
                selectedOptions.push(selectedOption);
            }

        } else {
            selectedOptions.splice(index, 1);
        }

        this._updateSelectedOptions(selectedOptions);

        //run callback
        this.props.onSelection(selectedOption);
    }

    _isSelected(option) {
        if(typeof(option.value) != 'undefined'){
            return this.state.selectedOptions.indexOf(option.value) !== -1;
        }else{
            return this.state.selectedOptions.indexOf(option) !== -1;
        }

    }

    _renderIndicator(option) {
        if (this._isSelected(option)) {
            if(typeof this.props.renderIndicator === 'function') {
                return this.props.renderIndicator(option);
            }
            if(typeof(option.value) != 'undefined'){
                return (
                    <View style={[styles.radio,{borderColor:'#0066CC'}]}>
                        <Text style={styles.selected}>{option.value}</Text>
                    </View>
                );
            }
            return (
                <View style={[styles.radio,{borderColor:'#0066CC'}]}>
                    <View style={styles.dot}></View>
                </View>
            );
        }else{
            if(typeof(option.value) != 'undefined'){
                return (<View style={styles.radio}><Text>{option.value}</Text></View>);
            }
            return (<View style={styles.radio}></View>);
        }
    }

    _renderSeparator(option) {

        if(typeof this.props.renderSeparator === 'function') {
            return this.props.renderSeparator(option);
        }

        return (<View style={styles.separator}></View>);
    }

    _renderText(option) {

        if(typeof this.props.renderText === 'function') {
            return this.props.renderText(option);
        }
        if(typeof(option.label) != 'undefined'){
            return (<Text>{option.label}</Text>);
        }else{
            return (<Text style={styles.itemText}>{option}</Text>);
        }

    }

    _renderRow(option) {

        if(typeof this.props.renderRow === 'function') {
            return this.props.renderRow(option);
        }

        const disabled = this.state.disabled;
        return (

            <View style={this.props.optionStyle}>
                <TouchableOpacity
                    activeOpacity={disabled ? 1 : 0.7}
                    onPress={!disabled ? ()=>{this._selectOption(option)} : null}
                >
                    <View>
                        <View
                            style={styles.row}
                        >
                            <View style={styles.optionLabel}>{this._renderText(option)}</View>
                            <View style={styles.optionIndicator}>{this._renderIndicator(option)}</View>
                        </View>
                    </View>
                </TouchableOpacity>
                {this._renderSeparator(option)}
            </View>
        );
    }

    render() {
        return (
            <ListView
                style={[styles.list, this.props.style]}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
            />
        );
    }
};

const styles = StyleSheet.create({
    list: {},

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft:10,
        // paddingRight:10,
        height: 44,
        justifyContent: 'center'
    },

    optionLabel: {
        flex: 1,
    },

    optionIndicator: {
        marginRight:15,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    optionIndicatorIcon: {
        width: 20,
        height: 20
    },

    separator: {
        marginLeft: 10,
        height: 1,
        marginTop: 4,
        marginBottom: 4,
        backgroundColor: '#d9d9d9',
    },
    radio:{
        marginRight:6,
        borderWidth:1,
        borderColor:'#666666',
        borderRadius:10,
        width:20,
        height:20,
        alignItems:'center',
        justifyContent:'center'
    },
    selected:{
        color:'#0066CC'
    },
    dot:{
        width:14,
        height:14,
        backgroundColor:'#0066CC',
        borderRadius:7
    },
    itemText:{
        fontSize: 16,
        color: '#333333'
    }
})

CheckboxList.propTypes = propTypes;
CheckboxList.defaultProps = defaultProps;

module.exports = CheckboxList;
