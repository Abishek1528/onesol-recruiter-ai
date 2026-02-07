  import { Twitter, Linkedin, Github } from "lucide-react";

  export default function Footer() {
    return (
      <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">R</span>
                </div>
                <span className="text-xl font-bold text-dark">RecruiterAI</span>
              </div>
              <p className="text-dark-light mb-6 max-w-xs leading-relaxed">
                Automate your hiring workflow, screen candidates instantly, and build your dream team faster with AI.
              </p>
              <div className="flex gap-4 text-dark-light">
                <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-primary transition-colors"><Github size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-dark mb-6">Product</h4>
              <ul className="space-y-4 text-dark-medium">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Enterprise</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-dark mb-6">Resources</h4>
              <ul className="space-y-4 text-dark-medium">
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API Docs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-dark mb-6">Company</h4>
              <ul className="space-y-4 text-dark-medium">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Legal</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-dark-light">
            <p>© 2024 RecruiterAI Inc. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-dark">Privacy Policy</a>
              <a href="#" className="hover:text-dark">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }