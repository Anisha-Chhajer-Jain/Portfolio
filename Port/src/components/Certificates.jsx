import React, { useState } from 'react';
import { ExternalLink, Award } from 'lucide-react';

export default function Certificates() {
  const [visibleCertificates, setVisibleCertificates] = useState(6);

  const certificates = [
    {
      id: 1,
      title: 'JavaScript Certification',
      org: 'SoloLearn',
      date: '2024',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284476/Screenshot_2026-02-05_150828_i1a5nq.png',
      url: 'https://www.sololearn.com/certificates/CC-DNUBDBWI',
      // color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 2,
      title: 'AI Video Generation Certificate',
      org: 'SimpliLearn',
      date: '2024',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284476/Screenshot_2026-02-05_150839_lhucwu.png',
      url: 'https://simpli-web.app.link/e/zsOcWIu3r0b',
      // color: 'from-blue-400 to-indigo-500'
    },
    {
      id: 3,
      title: 'Generative AI Studio Certificate',
      org: 'SimpliLearn',
      date: '2024',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284477/Screenshot_2026-02-05_150847_r9gsje.png',
      url: 'https://simpli-web.app.link/e/Wcdo1JE3r0b',
      // color: 'from-purple-400 to-pink-500'
    },
    {
      id: 4,
      title: 'Front-End Development',
      org: 'SimpliLearn',
      date: '2024',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284478/Screenshot_2026-02-05_150939_r0y4lz.png',
      url: 'https://simpli-web.app.link/e/ow99cSF3r0b',
      // color: 'from-green-400 to-emerald-500'
    },
    {
      id: 5,
      title: 'React (Basic) Certificate',
      org: 'HackerRank',
      date: '2024',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284476/Screenshot_2026-02-05_150954_edi1wr.png',
      url: 'https://www.hackerrank.com/certificates/c94ecf2db01f',
      // color: 'from-cyan-400 to-blue-500'
    },
    {
      id: 6,
      title: 'Full Stack Development',
      org: 'Unstop',
      date: '2024',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284478/Screenshot_2026-02-05_151017_kmw5jz.png',
      url: 'https://unstop.com/certificate-preview/63fa2e44-702a-45fd-9df6-7b08fe4ffec7',
      // color: 'from-red-400 to-rose-500'
    },
    {
      id: 7,
      title: 'Advanced Programming',
      org: 'Unstop',
      date: '2024',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284477/Screenshot_2026-02-05_151005_mt4rwr.png',
      url: 'https://unstop.com/certificate-preview/73e65660-a050-4f67-9561-4f3c1d1d1ff7',
      // color: 'from-indigo-400 to-purple-500'
    },
    {
      id: 8,
      title: 'AI Tools & ChatGPT Workshop',
      org: 'Be10X',
      date: '2024',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284478/Screenshot_2026-02-05_151026_erhshj.png',
      url: 'https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971007801',
      // color: 'from-teal-400 to-cyan-500'
    },
    {
      id: 9,
      title: 'Git & Github Advance Certificate',
      org: 'WsCube Tech',
      date: '2025',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284478/Screenshot_2026-02-05_151035_ir1rms.png',
      url: 'https://www.wscubetech.com/verify-certificate/VG50MWS2026M3996616796',
      // color: 'from-orange-400 to-red-500'
    },
    {
      id: 10,
      title: 'Generative AI Maastermind Certificate',
      org: 'Outskill',
      date: '2025',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284478/Screenshot_2026-02-05_151048_o5tfhz.png',
      url: 'https://s3.ap-south-1.amazonaws.com/assets.growthschool.io/certificates/50cbb760-7921-428e-b441-7eea7464819c_cert.pdf',
      // color: 'from-pink-400 to-rose-500'
    },
  ];

  const loadMoreCertificates = () => {
    setVisibleCertificates(prev => Math.min(prev + 6, certificates.length));
  };

  return (
    <div className="w-full py-12 sm:py-22 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="certificates">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="w-full relative">
        <div className="text-center mb-12 sm:mb-20">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
            <span className="text-3xl sm:text-5xl animate-bounce-slow">🎓</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-wide">
              <span className="font-light bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Certificates</span>
            </h2>
            <span className="text-3xl sm:text-5xl animate-bounce-slow" style={{ animationDelay: '0.5s' }}>🏆</span>
          </div>
          <p className="text-slate-400 font-light text-base sm:text-lg">
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {certificates.slice(0, visibleCertificates).map((cert, index) => (
            <div
              key={cert.id}
              className="group relative animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${cert.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`} />
              <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-800/50 overflow-hidden group-hover:border-slate-700 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${cert.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-slate-900/80 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-slate-700/50">
                    <span className="text-xs font-light text-slate-200">{cert.date}</span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-start gap-2 sm:gap-3 mb-3">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                      <Award size={20} className="sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-light mb-1 group-hover:text-cyan-400 transition-colors duration-300 leading-tight line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className={`text-xs sm:text-sm bg-gradient-to-r ${cert.color} bg-clip-text text-transparent font-medium truncate`}>
                        {cert.org}
                      </p>
                    </div>
                  </div>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn relative w-full mt-4 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${cert.color} bg-opacity-10 rounded-xl border border-slate-700/50 transition-all duration-300 overflow-hidden`}
                  >
                    <span className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300`} />
                    <ExternalLink size={16} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300 group-hover/btn:text-white" />
                    <span className="relative z-10 text-sm font-bold group-hover/btn:text-white transition-colors duration-300">
                      View Certificate
                    </span>
                  </a>
                </div>
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-slate-600/30 group-hover:border-slate-500/50 transition-colors duration-300" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-slate-600/30 group-hover:border-slate-500/50 transition-colors duration-300" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-slate-600/30 group-hover:border-slate-500/50 transition-colors duration-300" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-slate-600/30 group-hover:border-slate-500/50 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        {visibleCertificates < certificates.length && (
          <div className="flex justify-center mt-8 sm:mt-12">
            <button
              onClick={loadMoreCertificates}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 overflow-hidden rounded-xl border border-indigo-400/50 hover:border-indigo-400 transition-all duration-500 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative flex items-center gap-2 font-light text-base sm:text-lg">
                Load More Certificates
                <span className="text-sm opacity-70">({certificates.length - visibleCertificates} more)</span>
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}