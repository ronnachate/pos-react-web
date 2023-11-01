import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from '../../components/Sidebar';
import Nav from 'react-bootstrap/Nav';
import { Button, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

import './user.css';

const UserRow = ({ users }) => {
  return (
    <>
      {users.map((user, i) => (
        <tr key={i} className="align-middle">
          <td>{i + 1}</td>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>
            {user.name} {user.lastname}
          </td>
        </tr>
      ))}
    </>
  );
};

const TableUser = ({ users }) => {
  return (
    <>
      <Table className="table table-striped table-sm">
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
      </Table>
    </>
  );
};

const FilterArea = () => {
  return (
    <>
      <div className="d-flex justify-content-end flex-wrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <Button type="button" variant="success" className="btn btn-sm">
              Create
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const User = () => {
  const [users, setUsers] = useState([]);

  const { getUsers } = useAuth();

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const resultset = await getUsers();
        if (isMounted) {
          setUsers(resultset.items);
        }
      } catch (err) {
        alert(`failed to load users: ${err}`);
      }
    })();

    // Cleanup callback as the component unmounts.
    return () => {
      isMounted = false;
    };
  }, []);

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
            <FilterArea />
            <div className="table-responsive">
              <TableUser users={users} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default User;

const MENU_ITEMS = [
  { path: '/setting/users', title: 'Users', icon: 'bi-people' },
  {
    path: '/setting/payment-methods',
    title: 'Payment Channels',
    icon: 'bi-wallet2',
  },
];
