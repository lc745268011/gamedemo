<template>
  <div id="game">
    <board></board>
  </div>
</template>
<script>
import board from '../../components/board'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  components: { board }
}
</script>
<style>
.square {
  width: 50px;
  height: 50px;
  float: left;
  border: 1px solid #000;
  margin: -1px -1px 0 0
}
.board:after {
  clear: both;
  content: "";
  display: table;
}
</style>
