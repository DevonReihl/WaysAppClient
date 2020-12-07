import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, info) {
    this.setState({ error: error, errorInfo: info });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div className="error-boundary">
          <summary>
            <center>Something went wrong! Please refresh your page.</center>
          </summary>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
