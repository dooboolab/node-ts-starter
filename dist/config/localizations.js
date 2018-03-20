"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Localize = require("localize");
const localizations = new Localize({
    URL_NOT_FOUND: {
        en: 'URL requested is not found',
        kr: '요청하신 정보가 없습니다. 고객센터에 문의해주세요.',
    },
    PW_NOT_INITIALIZED: {
        en: 'Password is not initialized. Please retry or contact Dooboo Lab.',
        kr: '비밀번호가 초기화되지 않았습니다. 다시 시도해주시거나 고객센터에 문의해주세요.',
    },
    PW_INITIALIZED: {
        en: 'Your password is set to 123456. Please try login again and reset your password.',
        kr: '비밀번호가 123456으로 초기화 되었습니다. 다시 로그인해서 비밀번호를 변경해주세요.',
    },
    EMAIL_PW_CHANGE_SUBJECT: {
        en: 'Dooboo Lab Password Change Guidiance.',
        kr: '두부랩 비밀번호 변경안내입니다.',
    },
    EMAIL_PW_CHANGE_MESSAGE: {
        en: 'Hello. This is Dooboo Lab. Your password will reset to 123456 when you click on below link.',
        kr: '안녕하세요. 두부랩입니다. 아래 링크를 클릭하면 비밀번호가 123456으로 초기화 됩니다.\n',
    },
});
exports.default = localizations;
//# sourceMappingURL=localizations.js.map