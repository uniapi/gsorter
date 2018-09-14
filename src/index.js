/*************************************************************************
                          Written by Ali Muhammed
                            uniapi@outlook.com
                            September 14, 2018
*************************************************************************/

const _store = new WeakMap();
const _comparator = new WeakMap();

class gSorter {
  constructor() {
    _store.set(this, [ ]);
    _comparator.set(this, (a, b) => a == b ? 0 : a < b ? -1 : 1);
  }

  add(element) {
    const store = _store.get(this);

    store[store.length] = element;
    _store.set(this, store);
  }

  at(index) {
    const store = _store.get(this);

    if (index < 0 || index >= store.length)
      return undefined;
    return store[index];
  }

  get length() {
    return _store.get(this).length;
  }

  toArray() {
    return _store.get(this);
  }

  sort(indices) {
    const inds = indices.sort((a, b) => a - b)
    const length = inds.length;
    const comparator = _comparator.get(this);
    const store = _store.get(this);

    for(let i=1; i < length; i++) {
      for (let j=i, n=store[inds[i]]; j > 0 && comparator(store[inds[j-1]], store[inds[j]]) > 0; j--) {
        n = store[inds[j-1]];
        store[inds[j-1]] = store[inds[j]];
        store[inds[j]] = n;
      }
    }
    return store;
  }

  setComparator(comparator) {
    _comparator.set(this, comparator);
  }
}

export { gSorter };
