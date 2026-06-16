import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, ChevronRight } from 'lucide-react';

const FAQ_DATA = [
  { q: "Explore Fragrance Solutions", a: "Proessences supplies perfume oils and fragrance solutions for various product applications. We also assist businesses looking for fragrance options suited to their product requirements." },
  { q: "Request a Quotation", a: "Pricing depends on the fragrance, quantity, and product requirements. Please send your inquiry through our Contact Us form with your details." },
  { q: "Ask About Samples", a: "Sample availability may depend on the fragrance and your project requirements. Please submit an inquiry with the type of product you are developing." },
  { q: "Custom Fragrance Inquiry", a: "Yes, we can assist with bespoke fragrance oil creation. Please send an inquiry so the team can discuss your specific requirements." },
  { q: "Contact Proessences", a: "Please use the Contact Us form on our website. Kindly provide your name, company name, contact details, product type, and estimated quantity when you inquire." }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{sender: 'bot' | 'user', text: string}[]>([
    { sender: 'bot', text: 'Hi! Welcome to Proessences. How can we help with your fragrance requirements today?' }
  ]);

  const handleQuickReply = (question: string) => {
    setMessages(prev => [...prev, { sender: 'user', text: question }, { sender: 'bot', text: '...' }]);
    
    setTimeout(() => {
      const answer = FAQ_DATA.find(f => f.q === question)?.a || "Thank you for your question. To provide an accurate answer, please send your inquiry through our Contact Us form, and the Proessences team will assist you directly.";
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = { sender: 'bot', text: answer };
        return newMessages;
      });
    }, 3000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="p-4 bg-[#5F7054] text-white rounded-full shadow-lg hover:bg-[#8FA385] transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col border border-[#ECE7DE] overflow-hidden"
          >
            <div className="bg-[#5F7054] p-4 text-white flex justify-between items-center">
              <span className="font-semibold text-sm">Proessences Help</span>
              <button onClick={() => setIsOpen(false)}><X className="w-5 h-5" /></button>
            </div>
            
            <div className="flex-grow p-4 overflow-y-auto space-y-3">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`text-xs p-2 rounded ${m.sender === 'bot' ? 'bg-gray-100' : 'bg-[#F2EDE4] text-right'}`}
                >
                  {m.text}
                </motion.div>
              ))}
            </div>

            <div className="p-3 border-t border-[#ECE7DE] flex flex-wrap gap-1.5">
              {FAQ_DATA.map((f, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleQuickReply(f.q)}
                  className="text-[10px] bg-white border border-[#5F7054] text-[#5F7054] px-2 py-1 rounded-full hover:bg-[#5F7054] hover:text-white transition-colors"
                >
                  {f.q}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
