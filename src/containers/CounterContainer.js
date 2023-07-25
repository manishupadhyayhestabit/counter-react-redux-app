import { connect } from "react-redux";
import Counter from "../Components/Counter";
import { decrementHandler, incrementHandler } from "../services/actions";


const mapStateToProps = (state) => {
    return {
      count: state.counter.count
    };
  };

export default connect(mapStateToProps, {incrementHandler, decrementHandler})(Counter);