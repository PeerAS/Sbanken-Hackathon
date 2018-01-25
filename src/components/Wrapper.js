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
        analyze: () => dispatch(analyzeUser('tester'))
    }
}


class testApp extends Component {


    componentWillMount() {
        console.log('mount');

        const test = this.props;
    }
    render()
    {
        const  {analyze} = this.props;
        return(<Analyze callback={analyze} />);
    }
}

const wrapper = connect(mapStateToProps, mapDispatchToProps)(testApp);

export default wrapper;