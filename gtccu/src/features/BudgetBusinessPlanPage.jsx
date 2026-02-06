import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Upload,
  Download,
  FileText,
  PieChart,
  TrendingUp,
  Target,
  Calculator,
  DollarSign,
  Users,
  Calendar,
  CheckCircle,
  X,
  File,
  BarChart,
  Shield,
  Zap,
  Award,
  Sparkles,
  ArrowRight,
  Eye,
  Trash2,
  Send,
  Cloud,
  FileCheck,
  FilePlus,
  ChartBar,
  Briefcase
} from 'lucide-react';

export default function BudgetBusinessPlanPage() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState({});
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const fileInputRef = useRef(null);

  // Business plan templates
  const templates = [
    {
      id: 1,
      name: "Startup Business Plan",
      description: "Complete template for new businesses seeking funding",
      category: "Business",
      size: "2.4 MB",
      pages: 25,
      format: ".docx",
      downloads: 1245,
      featured: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Financial Budget Template",
      description: "Annual budget planning for small to medium businesses",
      category: "Finance",
      size: "1.8 MB",
      pages: 15,
      format: ".xlsx",
      downloads: 2897,
      featured: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Investment Proposal",
      description: "Professional proposal for investors and stakeholders",
      category: "Investment",
      size: "3.2 MB",
      pages: 35,
      format: ".pdf",
      downloads: 876,
      featured: false,
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 4,
      name: "Cash Flow Forecast",
      description: "Monthly cash flow projections and analysis",
      category: "Finance",
      size: "1.5 MB",
      pages: 12,
      format: ".xlsx",
      downloads: 1543,
      featured: false,
      color: "from-amber-500 to-orange-500"
    }
  ];

  // Upload functions
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const newFiles = files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: formatFileSize(file.size),
      type: file.type,
      uploadedAt: new Date().toLocaleTimeString(),
      progress: 0
    }));

    // Simulate upload progress
    newFiles.forEach((file, index) => {
      simulateUpload(file.id, index * 200);
    });

    setUploadedFiles(prev => [...prev, ...newFiles]);
    showToast(`${files.length} file(s) uploaded successfully!`);
  };

  const simulateUpload = (fileId, delay) => {
    setTimeout(() => {
      setUploadedFiles(prev => 
        prev.map(file => 
          file.id === fileId 
            ? { ...file, progress: 100 }
            : file
        )
      );
    }, 1000 + delay);
  };

  const removeFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
    showToast("File removed successfully");
  };

  const downloadTemplate = (templateId) => {
    const template = templates.find(t => t.id === templateId);
    setDownloadProgress(prev => ({ ...prev, [templateId]: 0 }));
    
    // Simulate download progress
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        const progress = (prev[templateId] || 0) + 10;
        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDownloadProgress(prev => {
              const newProgress = { ...prev };
              delete newProgress[templateId];
              return newProgress;
            });
            showToast(`${template.name} downloaded successfully!`);
          }, 500);
          return { ...prev, [templateId]: 100 };
        }
        return { ...prev, [templateId]: progress };
      });
    }, 100);
  };

  const showToast = (message) => {
    setToastMessage(message);
    setShowSuccessToast(true);
    setTimeout(() => {
      setShowSuccessToast(false);
    }, 3000);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (fileType) => {
    if (fileType.includes('spreadsheet') || fileType.includes('excel')) {
      return <BarChart className="text-emerald-600" size={20} />;
    } else if (fileType.includes('pdf')) {
      return <FileText className="text-red-600" size={20} />;
    } else if (fileType.includes('word') || fileType.includes('document')) {
      return <FileText className="text-blue-600" size={20} />;
    }
    return <File className="text-gray-600" size={20} />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Success Toast Notification */}
      <AnimatePresence>
        {showSuccessToast && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-6 right-6 z-50"
          >
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3">
              <CheckCircle size={24} className="text-white" />
              <div>
                <p className="font-semibold">{toastMessage}</p>
              </div>
              <button
                onClick={() => setShowSuccessToast(false)}
                className="ml-4 text-white/80 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

       {/* Hero Section with Background */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/card1.jpeg"
            alt="Digital banking technology"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              const fallback = document.createElement("div");
              fallback.className =
                "absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900";
              e.target.parentNode.appendChild(fallback);
            }}
          />
        </div>

        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-white rounded-full"
          />
          <motion.div
            animate={{ y: [0, 30, 0], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-white/10 rounded-full"
          />
        </div>
      </section>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: File Upload */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* File Upload Zone */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-blue-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-md">
                      <Cloud className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Upload Documents</h2>
                      <p className="text-gray-600">Drag & drop or click to upload</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    Secure
                  </span>
                </div>
              </div>

              {/* Upload Area */}
              <div
                className={`p-8 transition-all duration-300 ${
                  dragActive 
                    ? 'bg-gradient-to-br from-blue-50/80 to-blue-60/70' 
                    : 'bg-gradient-to-br from-gray-50 to-gray-100/50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="text-center">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6">
                    <Upload className="text-blue-600" size={32} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {dragActive ? 'Drop your files here' : 'Upload your documents'}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Supports PDF, DOCX, XLSX up to 50MB. All files are encrypted and secure.
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-900 text-white rounded-md font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <FilePlus size={18} />
                    Select Files
                  </motion.button>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    onChange={handleFileInput}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.xls,.xlsx"
                  />

                  <p className="text-sm text-gray-500 mt-4">
                    Or drag and drop files here
                  </p>
                </div>
              </div>

              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <div className="p-6 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FileCheck size={20} className="text-emerald-600" />
                    Uploaded Files ({uploadedFiles.length})
                  </h3>
                  
                  <div className="space-y-4">
                    {uploadedFiles.map((file) => (
                      <motion.div
                        key={file.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          {getFileIcon(file.type)}
                          <div className="min-w-0 flex-1">
                            <p className="font-medium text-gray-900 truncate">{file.name}</p>
                            <p className="text-sm text-gray-500">
                              {file.size} • Uploaded at {file.uploadedAt}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          {/* Progress Bar */}
                          {file.progress < 100 ? (
                            <div className="w-32">
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${file.progress}%` }}
                                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                                />
                              </div>
                              <span className="text-xs text-gray-600">{file.progress}%</span>
                            </div>
                          ) : (
                            <CheckCircle className="text-emerald-500" size={20} />
                          )}
                          
                          <button
                            onClick={() => removeFile(file.id)}
                            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                            aria-label="Remove file"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Security & Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Shield className="text-blue-600" size={24} />,
                  title: "Bank-Grade Security",
                  description: "256-bit encryption for all uploaded files"
                },
                {
                  icon: <Zap className="text-orange-600" size={24} />,
                  title: "Fast Processing",
                  description: "AI-powered document analysis"
                },
                {
                  icon: <ChartBar className="text-emerald-600" size={24} />,
                  title: "Smart Analysis",
                  description: "Automatic financial insights"
                },
                {
                  icon: <Award className="text-amber-600" size={24} />,
                  title: "Professional Quality",
                  description: "Industry-standard templates"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-md shadow-sm border border-blue-100"
                >
                  <div className="p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Templates & Downloads */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Professional Templates */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg">
                      <FileText className="text-orange-600" size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Professional Templates</h2>
                      <p className="text-gray-600">Ready-to-use business documents</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm font-medium">
                    {templates.length} Templates
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {templates.map((template) => (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`p-6 rounded-md border transition-all duration-300 ${
                      template.featured 
                        ? 'bg-gradient-to-r from-blue-50/50 to-blue-60/40 border-blue-100' 
                        : 'bg-gray-50 border-gray-100'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3">
                        <div className={`p-3 bg-gradient-to-r ${template.color} rounded-xl`}>
                          {template.format === '.pdf' ? (
                            <FileText className="text-white" size={20} />
                          ) : template.format === '.xlsx' ? (
                            <BarChart className="text-white" size={20} />
                          ) : (
                            <FileText className="text-white" size={20} />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-gray-900">{template.name}</h3>
                            {template.featured && (
                              <span className="px-2 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs rounded-full">
                                Featured
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm">{template.description}</p>
                        </div>
                      </div>
                      {template.featured && (
                        <TrendingUp className="text-emerald-600" size={20} />
                      )}
                    </div>

                    {/* Template Details */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Briefcase size={14} />
                          {template.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <File size={14} />
                          {template.pages} pages
                        </span>
                        <span className="flex items-center gap-1">
                          <Download size={14} />
                          {template.downloads} downloads
                        </span>
                      </div>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {template.size}
                      </span>
                    </div>

                    {/* Download Button with Progress */}
                    <div className="flex items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => downloadTemplate(template.id)}
                        disabled={downloadProgress[template.id]}
                        className={`flex-1 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                          downloadProgress[template.id]
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                            : 'bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:shadow-lg'
                        }`}
                      >
                        {downloadProgress[template.id] ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Downloading... {downloadProgress[template.id]}%</span>
                          </>
                        ) : (
                          <>
                            <Download size={18} />
                            <span>Download Template</span>
                          </>
                        )}
                      </motion.button>

                      <button className="p-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors">
                        <Eye size={18} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-blue-900 to-[#1A1C47] rounded-lg shadow-md p-8 text-white">
             

              {/* Stats */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">2.5K+</div>
                    <div className="text-sm text-blue-200">Templates Downloaded</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm text-blue-200">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-blue-200">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

       
      </div>
    </div>
  );
}