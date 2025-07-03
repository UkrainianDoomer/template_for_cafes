export const menuItems = [
  { src: 'avokado.jpg', caption: 'Awokado', type: 'sniadanie', price: 16 },
  { src: 'breakfast.jpg', caption: 'Śniadanie', type: 'sniadanie', price: 18 },
  { src: 'breakfast2.jpg', caption: 'Śniadanie', type: 'sniadanie', price: 22 },
  { src: 'burger.jpg', caption: 'Burger', type: 'obiad', price: 28 },
  { src: 'drink.jpg', caption: 'Napój', type: 'napoje', price: 10 },
  { src: 'fish.jpg', caption: 'Ryba', type: 'obiad', price: 36 },
  { src: 'fish2.jpg', caption: 'Ryba', type: 'obiad', price: 38 },
  { src: 'fish3.jpg', caption: 'Ryba', type: 'obiad', price: 36 },
  { src: 'fish4.jpg', caption: 'Ryba', type: 'obiad', price: 42 },
  { src: 'fruits2.jpg', caption: 'Owoce', type: 'sniadanie', price: 14 },
  { src: 'lunch.jpg', caption: 'Lunch', type: 'lunch', price: 24 },
  { src: 'macaruns.jpg', caption: 'Makaroniki', type: 'deser', price: 8 },
  { src: 'meat2.jpg', caption: 'Mięso', type: 'obiad', price: 34 },
  { src: 'omlet.jpg', caption: 'Omlet', type: 'sniadanie', price: 15 },
  { src: 'salad.jpg', caption: 'Sałatka', type: 'lunch', price: 18 },
  { src: 'seafood.jpg', caption: 'Owoce morza', type: 'obiad', price: 48 },
  { src: 'sushi.jpg', caption: 'Sushi', type: 'obiad', price: 40 },
  { src: 'sushi2.jpg', caption: 'Sushi', type: 'obiad', price: 40 },
  { src: 'sushi3.jpg', caption: 'Sushi', type: 'obiad', price: 40 },
  { src: 'taco.jpg', caption: 'Taco', type: 'lunch', price: 20 },
  { src: 'vegetables.jpg', caption: 'Warzywa', type: 'lunch', price: 16 }
].sort((a, b) => a.caption.localeCompare(b.caption, 'pl'));

export const menuBackground = { src: 'restaurant.jpg', caption: 'Restauracja' };