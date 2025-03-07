/* eslint-disable @typescript-eslint/no-explicit-any */

export const excludeDeletedQuery = function (this: any, next: () => void) {
  this.where({ isDeleted: false });
  next();
};

export const excludeDeletedAggregation = function (
  this: any,
  next: () => void,
) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  this.pipeline().unshift({ $project: { isDeleted: 0 } });

  next();
};
