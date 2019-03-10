/**
 * @name App
 * @author
 * @createDate 3/8/2019, 5:14:19 PM
 */

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import template from './App.vue'
import Test from 'my-component'

@Component({
  mixins: [template],
  components: {
    Test
  }
})
export default class App extends Vue {}
