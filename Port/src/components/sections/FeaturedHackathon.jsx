import React, { useState, useEffect } from 'react';
import { 
  Trophy, Clock, Users, Award, Github, ExternalLink, 
  ChevronRight, Code, Database, Brain, Cloud, 
  CheckCircle, TrendingUp, Leaf, Mic, ShoppingCart, 
  MessageCircle, BarChart3, Camera, Zap, Globe
} from 'lucide-react';
import { kisanDost, hackathonStats } from '../../data/kisanDostData';

export default function FeaturedHackathon() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const iconMap = {
    '🔬': Camera,
    '📈': TrendingUp,
    '🌤️': Cloud,
    '🎤': Mic,
    '👨‍🌾': Users,
    '🛒': ShoppingCart
  };
  
  return (
    <div className="py-12 sm:py-22 px-4 sm:px-6 relative overflow-hidden" id="featured-hackathon">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251, 191, 36, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Winner Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full border border-amber-500/30 backdrop-blur-sm animate-pulse-glow">
            <Trophy size={24} className="text-amber-400 animate-bounce-slow" />
            <span className="text-lg font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              🏆 1st Place Winner - National Agri-Tech Hackathon 2024
            </span>
            <Trophy size={24} className="text-amber-400 animate-bounce-slow" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-5xl animate-float-slow">🌾</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-amber-400 via-orange-400 to-green-400 bg-clip-text text-transparent">
              {kisanDost.shortTitle}
            </h1>
            <span className="text-5xl animate-float-slow" style={{ animationDelay: '0.3s' }}>🤖</span>
          </div>
          <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-3xl mx-auto">
            AI-Powered Agricultural Assistant • 36-Hour Solo Build • 1st Place Winner
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Clock, label: 'Build Time', value: '36 Hours', color: 'from-blue-500 to-cyan-500' },
            { icon: Users, label: 'Team', value: 'Solo Developer', color: 'from-purple-500 to-pink-500' },
            { icon: Trophy, label: 'Ranking', value: '1st Place', color: 'from-amber-500 to-orange-500' },
            { icon: Award, label: 'Awards', value: '3 Wins', color: 'from-emerald-500 to-green-500' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
              <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-800/50 group-hover:border-amber-500/30 transition-all duration-500">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="inline-flex bg-slate-900/60 backdrop-blur-sm rounded-xl p-1 border border-slate-800/50">
            {[
              { id: 'overview', label: 'Overview', icon: Globe },
              { id: 'features', label: 'Features', icon: Zap },
              { id: 'tech', label: 'Tech Stack', icon: Code },
              { id: 'impact', label: 'Impact', icon: TrendingUp }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <tab.icon size={18} />
                <span className="text-sm sm:text-base font-medium whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="transition-all duration-500">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Problem & Solution */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                  <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30">
                    <h3 className="text-xl font-bold mb-3 text-red-400">⚠️ Problem Statement</h3>
                    <p className="text-slate-300 leading-relaxed">{kisanDost.problemStatement}</p>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                  <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30">
                    <h3 className="text-xl font-bold mb-3 text-green-400">💡 Our Solution</h3>
                    <p className="text-slate-300 leading-relaxed">{kisanDost.solution}</p>
                  </div>
                </div>
              </div>
              
              {/* Architecture */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Code size={24} className="text-purple-400" />
                    <span>System Architecture</span>
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { icon: Globe, title: 'Frontend', desc: kisanDost.architecture.frontend, color: 'from-blue-500 to-cyan-500' },
                      { icon: Database, title: 'Backend', desc: kisanDost.architecture.backend, color: 'from-green-500 to-emerald-500' },
                      { icon: Brain, title: 'AI/ML', desc: kisanDost.architecture.ai, color: 'from-purple-500 to-pink-500' },
                      { icon: Cloud, title: 'Infrastructure', desc: kisanDost.architecture.infrastructure, color: 'from-orange-500 to-red-500' }
                    ].map((layer, i) => (
                      <div key={layer.title} className="text-center p-3 rounded-lg bg-slate-800/30">
                        <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${layer.color} flex items-center justify-center`}>
                          <layer.icon size={18} className="text-white" />
                        </div>
                        <p className="text-xs font-medium text-slate-300 mb-1">{layer.title}</p>
                        <p className="text-xs text-slate-400">{layer.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Challenges & Achievements */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-800/50">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-orange-400">
                    <Zap size={20} />
                    <span>Key Challenges Overcome</span>
                  </h3>
                  <ul className="space-y-2">
                    {kisanDost.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <ChevronRight size={16} className="text-orange-400 mt-0.5 flex-shrink-0" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-800/50">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-green-400">
                    <CheckCircle size={20} />
                    <span>Achievements</span>
                  </h3>
                  <ul className="space-y-2">
                    {kisanDost.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {/* Features Tab */}
          {activeTab === 'features' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {kisanDost.features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon] || Zap;
                return (
                  <div
                    key={feature.title}
                    className="group relative animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                    <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-800/50 group-hover:border-amber-500/30 transition-all duration-500">
                      <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-amber-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-400">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          
          {/* Tech Stack Tab */}
          {activeTab === 'tech' && (
            <div className="space-y-8">
              {Object.entries(kisanDost.techStack).map(([category, technologies]) => (
                <div key={category} className="bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-800/50">
                  <h3 className="text-xl font-bold mb-4 capitalize flex items-center gap-2">
                    {category === 'frontend' && <Globe size={24} className="text-blue-400" />}
                    {category === 'backend' && <Database size={24} className="text-green-400" />}
                    {category === 'aiMl' && <Brain size={24} className="text-purple-400" />}
                    {category === 'deployment' && <Cloud size={24} className="text-orange-400" />}
                    <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      {category === 'aiMl' ? 'AI/ML' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </span>
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm text-slate-300 hover:border-amber-500/50 hover:text-amber-400 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Impact Tab */}
          {activeTab === 'impact' && (
            <div className="space-y-8">
              {/* Impact Numbers */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(kisanDost.impact).map(([key, value], index) => (
                  <div
                    key={key}
                    className="group relative animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                    <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-800/50 group-hover:border-green-500/30 transition-all duration-500">
                      <div className="text-2xl font-bold text-green-400 mb-1">{value}</div>
                      <div className="text-xs text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Demo Links */}
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-8 text-center border border-amber-500/30">
                <h3 className="text-2xl font-bold mb-4">See KisanDost in Action</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={kisanDost.media.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={kisanDost.media.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all duration-300"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                  <a
                    href={kisanDost.media.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-600/20 hover:bg-red-600/30 rounded-xl transition-all duration-300 border border-red-500/50"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 15l5-3-5-3v6z"/>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    </svg>
                    <span>Demo Video</span>
                  </a>
                </div>
              </div>
              
              {/* Team Info */}
              <div className="text-center">
                <div className="inline-flex items-center gap-3 px-6 py-4 bg-slate-900/60 rounded-2xl border border-slate-800/50">
                  <Users size={24} className="text-amber-400" />
                  <div>
                    <p className="text-sm text-slate-400">Team</p>
                    <p className="font-bold text-lg">{kisanDost.team}</p>
                    <p className="text-xs text-slate-500">Solo Developer & Architect</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Timeline Section */}
        <div className="mt-12 pt-8 border-t border-slate-800/50">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-amber-400" />
              <span className="text-sm text-slate-400">Built in {kisanDost.duration}</span>
            </div>
            <div className="flex gap-2">
              {kisanDost.awards.map((award, i) => (
                <span key={i} className="px-3 py-1 bg-amber-500/10 rounded-full text-xs text-amber-400">
                  {award}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}