import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cookie, Shield, Info, Settings, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1f28] via-[#1a2f3a] to-[#0d1f28]">
      {/* Header */}
      <header className="bg-[#0d1f28]/90 backdrop-blur-lg shadow-lg sticky top-0 z-40 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" className="gap-2 text-white/70 hover:text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Cookie className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Política de Cookies
            </h1>
            <p className="text-lg text-gray-300">
              Última actualización: {new Date().toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </motion.div>

          {/* Introducción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="mb-8 bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Info className="w-6 h-6 text-blue-400" />
                  ¿Qué son las cookies?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. 
                  Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente, así como para 
                  proporcionar información a los propietarios del sitio.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Esta política de cookies explica qué cookies utilizamos, por qué las utilizamos y cómo puedes 
                  administrar tus preferencias de cookies.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tipos de cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 mb-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Tipos de cookies que utilizamos</h2>

            {/* Cookies necesarias */}
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-white">
                    <Shield className="w-5 h-5 text-green-400" />
                    Cookies necesarias
                  </span>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">Siempre activas</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar en nuestros sistemas. 
                  Generalmente se establecen solo en respuesta a acciones realizadas por ti que equivalen a una solicitud de servicios.
                </p>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold mb-2 text-white">Ejemplos de uso:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    <li>Recordar tus preferencias de cookies</li>
                    <li>Mantener tu sesión activa</li>
                    <li>Garantizar la seguridad del sitio</li>
                    <li>Habilitar funciones básicas de navegación</li>
                  </ul>
                </div>
                <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-700/50">
                  <p className="text-sm text-gray-300">
                    <strong>Duración:</strong> Permanecen hasta que cierras el navegador (cookies de sesión) o hasta 12 meses.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies analíticas */}
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-white">
                    <Info className="w-5 h-5 text-blue-400" />
                    Cookies analíticas
                  </span>
                  <Badge className="bg-blue-600 text-white">Opcional</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Estas cookies nos permiten contar las visitas y fuentes de tráfico para poder medir y mejorar el 
                  rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son más o menos populares y ver cómo 
                  los visitantes navegan por el sitio.
                </p>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold mb-2 text-white">Información recopilada:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    <li>Páginas visitadas y tiempo de permanencia</li>
                    <li>Origen de la visita (motor de búsqueda, enlace directo, etc.)</li>
                    <li>Dispositivo y navegador utilizado</li>
                    <li>Patrones de navegación dentro del sitio</li>
                  </ul>
                </div>
                <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-700/50">
                  <p className="text-sm text-gray-300">
                    <strong>Duración:</strong> Hasta 24 meses.<br />
                    <strong>Servicios:</strong> Google Analytics, similares servicios de análisis.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies de marketing */}
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-white">
                    <Settings className="w-5 h-5 text-purple-400" />
                    Cookies de marketing
                  </span>
                  <Badge className="bg-purple-600 text-white">Opcional</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros socios publicitarios. 
                  Pueden ser utilizadas por esas empresas para crear un perfil de tus intereses y mostrarte anuncios 
                  relevantes en otros sitios.
                </p>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold mb-2 text-white">Propósito:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    <li>Mostrar publicidad personalizada</li>
                    <li>Medir la efectividad de campañas publicitarias</li>
                    <li>Limitar el número de veces que ves un anuncio</li>
                    <li>Recordar que has visitado nuestro sitio web</li>
                  </ul>
                </div>
                <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-700/50">
                  <p className="text-sm text-gray-300">
                    <strong>Duración:</strong> Hasta 24 meses.<br />
                    <strong>Servicios:</strong> Google Ads, Facebook Pixel, LinkedIn Insights.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies funcionales */}
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-white">
                    <Cookie className="w-5 h-5 text-orange-400" />
                    Cookies funcionales
                  </span>
                  <Badge className="bg-orange-600 text-white">Opcional</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Estas cookies permiten que el sitio web proporcione funcionalidad y personalización mejoradas. 
                  Pueden ser establecidas por nosotros o por proveedores externos cuyos servicios hemos agregado a nuestras páginas.
                </p>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold mb-2 text-white">Funciones habilitadas:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    <li>Recordar tus preferencias de idioma y región</li>
                    <li>Personalizar el contenido según tus preferencias</li>
                    <li>Habilitar características de redes sociales</li>
                    <li>Proporcionar chat en vivo y soporte</li>
                  </ul>
                </div>
                <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-700/50">
                  <p className="text-sm text-gray-300">
                    <strong>Duración:</strong> Hasta 12 meses.<br />
                    <strong>Servicios:</strong> Widgets de redes sociales, sistemas de chat en vivo.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Marco legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="mb-8 bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Shield className="w-6 h-6 text-blue-400" />
                  Marco legal y cumplimiento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-white">GDPR (Reglamento General de Protección de Datos - Europa/Alemania)</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    Cumplimos con el GDPR (Reglamento UE 2016/679) que establece reglas estrictas sobre el uso de cookies 
                    y el procesamiento de datos personales. Esto incluye:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300 ml-4">
                    <li>Obtener tu consentimiento explícito antes de establecer cookies no esenciales</li>
                    <li>Proporcionar información clara sobre qué cookies utilizamos</li>
                    <li>Permitirte retirar tu consentimiento en cualquier momento</li>
                    <li>Garantizar la seguridad de tus datos personales</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 text-white">Ley 1581 de 2012 (Colombia)</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    Cumplimos con la Ley 1581 de 2012 de Colombia sobre protección de datos personales, que requiere:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300 ml-4">
                    <li>Obtener autorización previa, expresa e informada para el tratamiento de datos personales</li>
                    <li>Informar claramente sobre la finalidad del tratamiento de datos</li>
                    <li>Garantizar el derecho de acceso, rectificación y eliminación de datos</li>
                    <li>Implementar medidas de seguridad apropiadas</li>
                  </ul>
                </div>

                <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-700/50 mt-4">
                  <p className="text-sm text-gray-300">
                    <strong>Tus derechos:</strong> Tienes derecho a acceder, rectificar, eliminar o limitar el uso de tus datos personales, 
                    así como a oponerte al tratamiento y solicitar la portabilidad de los datos. Para ejercer estos derechos, 
                    puedes contactarnos a través de nuestra página de contacto.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Cómo gestionar cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="mb-8 bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Settings className="w-6 h-6 text-blue-400" />
                  Cómo gestionar tus cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Puedes controlar y administrar las cookies de varias maneras:
                </p>

                <div className="space-y-3">
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="font-semibold mb-2 text-white">1. Configuración de este sitio web</h4>
                    <p className="text-sm text-gray-300 mb-2">
                      Puedes cambiar tus preferencias de cookies en cualquier momento utilizando nuestro banner de cookies 
                      o haciendo clic en el botón a continuación:
                    </p>
                    <Button 
                      onClick={() => {
                        localStorage.removeItem('cookie-consent');
                        window.location.reload();
                      }}
                      className="mt-2"
                    >
                      Cambiar preferencias de cookies
                    </Button>
                  </div>

                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="font-semibold mb-2 text-white">2. Configuración del navegador</h4>
                    <p className="text-sm text-gray-300 mb-2">
                      La mayoría de los navegadores te permiten controlar las cookies a través de su configuración. 
                      Para obtener más información sobre cómo administrar cookies en navegadores populares:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-300 ml-2">
                      <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline">Google Chrome</a></li>
                      <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline">Mozilla Firefox</a></li>
                      <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline">Safari</a></li>
                      <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline">Microsoft Edge</a></li>
                    </ul>
                  </div>

                  <div className="bg-amber-900/30 p-4 rounded-lg border border-amber-700/50">
                    <p className="text-sm text-gray-300">
                      <strong>Nota importante:</strong> Bloquear o eliminar cookies puede afectar tu experiencia en nuestro sitio web 
                      y puede impedir que ciertas funciones o servicios funcionen correctamente.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Si tienes preguntas sobre nuestra política de cookies o sobre cómo manejamos tus datos personales, 
                  por favor contáctanos:
                </p>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <p className="text-sm text-gray-300">
                    <strong>Email:</strong> <a href="mailto:support@cgcorp.com" className="text-blue-400 hover:text-blue-300 hover:underline">support@cgcorp.com</a><br />
                    <strong>Teléfono:</strong> +49 (176) 225-70431<br />
                    <strong>Dirección:</strong> Maistraße 10 - 80337. Múnich, MUC
                  </p>
                </div>
                <Link href="/contact-us">
                  <Button className="w-full md:w-auto">
                    Ir a página de contacto
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* Footer */}
          <div className="text-center text-sm text-gray-400 mt-12 pt-8 border-t border-gray-700">
            <p>
              Esta política de cookies fue actualizada por última vez el {new Date().toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}.
            </p>
            <p className="mt-2">
              Nos reservamos el derecho de modificar esta política en cualquier momento. 
              Los cambios entrarán en vigor inmediatamente después de su publicación en esta página.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
