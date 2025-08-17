


export default function BlogFondoPage() {
  return (
    <main className="font-sans text-gray-800 p-4 py-16 bg-pink-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <img
          src="/imagenes/blog3.jpeg"
          alt="Imagen de un fondo de emergencia"
          className="w-full h-auto rounded-lg mb-6 object-cover max-h-96"
          loading="lazy"
        />
        <h1 className="text-4xl font-bold mb-4 text-center text-pink-800">
          La importancia de un fondo de emergencia
        </h1>
        <p className="text-gray-600 text-sm mb-6 text-center">Publicado el 29 de junio de 2025</p>

        <article className="prose max-w-none text-left">
          {/* Aquí va todo el contenido de texto que pasaste */}
          {/* ... */}
        </article>

        <div className="mt-8 text-center">
          <a href="/#blog" className="text-blue-600 hover:underline">← Volver al Blog</a>
        </div>
      </div>
    </main>
  );
}
