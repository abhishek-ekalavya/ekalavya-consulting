import React, { useEffect } from 'react';

export const AdminPage: React.FC = () => {
  useEffect(() => {
    // Check if Decap CMS script is loaded
    const scriptSrc = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js';
    
    // Set page title
    document.title = 'Content Manager | Ekalavya Consulting';

    // If script not loaded, inject it
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div id="nc-root" className="min-h-screen bg-[#0A1931] text-white">
      {/* Decap CMS mounts automatically to #nc-root */}
    </div>
  );
};
