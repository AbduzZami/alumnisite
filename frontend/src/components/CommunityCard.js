import React from "react";
import { Link } from "react-router-dom";

function CommunityCard(props) {
  return (
    <Link to={`/profile/${props.user.user_id}`}>
      <div className="w-full">
        <div class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
          <span class="absolute inset-x-0 bottom-0 h-2 bg-black"></span>

          <div class="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                {props.user.user_name}
              </h3>

              <p class="mt-1 text-md font-medium text-gray-600">
                {props.user.roll_no}
              </p>
            </div>

            <div class="hidden sm:block sm:shrink-0">
              <img
                alt={props.user.user_name}
                src={`https://alumni-backend-lavs.onrender.com/${props.user.image_url}`}
                class="h-16 w-16 rounded-lg object-cover shadow-sm"
              />
            </div>
          </div>

          <div class="mt-4 h-20">
            <p class="max-w-[40ch] text-sm text-gray-500 line-clamp-4">
              {props.user.headline}
            </p>
          </div>

          <dl class="mt-6 flex gap-4 sm:gap-6">
            <div class="flex flex-col">
              <dt class="text-xs text-gray-500">Verification</dt>
              <dd class="text-sm font-medium text-gray-600">
                {props.user.verification_status}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Link>
  );
}

export default CommunityCard;
