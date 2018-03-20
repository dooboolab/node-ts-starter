"use strict";
/**
 * Created by hyochan on 9/23/15.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var LOG_USER_TYPE;
(function (LOG_USER_TYPE) {
    LOG_USER_TYPE[LOG_USER_TYPE["USER_ANSWER_COONI"] = 1] = "USER_ANSWER_COONI";
    LOG_USER_TYPE[LOG_USER_TYPE["USER_FOLLOW_USER"] = 2] = "USER_FOLLOW_USER";
    LOG_USER_TYPE[LOG_USER_TYPE["USER_UNFOLLOW_USER"] = 3] = "USER_UNFOLLOW_USER";
    LOG_USER_TYPE[LOG_USER_TYPE["USER_WRITE_REPLY_TO_ACTIVITY"] = 4] = "USER_WRITE_REPLY_TO_ACTIVITY";
    LOG_USER_TYPE[LOG_USER_TYPE["USER_DELETE_REPLY_TO_ACTIVITY"] = 5] = "USER_DELETE_REPLY_TO_ACTIVITY";
    LOG_USER_TYPE[LOG_USER_TYPE["USER_WRITE_REPLY_TO_SELF_ACTIVITY"] = 6] = "USER_WRITE_REPLY_TO_SELF_ACTIVITY";
    LOG_USER_TYPE[LOG_USER_TYPE["USER_DELETE_REPLY_TO_SELF_ACTIVITY"] = 7] = "USER_DELETE_REPLY_TO_SELF_ACTIVITY";
    LOG_USER_TYPE[LOG_USER_TYPE["USER_LIKE_ACTIVITY"] = 8] = "USER_LIKE_ACTIVITY";
    LOG_USER_TYPE[LOG_USER_TYPE["USER_DISLIKE_ACTIVITY"] = 9] = "USER_DISLIKE_ACTIVITY";
    LOG_USER_TYPE[LOG_USER_TYPE["USER_LIKE_SELF_ACTIVITY"] = 10] = "USER_LIKE_SELF_ACTIVITY";
    LOG_USER_TYPE[LOG_USER_TYPE["USER_DISLIKE_SELF_ACTIVITY"] = 11] = "USER_DISLIKE_SELF_ACTIVITY";
})(LOG_USER_TYPE || (LOG_USER_TYPE = {}));
const params = {
    server: this.mode === 'production' ? 'https://cooni.com/' : 'http://localhost:3000/',
    audios_path: './public/audios/',
    audios_profile_path: './public/audios/',
    profiles_path: './public/audios/',
    mode: '',
    logUserType: LOG_USER_TYPE,
    params: {},
};
exports.default = params;
//# sourceMappingURL=params.js.map