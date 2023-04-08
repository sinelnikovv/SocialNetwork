import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../utils/validators/validator";
import { Element } from "./FormsControl/FormsControls";

const maxLength100 = maxLength(100);

const MessageForm = reduxForm({
  form: "newMessage",
})((props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="newMessage"
        component={Element}
        placeholder="Enter your message"
        cols="30"
        rows="5"
        validate={[required, maxLength100]}
        elementType="input"
      ></Field>
      <button>Add message</button>
    </form>
  );
});

export default MessageForm;
