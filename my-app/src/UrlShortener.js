import React from 'react';

export class UrlShortener extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'http://www.google.com/',
      labelValue: '',
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  }

  handleClick = (event) => {
    return fetch('https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyAodPCmmz2fbSodNAydOMSaA5q3pEYsTCA', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        longUrl: this.state.value,
      }),
    }).then((res) => {
      res.json().then(data => this.showShortUrl(data));
    });
  }

  showShortUrl = (data) => {
    this.rootNode.textContent = `Your url has been shortened! ${data.id}`;
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Test</button>
        <br />
        <label className='text-color' ref={(node) => (this.rootNode = node)} value={this.state.labelValue} />
      </div>
    );
  }
}

// Key for google shortener: AIzaSyAodPCmmz2fbSodNAydOMSaA5q3pEYsTCA 