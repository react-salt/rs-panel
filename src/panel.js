import React, { Component } from 'react';
import { setClass } from 'cat-util';
import Body from './body';
import Ul from './ul';

class Panel extends Component {
    static  propTypes = {
        myStyle: React.PropTypes.string,
        prefixName: React.PropTypes.string
    }

    static defaultProps = {
        myStyle: 'default',
        prefixName: 'cat'
    }

    _renderContent() {
        let self = this;

        return React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { prefixName: self.props.prefixName });
        });
    }

    render() {
        let { header, footer, prefixName, className, myStyle } = this.props;
        let classNames = setClass(`${prefixName}-panel`, `${prefixName}-panel-${myStyle}`, className);

        return (
            <div className={classNames}>
                {
                    header &&
                    <div
                        className={`${prefixName}-panel-heading`}
                        onClick={this.props.onClick}
                    >
                        {header}
                    </div>
                }
                {this._renderContent()}
                {
                    footer &&
                    <div className={`${prefixName}-panel-footer`}>
                        {footer}
                    </div>
                }
            </div>        
        );
    }
}

Panel.Body = Body;
Panel.Ul = Ul;

export default Panel;