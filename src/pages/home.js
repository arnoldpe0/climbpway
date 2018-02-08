import React, { Component } from 'react';
import Typography from 'material-ui/Typography';

import withAuthorization from '../components/Session/withAuthorization';
import { db } from '../firebase';

const fromObjectToList = (object) =>
  object
    ? Object.keys(object).map(key => ({ ...object[key], index: key }))
    : [];

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: fromObjectToList(snapshot.val()) }))
    );
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <Typography variant="display1" gutterBottom>
        Home
      </Typography>
      <Typography variant="caption" gutterBottom>
      All content will go here, maps routes, areas.
      </Typography>

        { !!users.length && <UserList users={users} /> }
      </div>
    );
  }
}

const UserList = ({ users }) =>
  <div>
    <Typography variant="body2" gutterBottom>
    Test Firebase Data - UID's
      </Typography>
    {users.map(user =>
      <div key={user.index}>{user.index}</div>
    )}
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);