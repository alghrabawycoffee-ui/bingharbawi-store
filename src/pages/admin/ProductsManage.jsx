import { useState } from 'react'
import { useProducts } from '../../context/ProductContext'

export default function ProductsManage() {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts()
  const [showForm, setShowForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [formData, setFormData] = useState({
    name: '', price: '', image: '', desc: '', category: 'بن تركي', inStock: true
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingProduct) {
      updateProduct(editingProduct.id, { ...formData, price: Number(formData.price) })
    } else {
      addProduct({ ...formData, price: Number(formData.price) })
    }
    resetForm()
  }

  const resetForm = () => {
    setFormData({ name: '', price: '', image: '', desc: '', category: 'بن تركي', inStock: true })
    setEditingProduct(null)
    setShowForm(false)
  }

  const handleEdit = (product) => {
    setEditingProduct(product)
    setFormData({ ...product, price: product.price.toString() })
    setShowForm(true)
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2rem', color: '#3b2314', fontWeight: '800' }}>إدارة المنتجات</h1>
        <button onClick={() => setShowForm(true)} style={{ padding: '12px 25px', backgroundColor: '#3b2314', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: '700', cursor: 'pointer' }}>
          + إضافة منتج جديد
        </button>
      </div>

      {showForm && (
        <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', marginBottom: '30px', boxShadow: '0 2px 15px rgba(0,0,0,0.04)' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '25px', fontWeight: '800' }}>{editingProduct ? 'تعديل المنتج' : 'إضافة منتج جديد'}</h2>
          <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '18px' }}>
            <input required placeholder="اسم المنتج" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ padding: '12px', borderRadius: '10px', border: '1px solid #e0e0e0', fontFamily: 'Cairo' }} />
            <input required type="number" placeholder="السعر" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} style={{ padding: '12px', borderRadius: '10px', border: '1px solid #e0e0e0', fontFamily: 'Cairo' }} />
            <input required placeholder="رابط الصورة" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} style={{ padding: '12px', borderRadius: '10px', border: '1px solid #e0e0e0', fontFamily: 'Cairo' }} />
            <input placeholder="التصنيف" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} style={{ padding: '12px', borderRadius: '10px', border: '1px solid #e0e0e0', fontFamily: 'Cairo' }} />
            <textarea required placeholder="وصف المنتج" value={formData.desc} onChange={(e) => setFormData({...formData, desc: e.target.value})} rows="3" style={{ gridColumn: '1 / -1', padding: '12px', borderRadius: '10px', border: '1px solid #e0e0e0', fontFamily: 'Cairo', resize: 'vertical' }} />
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', gridColumn: '1 / -1' }}>
              <input type="checkbox" checked={formData.inStock} onChange={(e) => setFormData({...formData, inStock: e.target.checked})} />
              متوفر
            </label>
            <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '10px' }}>
              <button type="submit" style={{ padding: '12px 25px', backgroundColor: '#3b2314', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: '700', cursor: 'pointer' }}>{editingProduct ? 'حفظ التعديل' : 'إضافة'}</button>
              <button type="button" onClick={resetForm} style={{ padding: '12px 25px', backgroundColor: '#f5f5f5', border: 'none', borderRadius: '10px', fontWeight: '700', cursor: 'pointer' }}>إلغاء</button>
            </div>
          </form>
        </div>
      )}

      <div style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 15px rgba(0,0,0,0.04)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f9f9f9' }}>
              <th style={{ padding: '16px', textAlign: 'right', fontWeight: '800' }}>الصورة</th>
              <th style={{ padding: '16px', textAlign: 'right', fontWeight: '800' }}>الاسم</th>
              <th style={{ padding: '16px', textAlign: 'right', fontWeight: '800' }}>السعر</th>
              <th style={{ padding: '16px', textAlign: 'right', fontWeight: '800' }}>التصنيف</th>
              <th style={{ padding: '16px', textAlign: 'right', fontWeight: '800' }}>الحالة</th>
              <th style={{ padding: '16px', textAlign: 'right', fontWeight: '800' }}>إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} style={{ borderTop: '1px solid #f0f0f0' }}>
                <td style={{ padding: '16px' }}>
                  <img src={product.image} alt={product.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
                </td>
                <td style={{ padding: '16px', fontWeight: '700' }}>{product.name}</td>
                <td style={{ padding: '16px', fontWeight: '700', color: '#d97706' }}>{product.price} ج.م</td>
                <td style={{ padding: '16px' }}>{product.category}</td>
                <td style={{ padding: '16px' }}>
                  <span style={{ padding: '6px 12px', backgroundColor: product.inStock ? '#e8f5e9' : '#ffebee', color: product.inStock ? '#2e7d32' : '#c62828', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '700' }}>
                    {product.inStock ? 'متوفر' : 'غير متوفر'}
                  </span>
                </td>
                <td style={{ padding: '16px', display: 'flex', gap: '10px' }}>
                  <button onClick={() => handleEdit(product)} style={{ padding: '8px 16px', backgroundColor: '#f5f5f5', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '700' }}>تعديل</button>
                  <button onClick={() => deleteProduct(product.id)} style={{ padding: '8px 16px', backgroundColor: '#ffebee', color: '#c62828', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '700' }}>حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
