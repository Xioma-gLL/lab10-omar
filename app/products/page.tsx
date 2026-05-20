export default async function ProductsPage() {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
    
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Nuestros Productos</h1>
            <ul className="mt-4 space-y-2">
                {products.map((product: any) => (
                    <li key={product.id} >
                        <a href={`/products/${product.id}`} className="text-blue-600">
                            <h2 className="text-lg font-semibold">{product.title}</h2>    
                        </a>
                        
                    </li>
                ))}

            </ul>
            
        </div>
    );
}