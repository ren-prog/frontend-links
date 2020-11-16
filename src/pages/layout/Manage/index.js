import { connect } from "react-redux";

import { actionSignOut } from "../../../actions/AccountActions";

import { Redirect } from "react-router-dom";

const Layout = ({ children, actionSignOut, account }) => {
  if (!account) {
    return <Redirect to="/sign-in" />;
  }
  const signOutHandler = (e) => {
    e.preventdefault();
    actionSignOut();
  };

  return (
    <div className="layout">
      <nav className="navbar navbar-expand-lg bg-primary text-align">
        <div className="container d-flex w-100 justify-content-between ">
          <div>
            <span>Volta</span>
          </div>
          <div className="text-center">
            <strong>Links</strong>
          </div>
          <div>
            <button onClick={signOutHandler}>Exit</button>
          </div>
        </div>
      </nav>
      <div className="container">{children}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { account: state.account.account };
};
export default connect(mapStateToProps, { actionSignOut })(Layout);
