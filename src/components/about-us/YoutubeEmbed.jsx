import React from "react";
import PropTypes from "prop-types";
import styles from "@/styles/pages/about/youtube.module.scss";

const YoutubeEmbed = ({ link }) => {
  const embedId = link.includes("watch")
    ? link.split("/").pop().split("=").pop()
    : link.split("/").pop();

  return (
    <div className={styles.videoResponsive}>
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

YoutubeEmbed.propTypes = {
  link: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
