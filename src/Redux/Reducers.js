
const initialState = {
    cart: [
        {
            itemname: "Mobile and accesories",
            price: 120,
            quantity: 2,
        },
    ]
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
        default:
            return state;
            break;



    }

}

export default reducer;