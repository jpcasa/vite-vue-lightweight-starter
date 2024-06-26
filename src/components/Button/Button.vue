<script lang="ts" setup>
interface Props {
  type: 'info' | 'success' | 'warning' | 'danger' | 'primary';
  text?: string | null;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  text: 'Click me',
  disabled: false
});
</script>

<template lang="pug">
button(:class="props.type")
  p(v-if="props.text") {{ props.text }}
  slot(v-else)
</template>

<style lang="postcss" scoped></style>
