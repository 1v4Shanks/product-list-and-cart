export default function addCartReducer(items, action) {
  switch (action.type) {
    case "add_to_cart": {
      const existingProduct = items.find((item) => item.name === action.name);
      if (existingProduct) {
        return items;
      } else {
        return [
          ...items,
          {
            id: action.name,
            name: action.name,
            price: action.price,
            quantity: action.quantity,
            image: action.image,
          },
        ];
      }
    }

    case "increment": {
      return items.map((item) => {
        if (item.name === action.name) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
    }

    case "decrement": {
      return items.map((item) => {
        if (item.name === action.name && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          return item;
        }
      });
    }

    case "remove": {
      return items.filter((item) => {
        return item.name !== action.name;
      });
    }
    case "start_new_order": {
      return [];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
