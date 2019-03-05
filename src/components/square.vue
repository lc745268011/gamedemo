<template>
<div>
 <div class="square" @click="handleclick">
   {{name}}
 </div>
</div>

</template>
<script>
export default {
  name: 'square',
  data () {
    return {
      name: ''
    }
  },
  props: ['isnextX', 'id', 'winner'],
  methods: {
    handleclick () {
      if (this.name === '' && this._props.winner === '') {
        if (this._props.isnextX) {
          this.name = 'X'
          // this.isnextx = false
          this.$emit('changenext', false, this._props.id)
        } else {
          this.name = 'O'
          // this.isnextx = true
          this.$emit('changenext', true, this._props.id)
        }
      }
    }
  }
}
</script>
