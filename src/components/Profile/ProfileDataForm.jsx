import { Field, reduxForm } from "redux-form";
import s from "./ProfileData.module.scss";
import { Element } from "../forms/FormsControl/FormsControls";
import err from "../forms/FormsControl/FormsControls.module.scss";
import facebook from "../../assets/img/facebook.svg";
import twitter from "../../assets/img/twitter.svg";
import github from "../../assets/img/github.svg";
import instagram from "../../assets/img/instagram.svg";
import mainLink from "../../assets/img/mainLink.svg";
import vk from "../../assets/img/vk.svg";
import website from "../../assets/img/website.svg";
import youtube from "../../assets/img/youtube.svg";

const ProfileDataForm = reduxForm({
  form: "editProfile",
})(({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <button>Save</button>

      <div className={s.status}>
        Full name:{" "}
        <Field
          placeholder={"Full name"}
          name={"fullName"}
          component={Element}
          elementType="input"
        />
      </div>

      <div>
        About me:
        <Field
          placeholder={"About me"}
          name={"aboutMe"}
          component={Element}
          elementType="input"
        />
      </div>

      <div>
        Looking For a job:
        <Field
          name={"lookingForAJob"}
          component={Element}
          elementType="input"
          type={"checkbox"}
        />
      </div>

      <div>
        Skills:
        <Field
          placeholder={"Skiils"}
          name={"lookingForAJobDescription"}
          component={Element}
          elementType="input"
        />
      </div>

      <div className={s.contacts_title}>
        My contacts:
        <div className={s.contacts}>
          <div className={s.contact}>
            <div className={s.logo}>
              <img src={facebook} alt="Facebook logo" />
            </div>
            <div className={s.contactItem}>
              <Field
                placeholder={"Facebook"}
                name={"contacts.facebook"}
                component={Element}
                elementType="input"
              />
            </div>
          </div>

          <div className={s.contact}>
            <div className={s.logo}>
              <img src={github} alt="Github logo" />
            </div>
            <div className={s.contactItem}>
              <Field
                placeholder={"Github"}
                name={"contacts.github"}
                component={Element}
                elementType="input"
              />
            </div>
          </div>

          <div className={s.contact}>
            <div className={s.logo}>
              <img src={instagram} alt="Instagram logo" />
            </div>
            <div className={s.contactItem}>
              <Field
                placeholder={"Instagram"}
                name={"contacts.instagram"}
                component={Element}
                elementType="input"
              />
            </div>
          </div>

          <div className={s.contact}>
            <div className={s.logo}>
              <img src={mainLink} alt="main link logo" />
            </div>
            <div className={s.contactItem}>
              <Field
                placeholder={"Main link"}
                name={"contacts.mainLink"}
                component={Element}
                elementType="input"
              />
            </div>
          </div>

          <div className={s.contact}>
            <div className={s.logo}>
              <img src={twitter} alt="twitter logo" />
            </div>
            <div className={s.contactItem}>
              <Field
                placeholder={"Twitter"}
                name={"contacts.twitter"}
                component={Element}
                elementType="input"
              />
            </div>
          </div>

          <div className={s.contact}>
            <div className={s.logo}>
              <img src={vk} alt="vk logo" />
            </div>
            <div className={s.contactItem}>
              <Field
                placeholder={"Vk"}
                name={"contacts.vk"}
                component={Element}
                elementType="input"
              />
            </div>
          </div>

          <div className={s.contact}>
            <div className={s.logo}>
              <img src={website} alt="website logo" />
            </div>
            <div className={s.contactItem}>
              <Field
                placeholder={"Website"}
                name={"contacts.website"}
                component={Element}
                elementType="input"
              />
            </div>
          </div>

          <div className={s.contact}>
            <div className={s.logo}>
              <img src={youtube} alt="youtube logo" />
            </div>
            <div className={s.contactItem}>
              <Field
                placeholder={"Youtube"}
                name={"contacts.youtube"}
                component={Element}
                elementType="input"
              />
            </div>
          </div>
        </div>
      </div>
      {error && <div className={err.formError}> {error}</div>}
    </form>
  );
});

export default ProfileDataForm;
