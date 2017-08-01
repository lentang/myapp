import React, { Component } from 'react';
import { connect } from 'react-redux'
import NavigationAPI from '../../api/navigationAPI.js'
import CategoryItem from './categoryItem'
import { List } from 'react-item-list';


const mapStateToProps = (state) => ({
  navigation: state.navigation
})

export class Navigation extends Component {


  renderNavigationData = (endecaId) => {
    const { dispatch } = this.props
    NavigationAPI.loadRootNavigationData(dispatch);
    console.log("start navigation request dispatch")
  }

  // renderNavigation = ()

  componentWillMount() {
    console.log("Will mount navigation")
    this.renderNavigationData("Endeca");
  }

  digestNavigationData(rawNavigation) {
    if (rawNavigation.navigation !== "") {
      const category = JSON.parse(rawNavigation.navigation);
      return category.navigation;
    } else {
      return [];
    }
  }

  renderCategoryitem(category) {
    if (category.length > 0) {
      return <List items={category} ListItem={CategoryItem} />
    }
    else {
      return null
    }
  }


  render() {
    console.log("start render Navigation widget")
    const { navigation } = this.props;
    console.log("start render div")
    const category = this.digestNavigationData(navigation)
    console.log("digestJson")
    return (
      <div className="App-Navigation">
        {this.renderCategoryitem(category)}
      </div>
    );
  }
}


export default connect(mapStateToProps)(Navigation)
