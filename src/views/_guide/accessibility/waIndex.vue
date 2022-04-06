<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>모바일 앱 접근성 개요</h3>
          <ul class="list-dot">
            <li>모바일 앱 접근성은(Mobile application Accessibility) 모바일 전화기, 테블릿 기기 등 모바일 기기에서 실행되는 모든 애플리케이션 콘텐츠의 접근성을 정의합니다.</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h4>필요성</h4>
          <ul class="list-dot">
            <li>고령자 및 장애인 사용자의 스마트폰 사용 증가로 인하여 OS 자체에서 지원하는 각종 접근성 기술이 발전되었기 때문에 애플리케이션 콘텐츠를 접근성이 있게 구현한다면 누구나 콘텐츠에 접근하고 이용하는 것이 가능합니다.</li>
            <li>'장애인 차별 금지 및 권리구제 등에 관한 법률' 제정 및 발효로 정보 접근성을 향상하기 위한 국가적인 노력이 계속되고 있으나, 대부분의 노력이 웹 접근성에만 치중되어 있어 모바일 앱 접근성에 대한 확장이 필요한 상황입니다.</li>
            <li>웹을 넘어선 모든 정보 접근권 분야가 '장차법'에 의해 장애인 차별에 대한 진정 및 소송의 대상이 될 수 있습니다.</li>
            <li>모바일 앱 접근성은 보다 많은 사용자들과 보다 많은 기술 환경에서 적용하기 위해 필요하며, 접근성을 고려한 애플리케이션은 정보 교환 및 호환성에도 큰 도움이 되어 다양한 이용자층의 만족도를 높이고, 장기적으로 앱 이용률이 증대되는 효과도 기대할 수 있습니다.</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h4>특징</h4>
          <ul class="list-dot">
            <li>준용지침<br>모바일 앱 접근성은 'Mobile Application Content Accessibility Guideline 2.0'의 기준을 준용합니다.</li>
            <li>정보화 기본법 개정<br>2018년 2월 22일 '국가정보화 기본법' 일부개정안이 공포 되었습니다. 장애인, 고령자 등의 정보 접근 및 이용 편의가 증진될 것으로 예상됩니다.</li>
            <li>콘텐츠 개발 환경<br>모바일 애플리케이션 콘텐츠는 다양한 OS플랫폼에 따라 콘텐츠 개발 기반부터 다르게 구현되고 있습니다. 대표적으로 OS플랫폼은 iOS와 Android OS 등으로 구분되며 OS에 따라서 개발언어(native)가 다르고 그에 따라 접근성 구현 방식도 전혀 다릅니다.<br>또한 각 OS에서 지원하는 모바일 스크린리더(iOS-VoiceOver, Android OS-TalkBack)의 동작/인식도 상이하기 때문에 동일한 웹소스 페이지도 접근성 구현 방식에 따라서 사용자에게 전혀 다른 결과로서 제공이 될 수 있습니다.</li>
            <li>사용자 입력 방식<br>모바일 기기는 일반적인 컴퓨터 사용환경과 다르게 키보드와 마우스를 사용하는 것이 아닌 화면에 전용 펜이나 손가락 등으로 직접 터치하여 입력 및 조작을 하게 됩니다. 때문에 시각장애인 사용자의 모바일 기기 사용 방식도 다르며 콘텐츠의 접근성 구현에 앞서 필수적으로 그 사용 방식에 대한 이해가 필요합니다.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
export default {
  mounted () {
    Prism.highlightAll()
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/guide.scss";
</style>
