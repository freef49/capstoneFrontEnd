import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


export class EventButton extends React.Component {

  render() {
  return(
    <a href={this.props.link}>
        <RaisedButton
          label="Learn More..."
          primary={true}

        />
      </a>
  );

}}


export default EventButton;
