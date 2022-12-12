<template>
  <div class="item">
    <a :href="href">{{ href }}</a>
    <p class="item__title" v-if="filename">{{ filename }}</p>
    <p v-if="description" class="description">- {{ description }}</p>
  </div>
</template>

<script setup>
const porps = defineProps({
  href: {
    type: String,
  },
  description: {
    type: String,
  },
  filename: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  padding: 20px 20px;
  flex-direction: row;
  gap: 10px;
  background: rgb(230, 230, 230);
  border-radius: 12px;
  flex-wrap: wrap;

  &__title {
    font-size: 16px;
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  a {
    color: rgb(0, 104, 173);
  }
}
</style>

// { title: "", hrefs: [{ href: "", description: "" }], },
