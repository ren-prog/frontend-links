import { Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import { actionSignIn } from "../../actions/AccountActions";

const Singin = (props) => {
  const { actionSignIn, account } = props;

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    actionSignIn(data);
  };

  console.log("*** SingIn.account", account);

  if (account) {
    return <Redirect to="/manage/links" />;
  }

  return (
    <div className="container h-100 pt-5">
      <h1>Sing in</h1>
      <div className="d-flex flex-column h-100">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="text" className="form-control" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" name="password" />
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
  return { account: state.account.account };
};
export default connect(mapStateToProps, { actionSignIn })(Singin);
