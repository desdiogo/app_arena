<template>
  <Link :href="href" class="block text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition">
    <slot></slot>
  </Link>
</template>

<script>
import { defineComponent } from 'vue';
import { Link } from '@inertiajs/inertia-vue3';

export default defineComponent({
  components: {
    Link,
  },
  props: {
    href: {
      type: String,
      required: true
    }
  }
})
</script>
