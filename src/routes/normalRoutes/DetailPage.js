import React from "react";
import "../../assets/DetailPage.css";
import sampleimg from "../../assets/images/sampleimg.JPG";

function DetailPage() {
  window.onload = function () {
    var section = document.getElementsByTagName("section");
    var pageNum = 0;
    var totalNum = section.length;

    window.addEventListener("scroll", function (event) {
      var scroll = this.scrollY;
      for (var i = 0; i < totalNum; i++) {
        if (
          scroll > section[i].offsetTop - window.outerHeight / 0.8 &&
          scroll <
            section[i].offsetTop -
              window.outerHeight / 2 +
              section[i].offsetHeight
        ) {
          pageNum = i;
          break;
        }
      }
      pageChangeFunc();
    });

    function pageChangeFunc() {
      for (var i = 0; i < totalNum; i++) {
        section[i].classList.remove("active");
      }

      section[pageNum].classList.add("active");
    }

    pageChangeFunc();
  };

  return (
    <>
      <section className="p_section">
        <div className="contentWrap">
          <div className="imageWrap">
            <img className="sampleimg" src={sampleimg} alt="블레이저 미드" />
          </div>
          <div className="detailWrap">
            <h1 className="productName">나이키 블레이저 미드 '77 빈티지</h1>
            <p className="productdetail">
              나이키 블레이저 미드 '77 빈티지는 빈티지한 중창 마감 처리로 나이키
              올드 스쿨 농구화의 느낌을 살렸으며, 마치 수년간 보관해온 듯한 룩을
              연출합니다.
            </p>
          </div>
          <div className="buyWrap">
            <button className="zzim" type="button">
              ❤️ 찜하기
            </button>
            <button className="alarmbtn" type="button">
              🔔 알람설정
            </button>
            <br />
            <a href="#!">최저가 사러가기 👉</a>
          </div>
        </div>
      </section>
      <hr />

      <section className="p_section">
        <div className="sampledetail">
          <p>
            나이키 에어맥스 95에는 놀랄만큼 편안한 착화감과 편안함과 시선을 사로
            잡는 스타일, 그리고 재생 소재가 어우러져 있습니다. 펠트,메쉬 그리고
            인조 가죽의 풍부한 텍스처를 선보이며 클래식 러닝 DNA에 새로운
            디자인을 선사합니다. 적당히 두툼한 디자인과 부드러운 에어 쿠셔닝,
            그리고 나이키 그라인드 고무 밑창으로 트렌드를 선도합니다. 이 제품은
            중량 기준 20% 이상 재생 소재로 제작했습니다.
          </p>
        </div>
      </section>
    </>
  );
}

export default DetailPage;
