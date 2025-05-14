
const Footer = () => {
  return (
    <footer className="bg-navy-light text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">VideoAI Studio</h3>
              <p className="text-blue-100 mb-6">
                Transform your content marketing with AI-powered video production
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-teal">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 5.93C21.366 6.15071 20.7048 6.29699 20.035 6.37C20.7348 5.93444 21.2669 5.26554 21.521 4.48C20.8578 4.86596 20.1328 5.14985 19.375 5.32C18.952 4.87265 18.4291 4.53019 17.8477 4.3192C17.2664 4.1082 16.6452 4.03423 16.033 4.10218C15.4209 4.17013 14.8375 4.37823 14.3283 4.70772C13.8192 5.0372 13.3996 5.47782 13.107 6C12.3366 5.98725 11.5754 5.8323 10.8604 5.5422C10.1454 5.2521 9.48831 4.83254 8.92 4.30328C8.46792 5.06175 8.32059 5.96831 8.5119 6.8324C8.70321 7.69648 9.21784 8.44586 9.936 8.92C9.38357 8.90549 8.84296 8.75839 8.36 8.49V8.52C8.36 9.14077 8.57338 9.744 8.96648 10.2322C9.35958 10.7204 9.90774 11.0681 10.517 11.219C10.0049 11.3538 9.46961 11.3693 8.949 11.264C9.12548 11.7962 9.47217 12.2639 9.93669 12.6088C10.4012 12.9536 10.9569 13.1605 11.534 13.2C10.9573 13.6579 10.3034 14.0033 9.60024 14.2254C8.89705 14.4475 8.16154 14.542 7.422 14.503C8.85269 15.3089 10.4797 15.7386 12.141 15.737C16.943 15.737 19.563 11.809 19.563 8.443C19.563 8.31 19.559 8.176 19.552 8.044C20.2164 7.55251 20.8005 6.95471 21.274 6.274C20.6466 6.54305 19.9796 6.72217 19.295 6.806L22 5.93Z" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-teal">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" fill="currentColor"/>
                    <path d="M6 9H2V21H6V9Z" fill="currentColor"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-teal">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.879V15.007H7.898V12.021H10.438V9.797C10.438 7.165 11.93 5.787 14.215 5.787C15.309 5.787 16.455 5.977 16.455 5.977V8.451H15.191C13.951 8.451 13.563 9.229 13.563 10.025V12.021H16.334L15.891 15.007H13.563V21.879C18.343 21.129 22 16.99 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-100 hover:text-white">Features</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white">Use Cases</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white">Testimonials</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-100 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white">Tutorials</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-100 hover:text-white">About</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white">Press</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-blue-100">
                © {new Date().getFullYear()} VideoAI Studio. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-blue-100 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-sm text-blue-100 hover:text-white">Terms of Service</a>
              <a href="#" className="text-sm text-blue-100 hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
