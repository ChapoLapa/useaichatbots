import React from 'react';
import { Bot, Wrench, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
      {/* Header */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-[#0b1226]" />
            <span className="text-xl font-bold text-gray-900">useaichatbots</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-bounce mb-8">
            <Wrench className="h-16 w-16 text-[#0b1226] mx-auto" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Wir bearbeiten gerade unsere Webseite
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Wir arbeiten intensiv an unserer neuen Webseite, um Ihnen ein noch besseres Erlebnis zu bieten.
            Wir sind bald wieder online – danke für Ihre Geduld.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="mailto:useaichatbots1@gmail.com"
              className="flex items-center bg-[#0b1226] text-white px-8 py-4 rounded-lg hover:bg-[#161f37] transition"
            >
              <Mail className="h-5 w-5 mr-2" />
              Kontaktieren Sie uns
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center space-x-2">
              <Bot className="h-6 w-6 text-[#0b1226]" />
              <span className="text-lg font-semibold">useaichatbots.com</span>
            </div>
            <p className="text-gray-500 text-center">
              © 2025 useaichatbots.com. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
