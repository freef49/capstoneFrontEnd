import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import EventCard from './event/eventCard.js'
import DetailedPage from './details/detailedPage.js';
import Search from './searchPage/search.js'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      search: ''
    };

  }
  componentDidMount() {


  }



  componentDidUpdate(){
    //WARNING THIS WILL CALL OVER AND OVER AGAIN AFTER A SEARCH IS MADE.
    //need to pull the last set state, that is what is causing the loop

    let searchState = this.state.search;
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    let targetUrl = 'https://brizzy-music.herokuapp.com/api/events/search/?genre=' + searchState;

    fetch(proxyUrl + targetUrl)
    .then(result=>result.json())
    //.then(items=>capturedJson = items)
    .then(items=>this.setState({items}))
  }

  handleChange(event) {
    this.setState({search: event.target.value});
    event.preventDefault();
  }

  render() {
    const event1 = this.state.items[0] ? this.state.items[0] : 'Loading...';

    return (
      <div>
        {/* Search */}
        <div>
          <MuiThemeProvider>
            <Search value={this.state.value} onChangeValue={this.handleChange.bind(this)}/>
          </MuiThemeProvider>
        </div>

        {/* Event card */}
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

        {/* Detailed Page */}
        {/* <div>
          <MuiThemeProvider>
            <DetailedPage
            title={event1.name}
            genre={event1.genres}
            image={event1.image}
            date={event1.date}
            link={event1.url}
            venue={event1.venue}
            description={event1.description}
          />
          </MuiThemeProvider>
        </div> */}

      </div>

    );
  }
}

ReactDOM.render(
  <App/>, document.getElementById('root'));
