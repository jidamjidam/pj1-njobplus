window.addEventListener("load", function () {

  var isMobile = false;

  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|playbook|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
  }

  // active motion

  let $FI_grps = document.querySelectorAll(".FI_grp");

	window.addEventListener("scroll", function(e){
		scroll_response_acts(e);
	});

	function scroll_response_acts(evt){
		
		let e = evt ? evt : window.event; 
		let st_pos = window.scrollY || document.querySelector("html").scrollTop;
		let st_winH = st_pos + window.innerHeight;
		
		$FI_grps.forEach((item, idx) => {
			let pos_add = item.classList.contains("fi_1") ? 0 : 50;
			if(st_winH >= (st_pos + item.getBoundingClientRect().top + pos_add)){
				item.style.willChange = 'transform, opacity';
				item.classList.add("active");
				setTimeout(function(){item.style.willChange = 'auto';}, 750);
			}
			else if(st_winH < (st_pos + item.getBoundingClientRect().top)){
				item.style.willChange = 'auto';
				item.classList.remove("active");
			}
		});

	}
	scroll_response_acts();
  
  // a 태그 비활성화

  document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', event => event.preventDefault());
  });

  // D, T, M공통기능은 여기에 작성

  const $elm_body = document.getElementsByTagName("body")[0];
  const $elm_header = document.getElementsByTagName("header")[0];
  const $elm_nav = document.getElementsByTagName("nav")[0];
  const $btn_menu = document.getElementById("btn_menu");
  const $btn_close = document.getElementsByClassName("btn_close")[0];
  const $btn_subs = document.querySelectorAll(".btn_subs");
  const $elm_logo = document.querySelectorAll(".logo");


  let visual_end_position = (document.querySelector(".visual").offsetTop + document.querySelector(".visual").offsetHeight) - $elm_header.offsetHeight;



  $btn_menu.onclick = function () {
    cls_toggle($elm_header, "on");

    if ($elm_header.classList.contains("on")) $elm_body.style.overflow = "hidden";
    else $elm_body.style.overflow = "auto";





  }

  $btn_close.onclick = function () {
    cls_toggle($elm_header, "on");
    if ($elm_header.classList.remove("on")) $elm_body.style.overflow = "hidden";
    else $elm_body.style.overflow = "auto";

  }

  // bg있을 때 nav 클릭하면 header 애들 위치

  if ($elm_header.classList.contains("on") && $elm_header.classList.contains("bg")) {

    $logo.style.top = "0";
    $btn_close.style.top = "0";

  }


  function cls_toggle(_target, _clsName) {
    _target.classList.toggle(_clsName);
  }

  function bg_toggle(_target, clsName) {
    _target.classList.toggle(_clsName);
  }

  /* resize 시 계산 */

  window.onresize = function () {

    visual_end_position = (document.querySelector(".visual").offsetTop + document.querySelector(".visual").offsetHeight) - $elm_header.offsetHeight;

  }

  window.addEventListener("scroll", function (e) {

    header_cls_change(e);

  });

  function header_cls_change(evt) {

    let e = evt ? evt : window.event;
    let st_pos = window.scrollY || document.querySelector("html").scrollTop;

    if (st_pos >= visual_end_position) $elm_header.classList.add("bg")
    else if (st_pos < visual_end_position) $elm_header.classList.remove("bg")


  }

  header_cls_change();

  /* nav 클릭시 scroll 제한 */

  $btn_menu.onclick = function () {

    cls_toggle($elm_header, "on");
    // if($elm_header.classList.contains("on"))$elm_body.style.overflow = "hidden";
    // else $elm_body.style.overflow = "auto";


  }



  if (!isMobile) {


  }
  else {

    // tablet, mobile 공통은 여기에 작성



    // 모바일일 때 subs 열고 닫고

    if (screen.width >= 768) {

      // for(var i = 0; i < $btn_subs.length; i++){
      // $btn_subs[i].onclick = function(){
      //   if(this.parentNode.classList.contains("active")){
      //     this.nextElementSibiling.style.height = `0px`;
      //   }
      //   else {
      //     nav_init();
      //     this.nextElementSibiling.style.height = `{this.nextElementSibiling.scrollHeight}px`;
      //   }
      //   cls_toggle(this.parentNode, "active");
      // }
      // } 

      const $btn_subs = document.querySelectorAll(".btn_subs");

      function handleLinkAsButton(e) {
        if (isMobile()) {
          e.preventDefault(); // 기본 링크 기능 차단
          alert('모바일에서는 버튼 역할을 합니다!'); // 버튼 클릭 시 동작할 코드
        }
      }

      // <a>에 클릭 이벤트 리스너 추가
      linkElement.addEventListener("click", handleLinkAsButton);

      // 창 크기 변경 시에도 동작 확인을 위한 로직 추가
      window.addEventListener("resize", function () {
        // 창 크기가 변경될 때 isMobile 함수로 현재 상태 확인
        if (isMobile()) {
          console.log('모바일 크기입니다.');
        } else {
          console.log('데스크탑 크기입니다.');
        }
      });
    }

    else {




    }
  }



});













