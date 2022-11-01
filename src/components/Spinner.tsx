import React from 'react';

const Spinner = () => (
    <div className="left-0 top-0 fixed w-screen h-screen bg-black bg-opacity-50 center-row-xy">
        <div className="w-12 h-12 rounded-full bg-white animate-pulse" />
    </div>
);

export default Spinner;
