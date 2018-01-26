import React, { Component } from 'react';
import { connect } from 'react-redux';
import Analyze from './Analyze';
import Verification from './Verification';
import { analyzeUser, getLoans, verifyUser } from '../state/actions';
import Presentation from './Presentation/Presentation';

const mapStateToProps = state => {
    const { loans, analyze, verify} = state;

    return {
        loans,
        data: analyze,
        verified: verify
    }
};

const mapDispatchToProps = dispatch => {
    return {
        analyze: () => dispatch(analyzeUser('tester')),
        verify: () => dispatch(verifyUser(true))
    }
}


class testApp extends Component {


    componentWillMount() {
        console.log('mount');
    }
    render()
    {
        const  {analyze, data, verified, verify} = this.props;

        if(data.data === undefined)
        {
            return(<Analyze callback={analyze} />);
        }
        else if(verified !== true){
            return(<Verification verify={verify} />);
        }
        else  {
            return(<Presentation loans={data.data.loans} 
                text={data.data.text} 
                graph={data.data.graph} 
                barGraph={data.data.barChart}/>)
        }

        return(<div>You did it</div>);
        
    }
}

const wrapper = connect(mapStateToProps, mapDispatchToProps)(testApp);

export default wrapper;