function curriedAdd(total = 0) {
  return function (nextNumber) {
    if (nextNumber === undefined) return total;
    return curriedAdd(total + nextNumber);
  };
}

module.exports = { curriedAdd };
