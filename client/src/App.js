import React ,{useEffect} from "react";
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import{getPosts} from './Actions/posts'

import memories from './assets/image/memories.png'

import Posts from "./Posts/Posts";
import Form from "./Form/Form";
import useStyles from './style'
const App = () => {
const classes = useStyles()
const dispatch = useDispatch()

useEffect(() => {
  dispatch(getPosts)
},[dispatch])

  return (
    <Container maxWidth='lg'>
      <AppBar  className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading } variant="h2" align="center">Memories</Typography>
        <img src={memories} alt="memories" height='60' className={classes.image} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid  container justifyContent="space-between" alignItems="stretch" spacing={3} >

            <Grid item xs={12} sm={7} >
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4} >
              <Form />
            </Grid>

          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};
export default App;
