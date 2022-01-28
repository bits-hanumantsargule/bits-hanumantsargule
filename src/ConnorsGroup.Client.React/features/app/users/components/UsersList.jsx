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

    this.state = {
      skip: 0,
      pageNo: 1,
    };
    this.onPageChange = this.onPageChange.bind(this);
  }
  componentDidMount(){
    this.props.loading();
    this.props.fetchUsers(this.state.pageNo);
  }

  onPageChange = (event) => {
    this.setState({
      skip: event.page.skip,
    });
    if (event.page.skip % 10 === 0) {
      this.setState(
        {
          pageNo: this.state.pageNo + 1,
        },
        () => {
          this.props.loading();
          this.props.fetchUsers(this.state.pageNo);
        }
      );
    }
  };
  render() {
    return (
      <>
      {this.props.isloading && <Oval color="#00BFFF" height={30} width={30} /> }
         {!this.props.isloading && (
      <div> 
      Page Count : {this.state.pageNo}
      Page skip : {this.state.skip}   
<Grid
        style={{ height: "440px", }}
        rowHeight={40}
        data={
                this.props.users ? this.props.users.slice(
                this.state.skip,this.state.skip + 10
              ): null
        }
        pageSize={20}
        total={this.props.total}
        skip={this.state.skip}
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
  return {
    users: state.reducer.users,
    total: totalSelector(state),
    isloading: state.reducer.loading,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchUsers,
//     loading
//   }
// }
//
//, loadingData 
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(UsersList)
export default connect(mapStateToProps, { fetchUsers, loading })(UsersList);
