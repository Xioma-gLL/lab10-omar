import Link from "next/link";
type Params = {
    params: Promise<{
        id: string;
    }>
}

export async function generateStaticParams() {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json()
    
    
    return products.map((product: any) => ({
        id: product.id.toString()

    }))
}

export default async function ProductPage({ params }: Params) {
    const { id } = await params
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await res.json()

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
            <p className="mt-2">{product.description}</p>
            <p className="mt-2 font-semibold">${product.price}</p>

            <div>
                <Link href="/products" >
                    <button className="mb-6 rounded bg-gray-900 px-4 py-2 text-white hover:bg-gray-700">
                        Volver a Productos

                    </button>
                </Link>


            </div>

        </div>
    );
}    
