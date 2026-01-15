import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CertificateCardProps {
  certificate: {
    id: number;
    titleKey: string;
    descriptionKey: string;
    issuer: string;
    icon: string;
    skills: string[];
    credentialUrl: string;
    date: string;
  };
}

// Configuración de iconos para cada empresa certificadora
const CompanyIcons = {
  microsoft: () => (
    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-sm">
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path
          fill="#ffffff"
          d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"
        />
      </svg>
    </div>
  ),
  google: () => (
    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
    </div>
  ),
  aws: () => (
    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center shadow-sm p-2.5">
      <svg viewBox="0 0 256 153" className="w-full h-full">
        <path
          fill="#ffffff"
          d="M72.392 55.438c0 3.137.343 5.68.93 7.678.636 1.95 1.44 3.9 2.635 5.802 .44.685.636 1.37.636 1.998 0 .88-.538 1.76-1.66 2.64l-5.513 3.675c-.783.538-1.567.783-2.302.783-.88 0-1.762-.44-2.643-1.272-1.195-1.272-2.194-2.64-3.04-4.106-.88-1.517-1.76-3.284-2.688-5.437-6.786 7.972-15.296 11.95-25.58 11.95-7.323 0-13.154-2.105-17.504-6.296-4.35-4.204-6.492-9.788-6.492-16.868 0-7.47 2.643-13.545 7.96-18.2 5.316-4.655 12.396-6.982 21.29-6.982 2.936 0 5.952.245 9.153.686 3.186.44 6.492 1.076 9.934 1.86v-6.197c0-6.443-1.342-10.96-3.97-13.594-2.692-2.643-7.274-3.92-13.79-3.92-2.985 0-6.05.342-9.25.978-3.185.636-6.296 1.467-9.348 2.447-1.37.587-2.398.93-2.985 1.125-.587.196-1.026.294-1.32.294-1.15 0-1.713-.833-1.713-2.546V9.162c0-1.32.196-2.3.538-2.888.343-.587.978-1.125 1.958-1.614 2.985-1.566 6.59-2.838 10.766-3.9C41.16.783 45.58.246 50.224.246c11.448 0 19.823 2.594 25.238 7.812 5.317 5.218 8.01 13.104 8.01 23.707v31.134l-.08.538zm-35.317 13.3c2.838 0 5.778-.538 8.864-1.567 3.088-1.076 5.827-3.088 8.107-5.974 1.37-1.86 2.398-3.92 2.985-6.247.587-2.3.93-5.023.93-8.156V44.11c-2.594-.587-5.316-1.076-8.156-1.37-2.838-.294-5.68-.44-8.5-.44-6.05 0-10.473 1.174-13.4 3.577-2.887 2.4-4.35 5.827-4.35 10.326 0 4.154 1.077 7.274 3.333 9.495 2.203 2.203 5.415 3.284 9.69 3.284l.49-.244zm69.876 9.544c-1.467 0-2.447-.245-3.137-.783-.685-.49-1.272-1.663-1.81-3.186L86.868 8.233c-.538-1.81-.832-2.985-.832-3.577 0-1.467.734-2.252 2.203-2.252h8.99c1.566 0 2.595.245 3.235.783.685.49 1.223 1.663 1.76 3.186l11.01 43.375 10.228-43.326c.44-1.81.93-2.936 1.614-3.235.685-.49 1.76-.783 3.186-.783h7.323c1.565 0 2.594.245 3.234.783.686.49 1.224 1.663 1.615 3.186l10.375 43.912 11.4-43.96c.488-1.76 1.076-2.936 1.76-3.186.686-.49 1.713-.783 3.088-.783h8.547c1.467 0 2.252.685 2.252 2.252 0 .44-.05.88-.196 1.37-.147.49-.44 1.32-.93 2.546l-15.884 66.16c-.538 1.762-1.125 2.936-1.81 3.235-.685.49-1.762.783-3.186.783h-7.86c-1.565 0-2.594-.245-3.234-.783-.685-.49-1.223-1.614-1.614-3.186l-10.18-42.34-10.082 42.25c-.44 1.762-.93 2.936-1.614 3.186-.685.49-1.76.783-3.186.783h-7.86zm111.81 2.3c-4.497 0-8.99-.538-13.3-1.566-4.3-1.076-7.617-2.35-9.837-3.822-1.32-.88-2.203-1.86-2.447-2.692-.245-.832-.392-1.76-.392-2.74v-4.84c0-1.713.636-2.546 1.86-2.546.49 0 .978.098 1.516.294.538.196 1.32.538 2.35.978 3.234 1.467 6.737 2.643 10.424 3.48 3.724.832 7.372 1.272 11.107 1.272 5.876 0 10.424-1.028 13.545-3.088 3.137-2.06 4.79-5.023 4.79-8.94 0-2.594-.832-4.79-2.497-6.54-1.664-1.76-4.79-3.332-9.3-4.742l-13.35-4.105c-6.736-2.104-11.693-5.218-14.672-9.3-2.985-4.056-4.497-8.548-4.497-13.35 0-3.87.832-7.274 2.447-10.18 1.614-2.938 3.773-5.414 6.443-7.47 2.643-2.055 5.728-3.577 9.3-4.595 3.528-1.028 7.274-1.516 11.154-1.516 1.86 0 3.822.098 5.68.343 1.958.245 3.773.538 5.562.93 1.713.392 3.332.832 4.888 1.32 1.566.49 2.838.98 3.724 1.468 1.125.636 1.958 1.272 2.398 1.958.44.636.685 1.516.685 2.643v4.497c0 1.712-.636 2.595-1.86 2.595-.636 0-1.663-.294-3.04-.88-4.546-2.105-9.69-3.137-15.346-3.137-5.364 0-9.593.88-12.485 2.692-2.887 1.81-4.35 4.546-4.35 8.352 0 2.594.93 4.84 2.74 6.64 1.812 1.81 5.17 3.577 10.032 5.17l13.056 4.106c6.64 2.104 11.448 5.07 14.28 8.793 2.84 3.724 4.204 7.96 4.204 12.583 0 3.97-.783 7.568-2.398 10.718-1.614 3.137-3.87 5.876-6.736 8.058-2.84 2.203-6.295 3.87-10.326 5.07-4.007 1.223-8.45 1.86-13.203 1.86l.147-.196z"
        />
        <path
          fill="#F7981D"
          d="M230.993 120.964c-27.024 19.97-66.306 30.523-99.995 30.523-47.3 0-89.895-17.504-122.06-46.632-2.546-2.3-.245-5.415 2.79-3.626 34.808 20.214 77.795 32.415 122.256 32.415 29.978 0 62.974-6.198 93.3-19.04 4.595-1.958 8.45 3.04 4.056 6.393l-.342-.05z"
        />
        <path
          fill="#F7981D"
          d="M242.943 106.82c-3.48-4.448-22.865-2.104-31.62-1.076-2.692.342-3.088-1.958-.685-3.626 15.492-10.913 40.876-7.764 43.864-4.105 2.985 3.724-.783 29.39-15.492 41.64-2.252 1.86-4.398.88-3.382-1.615 3.186-8.254 10.473-26.698 6.99-31.195l.343-.05z"
        />
      </svg>
    </div>
  ),
  ibm: () => (
    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-sm">
      <span className="text-white font-bold text-lg tracking-tight">IBM</span>
    </div>
  ),
  platzi: () => (
    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-sm p-2.5">
      <svg viewBox="0 0 108 121.8" className="w-full h-full">
        <path
          fill="#ffffff"
          d="M47.1,5.7L5.7,47.1c-7.6,7.6-7.6,20,0,27.6l41.4,41.4c7.6,7.6,20,7.6,27.6,0l13.8-13.8L74.7,88.5l-13.8,13.8
          L19.5,60.9l41.4-41.4l27.6,27.6L60.9,74.7l13.8,13.8l27.6-27.6c7.6-7.6,7.6-20,0-27.6L74.7,5.7C67.1-1.9,54.7-1.9,47.1,5.7z"
        />
      </svg>
    </div>
  ),
  mintic: () => (
    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 via-blue-500 to-red-500 rounded-lg flex items-center justify-center shadow-sm">
      <span className="text-white font-bold text-lg">TIC</span>
    </div>
  ),
};

const CertificateCard = ({ certificate }: CertificateCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="group relative h-full">
      <div className="border border-blue-500/30 rounded-lg p-4 sm:p-6 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 h-full flex flex-col">
        {/* Header with icon and title */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3 flex-1">
            {/* Company icon */}
            <div>
              {CompanyIcons[
                certificate.issuer.toLowerCase() as keyof typeof CompanyIcons
              ]?.() || (
                <img
                  src={certificate.icon}
                  alt={certificate.issuer}
                  className="w-16 h-16"
                />
              )}
            </div>
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
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6 flex-grow">
          {certificate.skills.map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-300 rounded-full text-xs sm:text-sm border border-blue-500/30 h-fit"
              data-cursor="text"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Bottom section with button and date */}
        <div className="flex items-center justify-between gap-3 mt-auto">
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
  );
};

export default CertificateCard;
