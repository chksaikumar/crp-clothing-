import React from 'react';

import {connect } from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { createStructuredSelector } from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';


const CollectionsOverview = ({collections}) =>(

    <div className="collections-overview">

    {
        collections.map(({id, ...otherCOllectionProps}) =>(
            <CollectionPreview key={id} {...otherCOllectionProps}/>
        ))
    }



    </div>
)


const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionsOverview)