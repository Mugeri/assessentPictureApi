import React from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import request from 'superagent';

export default class Home extends React.Component(){
  constructor(props) {
    super(props);
    this.state = {
      photos: {},
      editedPhoto: {}
    }
  }
  componentDidMount () {
    request
    .get('/api/data')
    .end((err, res) => {
      console.log(res);
      this.setState({
        photos: res.body,
      })
    })
  }
  render() {
    let photos = this.state.photos((photo) => {
      return (<ListItem> {photo}</ListItem>)
    })
    return (
      <Paper>
      <List>
        {photos}
      </List>
      </Paper>
    )
  }
}
