import React from "react";
import { Mail, Github, MessageCircle } from "lucide-react";

function Contact() {
  const contacts = [
    {
      title: "Email",
      icon: <Mail className="w-6 h-6 text-indigo-600" />,
      value: "nabillabillaa11@gmail.com",
      action: "Send",
      color: "bg-indigo-600 hover:bg-indigo-700",
      link: "mailto:nabillabillaa11@gmail.com",
    },
    {
      title: "WhatsApp",
      icon: <MessageCircle className="w-6 h-6 text-green-600" />,
      value: "+62 812-8118-1417",
      action: "Chat",
      color: "bg-green-600 hover:bg-green-700",
      link: "https://wa.me/6281281181417",
    },
    {
      title: "GitHub",
      icon: <Github className="w-6 h-6 text-gray-900" />,
      value: "@nbilaa_11",
      action: "Visit",
      color: "bg-gray-900 hover:bg-gray-800",
      link: "https://github.com/tiaracahya",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex flex-col items-center py-20 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
          Contact Me
        </h1>
        <p className="text-gray-500 text-lg">
          Reach out through any of the platforms below 🌸
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {contacts.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl p-5 border border-gray-100"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-indigo-50 rounded-xl">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-500">{item.value}</p>
              </div>
            </div>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white font-medium px-5 py-2 rounded-xl transition-all duration-200 ${item.color}`}
            >
              {item.action}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
