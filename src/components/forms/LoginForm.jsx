import { Field, reduxForm } from "redux-form";
import s from "./FormsControl/FormsControls.module.scss";
import { required } from "../../utils/validators/validator";
import { Element } from "./FormsControl/FormsControls";

const LoginForm = reduxForm({
  form: "login",
})(({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          component={Element}
          validate={[required]}
          elementType="input"
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          component={Element}
          validate={[required]}
          elementType="input"
          type={"password"}
        />
      </div>
      <div>
        <Field
          type={"checkbox"}
          name={"rememberMe"}
          component={Element}
          elementType="input"
        />
        Remember me
      </div>
      {captchaUrl && (
        <div>
          <img src={captchaUrl} />
          <Field
            placeholder={"Symbols from image"}
            name={"captcha"}
            component={Element}
            validate={[required]}
            elementType="input"
          />
        </div>
      )}
      {error && <div className={s.formError}> {error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
});

export default LoginForm;
