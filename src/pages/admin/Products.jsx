import { useState } from 'react'
import { useProducts } from '../../context/ProductContext'

export default function AdminProducts() {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts()
  const [form, setForm] = useState({ name: '', price: '', image: '', desc: '', category: 'حبوب البن', inStock: true })

  const handleAdd = (e) => {
    e.preventDefault()
    addProduct({ ...form, price: Number(form.price) })
    setForm({ name: '', price: '', image: '', desc: '', category: 'حبوب البن', inStock: true })
  }

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '24px' }}>إدارة المنتجات</h1>
      <form onSubmit={handleAdd} style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '12px', marginBottom: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
        <input required placeholder="اسم المنتج" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} style={{ padding: '10px', border: '1px solid #e5e5e5', borderRadius: '8px' }} />
        <input required placeholder="السعر" type="number" value={form.price} onChange={(e) => setForm({...form, price: e.target.value})} style={{ padding: '10px', border: '1px solid #e5e5e5', borderRadius: '8px' }} />
        <input required placeholder="رابط الصورة" value={form.image} onChange={(e) => setForm({...form, image: e.target.value})} style={{ padding: '10px', border: '1px solid #e5e5e5', borderRadius: '8px' }} />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#1A1A1A', color: '#FFFFFF', borderRadius: '8px', fontWeight: '700' }}>إضافة منتج</button>
      </form>
      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#f9f9f9' }}>
            <tr>
              <th style={{ padding: '12px', textAlign: 'right' }}>المنتج</th>
              <th style={{ padding: '12px', textAlign: 'right' }}>السعر</th>
              <th style={{ padding: '12px', textAlign: 'right' }}>إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} style={{ borderTop: '1px solid #f5f5f5' }}>
                <td style={{ padding: '12px' }}>{product.name}</td>
                <td style={{ padding: '12px' }}>{product.price} ر.س</td>
                <td style={{ padding: '12px' }}>
                  <button onClick={() => deleteProduct(product.id)} style={{ color: '#D9534F' }}>حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
