import { Box } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import {fetchUser} from "../Actions"


class UserHeader extends React.Component {
    componentDidMount(){
        this.props.fetchUser(this.props.userId)
    }
    render(){
       const {user} =this.props
        if(!user){
            return null;
        }
        return (
            <Box>
                {user.name}
            </Box>
        )
    }
}
const mapStateToProps =(state,ownProps)=>{
 return {
    user:state.users.find(user=>user.id===ownProps.userId)
 }
}
export default  connect(mapStateToProps, { fetchUser })(UserHeader)