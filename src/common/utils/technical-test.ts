export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return '';
  }

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === '') {
        return '';
      }
    }
  }

  return prefix;
}

// export function longestCommonPrefix(strs: string[]): string {
//   if (strs.length === 0) {
//     return '';
//   }

//   const minLen = Math.min(...strs.map((str) => str.length));
//   let low = 1;
//   let high = minLen;

//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);
//     if (isCommonPrefix(strs, mid)) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }

//   return strs[0].substring(0, Math.floor((low + high) / 2));
// }

// function isCommonPrefix(strs: string[], length: number): boolean {
//   const prefix = strs[0].substring(0, length);
//   for (let i = 1; i < strs.length; i++) {
//     if (!strs[i].startsWith(prefix)) {
//       return false;
//     }
//   }
//   return true;
// }
