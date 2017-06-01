import React, { Component }  from 'react';
import { Link } from 'dva/router';
import styles from './HomeTable.less';


// 公共头部
class HomeTable extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <table>
                    <tr className={ styles.test }>
                        <td>1111</td>
                        <td>1111</td>
                        <td>1111</td>
                        <td>1111</td>
                    </tr>
                    <tr>
                        <td>1111</td>
                        <td>1111</td>
                        <td>1111</td>
                        <td>1111</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default HomeTable