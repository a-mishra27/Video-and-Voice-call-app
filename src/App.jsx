
import React, { useRef, useEffect } from 'react';
import { ZIM } from 'zego-zim-web';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function App() {
  const zpRef = useRef(null);

  const userID = 'user' + Math.floor(Math.random() * 1000);
  const userName = 'react_' + userID;

  const appID = 872685812;
  const serverSecret = 'd15eb344a076f3270a20c45abe53728f';

  const TOKEN = ZegoUIKitPrebuilt.generateKitTokenForTest(
    appID,
    serverSecret,
    null,
    userID,
    userName
  );

  useEffect(() => {
    const zp = ZegoUIKitPrebuilt.create(TOKEN);
    zpRef.current = zp;
    zp.addPlugins({ ZIM });
  }, [TOKEN]);

  function invite(callType) {
    if (!zpRef.current) {
      alert('Calling service is not ready yet.');
      return;
    }

    const targetUser = {
      userID: prompt("Enter callee's userId"),
      userName: prompt("Enter callee's userName"),
    };

    if (!targetUser.userID || !targetUser.userName) return;

    zpRef.current.sendCallInvitation({
      callees: [targetUser],
      callType,
      timeout: 60,
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#328ad6] to-[#00080b] flex items-center justify-center">
      <div className="w-[500px] max-w-[90%] min-h-[400px] bg-[#14171a] border-2 border-[#1f1e1e] flex flex-col items-center justify-center gap-5 p-8 rounded-xl shadow-xl">

        <h2 className="text-white text-xl text-center">
          <span className="text-blue-500">UserName: </span>
          {userName}
        </h2>

        <h2 className="text-white text-xl text-center">
          <span className="text-blue-500">UserID: </span>
          {userID}
        </h2>

        <div className="flex flex-col gap-4 mt-6 w-full max-w-xs">
          <button
            onClick={() =>
              invite(ZegoUIKitPrebuilt.InvitationTypeVoiceCall)
            }
            className="rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700 transition"
          >
            📞 Voice Call
          </button>

          <button
            onClick={() =>
              invite(ZegoUIKitPrebuilt.InvitationTypeVideoCall)
            }
            className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
          >
            📹 Video Call
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
