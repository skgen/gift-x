export interface UseMyWishListContextOptions {
  eventId: string;
}

const createOptions = optionsFactory<UseMyWishListContextOptions>();

const myWishListContextKey = Symbol('context.my-wish-list') as InjectionKey<ReturnType<typeof defineMyWishListContext>>;

export function defineMyWishListContext(_options: UseMyWishListContextOptions) {
  const options = createOptions(_options);

  const myWishList = useReadMyWishList(
    reactive({
      data: {
        eventId: options.eventId,
      },
    }),
  );

  const context = {
    myWishList,
  };

  inject(myWishListContextKey, context);

  return context;
}

export function useMyWishListContext() {
  const context = inject(myWishListContextKey);

  if (!context) {
    throw new Error('useMyWishListContext must be called inside a component with defineMyWishListContext');
  }

  return context;
}
