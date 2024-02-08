import styles from "@/styles/components/committeeDescription/committeeDescription.module.scss"
import { IoArrowBack } from "react-icons/io5";
/* add and import styles */
/* view and test it out by importing it to the respective page */
export default function CommitteeDescription({ props }) {
  const { title, desc } = props;
  return (
    <div className = {styles.wrapper}>
      <div className = {styles.buttonClass}>
        <a href="@/pages/committees/index.jsx" className = {styles.linkStyle}>
          <button className = {styles.button}><IoArrowBack /><p>Back to committees</p></button> 
          </a>
      </div>
      <div className = {styles.content}>
        <h1>{title}</h1>
        <h2>{desc}</h2>
      </div>
    </div>
  );
}