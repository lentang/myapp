import React, { Component } from 'react';
import { connect } from 'react-redux'
import { List } from 'react-item-list';
import FacetItem from './facetItem'



const mapStateToProps = (state) => ({
    products: state.products
})

class Facets extends Component {


    // componentWillMount() {
    //     const { dispatch } = this.props
    //     const { filter } = this.props
    //     NavigationAPI.loadNavigationDataByEndecaId(dispatch, filter)
    // }

    renderFacets(facets) {
        if (facets !== undefined && facets !== "" && facets.length > 0) {
            return                 <ul className="list-sidebar bg-defoult">
                                        <List items={facets} ListItem={FacetItem} />
                                    </ul>
        }
        // else {
        return null
        // }
    }

    parseFacetsData() {

        const { products } = this.props;
        if (products == undefined || products == "")
            return ""
        const prodsJSON = JSON.parse(products.products)
        return prodsJSON.facetGroups
    }

    render() {
        const facetJSON = this.parseFacetsData();
        if (facetJSON == undefined) {
            return <div className="container"></div>
        }
        return (
            <div className="sidebar left col-sm-4">
                        {this.renderFacets(facetJSON)}
            </div>
        );
    }
}


export default connect(mapStateToProps)(Facets)
