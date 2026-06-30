export function attorneyPaths(slug: string) {
  const base = `/${slug}`;
  return {
    profile: base,
    bookkeeper: `${base}/bookkeeper`,
    payment: `${base}/bookkeeper/payment`,
  };
}
