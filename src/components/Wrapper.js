import React, { Component } from 'react';
import { connect } from 'react-redux';
import Analyze from './Analyze';
import { analyzeUser, getLoans } from '../state/actions';

const mapStateToProps = state => {
    const { loans, analyze} = state;

    return {
        loans,
        data: analyze
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
    }
    render()
    {
        const  {analyze, data} = this.props;

        if(data.data === undefined)
        {
            return(<Analyze callback={analyze} />);
        }
        
    }
}

const wrapper = connect(mapStateToProps, mapDispatchToProps)(testApp);

export default wrapper;