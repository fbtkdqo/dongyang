<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>MARS v0.2 심리테스트!</title>
<link rel="stylesheet" href="css/style.css?v=2" />
</head>
<body>
	<!-- SNS 공유용 주소 연결 용 -->
	<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
	<header>
      <a href="index.html"><img src="images/logo.png" alt="Logo" class="logo"/></a>
    </header>
	<div id="wrap">
		<div class="content_box">
			<h2>당신은?</h2><br>
			<section class="content1">

			<h3>창의적이고 인기 많은 아이스 아메리카노</h3>
			</section>
			<div style="width: 200px; text-align: center; margin: 0 auto;">
				<a href="javascript:;" id="kakao-link-btn">
<img src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" width="30px" />
</a>

<script type="text/javascript">
  //<![CDATA[
    // // 사용할 앱의 JavaScript 키를 설정해 주세요.
    Kakao.init('2d93276e31ac847deb5e6fb2b742b00b');
    // // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
    Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',
      content: {
        title: document.title,
        description: '#직장생활 #오늘은이걸로 #카페',
        imageUrl: document.images[0].src,
        link: {
          webUrl: document.location.href,
          mobileWebUrl: document.location.href
        }
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845
      },
      buttons: [
        {
          title: 'Open!',
          link: {
            mobileWebUrl: document.location.href,
            webUrl: document.location.href
          }
        }  
      ]
    });
  //]]>
</script>
			</div>
		</div>
		</div>

</body>
</html>