import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function ProductEdit() {
  const productId = useParams().id
  console.log(productId, "productId")
  const navigate = useNavigate()
  const [data, setData] = useState({
    title: "",
    description: "",
    price: 0,
    quantity: 0,
    image: "",
  })
  const getData = async () => {
    try {
      const res = await axios.get(`https://fixnparts.onrender.com/user/findProductById/${productId}`)
      setData(res.data.g)
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const handleChange = (e) => {
    // console.log(e.target)
    // setFormData({ ...formData, [e.target.name]: e.target.value })

    const { name, value, files } = e.target
    console.log(files, "files")
    if (name === "image") {
      setData({ ...data, [name]: files[0] })
    } else {
      setData({ ...data, [name]: value })
    }

  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const dataa = new FormData()

      dataa.append("title", data.title)
      dataa.append("description", data.description)
      dataa.append("price", data.price)
      dataa.append("quantity", data.quantity)
      if (data.image instanceof File) {
        dataa.append("image", data.image);
      } await axios.put(`https://fixnparts.onrender.com/user/findProductByIdAndUpdate/${productId}`, dataa)
      navigate("/productTable")
      toast.success("Updated successfull")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Edit Product</h2>
      <div className="card shadow p-4 rounded">
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input name="title" value={data.title} type="text" className="form-control" placeholder="Enter product title" />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea name="description" value={data.description} className="form-control" rows="3" placeholder="Enter description"></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input name="price" value={data.price} type="number" className="form-control" placeholder="Enter price" />
          </div>
          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input name="quantity" value={data.quantity} type="number" className="form-control" placeholder="Enter quantity" />
          </div>
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input name="image" type="file" className="form-control" />
          </div>
          <div className="mt-4">
            <button type="submit" className="btn btn-success me-2">Save</button>
            {/* <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>Cancel</button> */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductEdit
