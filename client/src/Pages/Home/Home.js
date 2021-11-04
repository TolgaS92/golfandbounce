import React from 'react';
import Main from '../../components/Main/Main';
import './style.css';
import Calendly from '../../components/Calendly';

export default function Home() {
    /* let gapi = window.gapi

    let CLIENT_ID = process.env.REACT_APP_CLIENT_ID
    let API_KEY = process.env.REACT_APP_API_KEY
    let DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    let SCOPES = "https://www.googleapis.com/auth/calendar.events"

    const handleClick = () => {
        gapi.load('client:auth2', () => {
            console.log('client loading')
      
            gapi.client.init({
              apiKey: API_KEY,
              clientId: CLIENT_ID,
              discoveryDocs: DISCOVERY_DOCS,
              scope: SCOPES,
        })
        gapi.client.load('calendar', 'v3', () => console.log('logged!'))

        gapi.auth2.getAuthInstance().signIn()
        .then(() => {
        let event = {
            'summary': 'Inside Flatiron Crossing Mall (Next to California Pizza Kitchen)',
            'location': '1 West Flatiron Crossing Dr. #1122, Broomfield, CO 80021',
            'description': 'Birthday Party',
            'start': {
              'dateTime': '2021-11-05T09:00:00-07:00',
              'timeZone': 'America/Denver'
            },
            'end': {
              'dateTime': '2021-11-05T17:00:00-07:00',
              'timeZone': 'America/Denver'
            },
            'recurrence': [
              'RRULE:FREQ=DAILY;COUNT=1'
            ],
            'attendees': [
              {'email': 'lpage@example.com'},
              {'email': 'sbrin@example.com'}
            ],
            'reminders': {
              'useDefault': false,
              'overrides': [
                {'method': 'email', 'minutes': 24 * 60},
                {'method': 'popup', 'minutes': 10}
              ]
            }
          };
          var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event
          });
          
          request.execute(function(event) {
            window.open(event.htmlLink);
          });
        })
    })
    } */
    return (
      <div className="mt-5 pt-5">
      <section>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-9 text-center">
                  <h2 className="text-center mt-0 about text-danger">We Are Open!</h2>
                  {/* <button onClick={handleClick} className="grow btn btn-primary">Book a Birthday Party!</button> */}
                  <div className="btn-group">
                    <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                      <span className="text">Book a Birthday Party!</span>
                    </button>
                    <div className="dropdown-menu">
                      <button className="dropdown-item" ><Calendly /></button>
                    </div>
                  </div>
              </div>
          </div>
      </div>
      </section>
      <Main className="align-content-sm-center" />
      </div>
    )
}
