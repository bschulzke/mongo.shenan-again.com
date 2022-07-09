<template>
  <div class="main-view">
    <div>
      <select v-model="selectedMap" class="form-select" aria-label="Default select example">
        <option value="brook" selected>Brook's Edge</option>
        <option value="clown">Clowning Around</option>
        <option value="yacht">Yacht-zee</option>
      </select>
    </div>
    <div class="images">
      <img v-for="image in selectedMapImages" :src="image.path" :class="image.class" alt="maps" v-bind:key="image"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToolsMaps',
  data: function () {
    return {
      selectedMap: 'brook',
    }
  },
  computed: {
    selectedMapImages() {
      if (this.selectedMap === 'brook') {
        return [
          {
            path: '/images/brooks-edge.png',
            class: 'circus-image'
          }
        ]
      }
      else if (this.selectedMap === 'yacht') {
        return [
          {
            path: '/images/yacht1.jpg',
            class: 'yacht-image'
          },
          {
            path: '/images/yacht2.jpg',
            class: 'yacht-image'
          },
          {
            path: '/images/yacht3.jpg',
            class: 'yacht-image'
          }
        ]
      } else if (this.selectedMap === 'clown') {
        return [
          {
            path: '/images/big-top.png',
            class: 'big-top'
          }
        ]
      }
      else {
        return []
      }
    }
  }
}
</script>

<style scoped>

.main-view {
  height: 100%;
  padding: 30px;
}

.yacht-image {
  width: 400px;
  margin-top: 30px;
}

.yacht-image:not(:last-child) {
  margin-right: 30px;
}

.circus-image {
  width: 800px;
}

.big-top {
  width: 700px;
}

</style>