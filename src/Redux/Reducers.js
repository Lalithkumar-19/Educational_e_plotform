
const initialState = {
    cart: [
        {
            itemname: "Mobile and accesories",
            price: 120,
            quantity: 2,
        },
    ],
    wishList: []
};


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'ADD_TO_BASKET':
            console.log("reducer acting ", state.cart);
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
            break;
        case 'remove':
            console.log("remove reducer is acting");
            const index = state.cart.findIndex(
                (basketitem) => basketitem.id === action.payload
            )
            let newbasket = [...state.cart];
            if (index >= 0) {
                newbasket.splice(index, 1)
            } else {
                console.warn(`can't remove (id:${action.id}) as it not in basket!`)
            }
            return {
                ...state,
                cart: newbasket
            }
            break;

        case 'add_to_wishlist':
            alert(state.wishList);
            console.log("wish list", state.wishList);
            let newlist = state.wishList.length = 0 ? [action.payload] : [...state.wishList, action.payload];
            return {
                ...state,
                wishList: newlist,
            }
            break;
        default:
            return state;
            break;



    }

}

export default reducer;