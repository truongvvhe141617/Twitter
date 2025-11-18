declare global {
  interface Array<T> {
    myForEach(callback: (value: T, index: number, array: T[]) => void): void;
  }
}

Array.prototype.myForEach = function <T>(callback: (value: T, index: number, array: T[]) => void): void {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const length = this.length;

  for (let i = 0; i < length; i++) {
    if (i in this) { // Bỏ qua slot trống
      callback(this[i], i, this);
    }
  }
};
