webpackJsonp([1,4],{

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "/*-------------\r\n   General\r\n-------------*/\r\n\r\n*{\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml{\r\n  font: normal 16px sans-serif;\r\n  color: #555;\r\n}\r\n\r\nul, nav{\r\n  list-style: none;\r\n}\r\n\r\na{\r\n  text-decoration: none;\r\n  color: inherit;\r\n  cursor: pointer;\r\n\r\n  opacity: 0.9;\r\n}\r\n\r\na:hover{\r\n  opacity: 1;\r\n}\r\n\r\n.btn{\r\n  color: #fff;\r\n  border-radius: 4px;\r\n  text-transform: uppercase;\r\n  background-color: #2196F3;\r\n  font-weight: 800;\r\n  text-align: center;\r\n}\r\n.btn:disabled{\r\n  color: #fff;\r\n  cursor: not-allowed;\r\n  border-radius: 4px;\r\n  text-transform: uppercase;\r\n  background-color: #ccc;\r\n  font-weight: 800;\r\n  text-align: center;\r\n}\r\n\r\n\r\nhr{\r\n  width: 150px;\r\n  height: 2px;\r\n  background-color: #2196F3;\r\n  border: 0;\r\n  margin-bottom: 80px;\r\n}\r\n\r\nsection {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n\r\n  padding: 125px 100px;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  section {\r\n    padding: 80px 30px;\r\n  }\r\n}\r\n\r\nsection h3.title {\r\n  color: #414a4f;\r\n  text-transform: capitalize; \r\n  font: bold 32px 'Open Sans', sans-serif;\r\n  margin-bottom: 35px;\r\n  text-align: center;\r\n}\r\n\r\nsection p {\r\n  max-width: 700px;\r\n  text-align: center;\r\n  margin-bottom: 35px;\r\n  padding: 0 20px;\r\n  line-height: 2;\r\n}\r\n\r\nul.grid {\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n\r\n/*-------------\r\n   Header\r\n-------------*/\r\n\r\nheader {\r\n  -webkit-box-flex: 0;\r\n      -ms-flex: 0 0 auto;\r\n          flex: 0 0 auto;\r\n  position: absolute;\r\n  z-index: 10;\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  color: #fff;\r\n  padding: 35px 100px 0;\r\n}\r\n\r\nheader h2 {\r\n  font-family: 'Quicksand', sans-serif;\r\n}\r\n\r\nheader nav {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\nheader nav li {\r\n  margin: 0 15px;\r\n}\r\n\r\nheader nav li:first-child {\r\n  margin-left: 0;  \r\n}\r\n\r\nheader nav li:last-child {\r\n  margin-right: 0;  \r\n}\r\n\r\n@media (max-width: 700px) {\r\n  header{\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;    \r\n  }\r\n\r\n  header h2 {\r\n    margin-bottom: 15px;\r\n  }\r\n}\r\n\r\n/*----------------\r\n   Hero Section\r\n----------------*/\r\n\r\n.hero {\r\n  position: relative;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  min-height: 100vh;\r\n  color: #fff;\r\n  text-align: center;\r\n}\r\n\r\n.hero .background-image {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-size: cover;\r\n  background-color: #2196F3;\r\n  z-index: -1;\r\n}\r\n\r\n.hero .background-image:after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #414a4f;\r\n  opacity: 0.75;\r\n}\r\n\r\n.hero h1 {\r\n  font: bold 60px 'Open Sans', sans-serif;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.hero h3 {\r\n  font: normal 28px 'Open Sans', sans-serif;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.hero a.btn {\r\n  padding: 20px 46px;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .hero {\r\n    min-height: 600px;\r\n  }\r\n\r\n  .hero h1 {\r\n    font-size: 48px;\r\n  }\r\n\r\n  .hero h3 {\r\n    font-size: 24px;\r\n  }\r\n\r\n  .hero a.btn {\r\n    padding: 15px 40px;\r\n  }\r\n}\r\n\r\n\r\n\r\n/*--------------------\r\n   Our Work Section\r\n---------------------*/\r\n\r\n.оur-work {\r\n  background-color: #fff;\r\n}\r\n\r\n#product .grid li {\r\n  padding: 20px;\r\n  height: 350px;\r\n  border-radius: 3px;\r\n\r\n  background-clip: content-box;\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-color: #333;\r\n}\r\n\r\n#product .grid li.small {\r\n  -ms-flex-preferred-size: 40%;\r\n      flex-basis: 40%;\r\n}\r\n\r\n#product .grid li.large {\r\n  -ms-flex-preferred-size: 80%;\r\n      flex-basis: 80%;\r\n}\r\n\r\n\r\n@media (max-width: 700px) {\r\n  #product .grid li.small,\r\n  #product .grid li.large {\r\n    -ms-flex-preferred-size: 100%;\r\n        flex-basis: 100%;\r\n  }\r\n}\r\n\r\n/*----------------------\r\n   company Section\r\n----------------------*/\r\n\r\n#company {\r\n  background-color: #f7f7f7;\r\n}\r\n\r\n#company .grid li {\r\n  padding: 0 30px;\r\n  -ms-flex-preferred-size: 33%;\r\n      flex-basis: 33%;\r\n  text-align: center;\r\n}\r\n\r\n#company .grid li i {\r\n    font-size: 50px;\r\n    color: #2196F3;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n#company .grid li h4 {\r\n  color: #555;\r\n    font-size: 20px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n#company .grid li p {\r\n    margin: 0;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  #company .grid li {\r\n    -ms-flex-preferred-size: 70%;\r\n        flex-basis: 70%;\r\n    margin-bottom: 65px;\r\n  }\r\n\r\n  #company .grid li:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n\r\n\r\n@media (max-width: 700px) {\r\n  #company .grid li{\r\n    -ms-flex-preferred-size: 100%;\r\n        flex-basis: 100%;\r\n  }\r\n}\r\n\r\n\r\n\r\n/*--------------------\r\n   worker Section\r\n--------------------*/\r\n\r\n#member {\r\n  background-color: #fff;\r\n}\r\n\r\n#member .quote {\r\n  text-align: center;\r\n  width: 80%;\r\n    font-size: 22px;\r\n    font-weight: 300;\r\n    line-height: 1.5;\r\n    margin-bottom: 20px;\r\n    padding: 0;\r\n}\r\n\r\n#member .author {\r\n    font-size: 18px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n#member .author:last-child {\r\n    margin-bottom: 0;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  #member .quote{\r\n    font-size: 20px;\r\n  }\r\n\r\n  #member .author{\r\n      font-size: 16px;\r\n  }\r\n}\r\n\r\n\r\n\r\n/*---------------------\r\n   Contact Section\r\n---------------------*/\r\n\r\n#contact {\r\n  background-color: #f7f7f7;\r\n}\r\n\r\n#contact form {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n\r\n  max-width: 700px;\r\n  width: 80%;\r\n}\r\n\r\n#contact form input {\r\n  padding: 15px;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  margin-right: 30px;\r\n  font-size: 18px;\r\n  color: #555;\r\n}\r\n\r\n#contact form .btn {\r\n  padding: 18px 42px;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  #contact form input{\r\n    -ms-flex-preferred-size: 100%;\r\n        flex-basis: 100%;\r\n    margin: 0 0 20px 0;\r\n  }\r\n}\r\n\r\n/*-------------\r\n   Footer\r\n-------------*/\r\n\r\nfooter {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  text-align: center;\r\n  color: #fff;\r\n  background-color: #414a4f;\r\n  padding: 60px 0;\r\n}\r\n\r\nfooter ul {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  margin-bottom: 25px;\r\n  font-size: 32px;\r\n}\r\n\r\nfooter ul li {\r\n  margin: 0 8px;  \r\n}\r\n\r\nfooter ul li:first-child {\r\n  margin-left: 0;  \r\n}\r\n\r\nfooter ul li:last-child{\r\n  margin-right: 0;  \r\n}\r\n\r\nfooter p {\r\n  text-transform: uppercase;\r\n  font-size: 14px;\r\n  color: rgba(255,255,255,0.6);\r\n  margin-bottom: 10px;\r\n}\r\n\r\nfooter p a {\r\n  color: #fff;\r\n}\r\n@media (max-width: 700px) {\r\n  footer{\r\n    padding: 80px 15px;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

module.exports = "<!-- Routed views go here -->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

module.exports = "<!--\n<script src='https://spi.maps.daum.net/imap/map_js_init/postcode.v2.js'></script>\n&lt;!&ndash;<script src='http://dmaps.daum.net/map_js_init/postcode.v2.js'></script>&ndash;&gt;\n<script>\n    new daum.Postcode({\n        oncomplete: function(data) {\n            if(data.userSelectedType == 'R'){\n                window.SmartKiKiApp.testMove(data.zonecode, data.roadAddressEnglish);\n            } else {\n                window.SmartKiKiApp.testMove(data.zonecode, data.addressEnglish);\n            }\n        }\n    }).open();\n</script>\n-->\n주소 검색!\n<!-- iOS에서는 position:fixed 버그가 있음, 적용하는 사이트에 맞게 position:absolute 등을 이용하여 top,left값 조정 필요 -->\n<div id='layer' style='display:block;position:fixed;overflow:hidden;z-index:1;-webkit-overflow-scrolling:touch;'></div>\n<script src='https://spi.maps.daum.net/imap/map_js_init/postcode.v2.js'></script>\n<script>\n    window.addEventListener('message', onReceivedPostMessage, false);\n\n    function onReceivedPostMessage(event){\n        //..ex deconstruct event into action & params\n        var action = event.data.action;\n        var params = event.data.params;\n\n        console.log('onReceivedPostMessage '+event);\n\n    }\n\n    function onReceivedActivityMessageViaJavascriptInterface(json){\n        //..ex deconstruct data into action & params\n        var data = JSON.parse(json);\n        var action = data.action;\n        var params = data.params;\n        console.log('onReceivedActivityMessageViaJavascriptInterface '+event);\n    }\n\n\n    // 우편번호 찾기 화면을 넣을 element\n    var element_layer = document.getElementById('layer');\n\n    new daum.Postcode({\n        oncomplete: function(data) {\n\n            // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.\n\n            // 각 주소의 노출 규칙에 따라 주소를 조합한다.\n            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.\n            var fullAddr = data.addressEnglish; // 최종 주소 변수\n            var extraAddr = ''; // 조합형 주소 변수\n\n            // 기본 주소가 도로명 타입일때 조합한다.\n            if(data.addressType === 'R'){\n                //법정동명이 있을 경우 추가한다.\n                if(data.bname !== ''){\n                    extraAddr += data.bname;\n                }\n                // 건물명이 있을 경우 추가한다.\n                if(data.buildingName !== ''){\n                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);\n                }\n                // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.\n                fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');\n            }\n\n\n            var fullRoadAddr = data.roadAddressEnglish; // 도로명 주소 변수\n            var extraRoadAddr = ''; // 도로명 조합형 주소 변수\n\n            // 법정동명이 있을 경우 추가한다. (법정리는 제외)\n            // 법정동의 경우 마지막 문자가 '동/로/가'로 끝난다.\n            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){\n                extraRoadAddr += data.bname;\n            }\n            // 건물명이 있고, 공동주택일 경우 추가한다.\n            if(data.buildingName !== '' && data.apartment === 'Y'){\n                extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);\n            }\n            // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.\n            if(extraRoadAddr !== ''){\n                extraRoadAddr = ' (' + extraRoadAddr + ')';\n            }\n            // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.\n            if(fullRoadAddr !== ''){\n                fullRoadAddr += extraRoadAddr;\n            }\n\n            // window.Android.processDATA(data.zonecode + ', ' + fullRoadAddr);\n            window.Android.processDATA(data.zonecode, data.addressEnglish);\n        },\n        width : '100%',\n        height : '100%'\n    }).embed(element_layer);\n\n    // iframe을 넣은 element를 보이게 한다.\n    element_layer.style.display = 'block';\n\n    // iframe을 넣은 element의 위치를 화면의 가운데로 이동시킨다.\n    initLayerPosition();\n\n    // 브라우저의 크기 변경에 따라 레이어를 가운데로 이동시키고자 하실때에는\n    // resize이벤트나, orientationchange이벤트를 이용하여 값이 변경될때마다 아래 함수를 실행 시켜 주시거나,\n    // 직접 element_layer의 top,left값을 수정해 주시면 됩니다.\n    function initLayerPosition(){\n        var width = (window.innerWidth || document.documentElement.clientWidth); //우편번호서비스가 들어갈 element의 width\n        var height = (window.innerHeight || document.documentElement.clientHeight); //우편번호서비스가 들어갈 element의 height\n        var borderWidth = 5; //샘플에서 사용하는 border의 두께\n\n        // 위에서 선언한 값들을 실제 element에 넣는다.\n        element_layer.style.width = width + 'px';\n        element_layer.style.height = height + 'px';\n        element_layer.style.border = borderWidth + 'px solid';\n        // 실행되는 순간의 화면 너비와 높이 값을 가져와서 중앙에 뜰 수 있도록 위치를 계산한다.\n        element_layer.style.left = (((window.innerWidth || document.documentElement.clientWidth) - width)/2 - borderWidth) + 'px';\n        element_layer.style.top = (((window.innerHeight || document.documentElement.clientHeight) - height)/2 - borderWidth) + 'px';\n    }\n</script>"

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

module.exports = "<header>\n  <h2><a href=\"#\">Dooboo Lab</a></h2>\n  <nav>\n    <li><a href=\"#hero\">메인</a></li>\n    <li><a href=\"#product\">제품</a></li>\n    <li><a href=\"#company\">회사 소개</a></li>\n    <li><a href=\"#member\">구성원</a></li>\n    <li><a href=\"#contact\">연락하기</a></li>\n  </nav>\n</header>\n\n<section class=\"hero\">\n  <div class=\"background-image\" style=\"background-image: url(img/hero.jpg);\"></div>\n  <h1>Dooboo Lab</h1>\n  <h3>유연한 혁신. 두부랩에서 시작합니다.</h3>\n</section>\n\n<section id=\"product\">\n  <h3 class=\"title\">제품</h3>\n  <p>두부랩에서 제작한 어플리케이션입니다.<br>플랫폼을 선택하면 바로 해당하는 앱스토어로 이동합니다.</p>\n  <hr>\n\n  <ul class=\"grid\">\n    <li class=\"small\" style=\"background-image: url(img/coast.jpg);\"></li>\n    <li class=\"small\" style=\"background-image: url(img/island.jpg);\"></li>\n    <li class=\"small\" style=\"background-image: url(img/island.jpg);\"></li>\n    <li class=\"small\" style=\"background-image: url(img/balloon.jpg);\"></li>\n    <li class=\"large\" style=\"background-image: url(img/mountain.jpg);\"></li>\n  </ul>\n</section>\n\n<section id=\"company\">\n  <h3 class=\"title\">회사 소개</h3>\n  <p>두부랩은 세상이 필요로 하는 시장에서 아직 활성화가 잘 되어있지 않은 어플리케이션을 발굴하고 상품화하는데 목적을 두고 있습니다. 하나의 서비스에 국한되서 개발을 하는 것이 아닌 지속적으로 새로운 개발업무를 찾아서 시장에 내놓을 것입니다.</p>\n  <hr>\n  <ul class=\"grid\">\n    <li>\n      <i class=\"fa fa-mobile-phone\"></i>\n      <h4>모바일 앱 개발</h4>\n      <p>현재 android와 ios를 주력으로 타게팅 하고 있습니다.</p>\n    </li>\n    <li>\n      <i class=\"fa fa-server\"></i>\n      <h4>웹/서버 개발</h4>\n      <p>모바일 앱 서비스를 주력으로 다루고 있지만 필요에 따라서 웹과 서버를 업무도 수행하고 있습니다.</p>\n    </li>\n    <li>\n      <i class=\"fa fa-paint-brush\"></i>\n      <h4>디자인</h4>\n      <p>좋은 디자인. 화려하지는 않지만 올바른 디자인 업무에 충실하고 있습니다.</p>\n    </li>\n  </ul>\n</section>\n\n<section id=\"member\">\n  <h3 class=\"title\">구성원</h3>\n\n  <p class=\"quote\">CEO and Product Manager</p>\n  <p class=\"author\">- 장효찬</p>\n\n  <p class=\"quote\">Chief Consultant</p>\n  <p class=\"author\">- 구억</p>\n\n  <p class=\"quote\">Chief Marketer</p>\n  <p class=\"author\">- 정진화</p>\n\n  <p class=\"quote\">Lead Designer</p>\n  <p class=\"author\">- 장연진</p>\n\n  <p class=\"quote\">Lead Developer</p>\n  <p class=\"author\">- 조사라</p>\n</section>\n\n<section id=\"contact\">\n  <h3 class=\"title\">연락하기</h3>  \n  <p>회사에 관심이 있으시면 언제든지 편하게 연락주세요.</p>\n  <hr>\n  <form>\n    <input #email name=\"email\" type=\"email\" placeholder=\"이메일 주소\" [ngModel]=\"emailFilter\" (ngModelChange)=\"filterEmail($event)\"/>\n    <button class=\"btn\" [disabled]=\"!isValidEmail\" (click)=\"leftEmail(email.value)\">메일주소 남기기</button>\n  </form>\n</section>\n\n<footer>\n  <ul>\n    <li><a href=\"#\"><i class=\"fa fa-twitter-square\"></i></a></li>\n    <li><a href=\"#\"><i class=\"fa fa-facebook-square\"></i></a></li>\n    <li><a href=\"#\"><i class=\"fa fa-snapchat-square\"></i></a></li>\n    <li><a href=\"#\"><i class=\"fa fa-pinterest-square\"></i></a></li>\n    <li><a href=\"#\"><i class=\"fa fa-github-square\"></i></a></li>\n  </ul>\n  <p>All rights reserved by <a href=\"https://dooboolab.com/\" target=\"_blank\">dooboolab.com</a></p>\n</footer>"

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(83);


/***/ }),

