import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

const categories = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'asc' } ,
    { name: 'алфавиту', type: 'name', order: 'asc' }
];

export default function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);
    const cartItems = useSelector(({ cart }) => cart.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);

    React.useEffect(() => {
        //if (!items.length)
        dispatch(fetchPizzas(sortBy, category));
    }, [category, sortBy]);

    const onSelectCategory = React.useCallback((idx) => {
        dispatch(setCategory(idx));
    }, [dispatch]);

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, [dispatch]);

    const handleAddPizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj));
    };

    return (    
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={category} 
                    items={categories} onClickCategory={onSelectCategory} />
                
                <SortPopup activeSortType={sortBy.type} items={sortItems}
                    onClickSortType={onSelectSortType} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                { isLoaded 
                    ? items.map(item => (
                        <PizzaBlock onClickAddPizza={handleAddPizzaToCart} 
                            key={item.id} isLoaded={true} {...item}
                            addedCount={cartItems[item.id] && cartItems[item.id].items.length} />
                    )) 
                    : Array(12).fill(0)
                        .map((_, idx) => <PizzaLoadingBlock key={idx} />)
                }
            </div>
        </div>
    );
}
