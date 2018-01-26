import React, { Component } from 'react';
import { connect } from 'react-redux';
import Analyze from './Analyze';
import Verification from './Verification';
import { analyzeUser, getLoans, verifyUser, finishUser } from '../state/actions';
import Presentation from './Presentation/Presentation';
import Result from './Result';

const mapStateToProps = state => {
    const { loans, analyze, verify, finished} = state;

    return {
        loans,
        data: analyze,
        verified: verify,
        finished
    }
};

const mapDispatchToProps = dispatch => {
    return {
        analyze: () => dispatch(analyzeUser('tester')),
        verify: () => dispatch(verifyUser(true)),
        finish: () => dispatch(finishUser(true))
    }
}


class testApp extends Component {


    componentWillMount() {
        console.log('mount');
    }
    render()
    {
        const  {analyze, data, verified, verify, finished, finish} = this.props;

        if(data.data === undefined)
        {
            return(<Analyze callback={analyze} />);
        }
        else if(verified !== true){
            return(<Verification verify={verify} />);
        }
        else if(finished !== true)  {
            return(<Presentation loans={data.data.loans} 
                text={data.data.text} 
                graph={data.data.graph} 
                barGraph={data.data.barChart}
                name={data.data.name}
                callback={finish}/>)
        }
        else return <Result />

        return(<div>You broke it</div>);
        
    }
}

const wrapper = connect(mapStateToProps, mapDispatchToProps)(testApp);

export default wrapper;