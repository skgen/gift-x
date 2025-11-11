<template>
  <MkCard class="sk-WishMiniature sk-WishMiniaturePlaceholder" data-hash>
    <div class="sk-WishMiniature-content">
      <MkSkeleton width="80px" height="80px" type="placeholder" density="high" />
      <MkSkeleton width="200px" height="20px" type="placeholder" density="high" />
    </div>

    <div class="sk-WishMiniature-actions">
      <MkSkeleton width="100px" height="30px" type="placeholder" density="high" />
    </div>
  </MkCard>
</template>

<style lang="scss">
.sk-WishMiniaturePlaceholder {
  opacity: 0.4;
}
</style>
