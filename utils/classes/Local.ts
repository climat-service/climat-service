class Local {
  private local: Storage;
  constructor() {
    this.local = window.localStorage;
  }

  set(key: any, value: any) {
    const serializedValue = JSON.stringify(value);
    this.local.setItem(key, serializedValue);
  }

  get(key: any) {
    const item = this.local.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  }

  remove(key: any) {
    this.local.removeItem(key);
  }
}

const local = new Local();

export default local;
