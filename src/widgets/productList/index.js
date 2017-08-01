import React, { Component } from 'react';
import { connect } from 'react-redux'
import ProdItem from './prodItem'
import { List } from 'react-item-list';
import Pagination from '../pagination.js';
import NavigationAPI from '../../api/navigationAPI.js'




const mapStateToProps = (state, ownProps) => ({
    products: state.products,
})

class Products extends Component {


    componentWillMount() {
        const { dispatch } = this.props
        const { filter } = this.props
        const {currentPage} = this.props
        NavigationAPI.loadNavigationDataByEndecaId(dispatch, filter, currentPage)
    }

    renderProductListItem(productList) {
        if (productList !== undefined && productList !== "" && productList.length > 0) {
            return <List items={productList} ListItem={ProdItem} />
        }
        // else {
        return null
        // }
    }

    parseProductsListData() {
        const { products } = this.props;
        if (products == undefined || products == "")
            return ""
        const prodsJSON = JSON.parse(products.products)
        return prodsJSON.products
    }

    render() {
        const productJSON = this.parseProductsListData();
        if (productJSON == undefined) {
            return <div className="container"></div>
        }
        var productCountHTML = ""
        if (productJSON.productCount) {
            productCountHTML = <p>Total product count :　{productJSON.productCount} </p>
        }
        else {
            productCountHTML = <p>Total product count :　NULL </p>
        }
        return (
            <div className="col-sm-8">
                <div className="row">
                    {productCountHTML}
                    <p>Sort options: {JSON.stringify(productJSON.sortOptions)}</p>
                </div>
                <div className="row">
                    {this.renderProductListItem(productJSON.productList)}
                    {/* {JSON.stringify(products)} */}
                </div>
                <div className="row">

                    <Pagination  total={productJSON.productCount}
                                    current={productJSON.currentPage}
                                    pageSize={productJSON.pageSize}
                                    pageFilter={this.props.filter}/>


                </div>
            </div>
        );
    }
}


    //console.log(_this.state.indexList) }
//下一步



export default connect(mapStateToProps)(Products)
