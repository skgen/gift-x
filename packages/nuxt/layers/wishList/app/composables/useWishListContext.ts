export interface UseWishListContextOptions {
  id: string;
}

const createOptions = optionsFactory<UseWishListContextOptions>();

const wishListContextKey = Symbol('context.wish-list') as InjectionKey<ReturnType<typeof defineWishListContext>>;

export function defineWishListContext(_options: UseWishListContextOptions) {
  const options = createOptions(_options);

  const wishList = useReadWishList(
    reactive({
      data: {
        id: options.id,
      },
    }),
  );

  const context = {
    wishList,
  };

  inject(wishListContextKey, context);

  return context;
}

export function useWishListContext() {
  const context = inject(wishListContextKey);

  if (!context) {
    throw new Error('useWishListContext must be called inside a component with defineWishListContext');
  }

  return context;
}
