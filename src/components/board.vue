<template>
<div>
  next :{{next}}<br/>
  winner:{{winner}}
 <div class="board">
    <square :isnextX="isnextX" @changenext='shownext' :id='0' :winner="winner"></square>
    <square :isnextX="isnextX" @changenext='shownext' :id='1' :winner="winner"></square>
    <square :isnextX="isnextX" @changenext='shownext' :id='2' :winner="winner"></square>
  </div>
 <div class="board">
    <square :isnextX="isnextX" @changenext='shownext' :id='3' :winner="winner"></square>
    <square :isnextX="isnextX" @changenext='shownext' :id='4' :winner="winner"></square>
    <square :isnextX="isnextX" @changenext='shownext' :id='5' :winner="winner"></square>
  </div>
 <div class="board">
    <square :isnextX="isnextX" @changenext='shownext' :id='6' :winner="winner"></square>
    <square :isnextX="isnextX" @changenext='shownext' :id='7' :winner="winner"></square>
    <square :isnextX="isnextX" @changenext='shownext' :id='8' :winner="winner"></square>
  </div>
</div>

</template>
<script>
import square from './square'
export default {
  name: 'board',
  data () {
    return {
      next: 'X',
      isnextX: true,
      lines: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ],
      winner: '',
      chooseX: [],
      chooseO: []
    }
  },
  mounted () {
  },
  components: {square},
  methods: {
    shownext (i, id) {
      var that = this
      that.isnextX = i
      console.log(i, id)
      if (i) {
        that.chooseO.push(id)
        for (var m = 0; m < that.lines.length; m++) {
          if (that.chooseO.indexOf(that.lines[m][0]) !== -1 && that.chooseO.indexOf(that.lines[m][1]) !== -1 && that.chooseO.indexOf(that.lines[m][2]) !== -1) {
            that.winner = 'O'
            break
          }
        }
        console.log('chooseO', that.chooseO)
      } else {
        that.chooseX.push(id)
        for (var m1 = 0; m1 < that.lines.length; m1++) {
          if (that.chooseX.indexOf(that.lines[m1][0]) !== -1 && that.chooseX.indexOf(that.lines[m1][1]) !== -1 && that.chooseX.indexOf(that.lines[m1][2]) !== -1) {
            that.winner = 'X'
            break
          }
        }
        console.log('chooseX', that.chooseX)
      }
    }
  }
}
</script>
