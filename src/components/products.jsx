import React from "react"
import { useSelector, useDispatch } from "react-redux"
import SingleProduct from './singleProduct';
import { useEffect, useState } from "react";
import { getProducts } from "../store/reducers/productsReducer"

const Products = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => (state.productsReducer.products))
    const [searchInput, setSearchInput] = useState("")
    const [filteredProducts, setFilteredProducts] = useState([...products])
    const [selectedFilters, setSelectedFilters] = useState({ category: "All", company: "All", price: { min: 0, max: 1000, selectedPrice: 1000 } })

    let categoriesList = []
    let companiesList = []
    products.forEach(p => {
        categoriesList = ["All", ...categoriesList, p.category];
        companiesList = ["All", ...companiesList, p.company]
    })


    const cartItems = useSelector(state => state.cartReducer.cartItems)

    useEffect(() => {
        dispatch(getProducts());
    }, [])

    useEffect(() => {
        filterResults()
    }, [searchInput])

    useEffect(() => {
        filterResults()
    }, [selectedFilters])

    const filterResults = () => {

        let tempProducts = [...products]
        tempProducts = tempProducts.filter(p => p.title.toLowerCase().includes(searchInput.toLowerCase()))
        //Category
        if (selectedFilters.category !== "All")
            tempProducts = tempProducts.filter(p => p.category == selectedFilters.category)
        //Company
        if (selectedFilters.company !== "All")
            tempProducts = tempProducts.filter(p => p.company == selectedFilters.company)
        //Price
        tempProducts = tempProducts.filter(p => p.price <= selectedFilters.price.selectedPrice)

        setFilteredProducts(tempProducts)
    }

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleCategory = e => {
        setSelectedFilters({ ...selectedFilters, category: e.target.name })
    }
    const handleCompany = (e) => {
        setSelectedFilters({ ...selectedFilters, company: e.target.value })
        console.log(selectedFilters)
    }

    const handleRange = e => {
        setSelectedFilters({ ...selectedFilters, price: { ...selectedFilters.price, selectedPrice: e.target.value } })
        console.log(selectedFilters)
    }

    return <>

        <div className="main">
            {console.log(cartItems)}
            <div className="filters-container">
                {/* Search filter */}
                <div className="search">

                    <input type="input" onChange={handleChange} value={searchInput} placeholder="Search"></input>
                </div>
                {/* Category filter */}
                <div className="category"><h4>Category</h4>
                    <p></p>
                    {[...new Set(categoriesList)].map(c => <button name={c} onClick={handleCategory} key={c}>{c}</button>)}
                </div>
                {/* Company filter */}
                <div className="company"><h4>Company</h4><p></p>
                    <select onChange={handleCompany} value={selectedFilters.company}> {[...new Set(companiesList)].map(c => <option value={c}>{c}</option>)}  </select>
                </div>
                {/* Price filter */}
                <div className="price">
                    <h4>Price Range</h4><p></p>
                    <h6>${selectedFilters.price.min} - ${selectedFilters.price.selectedPrice}</h6>
                    <input type="range" min={selectedFilters.price.min} max={selectedFilters.price.max} value={selectedFilters.price.selectedPrice} onChange={handleRange}></input>
                </div>

            </div>
            <div className="products-container">{filteredProducts.map(p => <SingleProduct {...p} />)}</div>
        </div >
    </>
}
export default Products