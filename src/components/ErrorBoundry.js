import React,{Components} from 'react';

class ErrorBoundry extends Components{
    constructor(props){
    	super(props);
    	this.state = {
    		hasError: false
    	}
    }

    componentsDidCatch(error,info){
       this.setState({hasError:true })
    }

    render(){
    	if(this.state.hasError){
    		return <h1>Oops... some error occured.</h1>
    	}
    	return this.props.children
    }
}

export default ErrorBoundry;