const StackGallery = () => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="bg-card dark:bg-gray-800/50 rounded-full overflow-hidden border border-border sm:p-6 hover: animate-in animate-out ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React logo"
          className="w-12 h-12 mx-auto"
        />
      </div>
      <div className="bg-card dark:bg-gray-800/50 rounded overflow-hidden border border-border p-4 sm:p-6 object-fill"></div>
      <div className="bg-card dark:bg-gray-800/50 rounded overflow-hidden border border-border p-4 sm:p-6 object-fill"></div>
      <div className="bg-card dark:bg-gray-800/50 rounded overflow-hidden border border-border p-4 sm:p-6 object-fill"></div>
      <div className="bg-card dark:bg-gray-800/50 rounded overflow-hidden border border-border p-4 sm:p-6 object-fill"></div>
      <div className="bg-card dark:bg-gray-800/50 rounded overflow-hidden border border-border p-4 sm:p-6 object-fill"></div>
      <div className="bg-card dark:bg-gray-800/50 rounded overflow-hidden border border-border p-4 sm:p-6 object-fill"></div>
      <div className="bg-card dark:bg-gray-800/50 rounded overflow-hidden border border-border p-4 sm:p-6 object-fill"></div>
      <div className="bg-card dark:bg-gray-800/50 rounded overflow-hidden border border-border p-4 sm:p-6 object-fill"></div>
    </div>
  );
};

export default StackGallery;
