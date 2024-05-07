export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("in-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
};
