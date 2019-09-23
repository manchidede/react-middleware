import React, {Component} from 'react';
import RouteGroup from './RouteGroup';
import HandleMiddleware from './HandleMiddleware';

class MyRoute extends Component{
    render(){
        return HandleMiddleware(this.props);
    }
}
export {RouteGroup};
export default MyRoute;