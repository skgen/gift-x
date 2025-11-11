export function rand(min: number, max: number) {
  const minDecimals = min.toString().includes('.') ? min.toString().split('.').at(-1)!.length : 0;
  const maxDecimals = max.toString().includes('.') ? max.toString().split('.').at(-1)!.length : 0;
  const fixed = Math.max(minDecimals, maxDecimals);
  return Number.parseFloat((Math.floor(Math.random() * (max - min + 1)) + min).toFixed(fixed));
}
