import { Mail, Github, Phone, ExternalLink } from "lucide-react";

const ContactPage = () => {
  const contactData = [
    { 
      icon: <Phone size={20} />, 
      label: "Phone", 
      value: "+91 8590483660", 
      href: "tel:+918590483660" 
    },
    { 
      icon: <Mail size={20} />, 
      label: "Email", 
      value: "vijayansabari06@gmail.com", 
      href: "mailto:vijayansabari06@gmail.com" 
    },
    { 
      icon: <Github size={20} />, 
      label: "GitHub", 
      value: "sabari-vijayan", 
      href: "https://github.com/sabari-vijayan" 
    },
  ];

  return (
    <div id="contact" className="max-w-2xl p-8 mt-10">
      <h1 className="text-4xl font-bold mb-2">Sabari Vijayan</h1>
      <p className="text-gray-500 mb-8">Feel free to reach out for collaborations or just a friendly hello.</p>

      <div className="space-y-4">
        {contactData.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
                {item.icon}
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                  {item.label}
                </p>
                <p className="text-lg font-medium">{item.value}</p>
              </div>
            </div>
            <ExternalLink size={16} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
