import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { X, Cookie, Settings } from "lucide-react";
import { Link } from "wouter";

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const defaultPreferences: CookiePreferences = {
  necessary: true, // Siempre activadas
  analytics: false,
  marketing: false,
  functional: false,
};

export const useCookieConsent = () => {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setPreferences(parsed);
      } catch (e) {
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs));
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setPreferences(prefs);
    setShowBanner(false);
  };

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    });
  };

  const rejectAll = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    });
  };

  const updatePreferences = (prefs: CookiePreferences) => {
    savePreferences({ ...prefs, necessary: true });
  };

  return {
    preferences,
    showBanner,
    acceptAll,
    rejectAll,
    updatePreferences,
    setShowBanner,
  };
};

export function CookieBanner() {
  const {
    showBanner,
    acceptAll,
    rejectAll,
    updatePreferences,
    setShowBanner,
  } = useCookieConsent();

  const [showSettings, setShowSettings] = useState(false);
  const [tempPreferences, setTempPreferences] = useState<CookiePreferences>(defaultPreferences);

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <Card className="max-w-6xl mx-auto bg-gray-900/98 backdrop-blur-lg shadow-2xl border-2 border-gray-700">
          <CardContent className="p-6">
            {!showSettings ? (
              // Banner simple
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <Cookie className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-white">
                      Utilizamos cookies
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación, 
                      analizar el tráfico del sitio y personalizar el contenido. Puedes aceptar todas las 
                      cookies, rechazarlas o personalizar tus preferencias.{" "}
                      <Link href="/cookie-policy" className="text-blue-400 hover:text-blue-300 hover:underline">
                        Más información
                      </Link>
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 md:flex-nowrap">
                  <Button
                    variant="outline"
                    onClick={() => setShowSettings(true)}
                    className="whitespace-nowrap border-gray-600 text-gray-200 hover:bg-gray-800 hover:text-white"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Personalizar
                  </Button>
                  <Button
                    variant="outline"
                    onClick={rejectAll}
                    className="whitespace-nowrap border-gray-600 text-gray-200 hover:bg-gray-800 hover:text-white"
                  >
                    Rechazar todas
                  </Button>
                  <Button
                    onClick={acceptAll}
                    className="whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Aceptar todas
                  </Button>
                </div>
              </div>
            ) : (
              // Panel de configuración
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-xl flex items-center gap-2 text-white">
                    <Cookie className="w-6 h-6 text-blue-400" />
                    Configuración de cookies
                  </h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowSettings(false)}
                    className="hover:bg-gray-800 text-gray-300 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                  {/* Cookies necesarias */}
                  <div className="flex items-start justify-between p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Label className="font-semibold text-base text-white">
                          Cookies necesarias
                        </Label>
                        <Badge variant="secondary" className="text-xs bg-gray-700 text-gray-300">
                          Siempre activas
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-300">
                        Estas cookies son esenciales para el funcionamiento del sitio web. 
                        Permiten funciones básicas como la navegación por páginas y el acceso a áreas seguras.
                      </p>
                    </div>
                    <Switch checked={true} disabled />
                  </div>

                  {/* Cookies analíticas */}
                  <div className="flex items-start justify-between p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <div className="flex-1 pr-4">
                      <Label className="font-semibold text-base mb-2 block text-white">
                        Cookies analíticas
                      </Label>
                      <p className="text-sm text-gray-300">
                        Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web, 
                        recopilando información de forma anónima. Esto nos permite mejorar continuamente 
                        la experiencia del usuario.
                      </p>
                    </div>
                    <Switch
                      checked={tempPreferences.analytics}
                      onCheckedChange={(checked) =>
                        setTempPreferences({ ...tempPreferences, analytics: checked })
                      }
                    />
                  </div>

                  {/* Cookies de marketing */}
                  <div className="flex items-start justify-between p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <div className="flex-1 pr-4">
                      <Label className="font-semibold text-base mb-2 block text-white">
                        Cookies de marketing
                      </Label>
                      <p className="text-sm text-gray-300">
                        Se utilizan para rastrear a los visitantes en diferentes sitios web. 
                        Su propósito es mostrar anuncios relevantes y personalizados para el usuario.
                      </p>
                    </div>
                    <Switch
                      checked={tempPreferences.marketing}
                      onCheckedChange={(checked) =>
                        setTempPreferences({ ...tempPreferences, marketing: checked })
                      }
                    />
                  </div>

                  {/* Cookies funcionales */}
                  <div className="flex items-start justify-between p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <div className="flex-1 pr-4">
                      <Label className="font-semibold text-base mb-2 block text-white">
                        Cookies funcionales
                      </Label>
                      <p className="text-sm text-gray-300">
                        Permiten que el sitio web recuerde las elecciones que haces (como tu idioma o región) 
                        y proporcionen características mejoradas y más personales.
                      </p>
                    </div>
                    <Switch
                      checked={tempPreferences.functional}
                      onCheckedChange={(checked) =>
                        setTempPreferences({ ...tempPreferences, functional: checked })
                      }
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-end pt-4 border-t border-gray-700">
                  <Button
                    variant="outline"
                    onClick={() => setShowSettings(false)}
                    className="border-gray-600 text-gray-200 hover:bg-gray-800 hover:text-white"
                  >
                    Cancelar
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      rejectAll();
                      setShowSettings(false);
                    }}
                    className="border-gray-600 text-gray-200 hover:bg-gray-800 hover:text-white"
                  >
                    Rechazar todas
                  </Button>
                  <Button
                    onClick={() => {
                      updatePreferences(tempPreferences);
                      setShowSettings(false);
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Guardar preferencias
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
