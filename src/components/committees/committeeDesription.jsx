/* add and import styles */
/* view and test it out by importing it to the respective page */
export default function CommitteeDescription({ props }) {
  const { title, desc } = props;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{desc}</h2>
    </div>
  );
}