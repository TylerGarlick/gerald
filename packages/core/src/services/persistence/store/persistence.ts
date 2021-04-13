export abstract class AbstractStorage<K, V> extends Map<K, V> {
  protected constructor(entries?: [[K, V]]) {
    super(entries)
  }

  all() {
    return [...this.values()]
  }
}
