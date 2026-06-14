import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Called when a child throws. Update state to show fallback UI.
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Called after an error is caught. Good for logging.
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            refresh
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
