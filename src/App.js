import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SearchHeadHunter from "./Components/SearchHeadHunter";
import CreateHeadHunters from "./Components/CreateHeadHunters";
import HeaderComponent from "./Components/Header";
import NotFoundComponent from "./Components/NotFound";
import { createHeadHunter } from "./actions/HeadHuntersAction";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderComponent />

          <div className="MainWrapper">
            <Switch>
              <Route exact path="/" component={() => <SearchHeadHunter />} />
              <Route
                exact
                path="/addRecords"
                component={() => (
                  <CreateHeadHunters
                    onSave={data => this.props.createHeadHunter(data)}
                  />
                )}
              />
              <Route component={NotFoundComponent} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createHeadHunter: data => dispatch(createHeadHunter(data))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
