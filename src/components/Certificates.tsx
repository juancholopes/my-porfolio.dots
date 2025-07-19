import React from "react";
import { ExternalLink, Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import certificatesData from "../data/certificates.json";

// Configuración de iconos para cada empresa certificadora
const CompanyIcons = {
  microsoft: () => (
    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-sm">
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path fill="#ffffff" d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
      </svg>
    </div>
  ),
  google: () => (
    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    </div>
  ),
  aws: () => (
    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center shadow-sm">
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
        <path fill="currentColor" d="M6.763 10.036c0 .296.032.535.088.719.064.184.144.336.248.456a.995.995 0 0 0 .384.272c.144.064.304.096.48.096.176 0 .336-.032.48-.096a.995.995 0 0 0 .384-.272c.104-.12.184-.272.248-.456.056-.184.088-.423.088-.719 0-.296-.032-.535-.088-.719a1.78 1.78 0 0 0-.248-.456.995.995 0 0 0-.384-.272 1.285 1.285 0 0 0-.48-.096c-.176 0-.336.032-.48.096a.995.995 0 0 0-.384.272c-.104.12-.184.272-.248.456-.056.184-.088.423-.088.719zm8.624 0c0 .296.032.535.088.719.064.184.144.336.248.456a.995.995 0 0 0 .384.272c.144.064.304.096.48.096.176 0 .336-.032.48-.096a.995.995 0 0 0 .384-.272c.104-.12.184-.272.248-.456.056-.184.088-.423.088-.719 0-.296-.032-.535-.088-.719a1.78 1.78 0 0 0-.248-.456.995.995 0 0 0-.384-.272 1.285 1.285 0 0 0-.48-.096c-.176 0-.336.032-.48.096a.995.995 0 0 0-.384.272c-.104.12-.184.272-.248.456-.056.184-.088.423-.088.719zM24 12.033c0 .751-.184 1.407-.552 1.967-.368.56-.888 1.016-1.56 1.368-.672.352-1.48.632-2.424.84-.944.208-2.008.312-3.192.312s-2.248-.104-3.192-.312c-.944-.208-1.752-.488-2.424-.84-.672-.352-1.192-.808-1.56-1.368C8.184 13.44 8 12.784 8 12.033c0-.751.184-1.407.552-1.967.368-.56.888-1.016 1.56-1.368.672-.352 1.48-.632 2.424-.84.944-.208 2.008-.312 3.192-.312s2.248.104 3.192.312c.944.208 1.752.488 2.424.84.672.352 1.192.808 1.56 1.368.368.56.552 1.216.552 1.967z"/>
      </svg>
    </div>
  ),
  ibm: () => (
    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-sm">
      <svg viewBox="0 0 24 24" className="w-7 h-4 text-white">
        <path fill="currentColor" d="M0 9.875h1.615v4.25H0zm2.155 0h1.616v4.25H2.155zm2.156 0h1.615v4.25H4.31zm2.156.54h1.615v3.17H6.466zm2.156-.54h1.615v4.25H8.622zm2.156 0h1.615v4.25h-1.615zm2.156 0h1.615v4.25h-1.615zm2.156.54h1.615v3.17h-1.615zm2.156-.54H24v4.25h-1.615zm-13.25.54h1.075v3.17h-1.075z"/>
      </svg>
    </div>
  ),
  platzi: () => (
    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center shadow-sm">
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
        <path fill="currentColor" d="M10.6389,1.9805 C9.40278,1.9805 8.41667,2.9889 8.41667,4.25 L8.41667,7.75 C8.41667,9.0111 9.40278,10.0195 10.6389,10.0195 L14.1667,10.0195 C15.4028,10.0195 16.3889,9.0111 16.3889,7.75 L16.3889,4.25 C16.3889,2.9889 15.4028,1.9805 14.1667,1.9805 L10.6389,1.9805 Z M9.80556,14.0195 C8.56944,14.0195 7.58333,15.0279 7.58333,16.289 L7.58333,19.789 C7.58333,21.0501 8.56944,22.0585 9.80556,22.0585 L13.3333,22.0585 C14.5694,22.0585 15.5556,21.0501 15.5556,19.789 L15.5556,16.289 C15.5556,15.0279 14.5694,14.0195 13.3333,14.0195 L9.80556,14.0195 Z"/>
      </svg>
    </div>
  ),
  mintic: () => (
    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 via-blue-500 to-red-500 rounded-lg flex items-center justify-center shadow-sm">
      <span className="text-white font-bold text-xs">TIC</span>
    </div>
  ),
};

const Certificates = () => {
  const { t } = useTranslation();

  return (
    <section id="certificates" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      {/* Decorative lines */}
      <div className="absolute top-20 right-0 w-16 sm:w-32 h-0.5 bg-gradient-to-l from-blue-500 to-transparent hidden sm:block"></div>
      <div className="absolute bottom-20 left-0 w-24 sm:w-48 h-0.5 bg-gradient-to-r from-blue-500 to-transparent hidden sm:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
            data-cursor="text"
          >
            <span
              className="text-blue-500 dark:text-blue-400"
              data-cursor="text"
            >
              {t("certificates.title")}
            </span>
          </h2>
          <p
            className="text-slate-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0"
            data-cursor="text"
          >
            {t("certificates.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificatesData.map((certificate) => (
            <div key={certificate.id} className="group relative">
              <div className="border border-blue-500/30 rounded-lg p-4 sm:p-6 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 h-full">
                
                {/* Header with icon and title */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3 flex-1">
                    {CompanyIcons[certificate.icon as keyof typeof CompanyIcons]?.() || (
                      <Award className="w-8 h-8 text-blue-500" />
                    )}
                    <div className="flex-1">
                      <h3
                        className="text-lg sm:text-xl font-bold text-foreground group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight"
                        data-cursor="text"
                      >
                        {t(certificate.titleKey)}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 mt-1">
                        {t("certificates.issuedBy")} {certificate.issuer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-slate-600 dark:text-gray-300 mb-4 leading-relaxed text-sm sm:text-base"
                  data-cursor="text"
                >
                  {t(certificate.descriptionKey)}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {certificate.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-300 rounded-full text-xs sm:text-sm border border-blue-500/30"
                      data-cursor="text"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom section with button and date */}
                <div className="flex items-end justify-between">
                  {/* View certificate button */}
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-500/50 rounded-lg text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 text-sm sm:text-base group/btn"
                    data-cursor="text"
                  >
                    <span>{t("certificates.viewCertificate")}</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                  
                  {/* Date in bottom right corner */}
                  <span className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-semibold bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
                    {certificate.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
