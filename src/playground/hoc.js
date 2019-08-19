import React from 'react';
import ReactDOM from 'react-dom'


// Higher Order Components (HOC): are components that renders another component
// They make it easier to reuse code
// render hijacking, 
// prop manipulation,
// abstract state


// Create a normal component

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: { props.info } </p>
    </div>
);


// function that returns the higher order component. It takes a component as its arguement. 
// the spread operator is used to pass down the props. Sort of concatenating the props

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a private info. Please do not share.</p>}

            <WrappedComponent {...props} /> 
        </div>
    );
};


const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to view info.</p>}
        </div>
    );
};

// the HOC and the child component passed to it

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info='These are the details.' />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info='These are the details.' />, document.getElementById('app'))