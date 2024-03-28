import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/frontend/Home'
import Details from '../pages/frontend/Details'
import Cart from '../pages/frontend/Cart'
import Checkout from '../pages/frontend/CheckOut'
import Profile from '../pages/backend/dashboard/Profile'
import ProfileEdit from '../pages/backend/dashboard/ProfileEdit'
import Categories from '../pages/backend/categories/Categories'
import AddOrEditCategory from '../pages/backend/categories/AddOrEditCategory'
import Products from '../pages/backend/products/Products'
import User from '../pages/backend/users/User'
import AddOrEditUsers from '../pages/backend/users/AddOrEditUsers'
import Orders from '../pages/backend/orders/Orders'
import OrderView from '../pages/backend/orders/OrderView'
import AddOrEditProducts from '../pages/backend/products/AddOrEditProducts'

export default function Router() {
    return (
        <Routes>
            {/* home page */}
            <Route path='/' element={<Home />} />

            {/* product details page */}
            <Route path='/product-details' element={<Details />} />

            {/* cart page */}
            <Route path='/cart' element={<Cart />} />

            {/* checkout page */}
            <Route path='/checkout' element={<Checkout />} />

            {/* admin routes */}
            <Route path='/admin'>
                {/* dashboard routes */}
                <Route path='dashboard' element={<Profile />} />

                {/* profile edit */}
                <Route path='profile/edit' element={<ProfileEdit />} />

                {/* orders */}
                <Route path='order'>
                    <Route path='' element={<Orders />} />
                    <Route path='view' element={<OrderView />} />
                </Route>

                {/* categories */}
                <Route path='category'>
                    <Route path='' element={<Categories />} />
                    <Route path='create' element={<AddOrEditCategory />} />
                    <Route path='edit/:id' element={<AddOrEditCategory />} />
                </Route>

                {/* products */}
                <Route path='product'>
                    <Route path='' element={<Products />} />
                    <Route path='create' element={<AddOrEditProducts />} />
                    <Route path='edit/:id' element={<AddOrEditProducts />} />
                </Route>

                {/* users */}
                <Route path='user'>
                    <Route path='' element={<User />} />
                    <Route path='create' element={<AddOrEditUsers />} />
                    <Route path='edit' element={<AddOrEditUsers />} />
                </Route>

            </Route>
        </Routes>
    )
}
