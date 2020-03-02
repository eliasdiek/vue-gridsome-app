<template>
  <v-container class="cases-labels-section margin-cases-labels">
    <div
      class="quarry-label-wrapper"
      :class="{ 'is-selected': selected === 'all' }"
      @click="onChange('all')"
    >
      <span class="quarry-label all">ALL</span>
    </div>
    <div
      v-for="{ node } in categories"
      class="quarry-label-wrapper"
      :key="node.slug"
      :class="{ 'is-selected': node.id === selected }"
      @click="onChange(node.id)"
    >
      <span class="quarry-label" :class="node.slug">{{ node.title }}</span>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: []
    },
    selected: {
      type: String,
      default: "all"
    },
    onChange: {
      type: Function
    }
  }
};
</script>
