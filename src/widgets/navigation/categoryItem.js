import React, { Component } from 'react';
import { List } from 'react-item-list';
import NavigationAPI from '../../api/navigationAPI.js'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  navigation: state.navigation
})


export class CategoryItem extends Component {



    renderSubCategoryitem(categoryItem) {
        if (categoryItem.subCategories !== undefined && categoryItem.subCategories !== "" && categoryItem.subCategories[0].catItems.length > 0) {
            return <List items={categoryItem.subCategories[0].catItems} ListItem={cateItemHTML} />
        }
        else {
            return null
        }
    }

    loadNavigationDataByEndecaId(enderId){
        const { dispatch } = this.props
        NavigationAPI.loadNavigationDataByEndecaId(dispatch,enderId)
    }


    render() {
        const categoryItem = this.props.itemData;
        let categoryItemHTML
        if (categoryItem !== undefined) {
            categoryItemHTML =  
                <li className={"app-dropdown"}>
                    {/* <a onClick={()=>this.loadNavigationDataByEndecaId(categoryItem.restURL)} href="#" className="dropbtn">{categoryItem.categoryName}</a> */}
                    <a href={"/categories/"+ categoryItem.restURL} className="dropbtn">{categoryItem.categoryName}</a> 

                    <div className="dropdown-content">
                         {this.renderSubCategoryitem(categoryItem)} 
                    </div>
                </li>
        }
        else {
            return null
        }
        return <ul>{categoryItemHTML}</ul>
    }
}

class cateItemHTML extends Component {
    render() {
        let itemData = this.props.itemData;
        return <a href={"/categories/"+ itemData.restURL}> {itemData.label} </a>
    }
}

export default connect(mapStateToProps)(CategoryItem)


// export default CategoryItem;
