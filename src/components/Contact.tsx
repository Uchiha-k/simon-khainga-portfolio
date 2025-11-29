import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

export function Contact() {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "simon.khainga.j@gmail.com", href: "mailto:simon.khainga.j@gmail.com" },
    { icon: Phone, label: "Phone", value: "(+254) 792-516-158", href: "tel:+254792516158" },
    { icon: MapPin, label: "Location", value: "Nairobi, Kenya" },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Uchiha-k" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/simon-khainga/" },
    
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-blue-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-blue-600 dark:text-blue-400 uppercase tracking-wider text-sm">Get In Touch</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl">
                <span className="text-gray-900 dark:text-white">Let's </span>
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
                  Collaborate
                </span>
              </h2>
            </div>

            <p className="text-gray-600 dark:text-gray-300">
              I'm always interested in discussing new data projects, analytics challenges, 
              or opportunities to help your organization leverage data for better decision-making. 
              Let's connect and explore how we can work together.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                    <Icon size={20} className="text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="text-gray-900 dark:text-white">{item.label}</p>
                      <p>{item.value}</p>
                    </div>
                  </div>
                );
                
                return item.href ? (
                  <a key={index} href={item.href} className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 border-2 border-blue-600 dark:border-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white hover:shadow-lg transition-all duration-300 text-blue-600 dark:text-blue-400"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-500/20 p-8 rounded-2xl">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Form submission would be handled here!'); }}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-gray-900 dark:text-white block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white dark:bg-blue-950/30 border border-blue-200 dark:border-blue-500/30 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all rounded-lg"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-900 dark:text-white block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white dark:bg-blue-950/30 border border-blue-200 dark:border-blue-500/30 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all rounded-lg"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-900 dark:text-white block">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-white dark:bg-blue-950/30 border border-blue-200 dark:border-blue-500/30 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none rounded-lg"
                  placeholder="Tell me about your data project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-200 dark:border-blue-900/30 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2025 Simon Khainga. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
