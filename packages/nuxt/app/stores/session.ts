type Me = {
  id: string;
  firstName: string | null;
  lastName: string | null;
} | null;

export const useSessionStore = defineStore('session', () => {
  const me = ref<Me>(null);

  const userId = readonly(computed(() => me.value?.id ?? null));

  return { me, userId };
});
