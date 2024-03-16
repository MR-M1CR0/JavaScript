export default function showDetails(options = {}) {
  const defaultValues = {
    name: 'default name',
    price: 0,
    quantity: 0,
  };
  Object.assign(defaultValues, options);
  console.log(
    `Name: ${defaultValues.name}, Price: ${defaultValues.price}, Quantity: ${defaultValues.quantity}`
  );
}
