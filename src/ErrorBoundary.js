// import React, { Component } from 'react';

// class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false, error: null, errorInfo: null };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.error('ErrorBoundary caught an error', error, errorInfo);
//     this.setState({ error, errorInfo });
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div>
//           <h1>Something went wrong.</h1>
//           <details style={{ whiteSpace: 'pre-wrap' }}>
//             {this.state.error && this.state.error.toString()}
//             <br />
//             {this.state.errorInfo.componentStack}
//           </details>
//         </div>
//       );
//     }

//     return this.props.children; 
//   }
// }

// export default ErrorBoundary;
