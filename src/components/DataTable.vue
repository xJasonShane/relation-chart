<template>
  <!-- 添加虚拟滚动 -->
  <RecycleScroller
    class="scroller"
    :items="largeDataSet"
    :item-size="54"
    key-field="id"
  >
    <template v-slot="{ item }">
      <!-- 表格行内容 -->
    </template>
  </RecycleScroller>
</template>

<script>
import { RecycleScroller } from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';

export default {
  components: {
    RecycleScroller
  },
  // ... existing logic ...
}
</script>