import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, FileText, ExternalLink, Shield, AlertTriangle, Magnet, Server } from 'lucide-react';

interface DownloadSectionProps {
  movieTitle: string;
  year: number;
  originalTitle?: string;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ 
  movieTitle, 
  year, 
  originalTitle 
}) => {
  const navigate = useNavigate();
  const [showWarning, setShowWarning] = useState(true);
  const [showPlexInfo, setShowPlexInfo] = useState(false);

  // Generate search URLs and magnet links
  const generateLinks = () => {
    const searchTitle = originalTitle || movieTitle;
    const query = encodeURIComponent(`${searchTitle} ${year}`);
    const magnetQuery = encodeURIComponent(`${searchTitle} ${year} 1080p`);
    
    return {
      // Magnet link generators (these would search for actual magnets)
      magnets: {
        yts: `https://yts.mx/browse-movies/${query}`,
        rarbg: `https://rarbgprx.org/torrents.php?search=${magnetQuery}`,
        torrentgalaxy: `https://torrentgalaxy.to/torrents.php?search=${magnetQuery}`,
        limetorrents: `https://www.limetorrents.info/search/all/${magnetQuery}/`
      },
      // Subtitle links
      subtitles: {
        opensubtitles: `https://www.opensubtitles.org/en/search/sublanguageid-all/moviename-${query}`,
        subscene: `https://subscene.com/subtitles/searchbytitle?query=${query}`,
        podnapisi: `https://www.podnapisi.net/sr/ppodnapisi/search?sK=${query}`,
        titlovi: `https://titlovi.com/search/?q=${query}`
      }
    };
  };

  const links = generateLinks();

  if (showWarning) {
    return (
      <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-red-400 mb-3">⚠️ Važno obaveštenje</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Linkovi ispod vode ka spoljašnjim sajtovima za pretraživanje sadržaja. 
              Korisnik je odgovoran za poštovanje autorskih prava u svojoj zemlji.
              <strong className="text-orange-400"> Preporučujemo korišćenje našeg Plex servera!</strong>
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowWarning(false)}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Razumem, nastavi
              </button>
              <button
                onClick={() => setShowPlexInfo(true)}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center"
              >
                <Server className="w-4 h-4 mr-2" />
                Radije Plex Server
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showPlexInfo) {
    return (
      <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-xl p-6">
        <div className="text-center">
          <Server className="w-16 h-16 text-orange-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">🎬 Gledaj na Plex serveru!</h3>
          <p className="text-gray-300 mb-6 text-lg">
            Umesto skidanja, gledaj <strong className="text-orange-400">{movieTitle}</strong> odmah na našem Plex serveru!
            <br />Bez virusa, bez čekanja, bez zauzimanja prostora.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/plex')}
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-xl font-bold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
            >
              <Server className="w-5 h-5 mr-2 inline" />
              Idi na Plex Server
            </button>
            <button
              onClick={() => setShowPlexInfo(false)}
              className="bg-gray-700/50 text-purple-300 px-6 py-3 rounded-xl font-medium hover:bg-gray-600/50 transition-colors"
            >
              Ipak download
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Plex Server Recommendation */}
      <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Server className="w-8 h-8 text-orange-400" />
            <div>
              <h3 className="text-xl font-bold text-white">🚀 Preporučujemo Plex Server!</h3>
              <p className="text-gray-300">Gledaj bez skidanja, bez virusa, bez čekanja</p>
            </div>
          </div>
          <button
            onClick={() => setShowPlexInfo(true)}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Saznaj više
          </button>
        </div>
      </div>

      {/* Magnet Links Section */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Magnet className="w-5 h-5 mr-2 text-purple-400" />
          🧲 Magnet linkovi (Torrent)
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href={links.magnets.yts}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-green-600/20 hover:bg-green-600/30 rounded-lg border border-green-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center">
              <Magnet className="w-5 h-5 text-green-400 mr-3" />
              <div>
                <span className="text-white font-medium">YTS Magnets</span>
                <p className="text-green-300 text-sm">HD filmovi, mali fajlovi</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-green-400 group-hover:text-white transition-colors" />
          </a>

          <a
            href={links.magnets.rarbg}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg border border-blue-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center">
              <Magnet className="w-5 h-5 text-blue-400 mr-3" />
              <div>
                <span className="text-white font-medium">RARBG Proxy</span>
                <p className="text-blue-300 text-sm">Kvalitetni magnet linkovi</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" />
          </a>

          <a
            href={links.magnets.torrentgalaxy}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-purple-600/20 hover:bg-purple-600/30 rounded-lg border border-purple-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center">
              <Magnet className="w-5 h-5 text-purple-400 mr-3" />
              <div>
                <span className="text-white font-medium">TorrentGalaxy</span>
                <p className="text-purple-300 text-sm">Brzi magnet linkovi</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-purple-400 group-hover:text-white transition-colors" />
          </a>

          <a
            href={links.magnets.limetorrents}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-amber-600/20 hover:bg-amber-600/30 rounded-lg border border-amber-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center">
              <Magnet className="w-5 h-5 text-amber-400 mr-3" />
              <div>
                <span className="text-white font-medium">LimeTorrents</span>
                <p className="text-amber-300 text-sm">Alternativni magneti</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-amber-400 group-hover:text-white transition-colors" />
          </a>
        </div>

        <div className="mt-4 bg-blue-600/20 rounded-lg p-4 border border-blue-500/30">
          <h4 className="text-white font-bold mb-2 flex items-center">
            <Download className="w-4 h-4 mr-2" />
            💡 Kako koristiti magnet linkove:
          </h4>
          <ol className="text-gray-300 text-sm space-y-1">
            <li>1. Instaliraj torrent klijent (qBittorrent, uTorrent, Transmission)</li>
            <li>2. Klikni na link iznad da nađeš film</li>
            <li>3. Kopiraj magnet link (počinje sa "magnet:")</li>
            <li>4. Otvori magnet link u torrent klijentu</li>
            <li>5. Čekaj da se skine i uživaj! 🎬</li>
          </ol>
        </div>
      </div>

      {/* Subtitles Section */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <FileText className="w-5 h-5 mr-2 text-purple-400" />
          📝 Srpski titlovi (SRT)
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href={links.subtitles.titlovi}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-red-600/20 hover:bg-red-600/30 rounded-lg border border-red-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center">
              <FileText className="w-5 h-5 text-red-400 mr-3" />
              <div>
                <span className="text-white font-medium">Titlovi.com</span>
                <p className="text-red-300 text-sm">🇷🇸 Najbolji srpski titlovi</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-red-400 group-hover:text-white transition-colors" />
          </a>

          <a
            href={links.subtitles.podnapisi}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-green-600/20 hover:bg-green-600/30 rounded-lg border border-green-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center">
              <FileText className="w-5 h-5 text-green-400 mr-3" />
              <div>
                <span className="text-white font-medium">Podnapisi.net</span>
                <p className="text-green-300 text-sm">🇸🇮 Kvalitetni titlovi</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-green-400 group-hover:text-white transition-colors" />
          </a>

          <a
            href={links.subtitles.opensubtitles}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-purple-600/20 hover:bg-purple-600/30 rounded-lg border border-purple-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center">
              <FileText className="w-5 h-5 text-purple-400 mr-3" />
              <div>
                <span className="text-white font-medium">OpenSubtitles</span>
                <p className="text-purple-300 text-sm">🌍 Najveća baza titlova</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-purple-400 group-hover:text-white transition-colors" />
          </a>

          <a
            href={links.subtitles.subscene}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg border border-blue-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center">
              <FileText className="w-5 h-5 text-blue-400 mr-3" />
              <div>
                <span className="text-white font-medium">Subscene</span>
                <p className="text-blue-300 text-sm">🎬 Filmski titlovi</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>

      {/* Legal Notice */}
      <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
        <div className="flex items-center space-x-3">
          <Shield className="w-5 h-5 text-gray-400" />
          <p className="text-gray-400 text-sm">
            <strong>Napomena:</strong> Magnet linkovi i torrenti mogu kršiti autorska prava. 
            Koristiš na svoju odgovornost. <strong className="text-orange-400">Preporučujemo Plex server kao bezbedniju opciju!</strong>
          </p>
        </div>
      </div>
    </div>
  );
};