import { Menu } from 'lucide-react'
import p1_img from '../assets/p1_img.jpg'
import p2_img from '../assets/p2_img.jpg'
import p3_img from '../assets/p3_img.jpg'
import p4_img from '../assets/p4_img.jpg'
import p5_img from '../assets/p5_img.jpg'

let data_product = [
    {
        id: 1,
        name: " Coffee Mug Seagreen ",
        category: "Coffee Mugs",
        image: p1_img,
        new_price: 299,
        old_price: 499,
    },

    { id: 2, name: " Deer Mug set ", category: " Coffee Mugs ", image: p2_img, new_price: 999, old_price: 1299 },
    { id: 3, name: " Coffee Mug Minion set ", category: " Coffee Mugs", image: p3_img, new_price: 499, old_price: 999 },
    { id: 4, name: " Bubble mug with Saucer ", category: "Mug with Saucer", image: p4_img, new_price: 399, old_price: 499 },
    { id: 5, name: "Travel Theme Printed Ceramic Coffee, Tea, Milk, Gifting Ideas Ceramic Coffee Mug ", category: "Coffee Mugs ", image: p5_img, new_price: 1199, old_price: 1499 }
   
]

export default data_product;