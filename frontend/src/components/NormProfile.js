import React from "react";

function NormProfile(props) {
  return (
    <div>
      <div className="container mx-auto my-10">
        <div className="flex flex-col-reverse md:flex-row mx-5">
          <div className="md:w-4/6 mr-10">
            <section>
              <p className="font-bold text-2xl">{props.user_data.user_name}</p>
              <p className="text-lg">{props.user_data.roll_no}</p>
            </section>

            <section className="mt-5">
              <p className="font-bold">Work</p>
              <hr className="h-px bg-black border-0" />
              {props.user_data.work.map((work) => {
                return (
                  <div className="my-2">
                    <p>{work.position}</p>
                    <p>{work.company}</p>
                    <p>{work.location}</p>
                    <p>
                      {work.start_date} - {work.end_date}
                    </p>
                    <p className="text-gray-600">{work.location}</p>
                  </div>
                );
              })}
            </section>

            <section className="mt-5">
              <p className="font-bold">Education</p>
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
    </div>
  );
}

export default NormProfile;
