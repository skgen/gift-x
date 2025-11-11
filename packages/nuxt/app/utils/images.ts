export async function fileFromUrl(url: string, fileName?: string) {
  const response: Response = await $fetch(url);
  const blob = response instanceof Blob ? response : await response.blob();
  return new File(
    [blob],
    fileName ?? rand(0, 999999).toString(),
    { type: blob.type },
  );
}
