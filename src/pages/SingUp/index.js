import { Link } from "react-router-dom";

const SingUp = () => {
  return (
    <div className="container h-100 pt-5">
      <h1>Sing Up</h1>
      <div className="d-flex flex-column h-100">
        <form action="">
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password Confirmation</label>
            <input type="password" className="form-control" />
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

export default SingUp;
