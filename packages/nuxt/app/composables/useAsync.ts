import type { Awaitable } from '@vueuse/core';
import type { Ref } from 'vue';

import { ref } from 'vue';

interface UseAsyncOptions {
  trackLatest: boolean;
}

interface UseAsyncReturnType<P extends unknown[], R> {
  execute: (...args: P) => Promise<R>;
  pending: Ref<boolean>;
}

export default function useAsync<P extends unknown[], R>(
  callback: (...args: P) => Awaitable<R>,
  options?: UseAsyncOptions,
): UseAsyncReturnType<P, R> {
  const pending = ref(false);
  let pendingTransaction = 0;

  async function execute(...args: P) {
    pendingTransaction += 1;
    const scopedpendingTransaction = pendingTransaction;
    pending.value = true;
    try {
      return await callback(...args);
    }
    finally {
      if (pendingTransaction === scopedpendingTransaction || !options?.trackLatest) {
        pending.value = false;
      }
    }
  }

  return { execute, pending };
}
