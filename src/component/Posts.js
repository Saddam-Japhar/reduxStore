import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../Actions";
import UserHeader from "./UserHeader";

class Posts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList(){
   return this.props.posts.map((post) => {
        return (
          <Box key={post.id} sx={{ bgcolor: "background.paper" }}> 
          <List >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={post.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {post.body}
                    </Typography>
                    <Typography component="span"
                      variant="body3">
                    <UserHeader userId={post.userId} />
                    </Typography>
                  </React.Fragment>
                }
             
              />
            </ListItem>
            
          </List>
          
          <Divider variant="inset" />
          </Box> 
        );
      });
  }
  

  render() {
    return <Box>{this.renderList()}</Box>;
  }
}
const mapStateToProps = (state) => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchPosts })(Posts);
