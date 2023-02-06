import { Switch, Route, NavLink, useParams, Redirect } from "react-router-dom";

const HomePage = () => (
  <>
    <h1>Home Page</h1>
    <NavLink to="/users">Users list</NavLink>
  </>
);
const UsersList = () => (
  <>
    <h1>Users List</h1>
    <NavLink to="/">Home Page</NavLink>
    <ul>
      {[...new Array(10)].map((el, i) => (
        <li key={`userId_${i}`}>
          <NavLink to={`/users/${++i}`}>User {i}</NavLink>
        </li>
      ))}
    </ul>
  </>
);
const UserEdit = () => {
  const { userId } = useParams();
  return (
    <>
      <h1>{`Edit USER: ${userId}`}</h1>
      <NavLink to="/users">Users List</NavLink> <br />
      <NavLink to={`/users/${userId}`}>User Profile</NavLink> <br />
      <NavLink to={`/users/${Number(userId) + 1}`}>Another User Page</NavLink>
    </>
  );
};
const UserProfile = () => {
  const { userId } = useParams();

  return (
    <>
      <h1>{`Profile USER: ${userId}`}</h1>
      <NavLink to="/users">Users List</NavLink>
      <br />
      <NavLink to={`/users/${userId}/profile/edit`}>Edit User</NavLink>
    </>
  );
};
const UsersLayout = () => {
  return (
    <Switch>
      <Route path="/users/:userId/profile/edit" component={UserEdit} />
      <Route path="/users/:userId/profile" component={UserProfile} />
      <Route path="/users" exact component={UsersList} />
      <Redirect from="/users/:userId" to="/users/:userId/profile" />
    </Switch>
  );
};

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/users" component={UsersLayout} />
      <Redirect to="/"/>
    </Switch>
  );
}

export default App;
