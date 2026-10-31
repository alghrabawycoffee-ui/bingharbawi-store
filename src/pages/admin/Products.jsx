import { useState } from 'react'
import { useProducts } from '../../context/ProductContext'

export default function AdminProducts() {
  const { products, addProduct, removeProduct } = useProducts()
  const [f, setF] = useState({ name: '', price: '', image: '', desc: '' })

  const add = (e) => {
    e.preventDefault()
    addProduct({ ...f, price: +f.price, inStock: true })
    setF({ name: '', price: '', image: '', desc: '' })
  }

  return (
    <div>
      <h1 style={{ fontWeight: 900, fontSize: 22, marginBottom: 20 }}>المنتجات</h1>
      <form onSubmit={add} style={{ background: '#fff', padding: 20, borderRadius: 10, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 10, marginBottom: 20 }}>
        <input placeholder="اسم المنتج" value={f.name} onChange={e => setF({...f, name: e.target.value})} style={{ padding: 10, border: '1px solid #eee', borderRadius: 8 }} />
        <input placeholder="السعر" value={f.price} onChange={e => setF({...f, price: e.target.value})} style={{ padding: 10, border: '1px solid #eee', borderRadius: 8 }} />
        <input placeholder="رابط الصورة" value={f.image} onChange={e => setF({...f, image: e.target.value})} style={{ padding: 10, border: '1px solid #eee', borderRadius: 8 }} />
        <button style={{ background: '#000', color: '#fff', borderRadius: 8 }}>إضافة</button>
      </form>
      <div style={{ background: '#fff', borderRadius: 10, overflow: 'hidden' }}>
        {products.map(p => (
          <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid #f7f7f7' }}>
            <div>{p.name} - {p.price} ر.س</div>
            <button onClick={() => removeProduct(p.id)} style={{ color: 'red' }}>حذف</button>
          </div>
        ))}
      </div>
    </div>
  )
}
