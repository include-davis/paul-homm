import styles from "@/styles/components/committeeDescription/committeeDescription.module.scss"

/* add and import styles */
/* view and test it out by importing it to the respective page */
export default function CommitteeDescription({ props }) {
  const { title, desc } = props;
  return (
    <div className = {styles.wrapper}>
      <button className = {styles.button}>Click</button>
      <div className = {styles.content}>
        <h1>{title}</h1>
        <h2>{desc}</h2>
      </div>
    </div>
  );
}