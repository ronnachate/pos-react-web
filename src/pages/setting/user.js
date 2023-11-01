import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Sidebar from '../../components/Sidebar';
import Nav from 'react-bootstrap/Nav';

import './user.css';

const UserRow = ({ users }) => {
  return (
    <>
      {users.map((user, i) => (
        <tr key={i} className="align-middle">
          <td>{i}</td>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>
            {user.firstname} {user.lastname}
          </td>
        </tr>
      ))}
    </>
  );
};

const TableUser = ({ users }) => {
  return (
    <>
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User ID</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          <UserRow users={users} />
        </tbody>
      </table>
    </>
  );
};

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: MOCK_USERS };
  }
  componentDidMount() {}

  render() {
    return (
      <>
        <Helmet>
          <title>User list</title>
        </Helmet>
        <div className="row user-container bg-light ">
          <Nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block sidebar collapse"
          >
            <Sidebar menuItems={MENU_ITEMS} />
          </Nav>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="container-fluid">
              <div className="d-flex justify-content-end flex-wrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group me-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <TableUser users={this.state.users} />
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default User;

const MOCK_USERS = [
  {
    id: 'uid:1',
    username: 'admin',
    email: 'johone@do.com',
    password: 'qwerty',
    firstname: 'John',
    lastname: 'Doe',
  },
  {
    id: 'uid:2',
    username: 'jane',
    email: 'jane@do.com',
    password: '12345',
    firstname: 'Jane',
    lastname: 'Doe',
  },
];

const MENU_ITEMS = [
  { path: '/setting/users', title: 'Users', icon: 'bi-people' },
  {
    path: '/setting/payment-methods',
    title: 'Payment Channels',
    icon: 'bi-wallet2',
  },
];
