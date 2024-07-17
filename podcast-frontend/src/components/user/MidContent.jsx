import React, { useState } from "react";

const MidContent = ({
  user,
  flag,
  sub,
  channelCount,
  channelData,
  toggleProfileEdit,
}) => {
  const [tabChange, setTabChange] = useState(false);
  return (
    <div
      className="bg-gray-800 rounded-lg p-4 ml-50 mr-10 mt-5"
      style={{ marginLeft: "150px" }}
    >
      <div className="flex justify-end">
        <p
          className="border-1 border-color-white border rounded-full p-1 pl-4 pr-4 text-white font-semibold hover:bg-gray-500 hover:bg-opacity-25 cursor-pointer"
          onClick={() => {
            toggleProfileEdit();
          }}
        >
          Edit Profile
        </p>
      </div>

      <h2 className="text-white text-2xl">{user.name}</h2>
      <h3 className="text-gray-400 text-1xl">@itsShikharMall</h3>

      <h4 className="text-gray-400">
        {" "}
        <span className="text-white">{user.subscribers}</span> Subscribers
      </h4>

      <div className="flex border-gray-500 border-opacity-[0.3] border-b-2">
        <div
          className={`mx-10 px-10 py-5 font-md text-white font-semibold mt-5 cursor-pointer hover:bg-gray-500 hover:bg-opacity-25 ${
            !tabChange && "border-blue-500 border-b-4"
          }`}
          onClick={() => {
            setTabChange(false);
          }}
        >
          Profile
        </div>
        <div
          className={`mx-10 px-10 py-5 font-md text-white font-semibold mt-5 cursor-pointer hover:bg-gray-500 hover:bg-opacity-25 ${
            tabChange && "border-blue-500 border-b-4"
          }`}
          onClick={() => {
            setTabChange(true);
          }}
        >
          Podcasts
        </div>
      </div>

      {tabChange ? (
        <>
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
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default MidContent;
