module.exports = {
  /**
   * 获取排序后的数据
   * key: 按照哪个排
   * type: asc, desc
   * data: []源数据
   */
  getSortedData: (key, type = 'asc', data) => {
    if (!key || !data) {
      return [];
    }
    data.sort((a, b) => {
      let i1 = a[key];
      let i2 = b[key];
      switch(key) {
        case 'capacity':
        case 'payload':
        case 'range':
        case 'fuelEfficient':
        case 'speed':
        case 'price':
          i1 -= 0;
          i2 -= 0;
          break;
        default:
          break;
      }
      if (type === 'asc') {
        return i1 > i2 ? 1 : -1;
      } else {
        return i1 < i2 ? 1 : -1;
      }
    });
    return data;
  }
}