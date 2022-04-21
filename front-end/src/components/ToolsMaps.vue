<template>
    <div class="main-view">
        <div class="grid-view">
          <select v-model="selectedMap" class="form-select" aria-label="Default select example">
                  <option value="brook" selected>Brook's Edge</option>
                  <option value="clown">Clowning Around</option>
                  <option value="yacht" >Yacht-zee</option>
           </select>
        </div>
        <div v-show="showBrook"  class="grid-view">
            <img src="/images/brooks-edge.png"/>
        </div>
        <div class="grid-view" v-show="showYacht">
        <img class="grid-image" src="/images/yacht1.jpg"/>
        <img class="grid-image" v-show="showYacht" src="/images/yacht2.jpg"/>
        <img class="grid-image" v-show="showYacht" src="/images/yacht3.jpg"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ToolsMaps',
  data: function() {
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
     }

     .grid-view {
         max-width: 100%;
     }

</style>