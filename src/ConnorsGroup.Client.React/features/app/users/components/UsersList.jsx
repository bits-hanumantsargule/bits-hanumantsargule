import React, { Component } from "react";
import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn as Column} from "@progress/kendo-react-grid";
import totalSelector from "../selector/totalUsersSelector";
import { connect } from "react-redux";
import { fetchUsers,loading } from '../action';
 import { Oval } from  'react-loader-spinner'


class UsersList extends Component {
  constructor(props) {
    super(props);
// console.log(this.props+' testProp');
    this.state = {
      skip: 0,
      pageNo: 1,
      pageSize: 20,
    };
    // this.onPageChange = this.onPageChange.bind(this);
  }
  componentDidMount(){
    this.props.loading();
    this.props.fetchUsers(this.state.pageNo);
  }

  onPageChange = (event) => {
    //  console.log(' jj '+this.state.percent);
    this.setState({
      skip: event.page.skip,
    });
    if(this.props.users !== undefined){
    if (event.page.skip % 10 === 0) {
      this.setState(
        {
          pageNo: this.state.pageNo + 1,
          users:this.props.users
        },
        () => {
          this.props.loading();
          this.props.fetchUsers(this.state.pageNo);
        }
      );
    }
  }
  };
  

  render() {
    console.log(this.props.users+' prop ');
    return (
      <>
        {this.props.isloading && <Oval color="#00BFFF" height={30} width={30} /> }
        {!this.props.isloading && (
      <div> 
<Grid
        style={{ height: "640px", }}
        rowHeight={40}
        data={ 
                this.props.users ? this.props.users.slice(
                this.state.skip,this.state.skip + this.state.pageSize
              ): null
        }
        pageSize={100}
        total={this.props.total}
        skip={this.skip}
        scrollable={"virtual"}
        onPageChange={this.onPageChange}>
        <Column field="id" title="ID" />
        <Column field="name" title="NAME" />
        <Column field="email" title="EMAIL" />
        <Column field="gender" title="GENDER" />
        <Column field="status" title="STATUS" />
      </Grid> 
      </div> )}
      </>
    );
  }
}
const mapStateToProps = state => {
  if(state.reducer.users!==undefined){ console.log(state.reducer.users.length+' kl'); }
  return {
    users: state.reducer.users,
    total: totalSelector(state),
    isloading: state.reducer.loading,
  };
};

export default connect(mapStateToProps, { fetchUsers, loading })(UsersList);
