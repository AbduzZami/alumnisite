import React from "react";
import Footer from "./Footer";

function AuthProfile() {
  return (
    <div>
      <div className="container mx-auto my-10">
        <div className="flex flex-col-reverse md:flex-row mx-5">
          <div className="md:w-4/6 mr-10">
            <section>
              <div className="flex flex-wrap">
                <p className="font-bold text-2xl">Abduz Zami</p>
                <button className="btn btn-circle btn-xs ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-edit h-4 w-4 "
                  >
                    <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                    <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                  </svg>
                </button>
              </div>
              <div className="flex flex-wrap">
                <p className="text-lg">1903158</p>
                <button className="btn btn-circle btn-xs ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-edit h-4 w-4 "
                  >
                    <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                    <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                  </svg>
                </button>
              </div>
            </section>

            <section className="mt-5">
              <div className="flex flex-wrap">
                <p className="font-bold">Work</p>
                <p className="font-bold">[Add]</p>
              </div>
              <hr className="h-px bg-black border-0" />
              <div className="my-2">
                <p>Founder & CEO</p>
                <p>Niharon Technologies</p>
                <p>2019 - Present</p>
                <div className="flex flex-wrap gap-2">
                  <button className="font-bold">[Edit]</button>
                  <button className="font-bold">[Delete]</button>
                </div>
              </div>
              <div className="my-2">
                <p>Founder & CEO</p>
                <p>Niharon Technologies</p>
                <p>2019 - Present</p>
              </div>
              <div className="my-2">
                <p>Founder & CEO</p>
                <p>Niharon Technologies</p>
                <p>2019 - Present</p>
              </div>
            </section>

            <section className="mt-5">
              <div className="flex flex-wrap">
                <p className="font-bold">Education</p>
                <p className="font-bold">[Add]</p>
              </div>
              <hr className="h-px bg-black border-0" />
              <div className="my-2">
                <p>BSc in Computer Science & Engineering</p>
                <p>Rajshahi University of Engineering & Technology</p>
                <p>2019 - Present</p>
              </div>
              <div className="my-2">
                <p>BSc in Computer Science & Engineering</p>
                <p>Rajshahi University of Engineering & Technology</p>
                <p>2019 - Present</p>
              </div>
              <div className="my-2">
                <p>BSc in Computer Science & Engineering</p>
                <p>Rajshahi University of Engineering & Technology</p>
                <p>2019 - Present</p>
              </div>
            </section>

            <section className="mt-5">
              <p className="font-bold">Contact</p>
              <hr className="h-px bg-black border-0" />
              <div className="my-2">
                <p>Phone</p>
                <p>+8801521704287</p>
              </div>
              <div className="my-2">
                <p>Email</p>
                <a href="mailto:abduz.zami@gmail.com">abduz.zami@gmail.com</a>
              </div>
              <div className="my-2">
                <p>Website</p>
                <a href="https://niharon.com/abduzzami">
                  https://niharon.com/abduzzami
                </a>
              </div>
            </section>
          </div>
          <div className="md:w-2/6 mt-5 mb-5">
            <div className="sticky top-10">
              <div className="avatar">
                <div className="w-48 rounded">
                  <img src="https://avatars.githubusercontent.com/u/69592754?v=4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div />
    </div>
  );
}

export default AuthProfile;
