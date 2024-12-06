const express = require('express');
const app = express();

const RESTAURANT = {
    name: 'The Green Byle Bistro',
    isOpen: true,
    address: '742 Evergreen Rd, Mapleview, OS 45502',
    phone: '555-321-9876',
    menu: [
      { 
        id: 1,
        name: 'Quantum Quinoa Mushroom Burger',
        price: 13.00,
        rating: 4,
        category: 'mains',
        details: 'A vegetarian burger made with a quinoa, phlem and mushroom patty, it will take you to another realm.'
      },
      { 
        id: 2,
        name: 'Bilary Berry Cheesecake',
        price: 10.11,
        rating: 3,
        category: 'desserts',
        details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byle.'
      },
      { 
        id: 3,
        name: 'Recursive Rigatoni',
        price: 17.00,
        rating: 5,
        category: 'mains',
        details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
      },
      { 
        id: 4,
        name: 'Pumpkin Pi Squared',
        price: 3.14,
        rating: 5,
        category: 'desserts',
        details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
      },
      { 
        id: 5,
        name: 'Fibonacci String Bean Fries',
        price: 11.23,
        rating: 5,
        category: 'sides',
        details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
      }
    ]
  }
  app.locals.restaurant = RESTAURANT; // Add restaurant to locals for use in templates

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('/menu', (req, res) => { // Add menu route
    res.render('menu.ejs', { menu: RESTAURANT.menu });
});

app.get('/menu/:category', (req, res) => { // Add category route
  const category = req.params.category; // Get category from URL parameter 
  
  // Filter menu items based on category
  const filteredMenuItems = RESTAURANT.menu.filter(
    (item) => item.category === category
  );

  // Capitalize the first letter of the category name for better UI
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  res.render('category.ejs', {
    menuItems: filteredMenuItems,
    categoryName: categoryName,
  });
});

app.listen(3001, () => { // Add server listen
  console.log('Server is running on port 3000');
  });
