import stocks from "../../data/stocks";

const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    'BUY_STOCK'(state, {stockId, stockPrice, quantity}){
        const record = state.stocks.find(element => element.id == stockId);
        //checking if we already do have the stock in the array
        //finding the stock with the id in the array
        if(record){
            record.quantity += quantity;
        }else{
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK'(state, {stockId, quantity, stockPrice}){
        const record = state.stocks.find(element => element.id == stockId);
        if(record.quantity > quantity){
            record.quantity -= quantity;
        }else{
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;

    },
    'SET_PORTFOLIO'(state, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};

const actions = {
    sellStock({commit}, order){
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio (state, getters){
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            };
        });
    },
    funds(state){
        return state.funds;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}