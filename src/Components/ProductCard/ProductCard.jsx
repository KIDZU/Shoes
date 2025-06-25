import React from 'react';
import { Card, Typography, Rate } from 'antd';
import style from './ProductCard.module.css';

const { Title, Text } = Typography;

export const ProductCard = () => {
  return (
    <Card
      hoverable
      className={style.productCard}
      cover={
        <img
          alt="Товар обуви"
          src="https://fineshoes.ru/upload/medialibrary/513/oksfordy_kehptoe_berwick.jpg"
        />
      }
    >
      <Title level={4}>Кроссовки AirRun</Title>
      <Text strong className={style.price}>$15</Text>
      <div className={style.rating}>
        <Rate allowHalf defaultValue={4.5} />
      </div>
    </Card>
  );
};