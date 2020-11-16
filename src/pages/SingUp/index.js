import { Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { actionSignUp } from "./SignUpActions";

const SingUp = (props) => {
  const { actionSignUp, account } = props;

  const submitHandle = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log("*** Sign-up submitHandle.data", data);
    actionSignUp(data);
  };

  if (account) {
    return <Redirect to="/manage/links" />;
  }
  return (
    <div className="container h-100 pt-5">
      <h1>Sing Up</h1>
      <div className="d-flex flex-column h-100">
        <form onSubmit={submitHandle}>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="text" className="form-control" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" name="password" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password Confirmation</label>
            <input
              type="password"
              className="form-control"
              name="password_confirmation"
            />
          </div>
          <div>
            <button className="btn btn-primary btn-round">Cadastrar</button>
          </div>
        </form>
        <div className="container text-center fixed-bottom pb-5">
          <div className="text-muted">Already have an Account ?</div>
          <Link to="/sing-in">Sing in</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { account: state.actionSignUp.account };
};
export default connect(mapStateToProps, { actionSignUp })(SingUp);
