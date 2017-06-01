import React from 'react';
import { connect } from 'dva';
import Header from '../../../components/Header/Header.js';
import HomeTable from '../views/HomeTable.js';

function IndexPage() {
    return (
        <div>
            <Header />
            <HomeTable />
        </div>
    );
}

IndexPage.propTypes = {}

export default connect()(IndexPage);

