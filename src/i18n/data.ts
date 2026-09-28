// Loads src/data/<name>.json for English, or src/data/<locale>/<name>.json when
// a translated copy exists — falling back to English if a locale is missing a
// file, so partially-translated pages never break the build.
const modules = import.meta.glob<{ default: any }>('../data/**/*.json', { eager: true });

export function loadData<T = any>(locale: string | undefined, name: string): T {
  if (locale && locale !== 'en') {
    const localized = modules[`../data/${locale}/${name}.json`];
    if (localized) return localized.default as T;
  }
  return modules[`../data/${name}.json`].default as T;
}
