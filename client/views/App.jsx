import React from 'react';
import { Link } from 'react-router-dom'

import Routes from '../config/router'

export default class App extends React.Component{
    render() {
        return [
            <Link to="/" key="index">首页</Link>,
            <Link to="/detail" key="detail">详情页1</Link>,
            <Routes key="router"/>
        ]
    }
}