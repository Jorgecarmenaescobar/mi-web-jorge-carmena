import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Marina G.",
    text: "Nunca pensé que pudiera cambiar tanto en tan poco tiempo. Los ejercicios de Jorge me hicieron recuperar la seguridad que había perdido hace años. Ahora hablo sin miedo y me siento capaz de todo."
  },
  {
    name: "Carlos P.",
    text: "Me di cuenta de que la confianza no es algo con lo que naces, sino que se entrena. Gracias a este método, hoy soy la persona que siempre quise ser."
  },
  {
    name: "Lucía R.",
    text: "Lo que más me impactó fue cómo te cambia la mentalidad. En solo una semana noté resultados reales y empecé a actuar sin dudar. Brutal."
  }
];

export default function Testimonials() {
  return (
    <section className="relative bg-black py-20 px-4 sm:px-6 lg:px-8">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-center mb-4"
        >
          Lo que dicen
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            quienes ya lo hicieron:
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 mb-16 text-lg"
        >
          Resultados reales de personas reales
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-blue-500 text-blue-500" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <p className="text-white font-bold">
                — {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}