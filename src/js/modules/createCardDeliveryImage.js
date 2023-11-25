export const createCardDeliveryImage = (data) => {
  const img = document.createElement('img');
  img.classList.add('delivery-good-img');
  img.src = `http://localhost:3000/${data.image}`;
  img.alt = data.title;
  return img;
};
