import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import certificatesData from "@/data/certificates.json";
import CertificateCard from "./components/certificate-card";
import PrimaryButton from "@shared/components/ui/primary-button";

const INITIAL_CERTIFICATES = 3;
const LOAD_MORE_COUNT = 2;

const CertificationsDisplay = () => {
  const { t } = useTranslation();
  const [visibleCertificates, setVisibleCertificates] = useState(INITIAL_CERTIFICATES);

  const showMoreCertificates = () => {
    setVisibleCertificates((prev) => Math.min(prev + LOAD_MORE_COUNT, certificatesData.length));
  };

  const hasMoreCertificates = visibleCertificates < certificatesData.length;

  return (
    <section id="certificates" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

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
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificatesData.slice(0, visibleCertificates).map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>

        {/* Botón "Ver más" */}
        {hasMoreCertificates && (
          <div className="flex justify-center mt-8 sm:mt-12">
            <PrimaryButton onClick={showMoreCertificates} icon={ChevronDown}>
              {t("certificates.showMore")}
            </PrimaryButton>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsDisplay;
