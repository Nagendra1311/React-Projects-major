import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/frontend/Home'
import { Details } from '../pages/frontend/Details'
import { Cart } from '../pages/frontend/Cart'
import { CheckOut } from '../pages/frontend/CheckOut'
import { Profile } from '../pages/backend/dashboard/Profile'
import { ProfileEdit } from '../pages/backend/dashboard/ProfileEdit'
import { Categories } from '../pages/backend/categories/Categories'
import { AddOrEditCategory } from '../pages/backend/categories/AddOrEditCategory'
import { Products } from '../pages/backend/products/Products'
import { AddOrEditProducts } from '../pages/backend/products/AddOrEditProducts'
import { User } from '../pages/backend/users/User'
import { AddOrEditUsers } from '../pages/backend/users/AddOrEditUsers'
import { Orders } from '../pages/backend/orders/Orders'
import { OrderView } from '../pages/backend/orders/OrderView'

export const Router = () => {
    return (
        <Routes>
            {/* home pages */}
            <Route path='/' element={<Home />} />

            {/* product details pages */}
            <Route path='/product-details' element={<Details />} />

            {/* cart pages */}
            <Route path='/cart' element={<Cart />} />

            {/* checkout pages */}
            <Route path='/checkout' element={<CheckOut />} />


            {/* admin-routes */}
            <Route path="/admin">
                {/* dashboard routes */}
                <Route path='dashboard' element={<Profile />} />

                {/* profile edit routes */}
                <Route path='profile/edit' element={<ProfileEdit />} />


            </Route>

            {/* categories-routes */}
            <Route path="/category">
                <Route path='' element={<Categories />} />
                <Route path='create' element={<AddOrEditCategory />} />
                <Route path='edit' element={<AddOrEditCategory />} />
            </Route>

            {/* products-routes */}
            <Route path="/product">
                <Route path='' element={<Products />} />
                <Route path='create' element={<AddOrEditProducts />} />
                <Route path='edit' element={<AddOrEditProducts />} />
            </Route>

            {/* users-routes */}
            <Route path="/category">
                <Route path='' element={<User />} />
                <Route path='create' element={<AddOrEditUsers />} />
                <Route path='edit' element={<AddOrEditUsers />} />
            </Route>

            {/* order-routes */}
            <Route path="/order">
                <Route path='' element={<Orders />} />
                <Route path='view' element={<OrderView />} />
            </Route>

        </Routes>
    )
}
