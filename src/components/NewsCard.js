import React from "react";
import { Link } from "react-router-dom";

function NewsCard() {
  return (
    <Link to="/newsevents/1">
      <div>
        <div className="card card-side bg-base-100 shadow-xl h-24 m-2 cursor-pointer hover:bg-black hover:text-white">
          <figure>
            <img
              className="w-24 h-full"
              src="https://th.bing.com/th/id/OIP.22zeQqg6aP_7WZRpQzPsTAHaE8?pid=ImgDet&rs=1"
              alt="Movie"
            />
          </figure>
          <div className="m-2 truncate ">
            <h2 className="font-bold">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
                </div> */}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NewsCard;
