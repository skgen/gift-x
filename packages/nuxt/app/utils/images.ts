export async function fileFromUrl(url: string, fileName?: string) {
  const response: Response = await $fetch(url);
  const blob = response instanceof Blob ? response : await response.blob();
  return new File(
    [blob],
    fileName ?? rand(0, 999999).toString(),
    { type: blob.type },
  );
}

// /Users/skgen/workspace/projects/tencofoundation/packages/nuxt/app/utils/images.ts

interface ImageSourceOptions {
  id: string;
  key?: 'default' | 'miniature' | 'cover-mobile';
}

export function getImageSource(options: ImageSourceOptions) {
  const runtimeConfig = useRuntimeConfig();
  const url = new URL(`${runtimeConfig.public.assetsApiHost}/${options.id}`);
  if (options.key) {
    url.searchParams.set('key', options.key);
  }
  else {
    url.searchParams.set('key', 'default');
  }
  return url.href;
}
