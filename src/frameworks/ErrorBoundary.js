import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
    this.props.hasError && this.props.hasError(false)
  }

  componentDidCatch (error, info) {
    // Display fallback UI
    this.setState({ hasError: true, info, error })
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
    this.props.hasError && this.props.hasError(true)
  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      if (this.props.printError == false) {
        return <div>Error : {this.props.message}</div>
      }
      return <div>
        <h1>Something went wrong: {this.state.error.name} </h1>
        {this.state.error.message}
        <br />
        <br />
        {
          this.state.info.componentStack.toString().split('in').map((item, index) => {
            return (
              <div key={item + '_' + index}>
                {item}
              </div>

            )
          })

        }
      </div>
    }
    return this.props.children
  }
}
