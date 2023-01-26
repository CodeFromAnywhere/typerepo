"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.summarizeMeetings = void 0;
/**
Endpoint that onboards users
*/
var summarizeMeetings = function (
/**
 * TITLE: Email (required)
 */
email, 
/**
 * TITLE: Phone number (optional)
 */
phoneNumber, 
/**
 * TITLE: Youtube URL of your meeting (optional)
 */
meetingYoutubeUrl, 
/**
 * TITLE: Audiofile of your meeting (optional)
 */
meetingAudio) {
    console.log("SummarizeMeeting executed", {
        meetingYoutubeUrl: meetingYoutubeUrl,
        meetingAudio: meetingAudio,
        email: email,
        phoneNumber: phoneNumber,
    });
    return {
        isSuccessful: false,
        message: "Not implemented yet, but you reached the backend!",
    };
    /*
  Add task:
  
  - download youtube url --> mp3 in their own private store
  - send email to setup account
  - mp3 --> wav --> transcript --> gpt3 stuff
  - if it's done, email the person automatically with a link where they can see the result
  */
};
exports.summarizeMeetings = summarizeMeetings;
exports.summarizeMeetings.isPublic = true;
//# sourceMappingURL=summarizeMeetings.js.map