<template>
  <MkCard class="sk-WishMiniaturePlaceholder" data-hash>
    <MkSkeleton width="200px" height="20px" type="placeholder" density="high" />

    <div class="sk-WishMiniaturePlaceholder-actions">
      <MkSkeleton width="30px" height="30px" type="placeholder" density="high" />
      <MkSkeleton width="30px" height="30px" type="placeholder" density="high" />
    </div>
  </MkCard>
</template>

<style lang="scss">
.sk-WishMiniaturePlaceholder {
  --wish-miniature-placeholder-gradient-line-color: var(--mk-primary-15);
  --wish-miniature-placeholder-gradient-line-size: 2px;
  --wish-miniature-placeholder-gradient-line-offset: 4px;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &-actions {
    display: flex;
    gap: var(--mk-size-2);
    align-items: center;
  }

  &-title {
    width: 200px;
    height: var(--mk-font-size);
  }

  [data-hash] {
    position: relative;
    overflow: hidden;
    border-radius: var(--mk-border-radius-size);

    &::before {
      position: absolute;
      inset: 0;
      content: '';
      background: repeating-linear-gradient(
        135deg,
        transparent,
        transparent var(--wish-miniature-placeholder-gradient-line-offset),
        var(--wish-miniature-placeholder-gradient-line-color) var(--wish-miniature-placeholder-gradient-line-offset),
        var(--wish-miniature-placeholder-gradient-line-color)
          calc(
            /* stylelint-disable-next-line scss/operator-no-newline-after */
              var(--wish-miniature-placeholder-gradient-line-offset) +
              var(--wish-miniature-placeholder-gradient-line-size)
          )
      );
    }
  }
}
</style>
