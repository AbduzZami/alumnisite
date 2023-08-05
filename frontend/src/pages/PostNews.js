import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function PostNews() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleAddPost() {
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", title);
      formData.append("description", description);

      await axios({
        method: "post",
        url: "/add_post", // Assuming this is the correct API endpoint on the backend
        baseURL: "https://alumni-backend-lavs.onrender.com",
        data: formData,
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        console.log(res);
        toast(res.data.message);
        // Handle success or any other operations after successful post
      });
    } catch (error) {
      console.error(error);
      toast(error.response.data.message);
      // Handle error or any other operations after unsuccessful post
    }
  }
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
              <div class="space-y-4">
                <div className="border-2 rounded-lg">
                  <label class="sr-only" for="headline">
                    Headline
                  </label>
                  <input
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Headline"
                    type="text"
                    id="headline"
                  />
                </div>

                <div className="border-2 rounded-lg">
                  <label class="sr-only" for="message">
                    Description
                  </label>

                  <textarea
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
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
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>

                <div class="mt-4">
                  <button type="submit" class="btn" onClick={handleAddPost}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default PostNews;
