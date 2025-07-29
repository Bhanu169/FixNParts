// import axios from 'axios'
// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import { useParams } from 'react-router-dom'

// function ProductView() {
// const productId= useParams().id
// console.log(productId,"productId")
//   const [data,setData]=useState("")

//   const getData=async()=>{
//     try {
//       const productData= await axios.get(`http://localhost:6942/user/findProductById/${productId}`)
//       console.log(productData.data,"abcde")
//       setData(productData.data)
//     } catch (error) {
//       console.log(error)
//     }
//   }



//   useEffect(()=>{
//     getData()
//   },[])

//   return (
//    <>
//    <div className="container my-5">
//   <h2 className="mb-4">Product Details</h2>
//   <div className="card shadow p-4 rounded">
//     <div className="row">
//       <div className="col-md-4 text-center">
//         {console.log(data)}
//         <img style={{height:"200px"}} src={data?.picImg} alt={data?.g?.name} />

//         <h5 className="text-primary">{data?.title}</h5>
//         <span className="badge bg-success">In Stock</span>
//       </div>
//       <div className="col-md-8">
//         <table className="table table-borderless">
//           <tbody>
//             <tr>
//               <th scope="row">Item Name:</th>
//               <td>{data?.g?.title}</td>
//             </tr>
//             <tr>
//               <th scope="row">Description:</th>
//               <td>{data?.g?.description}</td>
//             </tr>
//             <tr>
//               <th scope="row">Price:</th>
//               <td>${data?.g?.price}</td>
//             </tr>
//             <tr>
//               <th scope="row">Quantity:</th>
//               <td>{data?.g?.quantity}</td>
//             </tr>
//             <tr>
//               <th scope="row">Category:</th>
//               <td>{data?.category}</td>
//             </tr>
//             <tr>
//               <th scope="row">Status:</th>
//               <td>In Stock</td>
//             </tr>
//           </tbody>
//         </table>
//         {/* <div className="mt-3">
//           <button className="btn btn-primary me-2">Edit</button>
//           <button className="btn btn-danger">Delete</button>
//         </div> */}
//       </div>
//     </div>
//   </div>
// </div>

   
//    </>
//   )
// }

// export default ProductView


import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ProductView() {
  const { id: productId } = useParams();
const navigate=useNavigate()

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:6942/user/findProductById/${productId}`);
        setProduct(response.data);
      } catch (err) {
        setError('Failed to load product details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border text-primary" role="status" />
        <p className="mt-3">Loading product details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  const { g, category, picImg, title } = product || {};
  return (
    <div className="container my-5">
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <h2 className="mb-4">Product Details</h2>
       <button className="btn btn-secondary" onClick={(()=>navigate(-1))}>Back</button>
      </div>
      <div className="card shadow p-4 rounded">
        <div className="row">
          <div className="col-md-4 text-center">
            <img
              src={picImg}
              alt={g?.name || title}
              className="img-fluid rounded mb-3"
              style={{ maxHeight: '250px', objectFit: 'contain' }}
            />
            <h5 className="text-primary">{title}</h5>
            <span className="badge bg-success">In Stock</span>
          </div>
          <div className="col-md-8">
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <th scope="row">Item Name:</th>
                  <td>{g?.title || 'N/A'}</td>
                </tr>
                <tr>
                  <th scope="row">Description:</th>
                  <td>{g?.description || 'N/A'}</td>
                </tr>
                <tr>
                  <th scope="row">Price:</th>
                  <td>${g?.price ?? 'N/A'}</td>
                </tr>
                <tr>
                  <th scope="row">Quantity:</th>
                  <td>{g?.quantity ?? 'N/A'}</td>
                </tr>
                <tr>
                  <th scope="row">Category:</th>
                  <td>{category || 'N/A'}</td>
                </tr>
                <tr>
                  <th scope="row">Status:</th>
                  <td>{g?.quantity > 0 ? 'In Stock' : 'Out of Stock'}</td>
                </tr>
              </tbody>
            </table>

            {/* Optional Action Buttons */}
            {/* <div className="mt-4">
              <button className="btn btn-primary me-2">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
