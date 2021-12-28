import android from "../images/android.jpg";
import web from "../images/web.jpg";
// import digital from "../images/digital.jpg";
import marketing from "../images/marketing.jpg";
import software from "../images/software.jpg";
import fullstack from "../images/fullstack.jpg";
import medicines from "../images/medicines.jpg"
import cart from "../images/cart.webp"
import order from "../images/orders.jpg"

const ServiceData = [
    {
        imgsrc: medicines,
        title: "Order Medicines Today",
        body:"Check your inventory and Order your medicines today.",
        link:'/drugsList',
        authenticate:false
    },
    {
        imgsrc: cart,
        title: "Your Cart",
        body:"The medicines you have put in your cart can be seen here",
        link:'/cart',
        authenticate:true
    },
    {
        imgsrc: order,
        title: "Your Orders",
        body:"The order you have made in past can be seen from here",
        link:'/orders',
        authenticate:true
    },
    // {
    //     imgsrc: marketing,
    //     title: "Digital Marketing"
    // },
    // {
    //     imgsrc: fullstack,
    //     title: "Full Stack Development"
    // },
    // {
    //     imgsrc: marketing,
    //     title: "Marketing"
    // }
];

export default ServiceData;