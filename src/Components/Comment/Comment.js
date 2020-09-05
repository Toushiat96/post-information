import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        width:"30%",
        margin: "1%",
        float:"left",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
      
      
    },
    media: {
      height: 140,
    },
  });

const Comment = (props) => {
    
const{postId,name,email,body} = props.comments;
const classes = useStyles();
    return (
        <div>
      
       <Card className={classes.root}>
      <CardActionArea>
      <h2>Comments </h2>
        <CardContent>
       
        <Avatar alt="Cindy Baker" src="/static/images/avatar/1.jpg" />
          <Typography gutterBottom variant="h5" component="h2">
           <h3> ID :{postId}</h3> 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <h3>Title :{name}</h3> 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
    <h3> Email : {email}</h3> 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
    <p> Body : {body}</p> 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
           
        </div>
    );
};

export default Comment;