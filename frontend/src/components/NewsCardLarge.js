import React from "react";
import { Link } from "react-router-dom";

function NewsCardLarge() {
  return (
    <Link to={"/newsevents/1"}>
      <div>
        <article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm w-96">
          <img
            alt="Office"
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="h-56 w-full object-cover"
          />

          <div class="p-4 sm:p-6">
            <a href="#">
              <h3 class="text-lg font-medium text-gray-900">
                Alumni get together coming soon!
              </h3>
            </a>

            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              This was discussed on the board meeting with VC on 2022-Jan-18. We
              are planning to arrange a get together for all the alumni of RUET.
              We will be sending out invitations soon. Stay tuned!
            </p>

            <a
              href="#"
              class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Find out more
              <span
                aria-hidden="true"
                class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>
      </div>
    </Link>
  );
}

export default NewsCardLarge;
