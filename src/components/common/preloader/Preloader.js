import React, { useState,  useEffect } from "react";
import preloader from "../../../assets/img/preloader.svg";
import styles from "./Preloader.module.scss"

const Preloader = () => {

  const [isShowen, setIsShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const component = <div className={styles.preloader}>      
  <img src={preloader} alt="Loader"/></div>

  return isShowen && component
  ;
};
export default Preloader;
