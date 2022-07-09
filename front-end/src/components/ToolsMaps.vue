<template>
  <div class="main-view">
    <div>
      <select v-model="selectedMap" class="form-select" aria-label="Default select example">
        <option value="brook" selected>Brook's Edge</option>
        <option value="clown">Clowning Around</option>
        <option value="yacht">Yacht-zee</option>
      </select>
    </div>
    <div v-show="showBrook">
      <img class="circus-image" src="/images/brooks-edge.png" alt="brook's edge"/>
    </div>
    <div v-show="showYacht">
      <img class="yacht-image" src="/images/yacht1.jpg" alt="yacht image"/>
      <img class="yacht-image" v-show="showYacht" src="/images/yacht2.jpg" alt="yacht image"/>
      <img class="yacht-image" v-show="showYacht" src="/images/yacht3.jpg" alt="yacht image"/>
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
    showBrook() {
      return this.selectedMap === 'brook';
    },
    showClown() {
      return this.selectedMap === 'clown';
    },
    showYacht() {
      return this.selectedMap === 'yacht';
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

</style>