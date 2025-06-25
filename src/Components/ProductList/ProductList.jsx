import React from 'react';
import { Row, Col } from 'antd';
import {ProductCard} from '../ProductCard/ProductCard';
import style from './ProductList.module.css';

export const ProductList = () => {
  return (
    <div className={style.productList}>
      <Row gutter={[24, 24]} justify="center">
        {[...Array(4)].map((_, index) => (
          <Col
            key={index}
            xs={24}   // 1 карточка на мобильных (xs < 576px)
            sm={12}   // 2 карточки на малых экранах (≥576px)
            md={8}    // 3 карточки на средних (≥768px)
            lg={4}    // 4 карточки на больших экранах (≥992px)
          >
            <ProductCard />
          </Col>
        ))}
      </Row>
    </div>
  );
};