import React from "react";
import { connect } from "react-redux";
import Page from "../components/Page";
import { setEvent } from "../libs/actions";

class PageContainer extends React.Component {
  render() {
    // eslint-disable-next-line
    const { page, setEvent } = this.props;
    return <Page event={page.event} setEvent={setEvent} />;
  }
}

const mapStateToProps = store => {
  return {
    page: store.page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setEvent: event => dispatch(setEvent(event))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer);
