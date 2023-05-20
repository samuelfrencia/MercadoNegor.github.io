const navbarVue = Vue.createApp({
    data() {
        return{
            imgNavbarLogo : './img/logoMercadoNegro.png',

            imgLogoCarrito : './img/logoCarrito.png'
        }
    }
})
const carrouselVue = Vue.createApp({
    data() {
        return {
            imgCarrousel1: './img/DC_20221104105427_pTu1uEmz.jpg',

            imgCarrousel2: './img/DC_20230110092310_VJe69EQR.jpg',

            imgCarrousel3: './img/DC_20230315140823_a1xsazfM.jpg'

        }
    }
})
const productosVue = Vue.createApp({
    data() {
        return {
            imgProducto1: './img/not.jpg',

            imgProducto2: './img/note.png',

            imgProducto3: './img/noteb.png'

        }
    }
})
