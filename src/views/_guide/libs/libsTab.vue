<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="view-exam">
            <TabWrapper v-model="activeTab">
              <TabList label="Animals">
                <TabActivator tab="dogs">
                  Dogs
                </TabActivator>
                <TabActivator tab="cats">
                  Cats
                </TabActivator>
              </TabList>
              <TabPanel tab="dogs">
                Dogs are pretty cool.  Here's some info about them.
              </TabPanel>
              <TabPanel tab="cats">
                Cats are pretty neat too.  Here's some stuff about them!****
              </TabPanel>
            </TabWrapper>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;TabWrapper v-model="activeTab"&gt;
        &lt;TabList label="Animals"&gt;
          &lt;TabActivator tab="dogs"&gt;
            Dogs
          &lt;/TabActivator&gt;
          &lt;TabActivator tab="cats"&gt;
            Cats
          &lt;/TabActivator&gt;
        &lt;/TabList&gt;

        &lt;TabPanel tab="dogs"&gt;
          Dogs are pretty cool.  Here's some info about them.
        &lt;/TabPanel&gt;
        &lt;TabPanel tab="cats"&gt;
          Cats are pretty neat too.  Here's some stuff about them!****
        &lt;/TabPanel&gt;
      &lt;/TabWrapper&gt;
              </code>
            </pre>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-js">
      import { TabActivator, TabList, TabPanel, TabWrapper } from '@a11y-kit/vue-tabs'
      export default {
        components: { TabActivator, TabList, TabPanel, TabWrapper },
        data () {
          return {
            activeTab: 'dogs'
          }
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
// https://www.npmjs.com/package/@a11y-kit/vue-tabs
import { TabActivator, TabList, TabPanel, TabWrapper } from '@a11y-kit/vue-tabs'
// import '@a11y-kit/vue-tabs/styles/simple.css'
export default {
  components: { TabActivator, TabList, TabPanel, TabWrapper },
  data () {
    return {
      activeTab: 'dogs'
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
