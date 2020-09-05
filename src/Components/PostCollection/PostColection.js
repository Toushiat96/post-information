import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './PostColection.css'

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

const PostColection = (props) => {
const {id,title,body} =props.post;

const history = useHistory();

const handleclick = (id) =>{
  const url =`/postDetail/${id}`;
  history.push(url)
}

const classes = useStyles();
return (
        <div className="post-show col-md-6">
           <Card className={classes.root}>
      <CardActionArea>
        
        <CardContent className="col-md-4">
          <Typography gutterBottom variant="h5" component="h2">
           <h3> ID :{id}</h3> 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <h3>Title :{title}</h3> 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <p></p> 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {/* <Link to={`/postDetail/${id}`}>Show More </Link> */}
      <Button variant="contained" color="secondary" onClick={() => handleclick(id)}>
  Show More 
</Button>
      </CardActions>
    </Card>
    
        </div>
    );
};

export default PostColection;