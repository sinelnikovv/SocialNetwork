import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import s from "./ProfileData.module.scss";

// import err from "../forms/FormsControl/FormsControls.module.scss";
import facebook from "../../assets/img/facebook.svg";
import twitter from "../../assets/img/twitter.svg";
import github from "../../assets/img/github.svg";
import instagram from "../../assets/img/instagram.svg";
import mainLink from "../../assets/img/mainLink.svg";
import vk from "../../assets/img/vk.svg";
import website from "../../assets/img/website.svg";
import youtube from "../../assets/img/youtube.svg";


const ProfileDataForm = (props) => {

  const changeProfileSchema = yup.object().shape({
    fullName: yup
      .string("Name should be a string")    
      .min(2,"Name must have at least 2 letters"),
    
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: props.profile.fullName,
      aboutMe: props.profile.aboutMe,
      lookingForAJob: props.profile.lookingForAJob,
      lookingForAJobDescription: props.profile.lookingForAJobDescription,
      facebook: props.profile.contacts.facebook,
      github: props.profile.contacts.github,
      instagram: props.profile.contacts.instagram,
      mainLink: props.profile.contacts.mainLink,
      twitter: props.profile.contacts.twitter,
      vk: props.profile.contacts.vk,
      website: props.profile.contacts.website,
      youtube: props.profile.contacts.youtube,
    },
    resolver: yupResolver(changeProfileSchema),
    
  });

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <button>Save</button>

      <div>
        <label htmlFor="fullName">Your name</label>
        <input {...register("fullName")} name="fullName" id="fullName" placeholder="Full name" />
        {errors.fullName ? (
            <span>{errors.fullName.message}</span>
          ) : (
            <></>
          )}
      </div>

      <div>
        <label htmlFor="aboutMe">About me:</label>
        <input {...register("aboutMe")} name="aboutMe" id="aboutMe" placeholder={"About me"} />
      </div>

      <div>
        <label htmlFor="lookingForAJob">Looking For a job:</label>
        <input {...register("lookingForAJob")} name="lookingForAJob" id="lookingForAJob" type={"checkbox"} />
      </div>

      <div>
        <label htmlFor="lookingForAJobDescription">Skills:</label>
        <input {...register("lookingForAJobDescription")} name="lookingForAJobDescription" id="lookingForAJobDescription" placeholder={"My skills"} />
      </div>

      <div className={s.contacts_title}>
        My contacts:
        <div className={s.contacts}>
          <div className={s.contact}>
            <div className={s.logo}>
              <img src={facebook} alt="Facebook logo" />
            </div>
            <div className={s.contactItem}>
              <input
              {...register("facebook")}
                name="facebook"
                id="facebook"
                placeholder={"Facebook"}
              />
            </div>
          </div>

          <div className={s.contact}>
            <div className={s.logo}>
              <img src={github} alt="Github logo" />
            </div>
            <div className={s.contactItem}>
            <input
            {...register("github")}
                name="github"
                id="github"
                placeholder={"Github"}
              />              
            </div>
          </div>

          <div className={s.contact}>
            <div className={s.logo}>
              <img src={instagram} alt="Instagram logo" />
            </div>
            <div className={s.contactItem}>
            <input
            {...register("instagram")}
                name="instagram"
                id="instagram"
                placeholder={"Instagram"}
              />                   
            </div>
          </div>

          <div className={s.contact}>
            <div className={s.logo}>
              <img src={mainLink} alt="main link logo" />
            </div>
            <div className={s.contactItem}>              
              <input
              {...register("mainLink")}
                name="mainLink"
                id="mainLink"
                placeholder={"Main link"}
              />    
            </div>
          </div>

          <div className={s.contact}>
            <div className={s.logo}>
              <img src={twitter} alt="twitter logo" />
            </div>
            <div className={s.contactItem}>
            <input
            {...register("twitter")}
                name="twitter"
                id="twitter"
                placeholder={"Twitter"}
              />                
            </div>
          </div>

          <div className={s.contact}>
            <div className={s.logo}>
              <img src={vk} alt="vk logo" />
            </div>
            <div className={s.contactItem}>
            <input
            {...register("vk")}
                name="vk"
                id="vk"
                placeholder={"Vk"}
              />                
            </div>
          </div>

          <div className={s.contact}>
            <div className={s.logo}>
              <img src={website} alt="website logo" />
            </div>
            <div className={s.contactItem}>
            <input
            {...register("website")}
                name="website"
                id="website"
                placeholder={"Website"}
              />                   
            </div>
          </div>

          <div className={s.contact}>
            <div className={s.logo}>
              <img src={youtube} alt="youtube logo" />
            </div>
            <div className={s.contactItem}>
            <input
            {...register("youtube")}
                name="youtube"
                id="youtube"
                placeholder={"Youtube"}
              />              
            </div>
          </div>
        </div>
      </div>     
    </form>
  );
}

export default ProfileDataForm;
