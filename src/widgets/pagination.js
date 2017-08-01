import React, { Component } from 'react';
import { connect } from 'react-redux'
import NavigationAPI from '../api/navigationAPI.js'


const mapStateToProps = (state, ownProps) => ({
    currentPageNumber : state.currentPageNumber,
})


class Pagination extends  Component{





    pageClick(filter, nextPageNum, event){
        const { dispatch } = this.props;
        NavigationAPI.loadNavigationDataByEndecaId(dispatch, filter, nextPageNum)
    }


    render(){

        let pageFilter = this.props.pageFilter;

        //当前页码
        let cur = this.props.current;
        let pageSize = this.props.pageSize;
        let total = this.props.total;

        //显示分页按钮
        let pageNum = [];
        let totalPage = Math.ceil(total/pageSize);


        let begin;
        let pageEnd;
        const showPageNumber = 5;
        if(totalPage > showPageNumber){
            if((totalPage - cur) < showPageNumber){
                begin = totalPage - showPageNumber + 1;
                pageEnd = totalPage;
            }else{
                begin = cur;
                pageEnd = begin + showPageNumber - 1;
            }
        }else{
            pageEnd = totalPage;
            begin = 1;
        }



        //根据返回的总记录数计算当前页显示的数据
        for(let i = begin; i <= pageEnd; i ++){

            if(cur == i){
                pageNum.push({num : i, cur : true});
            }else{
                pageNum.push({num : i, cur : false});
            }
        }
        return(

                <div className="paginationDiv">


                    <a className={cur == 1? 'prev disable' : 'prev'} onClick={this.pageClick.bind(this, pageFilter, cur-1)}></a>

                    <span>
                          {
                              pageNum.map(function(curPageNum){
                                  return(<a className={curPageNum.cur ? 'num current':'num'}>
                                      {curPageNum.num}
                                      </a>)
                              })
                          }
                    </span>
                    <a className={cur == totalPage? 'next disable' : 'next'} onClick={this.pageClick.bind(this, pageFilter, cur+1)}></a>


                    <div className="rightDiv">

                        总共 <span>{total}</span> 条，  共 <span> {totalPage}</span>页

                    </div>
                </div>

        )
    }
}

export default connect(mapStateToProps)(Pagination)
//export default Pagination;