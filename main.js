const books = [{
    id: 0,
    name: 'It',
    author: "Stephen King",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71dIjJTeOSL.jpg",
    plot: "The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its victims to disguise itself while hunting its prey.",
    price: 300,
    rating: 4,
}, {
    id: 1,
    name: "Flowers for Algernon",
    author: "Daniel Keyes",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41oefPXA6kL._SX303_BO1,204,203,200_.jpg",
    plot: "Flowers for Algernon traces the mental and emotional development of Charlie Gordon, a retarded young man who becomes the first human test-subject for an ambitious brain experiment.",
    price: 200,
    rating: 5,
}, {
    id: 2,
    name: "Heart Bones",
    author: 'Colleen Hoover',
    imageUrl: 'https://m.media-amazon.com/images/P/B08GLWCZTY.01._SCLZZZZZZZ_SX500_.jpg',
    plot: "Life and a dismal last name are the only two things Beyah Grim's parents ever gave her. After carving her path all on her own, Beyah is well on her way to bigger and better things, thanks to no one but herself.",
    price: 250,
    rating: 3,
}, {
    id: 3,
    name: "The Hotel Nantucket",
    author: "Elin Hilderbrand",
    imageUrl: "https://m.media-amazon.com/images/I/41D9XenJeVL.jpg",
    plot: "The queen of beach reads” (New York Magazine) delivers an immensely satisfying page-turner in this tale about a summer of scandal at a storied Nantucket hotel.",
    price: 300,
    rating: 5,
}, {
    id: 4,
    name: "It Starts with Us",
    author: "Colleen Hoover",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81l17H47TJL.jpg",
    plot: "Before It Ends with Us, it started with Atlas. Colleen Hoover tells fan favorite Atlas’s side of the story and shares what comes next in this long-anticipated sequel to the “glorious and touching” (USA TODAY) #1 New York Times bestseller It Ends with Us.",
    price: 250,
    rating: 5,
}, {
    id: 5,
    name: "The Terminal List",
    author: "Jack Carr",
    imageUrl: "https://m.media-amazon.com/images/P/198219734X.01._SCLZZZZZZZ_SX500_.jpg",
    plot: "“Take my word for it, James Reece is one rowdy motherf***er. Get ready!”—Chris Pratt, all around great guy and star of The Terminal List, coming to Amazon Prime",
    price: 170,
    rating: 4,
}];

const list = document.getElementById('app.js');

const getStarColor = (item, rating) => {
    const goldenColor = 'invert(61%) sepia(100%) saturate(439%) hue-rotate(6deg) brightness(112%) contrast(107%);';
    const greyColor = 'invert(100%) sepia(2%) saturate(0%) hue-rotate(301deg) brightness(115%) contrast(76%);';

    return item <= rating ? goldenColor : greyColor
}

const getRatingStars = (rating) => {
    const arr = [1, 2, 3, 4, 5];
    return arr.map((item) => `<img class="img-star" src="img/star-svgrepo-com.svg" style="filter: ${getStarColor(item, rating)}">`).join(' ')
}

const getBooks = () => {
    books.forEach(({ name, author, imageUrl, price, rating, plot }) => {
        const ratingStars = getRatingStars(rating);

        list.innerHTML += `
            <div class="main-wrapper">
                <div class="book-wrapper">
                    <section class="book-section">
                        <img title="${plot}" class="book-img" src="${imageUrl}">
                        <p class="book-name">${name}</p>
                        <p class="book-author">Author: ${author}</p>
                        
                        <div class="rating-wrapper">
                            ${ratingStars}
                        </div>
                        
                        <div class="price-wrapper">
                            <p class="book-price">Price: ${price} грн</p>
                            <button class="buy-button">Купити</button>
                        </div>
                    </section>
                </div>
            </div>
        `
    })
}

getBooks()




