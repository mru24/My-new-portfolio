<template>
  <div>
    <div class="container">
      <div class="about">
        <h1>Under construction..</h1>
      </div>
    </div>
    <transition>
      <div class="socialLinks" v-if="el5">
        <social />
      </div>
    </transition>
  </div>
</template>

<script>
// import work from './work'
import social from './social'
export default {
  components: {
    social
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="sass" scoped>
@import 'config'

.container
  display: flex
  justify-content: center
  align-items: center
  .about
    width: 100%
    height: 60vh
    position: relative
    h1, h6
      font-weight: 200
  .socialLinks
    position: fixed
    bottom: 2%
    left: 50%
    transform: translateX(-50%)

@include bp-mobileSM
  .container
    .about
      display: flex
      flex-direction: column
      justify-content: center
      padding-top: 20%
      height: auto
      h1, h6
        text-align: center
      .mainTitle
        display: flex
        flex-direction: column
        justify-content: center
        .image
          width: 140px
          height: 140px
          margin: auto
          img
        h1
          margin-top: 10px
          font-size: 26px
      h6
        font-size: 14px
      .info
        margin: auto
        margin-top: 30px
        p
          margin: 10px
          font-size: 16px
        span
          color: yellow
          font-size: 14px
        p:hover ~ span
          top: -20px
    .skills
      width: 100%
      margin-top: 5%
    .socialLinks
      position: fixed
      top: 2%
      left: 25%

.v-enter-active, .v-leave-active
  transition: all 1s
.v-enter, .v-leave-to
  opacity: 0
  transform: translateY(40px)

</style>
