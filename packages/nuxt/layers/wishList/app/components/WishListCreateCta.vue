<template>
  <MkButton
    variant="outline" @click="async () => {
      await execute({
        data: {
          id: props.eventId,
        },
      });
      emit('created');
    }"
  >
    Créer ma liste
  </MkButton>
</template>

<script lang="ts" setup>
interface Props {
  eventId: string;
}

interface Emits {
  created: [];
}

const props = defineProps<Props>();

const emit = defineEmits<Emits>();

const { execute } = useCreateWishList();
</script>
