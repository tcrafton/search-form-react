import React from "react";
import { format } from "date-fns";

import { useGlobalContext } from "../context";

const Stories = () => {
  const { isLoading, stories } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="stories">
      {stories.map((story) => {
        const {
          title,
          objectID,
          num_comments,
          url,
          created_at,
          points,
          author,
        } = story;
        return (
          <article className="story" key={objectID}>
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author} | </span> {num_comments}
            </p>
            <p className="info">
              created: {format(new Date(created_at), "MM-dd-yyyy")}
            </p>
            <div>
              <a
                href={url}
                className="read-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                read more
              </a>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
