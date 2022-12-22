<template>
  <div class="GameStartButton pos-a"
       v-if="show"
       style="left: 0;right: 0"
       :style="{top: top+'px'}"
  >
    <div class="pa-sm cursor-p restart-button"
         @click="$emit('click')"
    >
      {{ ready ? '点击重新开始' : readyText }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameStartButton',
  mixins: [],
  components: {},
  props: {
    show: {
      default: false,
    },
    top: {
      default: 100,
    },
    ready: {
      default: true,
    },
    readyText: {
      default: '加载中...'
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  beforeDestroy() {
  },
  activated() {
  },
  deactivated() {
  },
  methods: {}
};
</script>

<style scoped lang="less">
.GameStartButton {

}

.restart-button {
  background-color: #fff;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  width: 120px;
  text-align: center;
  border: 3px solid #000;
  font-weight: bold;
}
</style>
