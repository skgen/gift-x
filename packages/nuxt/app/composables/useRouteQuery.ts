import { useRouteQuery as useRouteQueryVueUse } from '@vueuse/router';
import z from 'zod';

export function useRouteQuery<TValidator extends z.ZodType>(key: string, validator: TValidator) {
  const candidate = useRouteQueryVueUse(key);
  const data = computed(() => {
    const _ = validator.safeParse(candidate.value);
    if (_.success) {
      return _.data;
    }

    throw createError({
      statusCode: 400,
      fatal: true,
      statusMessage: `Incorrect ${key} url query parameter`,
      message: z.prettifyError(_.error),
    });
  });
  return data;
}
