import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NewsEventDetails() {
  return (
    <div>
      <Navbar />
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div class="max-w-3xl">
            <h2 class="text-3xl font-bold sm:text-4xl">
              Alumni get together coming soon!
            </h2>
          </div>

          <div className="mt-2 flex flex-wrap">
            <p>19 March 2023</p>
            <p className="mx-2">|</p>
            <p>Abduz Zami</p>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="Party"
                src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div class="lg:py-16">
              <article class="space-y-4 text-gray-600">
                <p>
                  This was discussed on the board meeting with VC on
                  2022-Jan-18. We are planning to arrange a get together for all
                  the alumni of RUET. We will be sending out invitations soon.
                  Stay tuned!
                </p>

                <p>
                  This was discussed on the board meeting with VC on
                  2022-Jan-18. We are planning to arrange a get together for all
                  the alumni of RUET. We will be sending out invitations soon.
                  Stay tuned!
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default NewsEventDetails;
