import Vue from 'vue'
import Component from 'vue-class-component'
import WithRender from './Lyric.html?style=./Lyric.scss'

import { Prop } from 'vue-property-decorator'

@WithRender
@Component
export class Lyric extends Vue {
  @Prop({ type: String, required: false })
  public lrc: String
}