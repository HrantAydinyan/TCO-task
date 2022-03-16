import React from 'react';
import Lottie from 'assets/images/lottie.gif';
import PropTypes from 'prop-types';

const Preloader = ({ style }) => {
    return <img src={Lottie} style={style} />;
};

Preloader.propTypes = {
    style: PropTypes.object,
};

export default Preloader;
