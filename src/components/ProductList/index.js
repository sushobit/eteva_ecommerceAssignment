import React, { useState } from 'react';
import Product from "../Product";
import './index.css'; 

const ProductList = () => {
    const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const productInCart = cart.find((item) => item.id === productId);

    if (productInCart) {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id: productId, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const products = [
    {
      id: 1,
      name: 'Fastrack Revoltt FS1|1.83 Display|BT Calling|Fastcharge|110+ Sports Mode|200+ WatchFaces Smartwatch (Free Size)',
      price: 1299,
      description: '1.83" UltraVU Display with 500 nits Brightness, SingleSync BT Calling, 110+ Multisports, Sleep Monitor with REM Sleep, Stress Monitor, 24*7 HRM, SpO2, Womens Health, Music & Camera Control, In-Built Alarm, Stopwatch & Timer, In-Built Games, Multiple Menu Styles, IP68 Water Resistance, Upto 7 Days Battery',
      image: 'https://i.gadgets360cdn.com/large/Fastrack_Revoltt_FS1_Pro_main_1682403878062.jpg', 
    },
    {
      id: 2,
      name: 'Noise Evolve 3 1.43" AMOLED Always-On Display with Bluetooth Calling, Metallic Design Smartwatch (White Strap, Regular)',
      price: 2199,
      description: '1.43 AMOLED Always On Display (466*466px | 326 PPI | 500 nits brightness) Tru SyncTM Lightweight design with circular stainless steel ring Noise Health SuiteTM (SpO2, stress monitor, 24*7 heart rate tracking, sleep monitor & breath) With Call Function Touchscreen Fitness & Outdoor Battery Runtime: Upto 7 days',
      image: 'https://m.media-amazon.com/images/I/21nCvKOYMlL.jpg', 
    },
    {
      id: 3,
      name: 'Ambrane Wise Eon Pro1.85 lucid display with BT calling Smartwatch (Black Strap, Regular)',
      price: 1099,
      description: 'Calling Feature: Bluetooth Calling with Inbuilt Mic, Inbuilt Speaker and Dialer Fitness and Productivity: Smart Notifications, 100+ Sports Modes, Alarm, Stopwatch, Flashlight, Timer, Find Phone, Music Player, Shutter (Remote Camera),IP68 water resistant',
      image: 'https://rukminim1.flixcart.com/image/850/1000/xif0q/shopsy-smartwatch/q/i/f/1-85-android-ios-wise-eon-pro-black-ambrane-yes-original-imagky5tmpfucd4f.jpeg?q=90', 
    },
    {
      id: 4,
      name: 'Pebble Frost 1.87" BT Calling with 2.5D Curved HD Display, AI Voice Assisst Smartwatch (Free Size)',
      price: 1974,
      description: 'Get your hands on a Pebble Frost smartwatch to manage your everyday activities and enhance your levels of fitness with ease. The Pebble Frost smartwatch has a 4.74 cm (1.87) narrow bezel IPS full touch screen curved display that accentuates your style and fits well on your wrist.',
      image: 'https://www.pebblecart.com/cdn/shop/products/1_5de76450-aa86-4aff-b704-a9290d1dc616.jpg?v=1669639540&width=416', 
    },
    {
      id: 5,
      name: 'realme Smart Watch 2 with Superbright HD Display & 90 Sports Modes (Regular)',
      price: 1999,
      description: '3.5cm (1.4 inch) Large Color Display Continuous Heart Rate & SpO2 Blood Oxygen Monitor IP68 Water Resistant with 90 Sport Modes100+ Stylish Watch Faces to be Updated via OTA Magnetic Charging Base for Hassle-free Charging',
      image: 'https://m.media-amazon.com/images/I/61woO3KeV9S._AC_UY1000_.jpg', 
    },
    {
      id: 6,
      name: 'Fire-Boltt Wonder 1.8" Bluetooth Calling Smart Watch with AI Voice Assistant & Calculator Smartwatch  (Red Strap, Free Size)',
      price: 1299,
      description: 'Fire-Boltt Wonder Smartwatch is a Bluetooth calling enabled wristwatch that comes with an inbuilt speaker and mic for HD calls and seamless music experience. The watch is built to have an AI voice assistance to make work',
      image: 'https://rukminim1.flixcart.com/image/400/400/xif0q/smartwatch/n/6/0/-original-imagkfm8zzyqvr5c.jpeg?q=90', 
    },
    {
      id: 7,
      name: 'boAt Lunar Connect Ace with 1.43 " AMOLED Display, BT Calling, 100+ Sports Mode, IP68 Smartwatch  (Purple Strap, Free Size)',
      price: 1299,
      description: 'The boAt Lunar Connect Ace is a perfect companion for your fitness transformation with a 3.63 cm (1.43) round dial AMOLED display and 100+ sports modes. With just one tap, you can stay in touch with your loved ones',
      image: 'https://beebom.com/wp-content/uploads/2023/06/boAt-Lunar-Connect-Ace-in-blue-color-option.jpg?w=640', 
    },
    {
      id: 8,
      name: 'boAt Storm call 1.69 inch HD display with bluetooth calling and 550 nits brightness Smartwatch (Free Size)',
      price: 1299,
      description: 'You can stay connected to the digital world at all times with the help of the boAt Storm Call Smartwatch. this smartwatch offers vivid and vibrant colour resolution for an immersive viewing experience.',
      image: 'https://www.gadgetsbuffer.com/images/smart-watch/320x440/boat-storm-call-169-inch-hd-display-with-bluetooth-calling-and-550-nits-brightness-smartwatch-blue-strap-free-size-price.webp', 
    },
    {
      id: 9,
      name: 'Ambrane Wise Eon Max with 2.01 Lucid display, BT Calling, with customisable watch face Smartwatch  (Burgundy Strap, Regular)',
      price: 1699,
      description: 'With the Ambrane Wise Eon Max smartwatchs extensive feature set, step outside your home and make a stylish statement. The smartwatchs huge 5.1 cm LucidDisplay delivers a faultless, thorough experience that gives you the impression that the screen is always mesmerising you',
      image: 'https://qonooz.com/wp-content/uploads/2023/02/original-imagmrqvyrz7yxh4.webp', 
    },
  ];


    return (
        <div className='maincontainer'>
            <h1 className='heading'>Products</h1>
            <div className="app">          
                <div className="product-list">
                    {products.map((product) => (
                        <Product
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        image={product.image}
                        addToCart={addToCart}
                        />
                    ))}
                 </div>
                <div className="cart">
                  <div className='carthead'>
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', margin: '4px'}}>
                        <img src="https://images.rawpixel.com/image_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL2pvYjE0MjgtZWxlbWVudC0xMDctdi5qcGc.jpg" alt="Cart Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                        <h2>Cart</h2>
                    </div>   
                    {cart.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                            {item.quantity} x {products.find((product) => product.id === item.id).name}
                            <button className='removebutton' onClick={() => removeFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                        </ul> 
                    )}
                    <a href="/cart">
                          <button className='checkoutbutton'>Check out</button>
                    </a>
                 </div>
              </div>
        </div>
    )
}

export default ProductList;