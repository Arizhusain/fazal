// This is consumed in ExploreProducts.jsx
export const exploreProductsData = [
    {
        id: 1,
        title: "Shirts",
        image: 'https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726721_1280.jpg'
    },
    {
        id: 2,
        title: "T-shirts",
        image: 'https://cdn.pixabay.com/photo/2024/04/29/04/21/neon-8726714_1280.jpg'
    },
    {
        id: 3,
        title: "Vests",
        image: 'https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_1280.jpg'
    },
];


// This is consumed in Trends.jsx
export const trendsProductsData = [
    {
        id: 1,
        title: "BUY ANY 2",
        subTitle: "@999",
        image: 'https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726721_1280.jpg'
    },
    {
        id: 2,
        title: "TRENDY",
        subTitle: "THREADS",
        image: 'https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_1280.jpg'
    },
];

export const filterCtaButtons = ['All', 'pepe', 'puma', 'US polo', 'crododile', 'ZARA'];
export const products = [];
export const corosalImage = [
    'https://cdn-media.powerlook.in/mycustomfolder/banner-11.jpg?aio=w-1200',
    'https://cdn-media.powerlook.in/mycustomfolder/banner-26.jpg?aio=w-1200',
    'https://cdn-media.powerlook.in/mycustomfolder/Time_Deal_Aug_2024.jpg?aio=w-640'
];

export const categoryList = [{
    categoryName: 'Men',
    categoryItems: ['Shirts', 'T-Shirts', 'Vests']
},
{
    categoryName: 'Women',
    categoryItems: ['Shirts', 'T-Shirts', 'Vests']
}
];

export const colors = [
    '#E52B50', '#FFBF00', '#9966CC', '#8DB600', '#BE0032', '#FBCEB1', '#7FFFD4', '#007FFF'
]

export const sizes = ['xxs',
    'xs',
    'xss',
    's',
    'm',
    'ml',
    'l',
    'xl']


export const orders = {
    "orders": [
        {
            "orderId": 1,
            "customer": {
                "customerId": 123,
                "name": "John Doe",
                "email": "john.doe@example.com",
                "phone": "123-456-7890"
            },
            "items": [
                {
                    "productId": 1,
                    "name": "Product 1",
                    "quantity": 2,
                    "color": "red",
                    "size": "L",
                    "price": 29.99,
                    "total": 59.98
                },
                {
                    "productId": 2,
                    "name": "Product 2",
                    "quantity": 1,
                    "color": "blue",
                    "size": "S",
                    "price": 39.99,
                    "total": 39.99
                }
            ],
            "orderSummary": {
                "subtotal": 99.97,
                "tax": 9.99,
                "discount": 5.00,
                "total": 104.96
            },
            "shipping": {
                "address": "123 Main St",
                "city": "Anytown",
                "state": "CA",
                "postalCode": "12345",
                "country": "USA"
            },
            "payment": {
                "paymentMethod": "Credit Card",
                "paymentStatus": "Completed"
            },
            "status": "Processing",
            "timestamps": {
                "createdAt": "2024-09-17T17:30:00Z",
                "updatedAt": "2024-09-17T18:00:00Z"
            }
        }
    ]
}
