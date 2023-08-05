import React from "react";
import { Link } from "react-router-dom";

function TheLatestCard(props) {
  return (
    <Link to={`/newsevents/${props.post.post_id}`}>
      <article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
        <img
          alt="Office"
          src={`https://alumni-backend-lavs.onrender.com/${props.post.image_url}`}
          class="h-80 w-full object-cover"
        />

        <div class="p-4 sm:p-6">
          <h3 class="text-lg font-medium text-gray-900">{props.post.title}</h3>

          <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {props.post.description}
          </p>

          <div class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
            Find out more
            <span
              aria-hidden="true"
              class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default TheLatestCard;
