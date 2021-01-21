import { connect } from 'react-redux';
import Timer from './presenter';
import { bindActionCreators } from 'redux';
import { actionCreators as tomatoActions } from '../../simpleRedux/reducer';

const mapStateToProps = (state) => {
    const { isPlaying, elapsedTime, timerDuration } = state;

    return {
        isPlaying,
        elapsedTime,
        timerDuration
    };
}

const mapDispatchToProps = (dispatch) => { //this is a function Sends Actions to Reducer
    return {
        startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
        restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
        addSecond: bindActionCreators(tomatoActions.addSecond, dispatch)
        /* 
            first startTimer is propName, and second one is functionName of reducer
        */
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);