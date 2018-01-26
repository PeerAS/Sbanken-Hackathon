import React, { Component } from 'react';
import { connect } from 'react-redux';
import Analyze from './Analyze';
import Verification from './Verification';
import { analyzeUser, getLoans, verifyUser, finishUser, loading, finishedLoading } from '../state/actions';
import Presentation from './Presentation/Presentation';
import Result from './Result';
import loader from './loader.gif';
import './Wrapper.css';

const mapStateToProps = state => {
    const { loans, analyze, verify, finished, loading} = state;

    return {
        loans,
        data: analyze,
        verified: verify,
        finished,
        loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        analyze: () => dispatch(analyzeUser('tester')),
        verify: () => dispatch(verifyUser(true)),
        finish: () => dispatch(finishUser(true)),
        startLoading: () => dispatch(loading()),
        finishLoading: () => dispatch(finishedLoading())
    }
}


class testApp extends Component {


    componentWillMount() {
        console.log('mount');
    }
    render()
    {
        const  {analyze, data, verified, verify, finished, finish, loading, startLoading, finishLoading} = this.props;

        if(loading)
        {
            setTimeout(()=>{ finishLoading(); }, 2000);
            return (<img className="loader" src={loader} />);
        }

        if(data.data === undefined)
        {
            return(<Analyze callback={analyze} />);
        }
        else if(verified !== true){
            return(<Verification verify={startLoading} />);
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