import React, { Component } from 'react';
import { connect } from 'react-redux';
import Analyze from './Analyze';
import { analyzeUser, getLoans } from '../state/actions';

const mapStateToProps = () => {
    return {
        loans: []
    }
};

const mapDispatchToProps = dispatch => {
    return {
        analyze: () => dispatch(getLoans('tester'))
    }
}


class testApp extends Component {


    componentWillMount() {
        console.log('mount');
    }
    render()
    {
        const  {analyze} = this.props;
        return(<Analyze callback={analyze} />);
    }
}

const wrapper = connect(mapStateToProps, mapDispatchToProps)(testApp);

export default wrapper;