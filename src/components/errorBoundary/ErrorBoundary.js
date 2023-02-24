import { Component } from "react";

import ErrorMassage from "../errorMessage/ErrorMessage"

import "./errorBoundary.scss"

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, errInfo){
        console.log(error, errInfo);
        this.setState({error: true});
    }

    render() {

        if(this.state.error){
            return (<div><ErrorMassage/></div>)
        }

        return this.props.children;
    }
}

export default ErrorBoundary;