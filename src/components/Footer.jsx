import { Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-sm text-secondary-foreground">
          © 2024 Material 3 Theme Editor. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-sm text-secondary-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/theme-editor" className="text-sm text-secondary-foreground hover:text-primary transition-colors">
            Theme Editor
          </Link>
          <a
            href="https://github.com/your-repo-link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
