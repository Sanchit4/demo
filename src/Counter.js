import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "./CounterControl";
import CounterOutput from "./CounterOutput";
import * as actionTypes from "./store/actions";
import "./Counter.css";

class Counter extends Component {
  render() {
    console.log(this.props, "the props");
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <hr />
        <div className="backcolor">
          <CounterControl label="Increment" clicked={this.props.onIncCounter} />
          <CounterControl label="Decrement" clicked={this.props.onDecCounter} />
          <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
          <CounterControl
            label="Subtract 10"
            clicked={this.props.onSubCounter}
          />
        </div>
        <hr />
        <button
          className="btnResult"
          onClick={() => this.props.onStoreResult(this.props.ctr)}
        >
          STORE RESULT{" "}
        </button>
        <button className="btnReset" onClick={this.props.onResetResult}>
          RESET COUNTER
        </button>
        <button className="btnReset" onClick={this.props.onClearResult}>
          RESET RESULT
        </button>
        <br />
        <ul>
          {this.props.storedResults.map(strResult => (
            <li
              key={strResult.id}
              onClick={() => this.props.onDeleteResult(strResult.id)}
            >
              {strResult.value}
            </li>
          ))}
          {console.log(this.props.storedResults)}
        </ul>
      </div>
    );
  }
}

let mapStateToProps = state => {
  console.log(state, "teh state value,redux");
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncCounter: () => dispatch({ type: actionTypes.INC }),
    onDecCounter: () => dispatch({ type: actionTypes.DEC }),
    onAddCounter: () => dispatch({ type: actionTypes.ADD, val: 10 }),
    onSubCounter: () => dispatch({ type: actionTypes.SUB, val: 10 }),
    onStoreResult: result =>
      dispatch({ type: actionTypes.STORE_RESULT, result: result }),
    onDeleteResult: id =>
      dispatch({ type: actionTypes.DEL_RESULT, resultELid: id }),
    onResetResult: () => dispatch({ type: "RESET" }),
    onClearResult: () => dispatch({ type: "CLEAR" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
