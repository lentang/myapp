import React, { Component } from 'react';
import { connect } from 'react-redux'
import { List } from 'react-item-list';



class FacetItem extends Component {

    assemblerFacetValues(itemData){
        let row = []
        const facetValues = itemData.facetValues
        for (var i=0; i< facetValues.length; i++){
            var facetValueHTML = 
            <li><a href={facetValues[i].restURL}>{facetValues[i].label} - Count : {facetValues[i].count}</a></li>
            row.push(facetValueHTML)
        }
        return row
               
    }



    render() {
        let itemData = this.props.itemData;
        if (itemData == undefined) {
            return <div className=""></div>
        }

        let rows = []
        const facetItemHTML = this.assemblerFacetValues(itemData)
        // const facetItemHTML = {rows}</div>
        return (
            <li> <a href="#" data-toggle="collapse" data-target={itemData.facetName}  className="active" > 
                    <i className="fa fa-th-large"></i> 
                    <span className="nav-label"> {itemData.facetName} </span> 
                    <span className="fa fa-chevron-left pull-right"></span> 
                </a>
                <ul className="sub-menu" id={itemData.facetName}>
                    {facetItemHTML}
                </ul>
            </li>

        );
    }
}
export default FacetItem