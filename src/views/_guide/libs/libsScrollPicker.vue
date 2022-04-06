<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>ScrollPicker</h3>
          <br>
          <p>
            <a
              href="https://github.com/wan2land/vue-scroll-picker/tree/0.x-vue2"
              target="_blank"
            >참고) https://github.com/wan2land/vue-scroll-picker/tree/0.x-vue2</a>
          </p>
          <br>
          <h4>ScrollPicker Default</h4>
          <p>Current value is <strong>{{ currentValue }}</strong></p>
          <div class="view-exam">
            <!-- default -->
            <scroll-picker
              v-model="currentValue"
              :options="options"
            />
            <!-- // default -->
            <h4>ScrollPicker Group</h4>
            <p>Current value is <strong>{{ currentValue1 }}</strong></p>
            <p>Current value is <strong>{{ currentValue2 }}</strong></p>
            <!-- group -->
            <div class="scroll-picker-group">
              <scroll-picker
                v-model="currentValue1"
                :options="options1"
              />
              <scroll-picker
                v-if="currentValue1 === '매주'"
                v-model="currentValue2"
                :options="options2"
              />
              <scroll-picker
                v-else
                v-model="currentValue2"
                :options="options3"
              />
            </div>
            <!-- // group -->
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
&lt;!-- default --&gt;
&lt;scroll-picker
  v-model="currentValue"
  :options="options"
/&gt;
&lt;!-- // default --&gt;

&lt;!-- group --&gt;
&lt;div class="scroll-picker-group"&gt;
  &lt;scroll-picker
    v-model="currentValue1"
    :options="options1"
  /&gt;
  &lt;scroll-picker
    v-model="currentValue2"
    :options="options2"
  /&gt;
&lt;/div&gt;
&lt;!-- // group --&gt;
              </code>
            </pre>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-js">
import { ScrollPicker } from 'vue-scroll-picker'
import 'vue-scroll-picker/dist/style.css'
export default {
  components: {
    ScrollPicker
  },
  data () {
    return {
      options: [
        { value: 'instagram', name: 'instagram' },
        { value: 'facebook', name: 'facebook' },
        { value: 'youtube', name: 'youtube' },
        { value: 'twitter', name: 'twitter' },
        { value: 'line', name: 'line' }
      ],
      options1: [
        { value: '매월', name: '매월' },
        { value: '매주', name: '매주' }
      ],
      options2: [
        { value: '일요일', name: '일요일' },
        { value: '월요일', name: '월요일' },
        { value: '화요일', name: '화요일' },
        { value: '수요일', name: '수요일' },
        { value: '목요일', name: '목요일' }
      ],
      currentValue: null,
      currentValue1: null,
      currentValue2: null
    }
  },
  methods: {
    change (value) {}
  }
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
import 'prismjs/themes/prism.css'
// https://github.com/wan2land/vue-scroll-picker/tree/0.x-vue2
import { ScrollPicker } from 'vue-scroll-picker'
import 'vue-scroll-picker/dist/style.css'
export default {
  components: {
    ScrollPicker
  },
  data () {
    return {
      options: [
        { value: 'instagram', name: 'instagram' },
        { value: 'facebook', name: 'facebook' },
        { value: 'youtube', name: 'youtube' },
        { value: 'twitter', name: 'twitter' },
        { value: 'line', name: 'line' }
      ],
      options1: [
        { value: '매월', name: '매월' },
        { value: '매주', name: '매주' }
      ],
      options2: [
        { value: '일요일', name: '일요일' },
        { value: '월요일', name: '월요일' },
        { value: '화요일', name: '화요일' },
        { value: '수요일', name: '수요일' },
        { value: '목요일', name: '목요일' }
      ],
      options3: [
        { value: '1월', name: '1월' },
        { value: '2월', name: '2월' },
        { value: '3월', name: '3월' },
        { value: '4월', name: '4월' },
        { value: '5월', name: '5월' },
        { value: '6월', name: '6월' },
        { value: '7월', name: '7월' }
      ],
      currentValue: null,
      currentValue1: null,
      currentValue2: null
    }
  },
  mounted () {
    Prism.highlightAll()
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/guide.scss";
</style>
