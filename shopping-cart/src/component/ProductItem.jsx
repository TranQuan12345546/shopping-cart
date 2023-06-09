function ProductItem(cartItem, index) {

    console.log(cartItem);

    const handlePlus = () => {

    }

    return (
        <>
        <div key = {index} className="product-list">
                <div className="product-item d-flex border mb-4">
                    <div className="image">
                    <img src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="sản phẩm 1" />
                    </div>
                    <div className="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
                    <div >
                        <div className="d-flex justify-content-between align-items-center">
                            <h2 className="text-dark fs-5 fw-normal">
                                {cartItem.course.name}
                            </h2>
                            <h2 className="text-danger fs-5 fw-normal">
                                {cartItem.course.price}.000 VND
                            </h2>
                        </div>
                        <div className="text-black-50">
                            <div className="d-inline-block me-3">
                                <button className="border py-2 px-3 d-inline-block fw-bold bg-light">-</button>
                                <span className="py-2 px-3 d-inline-block fw-bold">{cartItem.count}</span>
                                <button className="border py-2 px-3 d-inline-block fw-bold bg-light" onClick={handlePlus}>+</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="text-primary border-0 bg-transparent fw-light">
                            <span><i className="fa-solid fa-trash-can"></i></span>
                            Xóa
                        </button>
                    </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default ProductItem;