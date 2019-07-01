import React, {Component} from 'react';
import './App.css';
import Content from './component/content'

export default class App extends Component{

  render() {
    return (
          <Content params={true}/>
    );
  }
}