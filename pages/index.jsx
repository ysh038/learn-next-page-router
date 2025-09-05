import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductList from '@/components/product-list/ProductList';
import ProductHeader from '@/components/ProductHeader';

function Counter(){
    const [counter, setCounter] = useState(0);

    return (<div>
        <p data-cy="counter">{counter}</p>
        <button data-cy="add-button" onClick={() => setCounter(counter + 1)}>+1</button>
        <button data-cy="sub-button" onClick={() => setCounter(counter - 1)}>-1</button>
    </div>)
}

// '/'에 해당하는 페이지 컴포넌트
function ProductPage() {
  const headerTitle = '상품 목록 페이지';

  return (
    <div>
        <ProductHeader title={headerTitle}></ProductHeader>
        <ProductList />
    </div>
  );
}

/**
 * 1. 상품 목록 페이지 - `/`
 * 2. 상품 상세 페이지 - `/products/productId`
 * 3. 장바구니 페이지 - `/carts`
 */

export default ProductPage;
