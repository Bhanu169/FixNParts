import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cookie from 'js-cookie';

function MyOrderForAdmin() {
  const getCookieUser = cookie.get('userInfo');
  const token = getCookieUser ? JSON.parse(getCookieUser) : null;
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getOrders = async () => {
    try {
      const response = await axios.get(`https://fixnparts.onrender.com/user/orderGetAllForAdmin`, {
        headers: {
          Authorization: `Bearer ${token?.token}`,
        },
      });
      setData(response.data.body);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="container py-5" style={{ marginTop: '100px' }}>
      <div className="text-center mb-5">
        <h2 className="fw-bold text-primary">🧾 Admin Order Dashboard</h2>
        <p className="text-muted">Overview of all customer orders</p>
      </div>

      {data.length > 0 ? (
        <div className="table-responsive shadow rounded">
          <table className="table table-bordered table-hover align-middle text-center">
            <thead className="table-dark text-uppercase">
              <tr>
                <th>S.no</th>
                <th>Order ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Date</th>
                <th>Time</th>
                <th>Product(s)</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
                <th>Shipping</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e, index) => (
                <tr key={e._id} className={index % 2 === 0 ? 'table-light' : ''}>
                  <td>{index + 1}</td>
                  <td>{e.orderId}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.phone}</td>
                  <td>{e.address}</td>
                  <td>{new Date(e.createdAt).toLocaleDateString('en-GB', {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}</td>
                  <td>{new Date(e.createdAt).toLocaleTimeString('en-GB', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}</td>
                  <td>
                    {e.products?.map((product) => {
                      const name = product?.productId?.title;
                      return Array.isArray(name) ? name.join(', ') : name || 'N/A';
                    }).join(', ')}
                  </td>
                  <td>{e?.quantity}</td>
                  <td>
                    {e.products?.map((product) => {
                      const price = product?.productId?.price;
                      return Array.isArray(price)
                        ? price.map(p => `₹${p}`).join(', ')
                        : `₹${price || 'N/A'}`;
                    }).join(', ')}
                  </td>
                  <td><strong>₹ {e.totalAmount}</strong></td>
                  <td>₹ 20</td>
                  <td className="text-success fw-bold">₹ {e.totalAmount + 20}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center p-4 border rounded shadow-sm bg-light">
          <h5>No orders found!</h5>
          <p className="text-muted">Start adding some to see them here.</p>
          <Link to="/ProductPage" className="btn btn-primary rounded-pill mt-2">
            🛍️ Browse Products
          </Link>
        </div>
      )}
    </div>
  );
}

export default MyOrderForAdmin;
