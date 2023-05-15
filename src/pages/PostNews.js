import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PostNews() {
  return (
    <div>
      <Navbar />
      <section class="container mx-auto">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div class="lg:col-span-2 lg:py-12">
              <p class="max-w-xl text-lg">
                As you know, we have a huge community that might need help or
                waiting to help. So, don't hesitate about posting. Post your
                thoughts, news and events. After you post something, it will
                take a short time to review your post to be public.
              </p>

              <div class="mt-8">
                <a href="" class="text-2xl font-bold text-black-600">
                  01521704287
                </a>

                <address class="mt-2 not-italic">
                  Talaimari, Kazla, Rajshahi.
                </address>
              </div>
            </div>

            <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="" class="space-y-4">
                <div className="border-2 rounded-lg">
                  <label class="sr-only" for="headline">
                    Headline
                  </label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Headline"
                    type="text"
                    id="headline"
                  />
                </div>

                {/* <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label class="sr-only" for="email">
                      Email
                    </label>
                    <input
                      class="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label class="sr-only" for="phone">
                      Phone
                    </label>
                    <input
                      class="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div> */}

                {/* <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <input
                      class="peer sr-only"
                      id="option1"
                      type="radio"
                      tabindex="-1"
                      name="option"
                    />

                    <label
                      for="option1"
                      class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                      tabindex="0"
                    >
                      <span class="text-sm font-medium"> Option 1 </span>
                    </label>
                  </div>

                  <div>
                    <input
                      class="peer sr-only"
                      id="option2"
                      type="radio"
                      tabindex="-1"
                      name="option"
                    />

                    <label
                      for="option2"
                      class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                      tabindex="0"
                    >
                      <span class="text-sm font-medium"> Option 2 </span>
                    </label>
                  </div>

                  <div>
                    <input
                      class="peer sr-only"
                      id="option3"
                      type="radio"
                      tabindex="-1"
                      name="option"
                    />

                    <label
                      for="option3"
                      class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                      tabindex="0"
                    >
                      <span class="text-sm font-medium"> Option 3 </span>
                    </label>
                  </div>
                </div> */}

                <div className="border-2 rounded-lg">
                  <label class="sr-only" for="message">
                    Description
                  </label>

                  <textarea
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Description"
                    rows="8"
                    id="description"
                  ></textarea>
                </div>

                <div>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full max-w-xs"
                  />
                </div>

                <div class="mt-4">
                  <button type="submit" class="btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default PostNews;
