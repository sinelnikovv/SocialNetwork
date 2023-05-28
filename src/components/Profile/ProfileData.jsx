import facebook from "../../assets/img/facebook.svg";
import twitter from "../../assets/img/twitter.svg";
import github from "../../assets/img/github.svg";
import instagram from "../../assets/img/instagram.svg";
import mainLink from "../../assets/img/mainLink.svg";
import vk from "../../assets/img/vk.svg";
import website from "../../assets/img/website.svg";
import youtube from "../../assets/img/youtube.svg";
import s from "./ProfileData.module.scss";

const ProfileData = (props) => {
  return (
    <>
      {props.isOwner && <button onClick={props.goToEditMode}>Edit</button>}
      <div className={s.status}>About me: {props.profile.aboutMe}</div>
      <div>
        Looking For a job:
        <input
          type="checkbox"
          name="job"
          id="job"
          checked={props.profile.lookingForAJob}
          disabled
        />
      </div>
      {props.profile.lookingForAJob && (
        <div>
          Skills:
          <div>{props.profile.lookingForAJobDescription}</div>
        </div>
      )}

      {Object.values(props.profile.contacts).some((elem) => elem !== null) && (
        <div className={s.contacts_title}>
          My contacts:
          <div className={s.contacts}>
            {props.profile.contacts.facebook && (
              <a href={props.profile.contacts.facebook} className={s.contact}>
                <div className={s.logo}>
                  <img src={facebook} alt="Facebook logo" />
                </div>
                <div className={s.contactItem}>
                  {props.profile.contacts.facebook}
                </div>
              </a>
            )}

            {props.profile.contacts.github && (
              <a href={props.profile.contacts.github} className={s.contact}>
                <div className={s.logo}>
                  <img src={github} alt="Github logo" />
                </div>
                <div className={s.contactItem}>
                  {props.profile.contacts.github}
                </div>
              </a>
            )}

            {props.profile.contacts.instagram && (
              <a href={props.profile.contacts.instagram} className={s.contact}>
                <div className={s.logo}>
                  <img src={instagram} alt="Instagram logo" />
                </div>
                <div className={s.contactItem}>
                  {props.profile.contacts.instagram}
                </div>
              </a>
            )}

            {props.profile.contacts.mainLink && (
              <a href={props.profile.contacts.mainLink} className={s.contact}>
                <div className={s.logo}>
                  <img src={mainLink} alt="main link logo" />
                </div>
                <div className={s.contactItem}>
                  {props.profile.contacts.mainLink}
                </div>
              </a>
            )}

            {props.profile.contacts.twitter && (
              <a href={props.profile.contacts.twitter} className={s.contact}>
                <div className={s.logo}>
                  <img src={twitter} alt="twitter logo" />
                </div>
                <div className={s.contactItem}>
                  {props.profile.contacts.twitter}
                </div>
              </a>
            )}

            {props.profile.contacts.vk && (
              <a href={props.profile.contacts.vk} className={s.contact}>
                <div className={s.logo}>
                  <img src={vk} alt="vk logo" />
                </div>
                <div className={s.contactItem}>{props.profile.contacts.vk}</div>
              </a>
            )}

            {props.profile.contacts.website && (
              <a className={s.contact} href={props.profile.contacts.website}>
                <div className={s.logo}>
                  <img src={website} alt="website logo" />
                </div>
                <div className={s.contactItem}>
                  {props.profile.contacts.website}
                </div>
              </a>
            )}

            {props.profile.contacts.youtube && (
              <a className={s.contact} href={props.profile.contacts.youtube}>
                <div className={s.logo}>
                  <img src={youtube} alt="youtube logo" />
                </div>
                <div className={s.contactItem}>
                  {props.profile.contacts.youtube}
                </div>
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileData;
