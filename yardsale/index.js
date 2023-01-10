const menuEmail = document.querySelector(".navbar-email")
const menuHamburguesa = document.querySelector(".menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const productDetailCloseIcon = document.querySelector(".product-detail-close")


const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const aside = document.querySelector("#ShoppingCartContainer")
const ProductDetailContainer = document.querySelector("#productDetail")
const cardsContainer = document.querySelector(".cards-container")



menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamburguesa.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains("inactive");
    
    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }
    
    desktopMenu.classList.toggle("inactive");

}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains("inactive")
    
    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }
    
    mobileMenu.classList.toggle("inactive");
    closeProductDetailAside()
}

function toggleCarritoAside() {
    const ismobileMenuClosed = mobileMenu.classList.contains("inactive")
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive")
    
    // codigo del curso, por si algo se rompe
    // if (!ismobileMenuClosed) {
    //     mobileMenu.classList.add("inactive");
    // }

    if (!ismobileMenuClosed || !isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
        mobileMenu.classList.add("inactive");
    }
    
    

    const isProductDeatilOpen = ProductDetailContainer.classList.contains("inactive")

    if (!isProductDeatilOpen) {
        ProductDetailContainer.classList.add("inactive");
    }
    
    aside.classList.toggle("inactive");
    
}

function openProductDetailAside() {
    const ismobileMenuClosed = mobileMenu.classList.contains("inactive")
    if (!ismobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

    aside.classList.add("inactive")
    ProductDetailContainer.classList.remove("inactive")
}

function closeProductDetailAside() {
    ProductDetailContainer.classList.add("inactive")
}

const productlist = [];
productlist.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

});
productlist.push({
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

});
productlist.push({
    name: "Tv",
    price: 100,
    image: "https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

});
productlist.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

});
productlist.push({
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

});
productlist.push({
    name: "Tv",
    price: 100,
    image: "https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

});

function renderProducts(arr) {
    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card")
    
        // product = {name. price, image} -> product.image
        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside)

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info")
        
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price
        const productName = document.createElement("p");
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
    
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard)
    }

        /*
    Este es el elemento creado 
    <div class="product-card">
        <img src="https://images.pexels.com/photos/2156698/pexels-photo-2156698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="product-img">
        <div class="product-info">
            <div>
                <p>$120,00</p>
                <p>Ice Cream</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>

    </div>  
    */  



}

renderProducts(productlist);



