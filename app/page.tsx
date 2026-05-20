export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-black mb-4">
        Bienvenido a MyApp
      </h1>
      <p className="text-lg text-black mb-8">
        Esta es la pagina de inicio. Explora las secciones usando la barra de navegacion.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Acerca</h2>
          <p className="text-black">
            Conoce mas sobre este proyecto y su proposito.
          </p>
        </div>
        <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Productos</h2>
          <p className="text-black">
            Explora nuestra lista de productos disponibles.
          </p>
        </div>
      </div>
    </div>
  );
}
