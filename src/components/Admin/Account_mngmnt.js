import React, { useState, useEffect } from 'react';
import './design/account_mngmnt.css';
import Navbar from './Navbar';
import { MdDelete } from 'react-icons/md';
import { BiSolidPencil } from 'react-icons/bi';
import { IoRadioButtonOn, IoEye } from 'react-icons/io5';
import { database } from './AdminFirebase';

const Account_mngmnt = () => {
  const [editMessage, setEditMessage] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');
  const [selectedEditAction, setSelectedEditAction] = useState({});
  const [userStatus, setUserStatus] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showUserProfileModal, setShowUserProfileModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [validationError, setValidationError] = useState(null);
  const [editUser, setEditUser] = useState(null);
  const [userData, setUserData] = useState([]); // State to store user data from the database

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await database.ref('UserData').once('value');
        const data = snapshot.val();
        console.log('Fetched data:', data); // Log the fetched data
        if (data) {
          // Convert the object of users into an array of users
          const usersArray = Object.keys(data).map(userId => ({
            userId, // Include the userId in the user object
            ...data[userId], // Spread the user data
          }));
          setUserData(usersArray);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
  
    fetchData();
  }, []);

  const handleEditClick = (user) => {
    setEditUser(user);
    setShowAddUserModal(true);
    setNewUser({
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      password: user.password,
      confirmPassword: user.password,
    });
  };

  const handleDeleteClick = async (username) => {
    if (window.confirm(`Are you sure you want to delete user ${username}?`)) {
      setDeleteMessage(`Deleting user ${username}...`);
      try {
        // Delete user from the database
        await database.ref(`UserData/${username}`).remove();
        setDeleteMessage(`User ${username} deleted successfully!`);
        // Clear the message after 1 second
        setTimeout(() => {
          setDeleteMessage('');
        }, 1000);
      } catch (error) {
        console.error('Error deleting user:', error.message);
      }
    }
  };

  const handleStatusToggle = (username) => {
    if (window.confirm(`Are you sure you want to change the status for user ${username}?`)) {
      setUserStatus((prevStatus) => ({
        ...prevStatus,
        [username]: prevStatus[username] === 'active' ? 'restricted' : 'active',
      }));
    }
  };

  const handleUserProfileClick = (user) => {
    setSelectedUser(user);
    setShowUserProfileModal(true);
  };

  const handleAddUserClick = () => {
    setShowAddUserModal(true);
    setEditUser(null);
  };

  const validateUser = () => {
    // Change the regex to allow spaces in the first name
    const nameRegex = /^[A-Z][a-zA-Z\s]{0,69}$/;
    const passwordRegex = /.{6,}/;

    if (!nameRegex.test(newUser.firstName)) {
      setValidationError('Invalid First name');
      return false;
    }

    if (!nameRegex.test(newUser.lastName)) {
      setValidationError('Invalid Last name');
      return false;
    }

    if (newUser.username.trim() === '') {
      setValidationError('Username cannot be empty.');
      return false;
    }

    if (!editUser && userData.some((user) => user.username === newUser.username)) {
      setValidationError('Username is already taken.');
      return false;
    }

    if (!passwordRegex.test(newUser.password)) {
      setValidationError('Password must be at least 6 characters.');
      return false;
    }

    if (newUser.password !== newUser.confirmPassword) {
      setValidationError('Passwords do not match.');
      return false;
    }

    return true;
  };

  const handleSaveUser = async () => {
    if (validateUser()) {
      if (editUser) {
        // Update existing user
        const updatedUsers = userData.map((user) =>
          user.username === editUser.username ? { ...user, ...newUser } : user
        );
        setUserData(updatedUsers);

        try {
          // Update user in the database
          await database.ref(`UserData/${editUser.username}`).set(newUser);
          setEditMessage('User updated successfully!');
          // Clear the message after 1 second
          setTimeout(() => {
            setEditMessage('');
          }, 1000);
        } catch (error) {
          console.error('Error updating user:', error.message);
        }
      } else {
        // Add new user
        const newUserKey = newUser.username;
        setUserData([...userData, newUser]);

        try {
          // Add new user to the database
          await database.ref(`UserData/${newUserKey}`).set(newUser);
          setEditMessage('User added successfully!');
          // Clear the message after 1 second
          setTimeout(() => {
            setEditMessage('');
          }, 1000);
        } catch (error) {
          console.error('Error adding user:', error.message);
        }
      }

      setNewUser({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
      });
      setShowAddUserModal(false);
      setEditUser(null);
      setValidationError(null);
    }
  };

  const handleModalInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const filteredUserData = userData.filter((user) =>
    `${user.firstName} ${user.lastName} ${user.username}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='acc'>
      <Navbar />
      <div className='body'>
        <div className='texts'>
          <h1>Account MANAGEMENT</h1>

          <div className='search-bar'>
            <div className='search-input'>
              <input
                type='text'
                placeholder='Search...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className='add-user-btn' onClick={handleAddUserClick}>
              Add User
            </button>
          </div>

          <div className='table-container'>
            <div className='fixed-header'>
              <table>
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Phone Number</th>
                    <th>Role</th>
                    <th>Action</th>
                    <th>Status</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className='scrollable-table'>
              <table>
                <tbody>
                  {filteredUserData.map((user, index) => (
                    <tr key={index}>
                      <td>{`${user.firstName} ${user.lastName}`}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                      <td>{user.phoneNumber}</td>
                      <td>{user.role}</td>
                      <td>
                        <div className='action-container'>
                          <div className='action-btn-container'>
                            <button
                              className='action-btn edit'
                              onClick={() => handleEditClick(user)}
                            >
                              <BiSolidPencil />
                            </button>
                            <button
                              className='action-btn delete'
                              onClick={() => handleDeleteClick(user.username)}
                            >
                              <MdDelete />
                            </button>
                            <button
                              className='action-btn view-profile'
                              onClick={() => handleUserProfileClick(user)}
                            >
                              <IoEye style={{ color: 'white' }} />
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <button
                          className={`status-btn ${userStatus[user.username] === 'active' ? 'active' : ''}`}
                          onClick={() => handleStatusToggle(user.username)}
                        >
                          <IoRadioButtonOn />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {editMessage && <p>{editMessage}</p>}
            {deleteMessage && <p>{deleteMessage}</p>}
          </div>
        </div>
      </div>

      {showAddUserModal && (
        <div className='add-user-modal'>
          <div className='modal-content'>
            <span className='close' onClick={() => setShowAddUserModal(false)}>
              &times;
            </span>
            <h2>{editUser ? 'Edit User' : 'Add User'}</h2>
            {validationError && (
              <div className='validation-error'>
                {validationError}
              </div>
            )}
            <label>
              First Name:
              <input
                type='text'
                name='firstName'
                value={newUser.firstName}
                onChange={handleModalInputChange}
                className={validationError && !newUser.firstName.trim() ? 'invalid' : ''}
              />
            </label>
            <label>
              Last Name:
              <input
                type='text'
                name='lastName'
                value={newUser.lastName}
                onChange={handleModalInputChange}
                className={validationError && !newUser.lastName.trim() ? 'invalid' : ''}
              />
            </label>
            <label>
              Username:
              <input
                type='text'
                name='username'
                value={newUser.username}
                onChange={handleModalInputChange}
                className={validationError && !newUser.username.trim() ? 'invalid' : ''}
              />
            </label>
            <label>
              Password:
              <input
                type='password'
                name='password'
                value={newUser.password}
                onChange={handleModalInputChange}
                className={validationError && !newUser.password.trim() ? 'invalid' : ''}
              />
            </label>
            <label>
              Confirm Password:
              <input
                type='password'
                name='confirmPassword'
                value={newUser.confirmPassword}
                onChange={handleModalInputChange}
                className={validationError && newUser.password !== newUser.confirmPassword ? 'invalid' : ''}
              />
            </label>
            <button onClick={handleSaveUser}>Save</button>
          </div>
        </div>
      )}

      {showUserProfileModal && selectedUser && (
        <div className='add-user-modal'>
          <div className='modal-content'>
            <span className='close' onClick={() => setShowUserProfileModal(false)}>
              &times;
            </span>
            <h2>User Profile</h2>
            <label>
              First Name: {selectedUser.firstName}
            </label>
            <label>
              Last Name: {selectedUser.lastName}
            </label>
            <label>
              Username: {selectedUser.username}
            </label>
            <label>
              Status: {userStatus[selectedUser.username] === 'active' ? 'Restricted' : 'Active'}
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account_mngmnt;