/***/ 82:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 82;


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(95);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Dooboo Lab';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(153),
        styles: [__webpack_require__(149)],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__daum_address_daum_address_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
    { path: 'daum_address', component: __WEBPACK_IMPORTED_MODULE_6__daum_address_daum_address_component__["a" /* DaumAddressComponent */] },
    { path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__daum_address_daum_address_component__["a" /* DaumAddressComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaumAddressComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DaumAddressComponent = (function () {
    function DaumAddressComponent() {
    }
    DaumAddressComponent.prototype.ngOnInit = function () {
    };
    return DaumAddressComponent;
}());
DaumAddressComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-daum-address',
        template: __webpack_require__(154),
        styles: [__webpack_require__(150)]
    }),
    __metadata("design:paramtypes", [])
], DaumAddressComponent);

//# sourceMappingURL=daum-address.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoobooService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DoobooService = (function () {
    function DoobooService(http) {
        this.http = http;
        this.leftMailUrl = "/api/dooboo/left_email";
    }
    DoobooService.prototype.leftMaliUrl = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.leftMailUrl, { email: email }, options)
            .map(function (res) { return res; }); // json으로 안보내고 string으로 보내면 res.json을 해줘야한다.
    };
    return DoobooService;
}());
DoobooService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* Http */]) === "function" && _a || Object])
], DoobooService);

var _a;
//# sourceMappingURL=dooboo.service.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dooboo_service__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(doobooService) {
        this.doobooService = doobooService;
        this.isValidEmail = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.isValidMailFormat = function (email) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (email !== "" && EMAIL_REGEXP.test(email)) {
            return true;
        }
        return false;
    };
    HomeComponent.prototype.filterEmail = function (email) {
        console.log('email : ' + email);
        if (!this.isValidMailFormat(email)) {
            this.isValidEmail = false;
            return;
        }
        this.isValidEmail = true;
    };
    HomeComponent.prototype.leftEmail = function (email) {
        var _this = this;
        this.doobooService.leftMaliUrl(email)
            .subscribe(function (data) {
            _this.dataResponse = data;
            console.log(_this.dataResponse);
            console.log('status : ' + _this.dataResponse.status);
        }, function (error) { return console.log(error); });
        return;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(155),
        styles: [__webpack_require__(151)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__dooboo_service__["a" /* DoobooService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dooboo_service__["a" /* DoobooService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dooboo_service__["a" /* DoobooService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[187]);
//# sourceMappingURL=main.bundle.js.map