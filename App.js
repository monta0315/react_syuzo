import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Syuzo from'./syuzo';
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { normal: "React" ,img:logo,count:0}
    this.img={normal:logo}
  }
  handleClick(word) {
    this.setState({ normal: word });
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    const syuzolist = [
      {
        word: 'できる！',
        image: "https://halo-halo-mayumi.cocolog-nifty.com/photos/uncategorized/2015/04/17/image_2.jpeg"
      },
      {
        word: '元気！',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvDiXmuAqOkFwJOrp3PHiIjOckm4HGr65Esg&usqp=CAU"
      }
    ]
    return (
      <div>
        <img src={this.state.img} className="App-logo" alt="logo" />
        <h1>{this.state.normal}</h1>
        <button
          onClick={() => { this.handleClick("やりきれ！") }}
        >もう無理 +</button>
        <button onClick={() => { this.handleClick("起きろ！") }}>眠い +</button>
        <h1>{this.state.count}</h1>
        <div className='syuzo'>
          {syuzolist.map((syuzoprops) => {
            return (
              <Syuzo
                word={syuzoprops.word}
                image={syuzoprops.image}
              />
            )
          })}
        </div>

      </div>
    );
  }
}
export default App;
