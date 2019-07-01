import React, {Component} from 'react';

export default class Stat extends Component{
    render() {

        const {done, total} = this.props;

        return (
            <strong>
                <span>
                    Các công việc hoàn thành ({done})
                </span>

                /

                <span>
                    Tổng số công việc ({total})
                </span>
            </strong>
        );
    }
}