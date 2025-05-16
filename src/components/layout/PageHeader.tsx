
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  breadcrumbs?: Array<{
    label: string;
    path?: string;
  }>;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  breadcrumbs = [],
  backgroundImage = "/lovable-uploads/e881c3fc-ac11-4d4b-9a12-775d732a681e.png" 
}) => {
  return (
    <div 
      className="relative pt-24 pb-16 md:py-24 bg-darkbg bg-cover bg-center" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})` 
      }}
    >
      <div className="container-custom text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h1>
        
        {breadcrumbs.length > 0 && (
          <nav className="flex justify-center">
            <ol className="flex flex-wrap items-center justify-center">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center text-sm md:text-base">
                  {index > 0 && (
                    <ChevronRight size={14} className="mx-1 md:mx-2 text-gold-500" />
                  )}
                  
                  {crumb.path ? (
                    <Link to={crumb.path} className="text-white hover:text-gold-500 transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-gold-500">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
