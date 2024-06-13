import React from "react";

const MidContent = ({ user, flag, sub, channelCount, channelData }) => {
  return (
    // w-11/12 mx-auto my-4 md:my-8

    <div className="bg-gray-800 rounded-lg p-4 ml-50 mr-10 mt-5">
      <div className="text-center">
        <h2 className="text-white text-2xl">
          {user.name}{" "}
          {flag === "1" && (
            <img
              src="image/edit.png"
              alt="edit"
              className="inline-block w-6 h-6 cursor-pointer"
              onClick={() => {
                /* Add function to open overlay */
              }}
            />
          )}
        </h2>
        <h4 className="text-gray-400">{user.subscribers} Subscribers</h4>
        <div className="mt-4">
          {flag === "1" && (
            <a href="createchannel">
              <button className="bg-gray-900 text-white p-3 rounded-md">
                Create podcast
              </button>
            </a>
          )}
          {flag === "0" && (
            <form
              action={sub === "1" ? "/subscribe" : "/unsubscribe"}
              method="post"
            >
              <input type="hidden" name="channeluser" value={user._id} />
              <input
                type="submit"
                value={sub === "1" ? "Subscribe" : "Unsubscribe"}
                className="bg-gray-900 text-white p-3 rounded-md cursor-pointer"
              />
            </form>
          )}
        </div>
      </div>
      <div className="mt-8">
        {channelCount > 0 ? (
          <div>
            {channelData.map((channel) => (
              <div
                key={channel._id}
                className="mb-4 bg-gray-700 p-4 rounded-lg"
              >
                <h3 className="text-white text-xl">{channel.title}</h3>
                <p className="text-gray-400">{channel.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center">No podcasts yet</p>
        )}
      </div>
    </div>
  );
};

export default MidContent;
