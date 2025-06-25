import React, { useState } from 'react';
import { Layout, Menu, Button, Drawer, Typography } from 'antd';
import {
  ShoppingOutlined,
  HomeOutlined,
  AppstoreOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  UserOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import style from  './Navbar.module.css'; // Подключаем CSS-стили

const { Header } = Layout;
const { Title } = Typography;

export const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <Layout>
      <Header className={style.navbar}>
        {/* Логотип */}
        <div className={style.navbarLogo}>
          <ShoppingOutlined className={style.logoIcon} />
          <Title level={4} className={style.logoText}>ShoeStyle</Title>
        </div>

        {/* Меню (десктоп) */}
        <Menu mode="horizontal" className={style.navbarMenu} defaultSelectedKeys={['home']}>
          <Menu.Item key="home" icon={<HomeOutlined />}>Главная</Menu.Item>
          <Menu.Item key="catalog" icon={<AppstoreOutlined />}>Каталог</Menu.Item>
          <Menu.Item key="about" icon={<InfoCircleOutlined />}>О нас</Menu.Item>
          <Menu.Item key="contact" icon={<PhoneOutlined />}>Контакты</Menu.Item>
        </Menu>

        {/* Кнопка входа (десктоп) */}
        <Button className={style.loginButton} type="primary" icon={<UserOutlined />}>
          Войти
        </Button>

        {/* Иконка бургер-меню (мобилка) */}
        <Button className={style.burgerIcon} type="text" icon={<MenuOutlined />} onClick={showDrawer} />

        {/* Мобильный Drawer */}
        <Drawer
          title="Меню"
          placement="right"
          onClose={closeDrawer}
          open={drawerVisible}
        >
          <Menu mode="vertical" defaultSelectedKeys={['home']}>
            <Menu.Item key="home" icon={<HomeOutlined />}>Главная</Menu.Item>
            <Menu.Item key="catalog" icon={<AppstoreOutlined />}>Каталог</Menu.Item>
            <Menu.Item key="about" icon={<InfoCircleOutlined />}>О нас</Menu.Item>
            <Menu.Item key="contact" icon={<PhoneOutlined />}>Контакты</Menu.Item>
            <Menu.Item key="login" icon={<UserOutlined />}>Войти</Menu.Item>
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};