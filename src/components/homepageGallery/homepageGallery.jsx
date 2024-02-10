import styles from "@/styles/components/homepageGallery/homepageGallery.module.scss";

export default function HomepageGallery() { //animation will be done in css, but this component rerenders if specific image is clicked and it restarts the animation from that image
  return (
    <div className={styles.container}>
      <h1>Howdy</h1>
    </div>
  );
}