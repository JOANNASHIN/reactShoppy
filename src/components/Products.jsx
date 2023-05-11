import React from 'react';
// import { getProducts } from '../api/firebase';
// import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';
import useProducts from '../hooks/useProducts';

export default function Products() {
    // const { 
    //     isLoading,
    //     error,
    //     data: products 
    // } = useQuery(['products'], getProducts);

    //리팩토링
    const {
        productsQuery: { isLoading, error, data: products }
    } = useProducts();

    return (
        <>
            {isLoading && <p>loading...</p>}
            {error && <p>{error}</p>}

            <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
                {
                    products && products.map(product => (
                        <ProductCard key={product.id} product={product}/>
                    ))
                }
            </ul>
        </> 
    )
}