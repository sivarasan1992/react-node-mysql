import React, { Component } from "react";
import { connect } from "react-redux";
import "./SearchHunter.css";
import {
  fetchPeopleRecords
} from "../actions/HeadHuntersAction";

class SearchHeadHunter extends Component {
  componentDidMount(){
    this.props.fetchPeopleRecords();
  };
  render() {
    return (
      <div className="results">
        <div className="result tableHeader">
          <div className="span1"><h3>Name</h3></div>
          <div className="span1"><h3>Mobile No</h3></div>
          <div className="span1"><h3>Email</h3></div>
          <div className="span1"><h3>No of SE</h3></div>
          <div className="span1"><h3>No of QA</h3></div>
          <div className="span1"><h3>Cost</h3></div>
        </div>
        {this.props.headHunders.headHunders &&
          this.props.headHunders.headHunders.length > 0 &&
          this.props.headHunders.headHunders.map((item, i) => {
            return (
              <div className="result tableHeader" key={i}>
                <div className="span1">{item.name}</div>
                <div className="span1">{item.mobile}</div>
                <div className="span1">{item.email}</div>
                <div className="span1">{item.noOfSE}</div>
                <div className="span1">{item.noOfQA}</div>
                <div className="span1">
                  {item.noOfSE * 150 +
                    item.noOfQA * 100 +
                    Math.floor((item.noOfSE + item.noOfQA) / 5) * 50}
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  headHunders: state.headHunders
});
const mapDispatchToProps = dispatch => ({
  fetchPeopleRecords: () => dispatch(fetchPeopleRecords())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchHeadHunter);
