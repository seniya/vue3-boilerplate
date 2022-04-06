<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12 view-exam ">
          <h3>Icon</h3>
          <section class="view-section">
            <!-- overview -->
            <h4>Overview</h4>
            <p class="mb8">
              *** uu 아이콘 이미지 네이밍 규칙 ***
            </p>
            <p>icon_<span class="fs-20 fw-medium fc-blue">size</span>_<span class="fs-20 fw-medium fc-blue">name</span>_<span class="fs-14 fw-medium fc-blue">color</span>_<span class="fs-14 fw-medium fc-blue">active</span>.svg</p>
            <p>ex) icon_16_arrow1.svg (color와 active는 옵션)</p>
          </section>
        </div>

        <div class="col-12 view-code">
          <pre>
            <code class="language-html">
      &lt;!-- icon은 사이즈(숫자로 표기), 이미지명이 반드시 들어가야한다 --&gt;
      &lt;uu-icon icon="arrow1" size="16" /&gt;

      &lt;!-- category는 common과 같은 1depth의 폴더명 사용 (입력 안할 시 default폴더는 common - 전체 공통 아이콘) --&gt;
      &lt;uu-icon icon="shinhan" size="24" category="payfan" /&gt;

      &lt;!-- subcategory는 2depth icons 폴더 하위의 폴더명 사용 (입력 안할 시 default폴더는 default) --&gt;
      &lt;uu-icon icon="shinhan" size="24" category="payfan" subcategory="wallet" /&gt;

      &lt;!-- 아이콘 이미지는 black 색상이 기본이며, 다른 색상일 경우 color 값을 넣는다 (gray = 파일명 _gr, white = 파일명 _wh, 나머지 색상은 색상 단어 그대로 표기) --&gt;
      &lt;uu-icon icon="arrow1" size="20" color="gray" /&gt;

      &lt;!-- active 상태 아이콘은 active 값을 넣어서 표기한다 (이미지명은 _active 로 끝나야 한다) --&gt;
      &lt;uu-icon icon="time" size="24" active="active" /&gt;

      &lt;!-- 화살표와 같이 같은 이미지가 방향만 다른 경우 direction 값을 넣어 방향을 넣어준다 (default는 위쪽 방향) --&gt;
      &lt;uu-icon icon="arrow1" size="16" direction="left" /&gt;
      &lt;uu-icon icon="arrow1" size="16" direction="right" /&gt;
      &lt;uu-icon icon="arrow1" size="16" direction="bottom" /&gt;

      &lt;!-- vertical 텍스트 수직정렬 사용 시 아래와 같이 사용 가능 기본은 vertical-align과 같음 --&gt;
      &lt;uu-icon icon="arrow1" size="16" vertical="top" /&gt;
      &lt;uu-icon icon="arrow1" size="16" vertical="middle" /&gt;
      &lt;uu-icon icon="arrow1" size="16" vertical="textBottom" /&gt;

      &lt;!-- png옵션 사용시 png 이미지 사용 --&gt;
      &lt;uu-icon icon="arrow1" size="16" png /&gt;
              </code>
            </pre>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <!-- overview //-->
          <p class="overview-title">
            ** 아이콘 정렬 : 알파벳순 **
          </p>
          <!-- A -->
          <ul class="icons-list">
            <li>
              <h4>absence (16x16)</h4>
              <div class="icons">
                <!-- absence -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>absence</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="absence"
                      size="16"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>absence(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="absence"
                      size="16"
                      color="gray"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>absence(blue)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="absence"
                      size="16"
                      color="blue"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>absence(red)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="absence"
                      size="16"
                      color="red"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>absence2 (16x16)</h4>
              <div class="icons">
                <!-- absence2 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>absence2(red)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="absence2"
                      size="16"
                      color="red"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>absence (32x32)</h4>
              <div class="icons">
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>absence(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="absence"
                      size="32"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>absence (64x64)</h4>
              <div class="icons">
                <!-- absence -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>absence</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="absence"
                      size="64"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>absence (80x80)</h4>
              <div class="icons">
                <!-- absence -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>absence</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="absence"
                      size="80"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>absence(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="absence"
                      size="80"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>absence (36x36)</h4>
              <div class="icons">
                <!-- absence1 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>absence<br>icon_36_absence1과 동일</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="absence"
                      size="36"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>absence1 (80x80)</h4>
              <div class="icons">
                <!-- absence1 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>absence1</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="absence1"
                      size="80"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <!-- 210720 : prepay -->
            <li>
              <h4>accumulate (24x24)</h4>
              <div class="icons">
                <!-- absence1 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>accumulate</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="accumulate"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <!-- //210720 : prepay -->
            <li>
              <h4>alert (24x24)</h4>
              <div class="icons">
                <!-- alert -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>alert</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="alert"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>arrow (16x16)</h4>
              <div class="icons">
                <!-- arrow1 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>arrow1</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="arrow1"
                      size="16"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="16"
                      direction="bottom"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="16"
                      direction="left"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="16"
                      direction="right"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>arrow1(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="arrow1"
                      size="16"
                      color="white"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="16"
                      color="white"
                      direction="bottom"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="16"
                      color="white"
                      direction="left"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="16"
                      color="white"
                      direction="right"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>arrow1(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="arrow1"
                      size="16"
                      color="gray"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="16"
                      color="gray"
                      direction="bottom"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="16"
                      color="gray"
                      direction="left"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="16"
                      color="gray"
                      direction="right"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>arrow1(gray2)<br>(icon_16_arrow1_gray60과 동일)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="arrow1"
                      size="16"
                      color="gray2"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="16"
                      color="gray2"
                      direction="bottom"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="16"
                      color="gray2"
                      direction="left"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="16"
                      color="gray2"
                      direction="right"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>arrow1<br>(darkblue070)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="arrow1"
                      size="16"
                      color="darkblue070"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="16"
                      color="darkblue070"
                      direction="bottom"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="16"
                      color="darkblue070"
                      direction="left"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="16"
                      color="darkblue070"
                      direction="right"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>arrow1(blue)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="arrow1"
                      size="16"
                      color="blue"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="16"
                      color="blue"
                      direction="bottom"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="16"
                      color="blue"
                      direction="left"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="16"
                      color="blue"
                      direction="right"
                    />
                  </dd>
                </dl>
                <!-- arrow1 -->
                <!-- arrow2 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>arrow2</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="arrow2"
                      size="16"
                    />
                    <uu-icon
                      icon="arrow2"
                      size="16"
                      direction="bottom"
                    />
                    <uu-icon
                      icon="arrow2"
                      size="16"
                      direction="left"
                    />
                    <uu-icon
                      icon="arrow2"
                      size="16"
                      direction="right"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>arrow2(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="arrow2"
                      size="16"
                      color="gray"
                    />
                    <uu-icon
                      icon="arrow2"
                      size="16"
                      color="gray"
                      direction="bottom"
                    />
                    <uu-icon
                      icon="arrow2"
                      size="16"
                      color="gray"
                      direction="left"
                    />
                    <uu-icon
                      icon="arrow2"
                      size="16"
                      color="gray"
                      direction="right"
                    />
                  </dd>
                </dl>
                <!-- arrow2 -->
                <!-- arrow3 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>arrow3(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="arrow3"
                      size="16"
                      color="gray"
                    />
                  </dd>
                </dl>
                <!-- arrow3 -->
              </div>
            </li>
            <li>
              <h4>arrow (18x18) - 오른쪽 방향 기본</h4>
              <div class="icons">
                <!-- arrow1 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>arrow1(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="arrow1"
                      size="18"
                      color="gray"
                    />
                  </dd>
                </dl>
                <!-- arrow1 -->
                <!-- arrow1 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>arrow1(navi)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="arrow1"
                      size="18"
                      color="navi"
                    />
                  </dd>
                </dl>
                <!-- arrow1 -->
              </div>
            </li>
            <li>
              <h4>arrow (20x20)</h4>
              <div class="icons">
                <!-- arrow1 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>arrow1</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="arrow1"
                      size="20"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="20"
                      direction="bottom"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="20"
                      direction="left"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="20"
                      direction="right"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>arrow1(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="arrow1"
                      size="20"
                      color="gray"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="20"
                      color="gray"
                      direction="bottom"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="20"
                      color="gray"
                      direction="left"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="20"
                      color="gray"
                      direction="right"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>arrow1(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="arrow1"
                      size="20"
                      color="white"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="20"
                      color="white"
                      direction="bottom"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="20"
                      color="white"
                      direction="left"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="20"
                      color="white"
                      direction="right"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>arrow1(gray2)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="arrow1"
                      size="20"
                      color="gray2"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="20"
                      color="gray2"
                      direction="bottom"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="20"
                      color="gray2"
                      direction="left"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="20"
                      color="gray2"
                      direction="right"
                    />
                  </dd>
                </dl>
                <!-- arrow1 -->
              </div>
            </li>
            <li>
              <h4>arrow (24x24)</h4>
              <div class="icons">
                <!-- arrow1 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>arrow1</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="arrow1"
                      size="24"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="24"
                      direction="bottom"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="24"
                      direction="left"
                    />
                    <uu-icon
                      icon="arrow1"
                      size="24"
                      direction="right"
                    />
                  </dd>
                </dl>
                <!-- arrow1 -->
                <!-- arrow2 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>arrow2</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="arrow2"
                      size="24"
                    />
                    <uu-icon
                      icon="arrow2"
                      size="24"
                      direction="left"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>arrow2</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="arrow2"
                      size="24"
                      color="white"
                    />
                    <uu-icon
                      icon="arrow2"
                      size="24"
                      color="white"
                      direction="left"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>arrow (28x28)</h4>
              <div class="icons">
                <!-- arrow4 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>arrow4</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="arrow4"
                      size="28"
                    />
                    <uu-icon
                      icon="arrow4"
                      size="28"
                      direction="bottom"
                    />
                    <uu-icon
                      icon="arrow4"
                      size="28"
                      direction="left"
                    />
                    <uu-icon
                      icon="arrow4"
                      size="28"
                      direction="right"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>arrow (40x40)</h4>
              <div class="icons">
                <!-- arrow4 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>arrow2</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="arrow2"
                      size="40"
                      png
                    />
                    <uu-icon
                      icon="arrow2"
                      size="40"
                      direction="bottom"
                      png
                    />
                    <uu-icon
                      icon="arrow2"
                      size="40"
                      direction="left"
                      png
                    />
                    <uu-icon
                      icon="arrow2"
                      size="40"
                      direction="right"
                      png
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>advice (28x28)</h4>
              <div class="icons">
                <!-- advice -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>advice</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="advice"
                      size="28"
                    />
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
          <!-- // A -->
          <!-- B -->
          <ul class="icons-list">
            <li>
              <h4>badge (20x20)</h4>
              <div class="icons">
                <!-- badge -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>badge1(blue)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="badge1"
                      size="20"
                      color="blue"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>badge1(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="badge1"
                      size="20"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>badge (24x24)</h4>
              <div class="icons">
                <!-- badge -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>badge</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="badge"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>badge2 (24x24)</h4>
              <div class="icons">
                <!-- badge2 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>badge2</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="badge2"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>bang (16x16)</h4>
              <div class="icons">
                <!-- bang -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>bang(red)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="bang"
                      size="16"
                      color="red"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>bang(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="bang"
                      size="16"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>bang (20x20)</h4>
              <div class="icons">
                <!-- bang -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>bang</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="bang"
                      size="20"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>bang(red)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="bang"
                      size="20"
                      color="red"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>barcode (24x24)</h4>
              <div class="icons">
                <!-- barcode -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>barcode</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="barcode"
                      size="24"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>barcode(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="barcode"
                      size="24"
                      color="white"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>bell (16x16)</h4>
              <div class="icons">
                <!-- bell -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>bell</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="bell"
                      size="16"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>bell</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="bell"
                      size="16"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>bill (24x24)</h4>
              <div class="icons">
                <!-- bill -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>bill</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="bill"
                      size="24"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>bill(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="bill"
                      size="24"
                      color="white"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>bookmark (20x20)</h4>
              <div class="icons">
                <!-- bookmark -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>bookmark</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="bookmark"
                      size="20"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>bookmark(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="bookmark"
                      size="20"
                      color="white"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>bookmark(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="bookmark"
                      size="20"
                      color="gray"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>bookmark(blue)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="bookmark"
                      size="20"
                      color="blue"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>bookmark (24x24)</h4>
              <div class="icons">
                <!-- bookmark -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>bookmark</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="bookmark"
                      size="24"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>bookmark(active)<br>(icon_24_bookmark_bk_active와 동일)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="bookmark"
                      size="24"
                      color="active"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>bookmark(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="bookmark"
                      size="24"
                      color="white"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>bookmark(wh_active)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="bookmark"
                      size="24"
                      color="wh_active"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>bookmark(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="bookmark"
                      size="24"
                      color="gray"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>bookmark(gr_avtive)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="bookmark"
                      size="24"
                      color="gr_active"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>bookmark2 (24x24)</h4>
              <div class="icons">
                <!-- bookmark2 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>bookmark2</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="bookmark2"
                      size="24"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>bookmark2(active)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="bookmark2"
                      size="24"
                      color="active"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>bookmark2(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="bookmark2"
                      size="24"
                      color="white"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>bookmark2(wh_active)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="bookmark2"
                      size="24"
                      color="wh_active"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>bus (24x24)</h4>
              <div class="icons">
                <!-- bus -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>bus</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="bus"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>budget (28x28)</h4>
              <div class="icons">
                <!-- budget -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>budget</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="budget"
                      size="28"
                    />
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
          <!-- // B -->
          <!-- C -->
          <ul class="icons-list">
            <li>
              <h4>calendar (24x24)</h4>
              <div class="icons">
                <!-- calendar -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>calendar</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="calendar"
                      size="24"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>calendar(blue)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="calendar"
                      size="24"
                      color="blue"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>calendar (28x28)</h4>
              <div class="icons">
                <!-- calendar -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>calendar</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="calendar"
                      size="28"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>call (16x16)</h4>
              <div class="icons">
                <!-- call -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>call</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="call"
                      size="16"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>call(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="call"
                      size="16"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>call (24x24)</h4>
              <div class="icons">
                <!-- call -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>call</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="call"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>card (24x24)</h4>
              <div class="icons">
                <!-- card -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>card3(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="card3"
                      size="24"
                      color="gray"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>card4(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="card4"
                      size="24"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>cancelcard (24x24)</h4>
              <div class="icons">
                <!-- cancelcard -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>cancelcard</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="cancelcard"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>cash (24x24)</h4>
              <div class="icons">
                <!-- cash -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>cash(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="cash"
                      size="24"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>cashreceipts (24x24)</h4>
              <div class="icons">
                <!-- cashreceipts -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>cashreceipts</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="cashreceipts"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>chat (14x14)</h4>
              <div class="icons">
                <!-- chat -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>chat</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="chat"
                      size="14"
                      png
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>chat(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="chat"
                      size="14"
                      color="white"
                      png
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>chat (16x16)</h4>
              <div class="icons">
                <!-- chat -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>chat</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="chat"
                      size="16"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>chat(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="chat"
                      size="16"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>chat (18x18)</h4>
              <div class="icons">
                <!-- chat -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>chat</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="chat"
                      size="18"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>chat(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="chat"
                      size="18"
                      color="white"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>chat (20x20)</h4>
              <div class="icons">
                <!-- chat -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>chat</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="chat"
                      size="20"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>chat (24x24)</h4>
              <div class="icons">
                <!-- chat -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>chat</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="chat"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>chat2 (24x24)</h4>
              <div class="icons">
                <!-- chat2 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>chat2</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="chat2"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>chat3 (20x20)</h4>
              <div class="icons">
                <!-- chat3 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>chat3</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="chat3"
                      size="20"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <!-- 210720 : prepay -->
            <li>
              <h4>chargecoupon (24x24)</h4>
              <div class="icons">
                <!-- chargecoupon -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>chargecoupon</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="chargecoupon"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <!-- 210720 : prepay  -->
            <li>
              <h4>changecard (24x24)</h4>
              <div class="icons">
                <!-- changecard -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>changecard</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="changecard"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>checkbox (10x10)</h4>
              <div class="icons">
                <!-- checkbox -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>checkbox(blue)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="checkbox"
                      size="10"
                      color="blue"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>checkbox(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="checkbox"
                      size="10"
                      color="gray"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>checkbox(gray2)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="checkbox"
                      size="10"
                      color="gray2"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>checkbox(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="checkbox"
                      size="10"
                      color="white"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>checkbox (13x13)</h4>
              <div class="icons">
                <!-- checkbox -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>checkbox(blue)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="checkbox"
                      size="13"
                      color="blue"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>checkbox(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="checkbox"
                      size="13"
                      color="gray"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>checkbox(gray2)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="checkbox"
                      size="13"
                      color="gray2"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>checkbox(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="checkbox"
                      size="13"
                      color="white"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>check (12x12)</h4>
              <div class="icons">
                <!-- check -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>check(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="check"
                      size="12"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>check (16x16)</h4>
              <div class="icons">
                <!-- check -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>check</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="check"
                      size="16"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>check(blue)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="check"
                      size="16"
                      color="blue"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>check(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="check"
                      size="16"
                      color="gray"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>check(gray2)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="check"
                      size="16"
                      color="gray2"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>check (20x20)</h4>
              <div class="icons">
                <!-- check -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>check</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="check"
                      size="20"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>check (24x24)</h4>
              <div class="icons">
                <!-- check -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>check(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="check"
                      size="24"
                      color="white"
                      png
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>checked (24x24)</h4>
              <div class="icons">
                <!-- checked -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>checked(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="checked"
                      size="24"
                      color="white"
                      png
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>check2 (16x16)</h4>
              <div class="icons">
                <!-- check -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>check2(blue)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="check2"
                      size="16"
                      color="blue"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>check (80x80)</h4>
              <div class="icons">
                <!-- check -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>check(blue)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="check"
                      size="80"
                      color="blue"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>check2 (80x80)</h4>
              <div class="icons">
                <!-- check2 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>check2(blue)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="check2"
                      size="80"
                      color="blue"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>close (16x16)</h4>
              <div class="icons">
                <!-- close -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>close</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="close"
                      size="16"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>close(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="close"
                      size="16"
                      color="white"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>close(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="close"
                      size="16"
                      color="gray"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>close2</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="close2"
                      size="16"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>close3</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="close3"
                      size="16"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>close4</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="close4"
                      size="16"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>close1 (20x20)</h4>
              <div class="icons">
                <!-- close1 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>close1</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="close1"
                      size="20"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>close1</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="close1"
                      size="20"
                      color="white"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>close (24x24)</h4>
              <div class="icons">
                <!-- close -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>close</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="close"
                      size="24"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>close</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="close"
                      size="24"
                      color="white"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>coin (20x20)</h4>
              <div class="icons">
                <!-- coin -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>coin</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="coin"
                      size="20"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>coin(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="coin"
                      size="20"
                      color="white"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>coin (24x24)</h4>
              <div class="icons">
                <!-- coin -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>coin</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="coin"
                      size="24"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>coin(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="coin"
                      size="24"
                      color="white"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>copy (16x16)</h4>
              <div class="icons">
                <!-- coin -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>copy</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="copy"
                      size="16"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>copy(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="copy"
                      size="16"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>copy (24x24)</h4>
              <div class="icons">
                <!-- coin -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>copy</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="copy"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>coupon (24x24)</h4>
              <div class="icons">
                <!-- coupon -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>coupon</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="coupon"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>credit (28x28)</h4>
              <div class="icons">
                <!-- credit -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>credit</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="credit"
                      size="28"
                    />
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
          <!-- // C -->
          <!-- D -->
          <ul class="icons-list">
            <li>
              <h4>data (28x28)</h4>
              <div class="icons">
                <!-- delete -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>data</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="data"
                      size="28"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>decrease (12x12)</h4>
              <div class="icons">
                <!-- decrease -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>decrease(blue)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="decrease"
                      size="12"
                      color="blue"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>decrease(red)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="decrease"
                      size="12"
                      color="red"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>decrease(purple)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="decrease"
                      size="12"
                      color="purple"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>delete (16x16)</h4>
              <div class="icons">
                <!-- delete -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>delete</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="delete"
                      size="16"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>delete(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="delete"
                      size="16"
                      color="white"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>delete (20x20)</h4>
              <div class="icons">
                <!-- delete -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>delete</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="delete"
                      size="20"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>delete (24x24)</h4>
              <div class="icons">
                <!-- delete -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>delete</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="delete"
                      size="24"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>delete(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="delete"
                      size="24"
                      color="white"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>delete(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="delete"
                      size="24"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>delete (28x28)</h4>
              <div class="icons">
                <!-- delete -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>delete</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="delete"
                      size="28"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>delete1 (20x20)</h4>
              <div class="icons">
                <!-- delete1 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>delete1</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="delete1"
                      size="20"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>delete1 (20x20)</h4>
              <div class="icons">
                <!-- delete2 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>delete2</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="delete2"
                      size="20"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>document1 (24x24)</h4>
              <div class="icons">
                <!-- download -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>document1</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="document1"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>document2 (24x24)</h4>
              <div class="icons">
                <!-- download -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>document2</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="document2"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>download (16x16)</h4>
              <div class="icons">
                <!-- download -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>download</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="download"
                      size="16"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>download(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="download"
                      size="16"
                      color="gray"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>download(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="download"
                      size="16"
                      color="white"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>download (20x20)</h4>
              <div class="icons">
                <!-- download -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>download</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="download"
                      size="20"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>download (24x24)</h4>
              <div class="icons">
                <!-- download -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>download</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="download"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>download (32x32)</h4>
              <div class="icons">
                <!-- download -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>download</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="download"
                      size="32"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>driver (24x24)</h4>
              <div class="icons">
                <!-- driver -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>driver</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="driver"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>dutchpay (24x24)</h4>
              <div class="icons">
                <!-- dutchpay -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>dutchpay</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="dutchpay"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>dot (24x24)</h4>
              <div class="icons">
                <!-- dot -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>dot<br>(icon_24_dot2와 동일)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="dot"
                      size="24"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>dot(blue)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="dot"
                      size="24"
                      color="blue"
                    />
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
          <!-- // D -->
          <!-- E -->
          <ul class="icons-list">
            <li>
              <h4>enter (16x16)</h4>
              <div class="icons">
                <!-- enter -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>enter</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="enter"
                      size="16"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>easyap (24x24)</h4>
              <div class="icons">
                <!-- easyap -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>easyap</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="easyap"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>error (24x24)</h4>
              <div class="icons">
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>error(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="error"
                      size="24"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>error (32x32)</h4>
              <div class="icons">
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>error(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="error"
                      size="32"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>error (64x64)</h4>
              <div class="icons">
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>error</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="error"
                      size="64"
                      png
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>event (24x24)</h4>
              <div class="icons">
                <!-- event -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>event</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="event"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>eyes (16x16)</h4>
              <div class="icons">
                <!-- eyes -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>eyes</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="eyes"
                      size="16"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>eyes(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="eyes"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>eyes (18x18)</h4>
              <div class="icons">
                <!-- eyes -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>eyes</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="eyes"
                      size="18"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>eyes (20x20)</h4>
              <div class="icons">
                <!-- eyes -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>eyes</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="eyes"
                      size="20"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>eyes (24x24)</h4>
              <div class="icons">
                <!-- eyes -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>eyes</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="eyes"
                      size="20"
                    />
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
          <!-- // E -->
          <!-- F -->
          <ul class="icons-list">
            <li>
              <h4>fail (80x80)</h4>
              <div class="icons">
                <!-- fail -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>fail</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="fail"
                      size="80"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>fee (28x28)</h4>
              <div class="icons">
                <!-- fee -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>fee</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="fee"
                      size="28"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>file (16x16)</h4>
              <div class="icons">
                <!-- file -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>file</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="file"
                      size="16"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>finance (28x28)</h4>
              <div class="icons">
                <!-- finance -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>finance</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="finance"
                      size="28"
                    />
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
          <!-- // F -->
          <!-- G -->
          <ul class="icons-list">
            <li>
              <h4>Graph (40x40)</h4>
              <div class="icons">
                <!-- graph -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>graph(40x40)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="graph"
                      size="40"
                    />
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
          <!-- H -->
          <ul class="icons-list">
            <li>
              <h4>hashtag (24x24)</h4>
              <div class="icons">
                <!-- hashtag -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>hashtag</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="hashtag"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>heart (12x12)</h4>
              <div class="icons">
                <!-- heart -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>heart</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="heart"
                      size="12"
                      png
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>heart (14x14)</h4>
              <div class="icons">
                <!-- heart -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>heart</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="heart"
                      size="14"
                      png
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>heart(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="heart"
                      size="14"
                      color="white"
                      png
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>heart (16x16)</h4>
              <div class="icons">
                <!-- heart -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>heart</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="heart"
                      size="16"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>heart (18x18)</h4>
              <div class="icons">
                <!-- heart -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>heart</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="heart"
                      size="18"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>heart</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="heart"
                      size="18"
                      color="white"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>heart (20x20)</h4>
              <div class="icons">
                <!-- heart -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>heart</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="heart"
                      size="20"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>heart (24x24)</h4>
              <div class="icons">
                <!-- heart -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>heart</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="heart"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>house (24x24)</h4>
              <div class="icons">
                <!-- house -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>house</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="house"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>healthcare (56x56)</h4>
              <div class="icons">
                <!-- healthcare -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>healthcare</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="healthcare"
                      size="56"
                      png
                    />
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
          <!-- // H -->
          <!-- I -->
          <ul class="icons-list">
            <li>
              <h4>increase (12x12)</h4>
              <div class="icons">
                <!-- increase -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>increase(blue)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="increase"
                      size="12"
                      color="blue"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>increase(red)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="increase"
                      size="12"
                      color="red"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>insurance (24x24)</h4>
              <div class="icons">
                <!-- insurance -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>insurance</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="insurance"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>insurance (28x28)</h4>
              <div class="icons">
                <!-- insurance -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>insurance</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="insurance"
                      size="28"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>interestrate (28x28)</h4>
              <div class="icons">
                <!-- interestrate -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>interestrate</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="interestrate"
                      size="28"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <!-- 210720 : prepay -->
            <li>
              <h4>issuance (16x16)</h4>
              <div class="icons">
                <!-- issuance -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>issuance</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="issuance"
                      size="16"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <!-- //210720 : prepay -->
          </ul>
          <!-- // I -->
          <!-- L -->
          <ul class="icons-list">
            <li>
              <h4>lock2 (24x24)</h4>
              <div class="icons">
                <!-- lock -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>lock2</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="lock2"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>link (12x12)</h4>
              <div class="icons">
                <!-- link -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>link(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="link"
                      size="12"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>link (24x24)</h4>
              <div class="icons">
                <!-- link -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>link</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="link"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>invest (56x56)</h4>
              <div class="icons">
                <!-- invest -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>invest</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="invest"
                      size="56"
                      png
                    />
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
          <!-- // L -->
          <!-- // L -->
          <!-- M -->
          <ul class="icons-list">
            <li>
              <h4>meaning (16x16)</h4>
              <div class="icons">
                <!-- meal -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>meaning(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="meaning"
                      size="16"
                      color="white"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>menu (24x24)</h4>
              <div class="icons">
                <!-- menu -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>menu</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="menu"
                      size="24"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>menu(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="menu"
                      size="24"
                      color="white"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>message (24x24)</h4>
              <div class="icons">
                <!-- message -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>message</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="message"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>more (16x16)</h4>
              <div class="icons">
                <!-- more -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>more</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="more"
                      size="16"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>more (20x20)</h4>
              <div class="icons">
                <!-- more -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>more</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="more"
                      size="20"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>monthreport (28x28)</h4>
              <div class="icons">
                <!-- monthreport -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>monthreport</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="monthreport"
                      size="28"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <!-- 210720 : prepay -->
            <li>
              <h4>moneycharge (24x24)</h4>
              <div class="icons">
                <!-- moneycharge -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>moneycharge</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="moneycharge"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>moneymove (24x24)</h4>
              <div class="icons">
                <!-- moneymove -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>moneymove</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="moneymove"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <!-- //210720 : prepay -->
            <li>
              <h4>moneyreturn (24x24)</h4>
              <div class="icons">
                <!-- moneyreturn -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>moneyreturn</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="moneyreturn"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>minus (12x12)</h4>
              <div class="icons">
                <!-- minus -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>minus(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="minus"
                      size="12"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>mypayment (24x24)</h4>
              <div class="icons">
                <!-- mypayment -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>mypayment</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="mypayment"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>mydigital (24x24)</h4>
              <div class="icons">
                <!-- mydigital -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>mydigital</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="mydigital"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>monthlyrent (56x56)</h4>
              <div class="icons">
                <!-- monthlyrent -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>monthlyrent</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="monthlyrent"
                      size="56"
                      png
                    />
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
          <!-- // M -->
          <!-- N -->
          <ul class="icons-list">
            <li>
              <h4>notice (24x24)</h4>
              <div class="icons">
                <!-- notice -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>notice</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="notice"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
          <!-- // N -->
          <!-- P -->
          <ul class="icons-list">
            <li>
              <h4>pencil (16x16)</h4>
              <div class="icons">
                <!-- pencil -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>pencil</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="pencil"
                      size="16"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>pencil(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="pencil"
                      size="16"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>pencil (20x20)</h4>
              <div class="icons">
                <!-- pencil -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>pencil</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="pencil"
                      size="20"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>pencil (24x24)</h4>
              <div class="icons">
                <!-- pencil -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>pencil</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="pencil"
                      size="24"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>pencil(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="pencil"
                      size="24"
                      color="white"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>picture (24x24)</h4>
              <div class="icons">
                <!-- picture -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>picture</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="picture"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>play (16x16)</h4>
              <div class="icons">
                <!-- play -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>play</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="play"
                      size="16"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>play(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="play"
                      size="16"
                      color="white"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>play(navy)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="play"
                      size="16"
                      color="navy"
                      png
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>plus (24x24)</h4>
              <div class="icons">
                <!-- plus1 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>plus1</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="plus1"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>plus (28x28)</h4>
              <div class="icons">
                <!-- plus -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>plus</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="plus"
                      size="28"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>plus (44x44)</h4>
              <div class="icons">
                <!-- plus -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>plus</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="plus"
                      size="44"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>point2 (24x24)</h4>
              <div class="icons">
                <!-- point2 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>point2</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="point2"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>point2 (64x64)</h4>
              <div class="icons">
                <!-- point2 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>point2</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="point2"
                      size="64"
                      png
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>pointafter (24x24)</h4>
              <div class="icons">
                <!-- pointafter -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>pointafter</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="pointafter"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>policy (28x28)</h4>
              <div class="icons">
                <!-- policy -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>policy</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="policy"
                      size="28"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>progress (80x80)</h4>
              <div class="icons">
                <!-- progress -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>progress</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="progress"
                      size="80"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>progress2 (24x24)</h4>
              <div class="icons">
                <!-- progress -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>progress2(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="progress2"
                      size="24"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>pause (16x16)</h4>
              <div class="icons">
                <!-- pause -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>pause(navy)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="pause"
                      size="16"
                      color="navy"
                    />
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
          <!-- // P -->
          <!-- Q -->
          <ul class="icons-list">
            <li>
              <h4>qrcode (24x24)</h4>
              <div class="icons">
                <!-- qrcode -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>qrcode</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="qrcode"
                      size="24"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>qrcode(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="qrcode"
                      size="24"
                      color="white"
                    />
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
          <!-- // Q -->
          <!-- R -->
          <ul class="icons-list">
            <li>
              <h4>refresh (16x16)</h4>
              <div class="icons">
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>refresh</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="refresh"
                      size="16"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>refresh (20x20)</h4>
              <div class="icons">
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>refresh</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="refresh"
                      size="20"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>refresh(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="refresh"
                      size="20"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>refresh (24x24)</h4>
              <div class="icons">
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>refresh</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="refresh"
                      size="24"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>refresh(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="refresh"
                      size="24"
                      color="gray"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>refresh(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="refresh"
                      size="24"
                      color="white"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>refresh (32x32)</h4>
              <div class="icons">
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>refresh</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="refresh"
                      size="32"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>refresh(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="refresh"
                      size="32"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>registration (24x24)</h4>
              <div class="icons">
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>registration</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="registration"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>refund (24x24)</h4>
              <div class="icons">
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>refund</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="refund"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>report (24x24)</h4>
              <div class="icons">
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>report</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="report"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>report2 (24x24)</h4>
              <div class="icons">
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>report2</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="report2"
                      size="24"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>report2</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="report2"
                      size="24"
                      png
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>restaurant (64x64)</h4>
              <div class="icons">
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>restaurant</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="restaurant"
                      size="64"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>restaurant (80x80)</h4>
              <div class="icons">
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>restaurant</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="restaurant"
                      size="80"
                    />
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
          <!-- // R -->
          <!-- S -->
          <ul class="icons-list">
            <li>
              <h4>search (24x24)</h4>
              <div class="icons">
                <!-- search -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>search</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="search"
                      size="24"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>search(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="search"
                      size="24"
                      color="white"
                    />
                  </dd>
                </dl>
                <!-- search -->
              </div>
            </li>
            <li>
              <h4>search (28x28)</h4>
              <div class="icons">
                <!-- search -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>search</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="search"
                      size="28"
                    />
                  </dd>
                </dl>
                <!-- search -->
              </div>
            </li>
            <li>
              <h4>search (32x32)</h4>
              <div class="icons">
                <!-- search -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>search</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="search"
                      size="32"
                    />
                  </dd>
                </dl>
                <!-- search2 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>search2</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="search2"
                      size="32"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>setup (20x20)</h4>
              <div class="icons">
                <!-- setup -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>setup</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="setup"
                      size="20"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>setup(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="setup"
                      size="20"
                      color="white"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>setup(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="setup"
                      size="20"
                      color="gray"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>setup(gr2)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="setup"
                      size="20"
                      color="gr2"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>setup (24x24)</h4>
              <div class="icons">
                <!-- setup -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>setup</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="setup"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>setup2 (24x24)</h4>
              <div class="icons">
                <!-- setup2 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>setup2</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="setup2"
                      size="24"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>setup2(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="setup2"
                      size="24"
                      color="white"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>share (20x20)</h4>
              <div class="icons">
                <!-- share -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>share</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="share"
                      size="20"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>share (24x24)</h4>
              <div class="icons">
                <!-- share -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>share</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="share"
                      size="24"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>share(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="share"
                      size="24"
                      color="white"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>share(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="share"
                      size="24"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>share2 (24x24)</h4>
              <div class="icons">
                <!-- share -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>share2</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="share2"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>shinhan (80x80)</h4>
              <div class="icons">
                <!-- shinhan -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>shinhan</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="shinhan"
                      size="80"
                      color="white"
                      png
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>shop2 (16x16)</h4>
              <div class="icons">
                <!-- shop2 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>shop2</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="shop2"
                      size="16"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>shop2(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="shop2"
                      size="16"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>shopping (24x24)</h4>
              <div class="icons">
                <!-- shopping -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>shopping</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="shopping"
                      size="24"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>shopping(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="shopping"
                      size="24"
                      color="white"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>shopping2 (24x24)</h4>
              <div class="icons">
                <!-- shopping2 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>shopping2</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="shopping2"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>siren (24x24)</h4>
              <div class="icons">
                <!-- siren -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>siren</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="siren"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>siren (40x40)</h4>
              <div class="icons">
                <!-- siren -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>siren</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="siren"
                      size="40"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>siren2 (24x24)</h4>
              <div class="icons">
                <!-- siren -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>siren</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="siren2"
                      size="24"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>siren</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="siren2"
                      size="24"
                      color="red"
                    />
                  </dd>
                </dl>
              </div>
            </li>

            <li>
              <h4>siren2 (20x20)</h4>
              <div class="icons">
                <!-- siren2 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>siren2</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="siren2"
                      size="20"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>sort (12x12)</h4>
              <div class="icons">
                <!-- sort -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>sort</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="sort"
                      size="12"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>star (12x12)</h4>
              <div class="icons">
                <!-- star -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>star</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="star"
                      size="12"
                      png
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>star (24x24)</h4>
              <div class="icons">
                <!-- star -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>star(pink)<br>icon_24_event 동일</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="star"
                      size="24"
                      color="pink"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>star2(blue)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="star2"
                      size="24"
                      color="blue"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>star2(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="star2"
                      size="24"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>star2 (16x16)</h4>
              <div class="icons">
                <!-- star2 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>star2(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="star2"
                      size="16"
                      color="gray"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>star2(blue)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="star2"
                      size="16"
                      color="blue"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>star2(gold)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="star2"
                      size="16"
                      color="gold"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>star3 (20x20)</h4>
              <div class="icons">
                <!-- star3 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>star3</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="star3"
                      size="20"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>system (16x16)</h4>
              <div class="icons">
                <!-- system -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>system</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="system"
                      size="16"
                    />
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
          <!-- // S -->
          <!-- T -->
          <ul class="icons-list">
            <li>
              <h4>time (16x16)</h4>
              <div class="icons">
                <!-- time -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>time</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="time"
                      size="16"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>time(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="time"
                      size="16"
                      color="white"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>time (18x18)</h4>
              <div class="icons">
                <!-- time -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>time</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="time"
                      size="18"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>time (20x20)</h4>
              <div class="icons">
                <!-- time -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>time</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="time"
                      size="20"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>time(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="time"
                      size="20"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>time (24x24)</h4>
              <div class="icons">
                <!-- time -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>time</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="time"
                      size="24"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>time(active)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="time"
                      size="24"
                      active="active"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>time(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="time"
                      size="24"
                      color="white"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>time(white,active)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="time"
                      size="24"
                      color="white"
                      active="active"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>tip (16x16)</h4>
              <div class="icons">
                <!-- tip -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>tip</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="tip"
                      size="16"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>tip(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="tip"
                      size="16"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>tip (24x24)</h4>
              <div class="icons">
                <!-- tip -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>tip</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="tip"
                      size="24"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>tip(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="tip"
                      size="24"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>touchpay (24x24)</h4>
              <div class="icons">
                <!-- touchpay -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>touchpay</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="touchpay"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
          <!-- // T -->
          <!-- U -->
          <ul class="icons-list">
            <li>
              <h4>user (24x24)</h4>
              <div class="icons">
                <!-- user -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>user</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="user"
                      size="24"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>user(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="user"
                      size="24"
                      color="white"
                    />
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
          <!-- // U -->
          <!-- V -->
          <ul class="icons-list">
            <li>
              <h4>view (24x24)</h4>
              <div class="icons">
                <!-- view -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>video</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="video"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>view (16x16)</h4>
              <div class="icons">
                <!-- view -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>view</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="view"
                      size="16"
                    />
                  </dd>
                </dl>
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>view(white)</span>
                  </dt>
                  <dd class="bg">
                    <uu-icon
                      icon="view"
                      size="16"
                      color="white"
                    />
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
          <!-- // V -->
          <!-- W -->
          <ul class="icons-list">
            <li>
              <h4>warning (24x24)</h4>
              <div class="icons">
                <!-- warning -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>warning</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="warning"
                      size="24"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>warning2 (40x40)</h4>
              <div class="icons">
                <!-- warning2 -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>warning2</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="warning2"
                      size="40"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>withdraw (16x16)</h4>
              <div class="icons">
                <!-- withdraw -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>withdraw(gray)</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="withdraw"
                      size="16"
                      color="gray"
                    />
                  </dd>
                </dl>
              </div>
            </li>
            <li>
              <h4>wallet (56x56)</h4>
              <div class="icons">
                <!-- wallet -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>wallet</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="wallet"
                      size="56"
                      png
                    />
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
          <!-- // W -->
          <!-- Y -->
          <ul class="icons-list">
            <li>
              <h4>yearendtax (28x28)</h4>
              <div class="icons">
                <!-- yearendtax -->
                <dl
                  class="icon-wrap"
                >
                  <dt>
                    <span>yearendtax</span>
                  </dt>
                  <dd>
                    <uu-icon
                      icon="yearendtax"
                      size="28"
                    />
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'
export default {
  mounted () {
    Prism.highlightAll()
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/guide.scss";
  .overview-title {
    font-size: 2rem;
  }
  .icons-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
  }
  .icons {
    display: flex;
    flex-wrap: wrap;
    @media(min-width: 415px) {
      flex-wrap: inherit;
    }
    dl {
      display: flex;
      flex-flow: column;
      // flex: 0 1 10rem;
      min-width: 10rem;
      min-height: 10rem;
      margin: 0 .8rem 1rem 0;
      border: 1px solid #ccc;
      dt {
        order: 1;
        text-align: center;
        border-top: 1px solid #ccc;
        padding-top: .3rem;
      }
      dd {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 8.8rem;
        text-align: center;
        &.bg {
          background: #333;
        }
        span {
          box-sizing: content-box;
          border: 1px dashed #ffa8b5;
          +span {margin-left:-1px}
        }
      }
    }
  }
</style>
