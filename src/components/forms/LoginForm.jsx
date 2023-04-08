import { Field, reduxForm } from "redux-form";

import { required } from "../../utils/validators/validator";
import { Element } from "./FormsControl/FormsControls";

const LoginForm = reduxForm({
  form: "login",
})((props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Name"
          name="login"
          component={Element}
          validate={[required]}
          elementType="input"
        />
      </div>
      <div>
        <Field
          placeholder="Password"
          name="password"
          component={Element}
          validate={[required]}
          elementType="input"
        />
      </div>
      <div>
        <Field
          type="checkbox"
          name="rememberMe"
          component={Element}
          validate={[required]}
          elementType="input"
        />
        Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
});

export default LoginForm;
