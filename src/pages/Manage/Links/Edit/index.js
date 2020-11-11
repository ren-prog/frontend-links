// import { Link } from "react-router-dom";

import Layout from "../../../layout/Manage/index";

const Edit = () => {
  return (
    <Layout>
      <h1>Edit link</h1>
      <div className="container h-100 pt-5">
        <form>
          <div className="form-group">
            <label>Label</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Url</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group form-check">
            <label className="form-check-label">
              <input type="checkbox" name="isSocial" />
              <span className="form-check-sing"></span>
              Is Social
            </label>
          </div>
          <div>
            <button className="btn btn-primary btn-round">Enviar</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Edit;
