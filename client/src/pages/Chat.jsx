import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Sparkles, 
  User, 
  Trash2, 
  Image as ImageIcon, 
  Plus, 
  History, 
  Search,
  MoreVertical,
  LogOut,
  Moon,
  Sun,
  Copy,
  Check,
  ChevronRight,
  MessageSquare,
  Mic,
  Settings,
  HelpCircle,
  Menu
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { API_BASE_URL } from '../config';

// Removed PollinationsImage component

function ChatMessage({ msg, dark }) {
  const isUser = msg.role === 'user';
  const [copied, setCopied] = useState(false);

  const formatTimestamp = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };

  const handleCopy = () => {
    const textToCopy = msg.text || '';
    navigator.clipboard.writeText(textToCopy.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`flex items-end gap-3 ${isUser ? 'flex-row-reverse' : ''}`}
    >
      {/* Avatar */}
      {isUser ? (
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${dark ? 'bg-white/10 text-white' : 'bg-slate-200 text-slate-600'}`}>
          <User className="w-4 h-4" />
        </div>
      ) : (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/25">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
      )}

      {/* Bubble & Image */}
      <div className={`group flex flex-col max-w-[85%] sm:max-w-[70%] ${isUser ? 'items-end' : 'items-start'}`}>
        <div
          className={`relative px-5 py-3.5 rounded-2xl leading-relaxed text-sm ${
            isUser
              ? 'bg-gradient-to-r from-violet-600 to-violet-500 text-white rounded-br-sm shadow-lg shadow-violet-500/20'
              : dark
              ? 'bg-[#1a1a2e] text-slate-200 rounded-bl-sm border border-white/8'
              : 'bg-slate-100 text-slate-800 rounded-bl-sm'
          }`}
        >
          {(msg.text || '').trim()}
          
          <button
            onClick={handleCopy}
            className={`absolute -top-2 ${isUser ? '-left-2' : '-right-2'} opacity-0 group-hover:opacity-100 transition-all duration-200 w-6 h-6 rounded-md flex items-center justify-center ${dark ? 'bg-[#0a0a0f] border border-white/10 text-slate-400' : 'bg-white border border-slate-200 text-slate-500'} shadow-sm hover:scale-110`}
          >
            {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
          </button>
        </div>

        {/* Removed Image Block */}
        <span className={`text-xs mt-1 px-1 ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
          {formatTimestamp(msg.timestamp)}
        </span>
      </div>
    </motion.div>
  );
}

const Chat = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { id: '1', role: 'ai', text: "Hello! 👋 I'm PatientEdu Agent, your personal AI patient education companion. Ask me about any disease, condition, or treatment — I'll explain it clearly in plain English. What would you like to learn about?", timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [dark, setDark] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user, navigate]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const generateId = () => Math.random().toString(36).substring(2, 9);

  const [activeChatId, setActiveChatId] = useState(null);
  const [history, setHistory] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  const fetchHistory = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/chat/history`, { 
        headers: {
          'Authorization': `Bearer ${user?.token}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        setHistory(data);
      }
    } catch (err) {
      console.error("Fetch history error:", err);
    }
  };

  useEffect(() => {
    if (user) fetchHistory();
  }, [user]);

  const saveChatToDB = async (newMessages) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/chat/save`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user?.token}`
        },
        body: JSON.stringify({ 
          chatId: activeChatId,
          messages: newMessages.map(m => ({ 
            role: m.role, 
            content: m.text || m.content, 
            timestamp: m.timestamp 
          })),
          title: activeChatId ? undefined : newMessages.find(m => m.role === 'user')?.text?.substring(0, 30) + "..."
        })
      });
      if (res.ok) {
        const data = await res.json();
        if (!activeChatId) setActiveChatId(data._id);
        fetchHistory();
      }
    } catch (err) {
      console.error("Save chat error:", err);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = { id: generateId(), role: 'user', text: input, timestamp: new Date() };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      if (!user?.token) {
        throw new Error('No authentication token found. Please log in again.');
      }

      console.log('DEBUG: Sending messages to backend...', updatedMessages);

      const response = await fetch(`${API_BASE_URL}/api/chat/send`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({ 
          messages: updatedMessages.map(m => ({ role: m.role, content: m.text })) 
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('DEBUG: Received response from backend:', data);

        const aiMsg = { 
          id: generateId(), 
          role: 'ai', 
          text: data.reply || "I received your question.", 
          timestamp: new Date() 
        };

        const finalMessages = [...updatedMessages, aiMsg];
        setMessages(finalMessages);
        saveChatToDB(finalMessages);
      } else {
        const errorText = response.status === 401 
          ? "Your session has expired. Please sign out and sign in again to continue."
          : "I'm having trouble connecting to the health education service right now. Please try again in a moment.";

        const errorMsg = { 
          id: generateId(), 
          role: 'ai', 
          text: errorText,
          timestamp: new Date() 
        };
        setMessages(prev => [...prev, errorMsg]);
      }
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages(prev => [...prev, { 
        id: generateId(), 
        role: 'ai', 
        text: error.message || "Connection error. Please check your internet or re-login.",
        timestamp: new Date() 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteHistoryItem = async (e, id) => {
    e.stopPropagation();
    try {
      const res = await fetch(`${API_BASE_URL}/api/chat/${id}`, { 
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user?.token}`
        }
      });
      if (res.ok) {
        if (activeChatId === id) {
          setMessages([{ id: '1', role: 'ai', text: "Starting a new consultation. What health topic or condition would you like to learn about?", timestamp: new Date() }]);
          setActiveChatId(null);
        }
        fetchHistory();
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const startEditing = (e, item) => {
    e.stopPropagation();
    setEditingId(item._id);
    setEditTitle(item.title);
  };

  const saveEdit = async (e, id) => {
    e.stopPropagation();
    try {
      const res = await fetch(`${API_BASE_URL}/api/chat/save`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user?.token}`
        },
        body: JSON.stringify({ chatId: id, title: editTitle, messages: history.find(h => h._id === id).messages }),
      });
      if (res.ok) {
        setEditingId(null);
        fetchHistory();
      }
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const loadChat = (chat) => {
    setActiveChatId(chat._id);
    setMessages(chat.messages.map(m => ({
      id: generateId(),
      role: m.role,
      text: m.content,
      timestamp: new Date(m.timestamp)
    })));
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const formatDistanceToNow = (date) => {
    const diff = new Date() - new Date(date);
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className={`flex h-screen overflow-hidden ${dark ? 'bg-[#050508] text-white' : 'bg-slate-50 text-slate-800'} transition-colors duration-300`}>
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {sidebarOpen && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className={`w-72 h-full flex-shrink-0 flex flex-col border-r ${dark ? 'bg-[#0a0a0f] border-white/10' : 'bg-white border-slate-200'} z-50`}
          >
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg tracking-tight">PatientEdu Agent</span>
              </div>
              <button 
                onClick={() => setSidebarOpen(false)} 
                className={`p-2 rounded-xl transition-all ${dark ? 'hover:bg-white/10 text-slate-400 hover:text-white' : 'hover:bg-slate-100 text-slate-500 hover:text-slate-900'}`}
                title="Collapse Sidebar"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

            <div className="px-4 mb-4">
              <button 
                onClick={() => {
                  setMessages([{ id: generateId(), role: 'ai', text: "Starting a new consultation. What health topic or condition would you like to learn about?", timestamp: new Date() }]);
                  setActiveChatId(null);
                }}
                className="w-full flex items-center gap-2 px-4 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-medium transition-all shadow-lg shadow-teal-600/20"
              >
                <Plus className="w-4 h-4" />
                <span>New Consultation</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-2 space-y-6 custom-scrollbar">
              <div>
                <p className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>Chat History</p>
                <div className="space-y-1">
                  {history.map((item) => (
                    <div 
                      key={item._id} 
                      onClick={() => loadChat(item)}
                      className={`group w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-colors ${dark ? (activeChatId === item._id ? 'bg-white/10 text-white' : 'hover:bg-white/5 text-slate-300') : (activeChatId === item._id ? 'bg-slate-100 text-black' : 'hover:bg-slate-100 text-slate-600')}`}
                    >
                      <MessageSquare className="w-4 h-4 opacity-50 flex-shrink-0" />
                      <div className="flex-1 truncate">
                        {editingId === item._id ? (
                          <input 
                            autoFocus
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            onBlur={(e) => saveEdit(e, item._id)}
                            onKeyDown={(e) => e.key === 'Enter' && saveEdit(e, item._id)}
                            className="w-full bg-transparent border-none outline-none text-violet-400"
                            onClick={(e) => e.stopPropagation()}
                          />
                        ) : (
                          <>
                            <p className="truncate font-medium">{item.title}</p>
                            <p className="text-[10px] opacity-40">{formatDistanceToNow(item.createdAt)}</p>
                          </>
                        )}
                      </div>
                      
                      <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={(e) => startEditing(e, item)}
                          className="p-1 hover:text-violet-400"
                        >
                          <Settings className="w-3.5 h-3.5" />
                        </button>
                        <button 
                          onClick={(e) => deleteHistoryItem(e, item._id)}
                          className="p-1 hover:text-red-400"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                  {history.length === 0 && (
                    <div className="py-8 text-center">
                      <History className="w-8 h-8 opacity-10 mx-auto mb-2" />
                      <p className="text-xs opacity-30">No history yet</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className={`p-4 border-t ${dark ? 'border-white/10' : 'border-slate-200'}`}>
              <div className="space-y-1">
                <button 
                  onClick={() => setDark(!dark)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${dark ? 'hover:bg-white/5' : 'hover:bg-slate-100'}`}
                >
                  {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  <span>{dark ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
                <button 
                  onClick={handleLogout}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-400 hover:bg-red-400/10 transition-colors`}
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative h-full">
        {/* Top Header */}
        <header className={`h-16 flex items-center justify-between px-6 border-b ${dark ? 'border-white/10 bg-[#050508]/80' : 'bg-white/80 border-slate-200'} backdrop-blur-md sticky top-0 z-40`}>
          <div className="flex items-center gap-4">
            {!sidebarOpen && (
              <button 
                onClick={() => setSidebarOpen(true)}
                className={`p-2 rounded-xl transition-all ${dark ? 'hover:bg-white/10 text-slate-400 hover:text-white' : 'hover:bg-slate-100 text-slate-500 hover:text-slate-900'}`}
                title="Expand Sidebar"
              >
                <Menu className="w-5 h-5" />
              </button>
            )}
            <div className="flex flex-col">
              <h2 className="font-bold text-sm">PatientEdu Agent</h2>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></div>
                <span className="text-[10px] text-teal-500 font-medium">Online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <div className={`p-2 rounded-lg ${dark ? 'hover:bg-white/5 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}>
               <User className="w-5 h-5" />
             </div>
             <div className={`p-2 rounded-lg ${dark ? 'hover:bg-white/5 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}>
               <Sun className="w-5 h-5" />
             </div>
          </div>
        </header>

        {/* Messages */}
        <main className="flex-1 overflow-y-auto px-4 py-8 custom-scrollbar">
          <div className="max-w-3xl mx-auto space-y-8">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} msg={msg} dark={dark} />
            ))}
            {isLoading && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center animate-pulse">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className={`flex gap-1.5 px-4 py-3 rounded-2xl ${dark ? 'bg-white/5' : 'bg-slate-100'}`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </main>

        {/* Input Bar */}
        <div className={`p-6 border-t ${dark ? 'border-white/10 bg-[#050508]/80' : 'bg-white border-slate-200'} backdrop-blur-md`}>
          <div className="max-w-3xl mx-auto relative">
            <form 
              onSubmit={handleSend}
              className={`relative flex items-center rounded-2xl p-1.5 transition-all duration-300 border ${dark ? 'bg-[#0f0f1a] border-white/10 focus-within:border-violet-500/50' : 'bg-white border-slate-200 focus-within:border-violet-500'} shadow-2xl`}
            >
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend(e);
                  }
                }}
                placeholder="Ask about a disease, symptom, or treatment..."
                className={`flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none resize-none max-h-32 min-h-[44px] ${dark ? 'text-white' : 'text-slate-800'}`}
                rows="1"
              />
              <div className="flex items-center gap-1 pr-1">
                <button type="button" className={`p-2 rounded-xl transition-colors ${dark ? 'hover:bg-white/5 text-slate-500' : 'hover:bg-slate-100 text-slate-400'}`}>
                  <Mic className="w-5 h-5" />
                </button>
                <button 
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className={`p-2.5 rounded-xl transition-all ${
                    input.trim() && !isLoading 
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30 hover:scale-105 active:scale-95' 
                    : 'text-slate-600 cursor-not-allowed opacity-50'
                  }`}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
            <p className={`text-center text-[10px] mt-3 ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
              Press Enter to send • Shift+Enter for new line
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
