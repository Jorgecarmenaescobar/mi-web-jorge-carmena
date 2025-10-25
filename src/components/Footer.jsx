export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-blue-500/20 py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Reto Confianza Total - Jorge Carmena. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}