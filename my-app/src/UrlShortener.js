import React from 'react';

import { ShortenerResult } from './ShortenerResult';

export class UrlShortener extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'http://www.google.com/',
      shortUrl: null,
    };
  }

  handleChange = (event) => {
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

  showShortUrl(data) {
    this.setState({ shortUrl: data.id });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Test</button>
        <br />
        <ShortenerResult url={this.state.shortUrl} />
        {
          this.state.shortUrl ? <span className="text-color">From span: {this.state.shortUrl}</span> : null
        }
      </div>
    );
  }
}