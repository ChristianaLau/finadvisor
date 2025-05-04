export const periodDefault = 1;

export const periodTypes = [
  { label: "One Time", value: periodDefault },
  { label: "Weekly", value: 7 },
  { label: "Biweekly", value: 14 },
  { label: "Monthly", value: 30 },
  { label: "yearly", value: 365 },
];
export const incomePeriodDefault = 14;

export const IncomePeriodTypes = [
  { label: "hourly", value: 0 },
  { label: "One Time", value: incomePeriodDefault },
  { label: "Weekly", value: 7 },
  { label: "Biweekly", value: 14 },
  { label: "Monthly", value: 30 },
  { label: "yearly", value: 365 },
];

export const spendingTypeDefault = "one time purchase";
export const spendingType = [
  { label: "one time purchase", value: spendingTypeDefault },
  { label: "bill", value: "bill" },
  { label: "food", value: "food" },
  { label: "subscription", value: "subscription" },
  { label: "gifts", value: "gifts" },
  { label: "other", value: "other" },
];
