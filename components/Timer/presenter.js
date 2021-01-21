import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from "react-native";
import styled from 'styled-components';
import Button from '../Button';

const Container = styled.View`
    flex:1;
    background-color:#CE0824;
    justify-content : flex-start;
`;

const Upper = styled.View`
    flex:2;
    justify-content:center;
    align-items:center;
`;

const Lower = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
`;

const Time = styled.Text`
    color:white;
    font-size:120px;
    font-weight:100;
`;

let TitleContainer = styled.View`
    background-color : black;
    border-radius : 10px;
    width:100%;
    padding-top :20px;
    
`;

const TitleButton = styled.TouchableWithoutFeedback`

`;


const Title = styled.Text`
    color : white;
    text-align : center;
    font-size : 20px;
`;



class Timer extends Component {


    componentWillReceiveProps(nextProps) {
        //it will be executed when the component gets new props
        const currentProps = this.props;

        if (!currentProps.isPlaying && nextProps.isPlaying) {
            //start
            const timerInterval = setInterval(() => currentProps.addSecond(), 1000);
            this.setState({
                timerInterval
            });
        }
        else if (currentProps.isPlaying && !nextProps.isPlaying) {
            //stop
            clearInterval(this.state.timerInterval);
        }

    }

    render() {
        const { isPlaying, elapsedTime, timerDuration, startTimer, restartTimer, addSecond } = this.props;

        let minutes = Math.floor((timerDuration - elapsedTime) / 60);
        let seconds = (timerDuration - elapsedTime) % 60;
        { minutes < 10 ? minutes = "0" + minutes : minutes }
        { seconds < 10 ? seconds = "0" + seconds : seconds }
        return (
            <Container>
                <TitleButton onPress={() => alert('wow, u find this :)')}>
                    <TitleContainer><Title>Simple_Timer</Title></TitleContainer>
                </TitleButton>
                <StatusBar barStyle={"light-content"} />
                <Upper>
                    <Time>{`${minutes}:${seconds}`}</Time>
                </Upper>
                <Lower>
                    {isPlaying
                        ? <Button iconName="stop-circle" onPress={restartTimer} />
                        : <Button iconName="play-circle" onPress={startTimer} />}
                </Lower>
            </Container>
        );
    }
}



export default Timer;

