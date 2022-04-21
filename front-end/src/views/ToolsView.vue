<template>
  <div class="tools" v-bind:style="{ height: showCharts || showConcepts ? 'auto' : '100%' }">
    <div class="tools-nav">
      <a @click="openCharts" :class="[{active : showCharts}]">Charts</a>
      <a @click="openCalculator" :class="[{active : showCalculator}]">Probability</a>
      <a @click="openConcepts" :class="[{active : showConcepts}]">Characters</a>
      <a @click="openMaps" :class="[{active : showMaps}]">Maps</a>
    </div>
    <ToolsCalc  v-show="showCalculator"></ToolsCalc>
    <ToolsCharts v-show="showCharts"></ToolsCharts>
    <ToolsConcepts v-show="showConcepts"></ToolsConcepts>
    <ToolsMaps v-show="showMaps"></ToolsMaps>
  </div>
</template>

<script>
// @ is an alias to /src
import ToolsCalc from '@/components/ToolsCalc.vue'
import ToolsCharts from '@/components/ToolsCharts.vue'
import ToolsConcepts from '@/components/ToolsConcepts.vue'
import ToolsMaps from '@/components/ToolsMaps.vue'

export default {
  name: 'ToolsView',
    data() {
      return {
        activeTool: 'charts',
      }
    },
    components: {
      ToolsCalc,
      ToolsCharts,
      ToolsConcepts,
      ToolsMaps,
    },
    computed: {
      showCalculator() {
        return this.activeTool === 'calculator';
      },
      showCharts() {
        return this.activeTool === 'charts';
      },      
      showConcepts() {
        return this.activeTool === 'concepts';
      },
      showMaps() {
        return this.activeTool === 'maps';
      }
    },
    methods: {
      openCharts() {
        this.activeTool = 'charts';
      },
      openCalculator() {
        this.activeTool = 'calculator';
      },
      openConcepts() {
        this.activeTool = 'concepts';
      },
      openMaps() {
        this.activeTool = 'maps';
      }
    }
}
</script>

<style scoped>

  .tools {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 0;
    background-color: rgba(229,229,229, 0.65);
    flex-direction: column;
    width: 100%;
    position: absolute;
    height: 100vh;
  }

  .concepts {
    height: 100%;
  }

  .tools-nav {
    position: absolute;
    top: 3.75rem;
    background-color: rgba(85, 83, 83, 0.9);
    width: 100%;
    justify-content: space-around;
    z-index: 2;
    height: 2rem;
  }

  a {
    padding: 0 1rem;
  }

  a:hover {
    border: solid white 2px;
    border-radius: 5px;
  }

  .tools-nav:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 900px) {
      a {
        padding: 0 2rem;
      }
  }
</style>
