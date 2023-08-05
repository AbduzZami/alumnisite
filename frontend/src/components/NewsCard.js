import React from "react";
import { Link } from "react-router-dom";

function NewsCard(props) {
  return (
    <Link to={`/newsevents/${props.post.post_id}`}>
      <div class="p-2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img
            alt="team"
            class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-md mr-4"
            src={`http://localhost:8800/${props.post.image_url}`}
          />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">
              {props.post.title}
            </h2>
            <p class="text-gray-500 line-clamp-2">{props.post.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NewsCard;
