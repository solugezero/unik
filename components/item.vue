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
  height: 40px;
  align-items: center;
  padding: 0px 20px;
  flex-direction: row;
  gap: 10px;
  background: rgb(230, 230, 230);
  border-radius: 12px;

  &__title {
    font-size: 16px;
    font-weight: 500;
  }

  a {
    color: rgb(0, 104, 173);
  }
}
</style>

// { title: "", hrefs: [{ href: "", description: "" }], },
