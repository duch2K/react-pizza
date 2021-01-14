import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({ activeCategory, items, onClickCategory }) => {
    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickCategory(null)}>Все</li>

                {items && items.map((name, idx) => 
                    <li className={activeCategory === idx ? 'active' : ''} 
                            key={`${name}_${idx}`} 
                            onClick={() => onClickCategory(idx)}>
                        {name}
                    </li>
                )}
            </ul>
        </div>
    );
};

Categories.propTypes = {
    // activeCategory: PropTypes.oneOf([PropTypes.number, null]), 
    items: PropTypes.arrayOf(PropTypes.string).isRequired, 
    onClickCategory: PropTypes.func
};

Categories.default = {
    activeCategory: null, 
    items: []
};

export default Categories;