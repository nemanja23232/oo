import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Server, Users, Shield, Download, Tv, Film, Star, ArrowLeft, ExternalLink, Wifi, Lock, Globe, Terminal, Copy, CheckCircle, Smartphone, AlertTriangle, Settings } from 'lucide-react';

export const PlexServerPage: React.FC = () => {
  const navigate = useNavigate();
  const [showServerInfo, setShowServerInfo] = useState(false);
  const [copiedText, setCopiedText] = useState('');

  const serverInfo = {
    name: "KURE-CINEMA-SERVER",
    ip: "185.119.90.145", // Tvoja prava VPS IP adresa
    port: "32400",
    webUrl: "http://185.119.90.145:32400/web", // Tvoja prava web adresa
    plexWebUrl: "https://app.plex.tv/desktop", // Plex web app
    status: "🟢 Online 24/7",
    androidApp: "https://play.google.com/store/apps/details?id=com.plexapp.android&pcampaignid=web_share",
    fullAddress: "185.119.90.145:32400"
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-purple-900/90 to-gray-900/95"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center px-6 py-3 bg-purple-600/20 text-purple-300 rounded-xl hover:bg-purple-600/30 transition-all duration-300 border border-purple-500/30"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Nazad na filmove
        </button>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 rounded-2xl shadow-2xl">
              <Server className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Kure Cinema Server
            </h1>
          </div>
          <p className="text-2xl text-purple-300 mb-8 max-w-3xl mx-auto">
            🎬 Gledaj preko 10,000 filmova i serija BESPLATNO na našem VPS serveru!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30">
              <Shield className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">100% Bezbedno</h3>
              <p className="text-gray-300">VPS server, bez virusa</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
              <Wifi className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">24/7 Online</h3>
              <p className="text-gray-300">Server radi non-stop</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
              <Star className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">4K Kvalitet</h3>
              <p className="text-gray-300">Ultra HD filmovi</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/30">
              <Globe className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Globalni pristup</h3>
              <p className="text-gray-300">Pristup iz cele zemlje</p>
            </div>
          </div>
        </div>

        {/* PROBLEM SOLVING SECTION */}
        <div className="bg-red-600/20 border border-red-500/30 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <AlertTriangle className="w-8 h-8 mr-3 text-red-400" />
            ⚠️ Server se ne pojavljuje? Evo rešenja!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">🔧 Problem: Unešen IP u Settings → Advanced</h3>
              <p className="text-gray-300 mb-4">
                Ako si već unešao IP adresu u Settings → Advanced i server se ne pojavljuje, 
                evo šta treba da uradiš:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li><strong>Izađi iz Plex aplikacije potpuno</strong></li>
                <li><strong>Restartuj aplikaciju</strong></li>
                <li><strong>Uloguj se ponovo</strong></li>
                <li><strong>Idi u "Servers" ili "More" sekciju</strong></li>
                <li><strong>Server će se pojaviti u listi</strong></li>
              </ol>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">✅ Najbolje rešenje: Web pristup</h3>
              <p className="text-gray-300 mb-4">
                Umesto komplikovanja sa manual setup-om, koristi web pristup:
              </p>
              <div className="space-y-3">
                <a
                  href={serverInfo.plexWebUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Otvori Plex Web App
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
                <p className="text-sm text-gray-400 text-center">
                  Jednostavno se uloguj i server će se automatski pojaviti!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* VPS Server Explanation */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-purple-500/20">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-green-400" />
            🖥️ Šta je VPS Plex Server?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                VPS (Virtual Private Server) je naš privatni server koji radi 24/7 u data centru. 
                Na njemu je instaliran Plex Media Server sa ogromnom bibliotekom filmova i serija 
                koje možeš da gledaš kao Netflix!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">Preko 10,000 filmova i serija u HD/4K kvalitetu</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">Automatski srpski titlovi za sve sadržaje</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">Pristup sa bilo kog uređaja (telefon, TV, kompjuter)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">Bez ograničenja brzine ili vremena gledanja</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">Redovno ažuriranje sa najnovijim sadržajima</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl p-6 border border-orange-500/30">
              <h3 className="text-xl font-bold text-white mb-4">📱 Podržani uređaji:</h3>
              <div className="grid grid-cols-2 gap-3 text-gray-300">
                <div>• Windows PC/Laptop</div>
                <div>• Mac kompjuter</div>
                <div>• Android telefon/tablet</div>
                <div>• iPhone/iPad</div>
                <div>• Smart TV (Samsung, LG)</div>
                <div>• PlayStation 4/5</div>
                <div>• Xbox One/Series</div>
                <div>• Web browser (Chrome, Firefox)</div>
              </div>
            </div>
          </div>
        </div>

        {/* How to Connect Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-purple-500/20">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Users className="w-8 h-8 mr-3 text-blue-400" />
            🚀 Kako da se priključiš? (3 jednostavna koraka)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">📱 Skini Plex App</h3>
              <p className="text-gray-300 mb-4">
                Skini Plex aplikaciju za tvoj uređaj (potpuno besplatno!)
              </p>
              <div className="space-y-2">
                <a 
                  href={serverInfo.androidApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm transition-colors"
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  Android App
                </a>
                <a 
                  href="https://www.plex.tv/media-server-downloads/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Ostali uređaji
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                <span className="text-2xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">👤 Napravi Plex nalog</h3>
              <p className="text-gray-300 mb-4">
                Registruj se besplatno na Plex-u (potrebno je samo email i password)
              </p>
              <a 
                href="https://www.plex.tv/sign-up/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm transition-colors"
              >
                <Users className="w-4 h-4 mr-2" />
                Registruj se
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                <span className="text-2xl font-bold text-green-400">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">🔗 Priključi se serveru</h3>
              <p className="text-gray-300 mb-4">
                Klikni dugme ispod da dobiješ server podatke i počni da gledaš!
              </p>
              <button
                onClick={() => setShowServerInfo(true)}
                className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm transition-colors"
              >
                <Server className="w-4 h-4 mr-2" />
                Server info
              </button>
            </div>
          </div>

          {/* Quick Web Access */}
          <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Globe className="w-6 h-6 mr-2 text-blue-400" />
              ⚡ NAJBRŽI NAČIN - Direktno preko web browser-a:
            </h3>
            <p className="text-gray-300 mb-4">
              Možeš da pristupiš serveru odmah preko web browser-a bez instaliranja aplikacije!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={serverInfo.plexWebUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors"
              >
                <Globe className="w-5 h-5 mr-2" />
                Otvori Plex Web App
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <button
                onClick={() => copyToClipboard(serverInfo.plexWebUrl, 'plexWeb')}
                className="flex items-center px-4 py-3 bg-blue-600/20 text-blue-300 rounded-lg border border-blue-500/30 hover:bg-blue-600/30 transition-colors"
              >
                {copiedText === 'plexWeb' ? <CheckCircle className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                Kopiraj link
              </button>
            </div>
          </div>
        </div>

        {/* Server Connection */}
        <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl p-8 border border-orange-500/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">🎯 Spreman za pristup?</h2>
          
          {!showServerInfo ? (
            <div>
              <p className="text-xl text-gray-300 mb-8">
                Klikni dugme da dobiješ sve potrebne informacije za pristup serveru!
              </p>
              <button
                onClick={() => setShowServerInfo(true)}
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-8 rounded-xl font-bold text-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <Server className="w-6 h-6 mr-3 inline" />
                Prikaži server informacije
              </button>
            </div>
          ) : (
            <div className="bg-gray-900/50 rounded-xl p-8 border border-orange-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">🖥️ VPS Server informacije:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-orange-400 mb-4">🔧 Server detalji:</h4>
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Server naziv:</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-mono">{serverInfo.name}</span>
                        <button
                          onClick={() => copyToClipboard(serverInfo.name, 'name')}
                          className="text-purple-400 hover:text-white transition-colors"
                        >
                          {copiedText === 'name' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">IP adresa:</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-mono">{serverInfo.ip}</span>
                        <button
                          onClick={() => copyToClipboard(serverInfo.ip, 'ip')}
                          className="text-purple-400 hover:text-white transition-colors"
                        >
                          {copiedText === 'ip' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Port:</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-mono">{serverInfo.port}</span>
                        <button
                          onClick={() => copyToClipboard(serverInfo.port, 'port')}
                          className="text-purple-400 hover:text-white transition-colors"
                        >
                          {copiedText === 'port' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Status:</span>
                      <span className="text-green-400 font-bold">{serverInfo.status}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-blue-400 mb-4">📚 Biblioteka:</h4>
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Filmovi:</span>
                      <span className="text-white font-bold">8,547</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Serije:</span>
                      <span className="text-white font-bold">1,234</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">4K sadržaj:</span>
                      <span className="text-white font-bold">2,156</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Poslednje ažuriranje:</span>
                      <span className="text-green-400">Danas</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Web Access Section */}
              <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-bold text-blue-400 mb-3 flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  🌐 NAJLAKŠI NAČIN - Web pristup:
                </h4>
                <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-mono text-lg">{serverInfo.plexWebUrl}</span>
                    <button
                      onClick={() => copyToClipboard(serverInfo.plexWebUrl, 'plexWebUrl')}
                      className="text-blue-400 hover:text-white transition-colors"
                    >
                      {copiedText === 'plexWebUrl' ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  <strong>JEDNOSTAVNO:</strong> Klikni link iznad → Uloguj se sa Plex nalogom → Server će se automatski pojaviti!
                </p>
                <a
                  href={serverInfo.plexWebUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Otvori Plex Web App
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>

              {/* Alternative Direct Access */}
              <div className="bg-purple-600/20 border border-purple-500/30 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center">
                  <Server className="w-5 h-5 mr-2" />
                  🔗 Direktan pristup serveru:
                </h4>
                <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-mono text-lg">{serverInfo.webUrl}</span>
                    <button
                      onClick={() => copyToClipboard(serverInfo.webUrl, 'directUrl')}
                      className="text-purple-400 hover:text-white transition-colors"
                    >
                      {copiedText === 'directUrl' ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Direktan pristup serveru preko IP adrese (možda će tražiti da se uloguješ)
                </p>
                <a
                  href={serverInfo.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
                >
                  <Server className="w-5 h-5 mr-2" />
                  Direktan pristup
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
              
              {/* DETAILED TROUBLESHOOTING */}
              <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-bold text-yellow-400 mb-3 flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  🔧 Detaljne instrukcije za sve metode:
                </h4>
                <div className="text-left space-y-6 text-gray-300">
                  <div>
                    <p><strong className="text-white">🌐 METODA 1 - Web pristup (NAJLAKŠA - PREPORUČENO):</strong></p>
                    <ol className="list-decimal list-inside space-y-2 ml-4 mt-2">
                      <li>Klikni na "Otvori Plex Web App" dugme iznad</li>
                      <li>Napravi Plex nalog ili se uloguj (besplatno je)</li>
                      <li>Server će se automatski pojaviti u listi servera</li>
                      <li>Klikni na server i počni da gledaš! 🎬</li>
                    </ol>
                  </div>
                  
                  <div>
                    <p><strong className="text-white">📱 METODA 2 - Mobilna aplikacija:</strong></p>
                    <ol className="list-decimal list-inside space-y-2 ml-4 mt-2">
                      <li>Skini Plex aplikaciju sa Play Store-a</li>
                      <li>Uloguj se sa svojim Plex nalogom</li>
                      <li>Server će se automatski pojaviti u "Servers" sekciji</li>
                      <li>Tap na server i gledaj filmove! 📱</li>
                    </ol>
                  </div>

                  <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4">
                    <p><strong className="text-red-400">🔧 METODA 3 - Manual dodavanje (ako se server NE POJAVLJUJE):</strong></p>
                    <ol className="list-decimal list-inside space-y-2 ml-4 mt-2">
                      <li><strong>U Plex aplikaciji:</strong> Idi u Settings (⚙️)</li>
                      <li><strong>Nađi "Server" ili "Advanced"</strong> sekciju</li>
                      <li><strong>Izaberi "Manual Connection" ili "Add Server Manually"</strong></li>
                      <li><strong>Unesi:</strong> <code className="bg-gray-700 px-2 py-1 rounded text-white">{serverInfo.fullAddress}</code></li>
                      <li><strong>Klikni "Connect" ili "Add"</strong></li>
                      <li><strong>VAŽNO: Izađi iz aplikacije potpuno i restartuj je</strong></li>
                      <li><strong>Uloguj se ponovo - server će se pojaviti u listi!</strong></li>
                    </ol>
                    
                    <div className="mt-4 p-3 bg-gray-800/50 rounded-lg">
                      <p className="text-yellow-400 font-bold mb-2">⚠️ Ako se server i dalje ne pojavljuje:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Proveri da li si uneo tačno: <code className="bg-gray-700 px-1 rounded">{serverInfo.fullAddress}</code></li>
                        <li>Restartuj aplikaciju potpuno (force close)</li>
                        <li>Proveri internet konekciju</li>
                        <li>Pokušaj sa web pristupom umesto aplikacije</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4">
                    <p><strong className="text-green-400">✅ METODA 4 - Direktan web pristup (bez Plex naloga):</strong></p>
                    <ol className="list-decimal list-inside space-y-2 ml-4 mt-2">
                      <li>Otvori web browser (Chrome, Firefox, Safari)</li>
                      <li>Idi na: <code className="bg-gray-700 px-2 py-1 rounded text-white">{serverInfo.webUrl}</code></li>
                      <li>Možda će tražiti da se uloguješ sa Plex nalogom</li>
                      <li>Uloguj se i gledaj filmove direktno u browser-u! 🌐</li>
                    </ol>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={serverInfo.androidApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Android App
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
                
                <a
                  href="https://www.plex.tv/media-server-downloads/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Ostali uređaji
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
                
                <a
                  href={serverInfo.plexWebUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Otvori Web Player
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* VPS Setup Guide */}
        <div className="mt-12 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
          <h2 className="text-3xl font-bold text-white mb-6">🛠️ Kako sam postavio VPS server (za one koji su zainteresovani)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">VPS specifikacije:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>IP:</strong> 185.119.90.145</li>
                <li>• <strong>CPU:</strong> 4 cores @ 3.2GHz</li>
                <li>• <strong>RAM:</strong> 8GB DDR4</li>
                <li>• <strong>Storage:</strong> 500GB NVMe SSD</li>
                <li>• <strong>Bandwidth:</strong> 1Gbps unlimited</li>
                <li>• <strong>OS:</strong> Ubuntu 22.04 LTS</li>
                <li>• <strong>Uptime:</strong> 99.9% garantovano</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Instalacija koraci:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Iznajmio VPS server</li>
                <li>Instalirao Ubuntu 22.04</li>
                <li>Postavio firewall i security</li>
                <li>Instalirao Plex Media Server</li>
                <li>Konfigurirao remote access</li>
                <li>Dodao filmove i serije</li>
                <li>Postavio automatsko ažuriranje</li>
              </ol>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
          <h2 className="text-3xl font-bold text-white mb-6">❓ Često postavljana pitanja</h2>
          
          <div className="space-y-6">
            <div className="border-b border-purple-500/20 pb-4">
              <h3 className="text-xl font-bold text-white mb-2">Server se ne pojavljuje u aplikaciji?</h3>
              <p className="text-gray-300">
                <strong>Rešenje:</strong> Koristi web pristup (https://app.plex.tv/desktop) umesto aplikacije. 
                Ili restartuj aplikaciju nakon manual dodavanja IP adrese.
              </p>
            </div>
            
            <div className="border-b border-purple-500/20 pb-4">
              <h3 className="text-xl font-bold text-white mb-2">Da li je ovo legalno?</h3>
              <p className="text-gray-300">
                Plex server je privatni, deljenje sadržaja između prijatelja. Koristiš na svoju odgovornost. 
                Server je postavljen u zemlji gde je ovo dozvoljeno.
              </p>
            </div>
            
            <div className="border-b border-purple-500/20 pb-4">
              <h3 className="text-xl font-bold text-white mb-2">Koliko košta pristup?</h3>
              <p className="text-gray-300">
                Potpuno besplatno! Samo trebaš Plex aplikaciju i pristup internetu. 
                Nema skrivenih troškova ili pretplata.
              </p>
            </div>
            
            <div className="border-b border-purple-500/20 pb-4">
              <h3 className="text-xl font-bold text-white mb-2">Kakav je kvalitet video sadržaja?</h3>
              <p className="text-gray-300">
                Većina filmova je u 1080p ili 4K rezoluciji sa odličnim zvukom (5.1/7.1 surround). 
                Kvalitet se automatski prilagođava brzini tvoje internet konekcije.
              </p>
            </div>
            
            <div className="border-b border-purple-500/20 pb-4">
              <h3 className="text-xl font-bold text-white mb-2">Da li mogu da gledam na telefonu?</h3>
              <p className="text-gray-300">
                Da! Plex radi na svim uređajima - Android/iPhone telefon, tablet, Smart TV, 
                kompjuter, PlayStation, Xbox, itd.
              </p>
            </div>
            
            <div className="border-b border-purple-500/20 pb-4">
              <h3 className="text-xl font-bold text-white mb-2">Ima li srpskih titlova?</h3>
              <p className="text-gray-300">
                Da! Automatski se učitavaju srpski titlovi za sve filmove i serije. 
                Možeš da biraš između različitih prevoda.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Šta ako server ne radi?</h3>
              <p className="text-gray-300">
                VPS server radi 24/7 sa 99.9% uptime garantijom. Ako dođe do problema, 
                automatski se restartuje. Kontaktiraj me ako imaš problema sa pristupom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};