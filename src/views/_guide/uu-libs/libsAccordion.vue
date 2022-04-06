<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12 view-exam">
          <!-- Accordion -->
          <h3>fOR문 사용 : 하나만 오픈</h3>
          <section class="view-section">
            <uu-accordion>
              <uu-accordionitem
                v-for="(item, index) in accordion"
                :key="index"
                :active="item.active"
              >
                <template v-slot:accordion-header>
                  <div>
                    <span class="title">{{ item.title }}</span>
                  </div>
                </template>
                <template v-slot:accordion-content>
                  <div style="height:100px; background-color:lightgray">
                    {{ item.content }}
                  </div>
                </template>
              </uu-accordionitem>
            </uu-accordion>
          </section>
        </div>
        <div class="col-12 view-code">
          <pre class="language-markup">
            <code>
  &lt;!-- template 영역은 디자인에 따라 바꿔 넣으면 됨 --&gt;

  &lt;!-- uu-accordion 옵션 'type'추가 가능--&gt;

  &lt;!-- accordionitem 옵션
    mulltiple(여러개 오픈) || hasbtn(화살표만 버튼영역) || arrowgray(화살표 아이콘 닫혔을때 회색->열렸을때 검정 )
    :active="item.active"(for문 사용일 경우 한개 미리 오픈) || active (for문 사용하지 않을 경우 한개 미리 오픈)
  --&gt;

  &lt;uu-accordion&gt;
    &lt;uu-accordionitem
      v-for="(item, index) in accordion"
      :key="index"
      :active="item.active"
    &gt;
      &lt;template v-slot:accordion-header&gt;
        &lt;div&gt;
          &lt;span class="title"&gt; &#123; &#123; item.title &#125; &#125; &lt;/span&gt;
        &lt;/div&gt;
      &lt;/template&gt;
      &lt;template v-slot:accordion-content&gt;
        &lt;div style="height:100px; background-color:lightgray"&gt;
          &#123; &#123; item.content &#125; &#125;
        &lt;/div&gt;
      &lt;/template&gt;
    &lt;/uu-accordionitem&gt;
  &lt;/uu-accordion&gt;

  export default &#123;
    data &#40;&#41; &#123;
      return &#123;
        accordion: &#91;
          &#123;
            title: '제목1',
            content: '내용입니다1',
            active: true
          &#125;,
          &#123;
            title: '제목2',
            content: '내용입니다2',
            active: false
          &#125;,
          &#123;
            title: '제목3',
            content: '내용입니다3',
            active: false
          &#123;
        &#93;
      &#125;
    &#125;
  &#125;
            </code>
          </pre>
        </div>
      </div>
      <div class="row">
        <div class="col-12 view-exam">
          <!-- Accordion : Multiple-->
          <h3>fOR문 사용 : 여러개 오픈 </h3>
          <section class="view-section">
            <uu-accordion>
              <uu-accordionitem
                v-for="(item, index) in accordion"
                :key="index"
                :active="item.active"
                multiple
              >
                <template v-slot:accordion-header>
                  <div>
                    <span class="title">{{ item.title }}</span>
                  </div>
                </template>
                <template v-slot:accordion-content>
                  <div style="height:100px; background-color:lightgray">
                    {{ item.content }}
                  </div>
                </template>
              </uu-accordionitem>
            </uu-accordion>
          </section>
        </div>
        <div class="col-12 view-code">
          <pre class="language-markup">
            <code>
  &lt;!-- template 영역은 디자인에 따라 바꿔 넣으면 됨 --&gt;

  &lt;!-- uu-accordion 옵션 'type'추가 가능--&gt;

  &lt;!-- accordionitem 옵션
    mulltiple(여러개 오픈) || hasbtn(화살표만 버튼영역) || arrowgray(화살표 아이콘 닫혔을때 회색->열렸을때 검정 )
    :active="item.active"(for문 사용일 경우 한개 미리 오픈) || active (for문 사용하지 않을 경우 한개 미리 오픈)
  --&gt;

  &lt;uu-accordion&gt;
    &lt;uu-accordionitem
      v-for="(item, index) in accordion"
      :key="index"
      :active="item.active"
      multiple
    &gt;
      &lt;template v-slot:accordion-header&gt;
        &lt;div&gt;
          &lt;span class="title"&gt; &#123; &#123; item.title &#125; &#125; &lt;/span&gt;
        &lt;/div&gt;
      &lt;/template&gt;
      &lt;template v-slot:accordion-content&gt;
        &lt;div style="height:100px; background-color:lightgray"&gt;
          &#123; &#123; item.content &#125; &#125;
        &lt;/div&gt;
      &lt;/template&gt;
    &lt;/uu-accordionitem&gt;
  &lt;/uu-accordion&gt;

  export default &#123;
    data &#40;&#41; &#123;
      return &#123;
        accordion: &#91;
          &#123;
            title: '제목1',
            content: '내용입니다1',
            active: true
          &#125;,
          &#123;
            title: '제목2',
            content: '내용입니다2',
            active: false
          &#125;,
          &#123;
            title: '제목3',
            content: '내용입니다3',
            active: false
          &#123;
        &#93;
      &#125;
    &#125;
  &#125;
            </code>
          </pre>
        </div>
      </div>
      <div class="row">
        <div class="col-12 view-exam">
          <!-- Accordion-->
          <h3>fOR문 사용 X : 하나만 오픈</h3>
          <section class="view-section">
            <uu-accordion>
              <uu-accordionitem active>
                <template v-slot:accordion-header>
                  <div>
                    <span class="title">제목1</span>
                  </div>
                </template>
                <template v-slot:accordion-content>
                  <div style="height:100px; background-color:#ddd">
                    내용입니다1.
                  </div>
                </template>
              </uu-accordionitem>
              <uu-accordionitem disabled>
                <template v-slot:accordion-header>
                  <div>
                    <span class="title">제목2 (disabled)</span>
                  </div>
                </template>
                <template v-slot:accordion-content>
                  <div style="height:100px; background-color:#f9f3f3">
                    내용입니다2.
                  </div>
                </template>
              </uu-accordionitem>
              <uu-accordionitem>
                <template v-slot:accordion-header>
                  <div>
                    <span class="title">제목3</span>
                  </div>
                </template>
                <template v-slot:accordion-content>
                  <div style="height:100px; background-color:#f7d9d9">
                    내용입니다3.
                  </div>
                </template>
              </uu-accordionitem>
              <uu-accordionitem>
                <template v-slot:accordion-header>
                  <div>
                    <span class="title">제목4</span>
                  </div>
                </template>
                <template v-slot:accordion-content>
                  <div style="height:100px; background-color:#f25287">
                    내용입니다4.
                  </div>
                </template>
              </uu-accordionitem>
            </uu-accordion>
          </section>
        </div>
        <div class="col-12 view-code">
          <pre class="language-markup">
            <code>
    &lt;!-- template 영역은 디자인에 따라 바꿔 넣으면 됨 --&gt;

    &lt;!-- uu-accordion 옵션 'type'추가 가능--&gt;

    &lt;!-- accordionitem 옵션
      mulltiple(여러개 오픈) || hasbtn(화살표만 버튼영역) || arrowgray(화살표 아이콘 닫혔을때 회색->열렸을때 검정 )
      :active="item.active"(for문 사용일 경우 한개 미리 오픈) || active (for문 사용하지 않을 경우 한개 미리 오픈)
    --&gt;

    &lt;uu-accordion&gt;
      &lt;uu-accordionitem active&gt;
        &lt;template v-slot:accordion-header&gt;
          &lt;div&gt;
            &lt;span class="title"&gt; 제목1 &lt;/span&gt;
          &lt;/div&gt;
        &lt;/template&gt;
        &lt;template v-slot:accordion-content&gt;
          &lt;div style="height:100px; background-color:#ddd"&gt;
            내용입니다1.
          &lt;/div&gt;
        &lt;/template&gt;
      &lt;/uu-accordionitem&gt;
      &lt;uu-accordionitem disabled&gt;
        &lt;template v-slot:accordion-header&gt;
          &lt;div&gt;
            &lt;span class="title"&gt; 제목2 제목2 (disabled)&lt;/span&gt;
          &lt;/div&gt;
        &lt;/template&gt;
        &lt;template v-slot:accordion-content&gt;
          &lt;div style="height:100px; background-color:#f9f3f3"&gt;
            내용입니다2.
          &lt;/div&gt;
        &lt;/template&gt;
      &lt;/uu-accordionitem&gt;
    &lt;/uu-accordion&gt;
            </code>
          </pre>
        </div>
      </div>
      <div class="row">
        <div class="col-12 view-exam">
          <!-- Accordion-->
          <h3>fOR문 사용 X : 여러개 오픈</h3>
          <section class="view-section">
            <uu-accordion>
              <uu-accordionitem
                active
                multiple
              >
                <template v-slot:accordion-header>
                  <div>
                    <span class="title">제목1</span>
                  </div>
                </template>
                <template v-slot:accordion-content>
                  <div style="height:100px; background-color:#ddd">
                    내용입니다1.
                  </div>
                </template>
              </uu-accordionitem>
              <uu-accordionitem multiple>
                <template v-slot:accordion-header>
                  <div>
                    <span class="title">제목2</span>
                  </div>
                </template>
                <template v-slot:accordion-content>
                  <div style="height:100px; background-color:#f9f3f3">
                    내용입니다2.
                  </div>
                </template>
              </uu-accordionitem>
              <uu-accordionitem multiple>
                <template v-slot:accordion-header>
                  <div>
                    <span class="title">제목3</span>
                  </div>
                </template>
                <template v-slot:accordion-content>
                  <div style="height:100px; background-color:#f7d9d9">
                    내용입니다3.
                  </div>
                </template>
              </uu-accordionitem>
              <uu-accordionitem multiple>
                <template v-slot:accordion-header>
                  <div>
                    <span class="title">제목4</span>
                  </div>
                </template>
                <template v-slot:accordion-content>
                  <div style="height:100px; background-color:#f25287">
                    내용입니다4.
                  </div>
                </template>
              </uu-accordionitem>
            </uu-accordion>
          </section>
        </div>
        <div class="col-12 view-code">
          <pre class="language-markup">
            <code>
  &lt;!-- template 영역은 디자인에 따라 바꿔 넣으면 됨 --&gt;

  &lt;!-- accordionitem 옵션
    mulltiple(여러개 오픈) || hasbtn(화살표만 버튼영역) || arrowgray(화살표 아이콘 닫혔을때 회색->열렸을때 검정 )
    :active="item.active"(for문 사용일 경우 한개 미리 오픈) || active (for문 사용하지 않을 경우 한개 미리 오픈)
  --&gt;

  &lt;uu-accordion&gt;
    &lt;uu-accordionitem
      active
      multiple
    &gt;
      &lt;template v-slot:accordion-header&gt;
        &lt;div&gt;
          &lt;span class="title"&gt; 제목1 &lt;/span&gt;
        &lt;/div&gt;
      &lt;/template&gt;
      &lt;template v-slot:accordion-content&gt;
        &lt;div style="height:100px; background-color:#ddd"&gt;
          내용입니다1.
        &lt;/div&gt;
      &lt;/template&gt;
    &lt;/uu-accordionitem&gt;
    &lt;uu-accordionitem multiple&gt;
      &lt;template v-slot:accordion-header&gt;
        &lt;div&gt;
          &lt;span class="title"&gt; 제목2  &lt;/span&gt;
        &lt;/div&gt;
      &lt;/template&gt;
      &lt;template v-slot:accordion-content&gt;
        &lt;div style="height:100px; background-color:#f9f3f3"&gt;
          내용입니다2.
        &lt;/div&gt;
      &lt;/template&gt;
    &lt;/uu-accordionitem&gt;
  &lt;/uu-accordion&gt;
            </code>
          </pre>
        </div>
      </div>
      <div class="row">
        <div class="col-12 view-exam">
          <!-- Accordion-->
          <h3>type2</h3>
          <section class="view-section">
            <uu-accordion type="type2">
              <uu-accordionitem active>
                <template v-slot:accordion-header>
                  <div>
                    <span class="title"> 제목1 </span>
                  </div>
                </template>
                <template v-slot:accordion-content>
                  <div style="height:100px; background-color:#ddd">
                    내용입니다1.
                  </div>
                </template>
              </uu-accordionitem>
              <uu-accordionitem>
                <template v-slot:accordion-header>
                  <div>
                    <span class="title"> 제목2</span>
                  </div>
                </template>
                <template v-slot:accordion-content>
                  <div style="height:100px; background-color:#f9f3f3">
                    내용입니다2.
                  </div>
                </template>
              </uu-accordionitem>
            </uu-accordion>
          </section>
        </div>
        <div class="col-12 view-code">
          <pre class="language-markup">
            <code>
  &lt;!-- template 영역은 디자인에 따라 바꿔 넣으면 됨 --&gt;

  &lt;!-- uu-accordion 옵션 'type'추가 가능--&gt;

  &lt;!-- accordionitem 옵션
    mulltiple(여러개 오픈) || hasbtn(화살표만 버튼영역) || arrowgray(화살표 아이콘 닫혔을때 회색->열렸을때 검정 )
    :active="item.active"(for문 사용일 경우 한개 미리 오픈) || active (for문 사용하지 않을 경우 한개 미리 오픈)
  --&gt;

  &lt;uu-accordion type="type2"&gt;
    &lt;uu-accordionitem active&gt;
      &lt;template v-slot:accordion-header&gt;
        &lt;div&gt;
          &lt;span class="title"&gt; 제목1 &lt;/span&gt;
        &lt;/div&gt;
      &lt;/template&gt;
      &lt;template v-slot:accordion-content&gt;
        &lt;div style="height:100px; background-color:#ddd"&gt;
          내용입니다1.
        &lt;/div&gt;
      &lt;/template&gt;
    &lt;/uu-accordionitem&gt;
    &lt;uu-accordionitem&gt;
      &lt;template v-slot:accordion-header&gt;
        &lt;div&gt;
          &lt;span class="title"&gt; 제목2&lt;/span&gt;
        &lt;/div&gt;
      &lt;/template&gt;
      &lt;template v-slot:accordion-content&gt;
        &lt;div style="height:100px; background-color:#f9f3f3"&gt;
          내용입니다2.
        &lt;/div&gt;
      &lt;/template&gt;
    &lt;/uu-accordionitem&gt;
  &lt;/uu-accordion&gt;
            </code>
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'
export default {
  data () {
    return {
      active: true,
      accordion: [
        {
          title: '제목1',
          content: '내용입니다1',
          active: true
        },
        {
          title: '제목2',
          content: '내용입니다2',
          active: false
        },
        {
          title: '제목3',
          content: '내용입니다3',
          active: false
        }
      ]
    }
  },
  mounted () {
    Prism.highlightAll()
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/guide.scss";
</style>
