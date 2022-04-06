<template>
  <div class="page-body">
    <div class="container">
      <h3>Overview</h3>
      <ul class="list-dot">
        <li>*<a href="https://splidejs.com/integration-vue-splide/">SPLIDE(https://splidejs.com/integration-vue-splide/)</a> 참고</li>
        <li>option : menu-center 사용시 탭 메뉴 텍스트 가운데 정렬</li>
        <li>option : cont-drag="false" 사용시 컨텐츠 영역 스와이프 막기</li>
        <li>option : active-bar 사용시 active메뉴 자연스럽게 이동 (tab-name="tabName1" 탭이름 지정, :cont-drag="false" 와 같이 사용)</li>
        <li>option : focus="center" 사용시 탭메뉴 중앙이 포커스 (탭메뉴에 스크롤 생길 때 사용)</li>
        <li>기본으로 this.$emit('custom', this.tabmenu)을 보내고 있음. 개발시 참고</li>
      </ul>
      <br>
      <br>
      <div class="row">
        <div class="col-12">
          <!-- Type2 -->
          <h4>Type2</h4>
          <div class="view-exam">
            <uu-tab
              :items="wallet"
              :class="'type2'"
            >
              <!-- slot 영역 -->
              <div
                slot="slide1"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭111<br>
                  탭111<br>
                  탭111<br>
                  탭111<br>
                  탭111<br>
                  탭111<br>
                  탭111<br>
                  탭111<br>
                  탭111<br>
                  탭111<br>
                  탭111<br>
                  탭111<br>
                  탭111<br>
                  탭111<br>
                  탭111<br>
                </div>
              </div>
              <div
                slot="slide2"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭22
                </div>
              </div>
              <div
                slot="slide3"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭3
                </div>
              </div>
              <div
                slot="slide4"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭44444
                </div>
              </div>
            </uu-tab>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;!-- default --&gt;
      &lt;uu-tab :items="wallet" :class="'type2'"&gt;
        &lt;!-- slot 영역 --&gt;
        &lt;div class="tab-slot" slot="slide1"&gt;탭1 내용 자유롭게 입력하기&lt;/div&gt;
        &lt;div class="tab-slot" slot="slide2"&gt;탭2 내용 자유롭게 입력하기&lt;/div&gt;
        &lt;div class="tab-slot" slot="slide3"&gt;탭3 내용 자유롭게 입력하기&lt;/div&gt;
        &lt;div class="tab-slot" slot="slide4"&gt;탭4 내용 자유롭게 입력하기&lt;/div&gt;
      &lt;/uu-tab&gt;
              </code>
              <code class="language-javascript">
      export default {
        data () {
          return {
            wallet: ['카드/계좌', '멤버십', '인증', '부가서비스']
          }
        },
      }
              </code>
            </pre>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-12">
          <!-- Type2 + active-bar -->
          <h4>Type2 + active-bar</h4>
          <div class="view-exam">
            <uu-tab
              :items="wallet"
              :class="'type2'"
              tab-name="type22"
              active-bar
              option="fade"
              :cont-drag="false"
            >
              <!-- slot 영역 -->
              <div
                slot="slide1"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭111<br>
                  탭111<br>
                  탭111<br>
                  탭111<br>
                  탭111<br>
                  탭111<br>
                  탭111<br>
                  탭111<br>
                  탭111<br>
                  탭111<br>
                  탭111<br>
                  탭111<br>
                  탭111<br>
                  탭111<br>
                  탭111<br>
                </div>
              </div>
              <div
                slot="slide2"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭22
                </div>
              </div>
              <div
                slot="slide3"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭3
                </div>
              </div>
              <div
                slot="slide4"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭44444
                </div>
              </div>
            </uu-tab>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;uu-tab
        :items="wallet"
        :class="'type2'"
        tab-name="type22"
        active-bar
        option="fade"
        :cont-drag="false"
      &gt;
        &lt;!-- slot 영역 --&gt;
        &lt;div
          slot="slide1"
          class="tab-slot"
        &gt;
          &lt;div class="tab-content"&gt;
            탭11
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div
          slot="slide2"
          class="tab-slot"
        &gt;
          &lt;div class="tab-content"&gt;
            탭22
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div
          slot="slide3"
          class="tab-slot"
        &gt;
          &lt;div class="tab-content"&gt;
            탭3
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div
          slot="slide4"
          class="tab-slot"
        &gt;
          &lt;div class="tab-content"&gt;
            탭44444
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/uu-tab&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-12">
          <h4>Type4</h4>
          <br>
          <div class="view-exam">
            <uu-tab
              :items="wallet"
              :class="'type4'"
              start="1"
              :cont-drag="false"
            >
              <!-- slot 영역 -->
              <div
                slot="slide1"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭111<br>
                  탭111<br>
                  탭111<br>
                </div>
              </div>
              <div
                slot="slide2"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭22
                </div>
              </div>
              <div
                slot="slide3"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭3
                </div>
              </div>
              <div
                slot="slide4"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭44444
                </div>
              </div>
            </uu-tab>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;uu-tab :items="wallet" :class="'type4'" start="1" option="slide" :cont-drag="false"&gt;
        &lt;!-- slot 영역 --&gt;
        &lt;div class="tab-slot" slot="slide1"&gt;탭1 내용 자유롭게 입력하기&lt;/div&gt;
        &lt;div class="tab-slot" slot="slide2"&gt;탭2 내용 자유롭게 입력하기&lt;/div&gt;
        &lt;div class="tab-slot" slot="slide3"&gt;탭3 내용 자유롭게 입력하기&lt;/div&gt;
        &lt;div class="tab-slot" slot="slide4"&gt;탭4 내용 자유롭게 입력하기&lt;/div&gt;
      &lt;/uu-tab&gt;
              </code>
              <code class="language-javascript">
      export default {
        data () {
          return {
            wallet: ['카드/계좌', '멤버십', '인증', '부가서비스']
          }
        },
      }
              </code>
            </pre>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-12">
          <h4>Type5</h4>
          <br>
          <div class="view-exam">
            <uu-tab
              :items="wallet"
              :class="'type5'"
              start="1"
              :cont-drag="false"
            >
              <!-- slot 영역 -->
              <div
                slot="slide1"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭111<br>
                  탭111<br>
                  탭111<br>
                </div>
              </div>
              <div
                slot="slide2"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭22
                </div>
              </div>
              <div
                slot="slide3"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭3
                </div>
              </div>
              <div
                slot="slide4"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭44444
                </div>
              </div>
            </uu-tab>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;uu-tab :items="wallet" :class="'type5'" start="1" option="slide" :cont-drag="false"&gt;
        &lt;!-- slot 영역 --&gt;
        &lt;div class="tab-slot" slot="slide1"&gt;탭1 내용 자유롭게 입력하기&lt;/div&gt;
        &lt;div class="tab-slot" slot="slide2"&gt;탭2 내용 자유롭게 입력하기&lt;/div&gt;
        &lt;div class="tab-slot" slot="slide3"&gt;탭3 내용 자유롭게 입력하기&lt;/div&gt;
        &lt;div class="tab-slot" slot="slide4"&gt;탭4 내용 자유롭게 입력하기&lt;/div&gt;
      &lt;/uu-tab&gt;
              </code>
              <code class="language-javascript">
      export default {
        data () {
          return {
            wallet: ['카드/계좌', '멤버십', '인증', '부가서비스']
          }
        },
      }
              </code>
            </pre>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-12">
          <h4>Type 6</h4>
          <div class="view-exam">
            <uu-tab
              :items="wallet"
              :class="'type6 gradient'"
              start="1"
              padding-left="2.4rem"
              padding-right="2.4rem"
              focus="center"
            >
              <!-- slot 영역 -->
              <div
                slot="slide1"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭111<br>
                  탭111<br>
                  탭111<br>
                </div>
              </div>
              <div
                slot="slide2"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭22
                </div>
              </div>
              <div
                slot="slide3"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭3
                </div>
              </div>
              <div
                slot="slide4"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭44444
                </div>
              </div>
            </uu-tab>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;!-- 그라데이션 :class="'type6 gradient'" 추가 --&gt;
      &lt;uu-tab :items="wallet" :class="'type6 gradient'" start="1" option="fade" padding-left="2.4rem" padding-right="2.4rem" focus="center"&gt;
        &lt;!-- slot 영역 --&gt;
        &lt;div class="tab-slot" slot="slide1"&gt;탭1 내용 자유롭게 입력하기&lt;/div&gt;
        &lt;div class="tab-slot" slot="slide2"&gt;탭2 내용 자유롭게 입력하기&lt;/div&gt;
        &lt;div class="tab-slot" slot="slide3"&gt;탭3 내용 자유롭게 입력하기&lt;/div&gt;
        &lt;div class="tab-slot" slot="slide4"&gt;탭4 내용 자유롭게 입력하기&lt;/div&gt;
      &lt;/uu-tab&gt;
              </code>
              <code class="language-javascript">
      export default {
        data () {
          return {
            wallet: ['카드/계좌', '멤버십', '인증', '부가서비스']
          }
        },
      }
              </code>
            </pre>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-12">
          <h4>Type 7</h4>
          <div class="view-exam">
            <uu-tab
              :items="wallet"
              :class="'type7'"
              :cont-drag="false"
            >
              <!-- slot 영역 -->
              <div
                slot="slide1"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭111<br>
                  탭111<br>
                  탭111<br>
                </div>
              </div>
              <div
                slot="slide2"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭22
                </div>
              </div>
              <div
                slot="slide3"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭3
                </div>
              </div>
              <div
                slot="slide4"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭44444
                </div>
              </div>
            </uu-tab>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;uu-tab :items="wallet" :class="'type7'" option="slide" :cont-drag="false"&gt;
        &lt;!-- slot 영역 --&gt;
        &lt;div class="tab-slot" slot="slide1"&gt;탭1 내용 자유롭게 입력하기&lt;/div&gt;
        &lt;div class="tab-slot" slot="slide2"&gt;탭2 내용 자유롭게 입력하기&lt;/div&gt;
        &lt;div class="tab-slot" slot="slide3"&gt;탭3 내용 자유롭게 입력하기&lt;/div&gt;
        &lt;div class="tab-slot" slot="slide4"&gt;탭4 내용 자유롭게 입력하기&lt;/div&gt;
      &lt;/uu-tab&gt;
              </code>
              <code class="language-javascript">
      export default {
        data () {
          return {
            wallet: ['카드/계좌', '멤버십', '인증', '부가서비스']
          }
        },
      }
              </code>
            </pre>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-12">
          <h4>통합검색 탭 (type1)</h4>
          <br>
          <div class="view-exam">
            <uu-tab
              :items="search"
              :class="'type1'"
              start="1"
              active-bar
              menu-center
              tab-name="search"
              :cont-drag="false"
            >
              <!-- slot 영역 -->
              <div
                slot="slide1"
                class="tab-slot"
              >
                <div class="tab-content">
                  페이판 탭
                </div>
              </div>
              <div
                slot="slide2"
                class="tab-slot"
              >
                <div class="tab-content">
                  신한카드 탭
                </div>
              </div>
            </uu-tab>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;uu-tab
        :items="search"
        :class="'type1'"
        start="1"
        active-bar
        menu-center
        tab-name="search"
        option="fade"
        :cont-drag="false"
      &gt;
        &lt;!-- slot 영역 --&gt;
        &lt;div
          slot="slide1"
          class="tab-slot"
        &gt;
          &lt;div class="tab-content"&gt;
            페이판 탭
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div
          slot="slide2"
          class="tab-slot"
        &gt;
          &lt;div class="tab-content"&gt;
            신한카드 탭
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/uu-tab&gt;
              </code>
              <code class="language-javascript">
      export default {
        data () {
          return {
            search: [
              {
                name: '페이판',
                count: 14
              },
              {
                name: '신한카드',
                count: 16
              }
            ],
          }
        },
      }
              </code>
            </pre>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-12">
          <h4>Type8</h4>
          <br>
          <div class="view-exam">
            <uu-tab
              tab-name="tabname8"
              active-bar
              menu-center
              start="1"
              :class="'type8'"
              :items="wallet2"
              :menu-drag="false"
              :cont-drag="false"
            >
              <!-- slot 영역 -->
              <div
                slot="slide1"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭111<br>
                </div>
              </div>
              <div
                slot="slide2"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭22
                </div>
              </div>
              <div
                slot="slide3"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭3
                </div>
              </div>
              <div
                slot="slide4"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭44444
                </div>
              </div>
            </uu-tab>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;!-- default --&gt;
      &lt;uu-tab
        tab-name="tabname8"
        active-bar
        menu-center
        start="1"
        :class="'type8'"
        :items="wallet2"
        :menu-drag="false"
        :cont-drag="false"
      &gt;
        &lt;!-- slot 영역 --&gt;
        &lt;div class="tab-slot" slot="slide1"&gt;탭1 내용 자유롭게 입력하기&lt;/div&gt;
        &lt;div class="tab-slot" slot="slide2"&gt;탭2 내용 자유롭게 입력하기&lt;/div&gt;
        &lt;div class="tab-slot" slot="slide3"&gt;탭3 내용 자유롭게 입력하기&lt;/div&gt;
        &lt;div class="tab-slot" slot="slide4"&gt;탭4 내용 자유롭게 입력하기&lt;/div&gt;
      &lt;/uu-tab&gt;
              </code>
              <code class="language-javascript">
      export default {
        data () {
          return {
            wallet2: ['카드/계좌', '멤버십', '인증', '부가']
          }
        },
      }
              </code>
            </pre>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-12">
          <h4>Type8 + lg</h4>
          <br>
          <div class="view-exam">
            <uu-tab
              tab-name="tabname8-lg"
              active-bar
              menu-center
              start="1"
              :class="'type8 lg'"
              :items="wallet3"
              :menu-drag="false"
              :cont-drag="false"
            >
              <!-- slot 영역 -->
              <div
                slot="slide1"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭111<br>
                </div>
              </div>
              <div
                slot="slide2"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭22
                </div>
              </div>
              <div
                slot="slide3"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭3
                </div>
              </div>
            </uu-tab>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;!-- default --&gt;
      &lt;uu-tab
        tab-name="tabname8-lg"
        active-bar
        menu-center
        start="1"
        :class="'type8 lg'"
        :items="wallet3"
        :menu-drag="false"
        :cont-drag="false"
      &gt;
        &lt;!-- slot 영역 --&gt;
        &lt;div class="tab-slot" slot="slide1"&gt;탭1 내용 자유롭게 입력하기&lt;/div&gt;
        &lt;div class="tab-slot" slot="slide2"&gt;탭2 내용 자유롭게 입력하기&lt;/div&gt;
        &lt;div class="tab-slot" slot="slide3"&gt;탭3 내용 자유롭게 입력하기&lt;/div&gt;
      &lt;/uu-tab&gt;
              </code>
              <code class="language-javascript">
      export default {
        data () {
          return {
            wallet3: ['결제', '송금/충전', '대중교통'],
          }
        },
      }
              </code>
            </pre>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-12">
          <h4>Type8 + sm</h4>
          <br>
          <div class="view-exam">
            <uu-tab
              tab-name="tabname8-sm"
              active-bar
              menu-center
              start="1"
              :class="'type8 sm'"
              :items="wallet4"
              :menu-drag="false"
              :cont-drag="false"
            >
              <!-- slot 영역 -->
              <div
                slot="slide1"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭111<br>
                </div>
              </div>
              <div
                slot="slide2"
                class="tab-slot"
              >
                <div class="tab-content">
                  탭22
                </div>
              </div>
            </uu-tab>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;!-- default --&gt;
      &lt;uu-tab
        tab-name="tabname8-sm"
        active-bar
        menu-center
        start="1"
        :class="'type8 sm'"
        :items="wallet4"
        :menu-drag="false"
        :cont-drag="false"
      &gt;
        &lt;!-- slot 영역 --&gt;
        &lt;div class="tab-slot" slot="slide1"&gt;탭1 내용 자유롭게 입력하기&lt;/div&gt;
        &lt;div class="tab-slot" slot="slide2"&gt;탭2 내용 자유롭게 입력하기&lt;/div&gt;
      &lt;/uu-tab&gt;
              </code>
              <code class="language-javascript">
      export default {
        data () {
          return {
            wallet4: ['등록순', '최신순']
          }
        },
      }
              </code>
            </pre>
          </div>
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
      search: [
        {
          name: '페이판',
          count: 14
        },
        {
          name: '신한카드',
          count: 16
        }
      ],
      wallet: ['카드/계좌', '멤버십', '인증', '부가서비스'],
      wallet2: ['결제', '송금/충전', '대중교통', '입출금'],
      wallet3: ['결제', '송금/충전', '대중교통'],
      wallet4: ['등록순', '최신순'],
      names: []
    }
  },
  mounted () {
    Prism.highlightAll()
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/guide.scss";
  .tab-content {
    display: flex;
    justify-content: center;
    font-size: 5rem;
    padding: 2.4rem;
  }
  .view-exam {
    height: 50rem;
  }
</style>
