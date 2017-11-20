/**
 * Created by hyochan on 9/23/15.
 */

enum LOG_USER_TYPE {
  USER_ANSWER_COONI = 1,
  USER_FOLLOW_USER = 2,
  USER_UNFOLLOW_USER = 3,
  USER_WRITE_REPLY_TO_ACTIVITY = 4,
  USER_DELETE_REPLY_TO_ACTIVITY = 5,
  USER_WRITE_REPLY_TO_SELF_ACTIVITY = 6,
  USER_DELETE_REPLY_TO_SELF_ACTIVITY = 7,
  USER_LIKE_ACTIVITY = 8,
  USER_DISLIKE_ACTIVITY = 9,
  USER_LIKE_SELF_ACTIVITY = 10,
  USER_DISLIKE_SELF_ACTIVITY = 11,
}

const params =  {
  server: this.mode === 'production' ? 'https://cooni.com/' : 'http://localhost:3000/',
  audios_path: './public/audios/',
  audios_profile_path: './public/audios/',
  profiles_path: './public/audios/',
  mode: '', // dev? production?
  logUserType: LOG_USER_TYPE,
  params : {
      // 서버에서 가변적으로 설정하는 파라미터
  },
};

export default params;
