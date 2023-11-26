export const createCardDeliveryImage = (data) => {
  const img = document.createElement('img');
  img.classList.add('delivery-good-img');
  img.src = `https://mica-short-xenoposeidon.glitch.me/${data.image}`;
  img.alt = data.title;
  return img;
};
