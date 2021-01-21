import React from 'react';
import PropType from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components';

const StopButton = styled.TouchableOpacity``;


function Button({ iconName, onPress }) {
    return (
        <StopButton onPress={onPress}>
            <FontAwesome name={iconName} size={80} color='white' />
        </StopButton>
    );
}

Button.propTypes = {

    iconName: PropType.string.isRequired,
    onPress: PropType.func.isRequired
}

export default Button;



















