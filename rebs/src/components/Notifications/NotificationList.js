import React from 'react'
import NotificationCard from './NotificationCard';
import { Link } from 'react-router-dom';

class NotificationList extends React.Component {
  state={
    notifications: null,
    count: 3
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URI}/notifications`)
    .then(res => res.json())
    .then(notifications => {
      this.setState({
        notifications
      })
    })
  }

  render(){
    const notifications = this.state.notifications
    if(!notifications){
      return <h1>No New Notifications</h1>
    }
    const cards = notifications.slice(0,2)
    return(
      <div className="container">
        <div className="fetch">
        
          {
            cards.map(singleNotification =>{
              return<NotificationCard key={singleNotification._id} singleNotification={singleNotification} />
            })
          }
        </div>
      </div>
    )
  } 

}

export default NotificationList