import React, { Component } from 'react';
import { connect } from 'react-redux'
import { List } from 'react-item-list';
import NavigationAPI from '../api/navigationAPI.js'


const mapStateToProps = (state) => ({
    product: state.product
})

class Product extends Component {

    componentWillMount() {
        const { dispatch } = this.props
        const { filter } = this.props
        NavigationAPI.loadProductDetailData(dispatch, filter)
        NavigationAPI.loadPriceData(dispatch, filter)

    }

    parseProductDetailJSON() {
        const { product } = this.props;
        if (product !== null && product !== undefined && product !== "") {
            return JSON.parse(product.product)
        }
        return "";

    }

    assemblerPDPHTML

    render() {
        const productJSON = this.parseProductDetailJSON()
        if (productJSON == "" || !productJSON.success) {
            return <div className="container">{JSON.stringify(productJSON.result)} </div>
        }

        const {productInfo} = productJSON.result

        const assemblerImages =
            <div class="images">
                <div id="product-img">
                        <img src={productInfo.productLargeUrl} />
                </div>
                <div class="additional-images">
                    <a href="{#images.imageSet.largeImage.srcValue}" rel="lightbox[slides]" title="{#product.productName}">
                        {/* <img src={productInfo.productLargeUrl} /> */}
                    </a>
                </div>
            </div>

        const productDetailInfo =
            <div id="product-details">
                <h1>{productInfo.brandName} - {productInfo.productName} </h1>
                <p>{productInfo.productDescription}</p>
                <div id="product-price">
                     <p>Our Price :  $ {productInfo.skuInfo.ourPrice}</p>
                     <p>List Price : $ {productInfo.skuInfo.listPrice}</p>
                     <p>Saving Desct : {productInfo.skuInfo.savingsDesc}</p>
                </div>
                <input type="submit" name="submit" value="Add to Cart" />
                <b>SKU: #{productInfo.skuInfo.skuId}</b>
            </div>
        return  (
        <div className="container">
             {assemblerImages} 
             {productDetailInfo}
        </div>)

    }
}


export default connect(mapStateToProps)(Product)