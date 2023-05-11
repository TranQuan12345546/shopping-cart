import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './component/ProductList'
import BillInfomation from './component/BillInfomation'

function App() {

  return (
    <>
      <div className="shopping-cart-container mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="mb-4">
                        <h2>Shopping Cart</h2>
                    </div>
                </div>
            </div>

            {/* <p className="fst-italic message">Không có sản phẩm trong giỏ hàng</p> */}
            <div className="row shopping-cart">
                <div className="col-md-8">
                    <ProductList/>
                </div>
                <div className="col-md-4">
                    <BillInfomation/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
