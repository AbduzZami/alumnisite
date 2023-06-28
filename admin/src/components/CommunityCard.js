import React from "react";
import { Link } from "react-router-dom";

function CommunityCard(props) {
  return (
    <Link to={`/profile/${props.user_id}`}>
      <div className="w-full">
        <div class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
          <span class="absolute inset-x-0 bottom-0 h-2 bg-black"></span>

          <div class="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                {props.name}
              </h3>

              <p class="mt-1 text-md font-medium text-gray-600">
                {props.roll_no}
              </p>
            </div>

            <div class="hidden sm:block sm:shrink-0">
              <img
                alt="Paul Clapton"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                class="h-16 w-16 rounded-lg object-cover shadow-sm"
              />
            </div>
          </div>

          <div class="mt-4 h-20">
            <p class="max-w-[40ch] text-sm text-gray-500 line-clamp-4">
              {props.headline}
            </p>
          </div>

          <dl class="mt-6 flex gap-4 sm:gap-6">
            <div class="flex flex-col">
              <dt class="text-xs text-gray-500">Verification</dt>
              <dd class="text-sm font-medium text-gray-600">
                {props.verification_status}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Link>
  );
}

export default CommunityCard;
