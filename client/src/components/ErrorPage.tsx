import * as React from 'react';
import { url } from '../util';

interface IErrorPageState {
  error?: {
    status: number;
    message?: string;
  };
}

export default class ErrorPage extends React.Component<void, IErrorPageState> {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch(url('/oops'))
      .then(response => response.text()
        .then(body => {
          const error = body ? JSON.parse(body) : {};
          this.setState({
            error: {
              status: response.status,
              message: error.message || error.exMessage || response.statusText || 'Request failed'
            }
          });
        }))
      .catch(error => this.setState({
        error: {
          status: 0,
          message: error.message || 'Unable to reach backend'
        }
      }));
  }

  render() {
    const { error } = this.state;

    return <span>
      <img src='/images/pets.png' />

      <h2>Something happened...</h2>
      { error ?
        <span>
          <p><b>Status:</b> {error.status}</p>
          <p><b>Message:</b> {error.message}</p>
        </span>
        :
        <p><b>Loading error details...</b></p>
      }
    </span>;
  }
};
