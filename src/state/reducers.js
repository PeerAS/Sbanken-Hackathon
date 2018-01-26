import { combineReducers } from 'redux';
import { actionTypes } from './actions';
import dnb from './icons/dnb.png';
import klarna from './icons/klarna.png';
import santander from './icons/santander.png';
import bankNorwegian from './icons/bankNorwegian.png';
import chart from './chart.png';
import barChart from './barChart.png';


const loans = (state = {}, action, payload) => {
    switch (action.type) {
        case "GET_LOANS": return { foo: 0};    
        default: return state;
    }
}

const finished = (state = false, action) => {
    switch (action.type) {
        case "FINISHED": return true;    
        default: return state;
    }
}

const loading = (state = false, action) => {
    switch (action.type) {
        case "LOADING": return true;
        case "LOADING_DONE": return false;
        default: return false;
    }
}

const analyze = (state = {}, action, payload) => {
    switch(action.type) {
        case "ANALYZE": return { data: {
            loans: [
                {
                    icon: santander,
                    lender: 'Santander',
                    value: 245000,
                    type: 'CarLoan',
                    interestRate: 20
                },
                {
                    icon: bankNorwegian,
                    lender: 'Bank Norwegian',
                    value: 278450,
                    type: 'CreditCard',
                    interestRate: 16
                },
                {
                    icon: dnb,
                    lender: 'DnB Kreditt',
                    value: 46000,
                    type: 'ConsumerLoan',
                    interestRate: 25
                },
                {
                    icon: klarna,
                    lender: 'Klarna AB',
                    value: 23550,
                    type: 'Credit',
                    interestRate: 12
                },

            ],
            text: `Basert på hva vi har funnet
            på deg idag, skylder du 593.000 kr. Noe av dette ser ut til å være
            kredittkort og forbrukslån. Scroll nedover for å se hva vi kan gjøre for at
            du skal få litt mer å rutte med hver måned`,
            graph: chart,
            barChart: barChart,
            assets: 326584,
            name: "Peer"
            
        }};
        default: return state;
    }
}

const verify = (state = false, action) => {
    switch (action.type) {
        case "VERIFY_USER": return action.payload;
        case "LOADING_DONE": return true;   
        default: return state;
    }
}

const reducers = combineReducers({
    loans,
    analyze,
    verify,
    finished,
    loading
});

export default reducers;