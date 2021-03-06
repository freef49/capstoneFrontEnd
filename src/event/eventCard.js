import React from 'react';
import Paper from 'material-ui/Paper';
import Image from './eventCardImage.js';
import Date from './eventCardDate.js';
import Title from './eventCardTitle.js';
import Artist from './eventCardArtist.js';
import EventButton from './eventCardButton.js';

class EventCard extends React.Component {
  render() {
    const style = {
      height: 250,
      width: 250,
      margin: 20,
      padding: "10px 20px",
      textAlign: 'center',
      display: 'inline-block',
    }

    return(
      <Paper style={style} zDepth={3} >
        <Image image={this.props.image}/>
        <Date date={this.props.date} />
        <Title name={this.props.title} />
        <Artist artist={this.props.artist} />
        <EventButton link={this.props.link} />
      </Paper>
    );
  }
}

export default EventCard;
