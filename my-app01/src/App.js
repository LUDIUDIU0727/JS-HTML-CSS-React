import { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {
  const [userList, setUserList] = useState([]);
  const addUsersHandler = (uName, uAge) => {
    setUserList(
      (prevUserList) => {
        return [...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
        ];
      })

  }
  return (
    <div>
      <AddUser onAddUser={addUsersHandler} />
      <UsersList users={userList} />


    </div>
  );
}

export default App;
