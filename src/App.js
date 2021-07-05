import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Views
import AppHome from "views/AppHome";
import CreateUser from "views/CreateUser";
import EditUser from "views/EditUser";
import NotFound from "views/NotFound";
import UserAlert from "components/UserAlert";
import AppHeader from "components/AppHeader";

// Styles
import "scss/paper.min.css";
import "./scss/style.scss";

// Redux Actions on load
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "redux/actionCreators";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const alert = useSelector((store) => store.alert);
  return (
    <div className="App">
      <Router>
        <>
          {alert.show && <UserAlert alert={alert} />}
          <AppHeader />
          <div className="container container--custom paper">
            <Switch>
              <Route exact path="/" component={AppHome} />
              <Route exact path="/user/create" component={CreateUser} />
              <Route exact path="/user/edit/:id" component={EditUser} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </>
      </Router>
    </div>
  );
}

export default App;
