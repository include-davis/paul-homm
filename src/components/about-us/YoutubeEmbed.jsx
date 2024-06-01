import React from "react";
import PropTypes from "prop-types";
import styles from "@/styles/pages/about/youtube.module.scss";

const YoutubeEmbed = ({ embedId }) => (
  <div className={styles.videoResponsive}>
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
