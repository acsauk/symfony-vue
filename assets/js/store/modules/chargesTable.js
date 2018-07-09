import charges from "../../../../src/api/charges"

export default{
    state: {
        chargeItems: []
    },

    getters: {
        getCharges (state) {
            return state.chargeItems
        }
    },

    mutations: {
        setCharges(state, charges) {
            state.chargeItems = charges
        }
    },

    actions: {
        fetchCharges({commit}) {
            return new Promise((resolve, reject) => {
                charges.getCharges(charges => {
                    commit('setCharges', charges)
                    resolve()
                })
            })
        }
    }
}