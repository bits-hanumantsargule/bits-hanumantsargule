import React, { Component } from "react";
import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn as Column} from "@progress/kendo-react-grid";
import totalSelector from "../selector/totalUsersSelector";
import { connect } from "react-redux";
import { fetchUsers,loading } from '../action';
import Loader from './Loader';


class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skip: 0,
      pageNo: 1,
    };
  }
  componentDidMount(){
    this.props.loading();
    this.props.fetchUsers(this.state.pageNo);
  }

  onPageChange = (event) => {
    this.setState({
      skip: event.page.skip,
    });
   // if (event.page.skip % 10 === 0) {
      this.setState(
        {
          pageNo: this.state.pageNo + 1,
        },
        () => {
          this.props.loading();
          this.props.fetchUsers(this.state.pageNo);
        }
      );
   // }
  };
  render() {
    return (
      <>
      {this.props.isloading && <Loader /> }
         {!this.props.isloading && (
      <div>    
<Grid
        style={{ height: "640px", }}
        rowHeight={40}
        data={
              this.props.users ? this.props.users.slice(
                this.state.skip,this.state.skip + 10
              ): null
        }
        pageSize={10}
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
  return {
    users: state.reducer.users,
    total: totalSelector(state),
    isloading: state.reducer.loading,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers())
//   }
// }
//, loadingData 
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(UsersList)
export default connect(mapStateToProps, { fetchUsers, loading })(UsersList);
