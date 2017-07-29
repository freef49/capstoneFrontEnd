import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EventCard from './event/eventCard.js'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://brizzy-music.herokuapp.com/api/events/search/?genre=Rock'
    fetch(proxyUrl + targetUrl)
    .then(result=>result.json())
    .then(items=>this.setState({items}))
  }

  render() {
    const event1 = this.state.items[0] ? this.state.items[0] : 'Loading...';



    return (
      <div>
        <MuiThemeProvider>
          <EventCard image={event1.image}
          date={event1.date}
          title={event1.name}
          artist={event1.artist}
          link={event1.url}
        />
        </MuiThemeProvider>

      </div>

    );
  }
}

ReactDOM.render(
  <App/>, document.getElementById('root'));
