import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { actionSignIn } from "./SigninActions";

const Singin = (props) => {
  const { account, actionSignIn } = props;

  const submitHandler = (e) => {
    e.preventDefault();

    actionSignIn({ email: "teste@gmail.com", password: "123456" });
  };

  console.log("*** SingIn.account", account);

  return (
    <div className="container h-100 pt-5">
      <h1>Sing in</h1>
      <div className="d-flex flex-column h-100">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div>
            <button className="btn btn-primary btn-round">Enviar</button>
          </div>
        </form>
        <div className="container text-center fixed-bottom pb-5">
          <div className="text-muted">Dont have an Account ?</div>
          <Link to="/sing-up">Sing up</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { account: state.actionSignIn.account };
};
export default connect(mapStateToProps, { actionSignIn })(Singin);
