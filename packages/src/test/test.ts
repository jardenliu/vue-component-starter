/**
 * @name test
 * @author  
 * @createDate 3/8/2019, 5:40:11 PM
 */

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import template from './test.vue'

@Component({
  mixins: [template],
  components: {
  }
})
export default class Test extends Vue {}
