import React from "react";

const Skeletons = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-500 dark:text-blue-400">
          🏗️ Skeleton Components
        </h1>
        <p className="text-slate-600 dark:text-gray-300 mb-4">
          Los componentes skeleton fueron removidos durante la refactorización arquitectónica.
        </p>
        <p className="text-sm text-slate-500 dark:text-gray-400">
          Si necesitas skeletons, créalos dentro de cada feature según el Scope Rule.
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-500/30 transition-colors"
          >
            ← Volver al Inicio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skeletons;
