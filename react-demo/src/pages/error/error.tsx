import React, { Component } from 'react'

interface ErrorBoundayProps {
  error: null, 
  errorInfo: null
}

interface ErrorBoundayState {
  error: any, 
  errorInfo: any
}

class ErrorBounday extends Component<ErrorBoundayProps, ErrorBoundayState> {
  static defaultProps: any = {
    error: null, 
    errorInfo: null
  }
  
  constructor(props: any) {
    super(props)
    this.state = {
      error: null, 
      errorInfo: null
    }
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(111, error, errorInfo)
    this.setState({
      error,
      errorInfo
    })
  }
  
  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }  
}

export default ErrorBounday