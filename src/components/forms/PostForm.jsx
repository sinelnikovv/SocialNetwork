import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../utils/validators/validator";
import { Element } from "./FormsControl/FormsControls";

const maxLength10 = maxLength(10);

const PostForm = reduxForm({
  form: "newPost",
})((props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="newPost"
        component={Element}
        placeholder="Enter your post"
        cols="50"
        rows="5"
        validate={[required, maxLength10]}
        elementType="textarea"
      />
      <button>Add post</button>
    </form>
  );
});

export default PostForm;
