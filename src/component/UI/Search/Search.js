import React from 'react';

import "./Search.scss"

export const SearchFunc = (products, searchParam, query) => {
    return products.filter((item) => {
        return searchParam.some((newItem) => {
            return (
                item[newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(query.toLowerCase()) > -1
            );
        });
    });
};