
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [clientsDropdown, setClientsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-darkbg shadow-lg' : 'bg-transparent'}`}>
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
          <img
            src="/lovable-uploads/logo.png"
            alt="VC Advogados Logo"
            className="h-24 w-auto" // aumentado de h-20 para h-24
          />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6">
            <NavLink to="/">Início</NavLink>
            <NavLink to="/quem-somos">Quem Somos</NavLink>
            <NavLink to="/atuacao">Atuação</NavLink>
            <NavLink to="/correspondente-juridico">Correspondente Jurídico</NavLink>
            
            {/* Dropdown for Clientes */}
            <div className="relative group">
              <button 
                className="flex items-center text-white hover:text-gold-500 transition-colors duration-300"
                onClick={() => setClientsDropdown(!clientsDropdown)}
              >
                Clientes <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-72 bg-darkbg border border-gold-800 rounded-md shadow-lg py-1 hidden group-hover:block">
                <Link to="/clientes/pessoa-fisica-ou-juridica" className="block px-4 py-2 text-sm text-white hover:bg-gold-900 hover:text-gold-500">
                  Pessoa Física Ou Jurídica
                </Link>
                <Link to="/clientes/imigrantes-haiti-reuniao-familiar" className="block px-4 py-2 text-sm text-white hover:bg-gold-900 hover:text-gold-500">
                  Imigrantes - Haiti (Reunião Familiar)
                </Link>
                <Link to="/clientes/imigrantes-haiti-visto-humanitario" className="block px-4 py-2 text-sm text-white hover:bg-gold-900 hover:text-gold-500">
                  Imigrantes - Haiti (Visto Humanitário)
                </Link>
              </div>
            </div>
            
            <NavLink to="/equipe">Equipe</NavLink>
            <NavLink to="/noticias">Notícias</NavLink>
            <NavLink to="/contato">Contato</NavLink>
            
            {/* Search Icon */}
            <button className="text-white hover:text-gold-500 transition-colors duration-300">
              <Search size={20} />
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold-500 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-darkbg border-t border-gold-900">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Início</MobileNavLink>
              <MobileNavLink to="/quem-somos" onClick={() => setIsOpen(false)}>Quem Somos</MobileNavLink>
              <MobileNavLink to="/atuacao" onClick={() => setIsOpen(false)}>Atuação</MobileNavLink>
              <MobileNavLink to="/correspondente-juridico" onClick={() => setIsOpen(false)}>Correspondente Jurídico</MobileNavLink>
              
              <div className="py-2">
                <button 
                  className="flex items-center text-white w-full text-left"
                  onClick={() => setClientsDropdown(!clientsDropdown)}
                >
                  Clientes <ChevronDown size={16} className={`ml-1 transition-transform ${clientsDropdown ? 'rotate-180' : ''}`} />
                </button>
                {clientsDropdown && (
                  <div className="pl-4 mt-2 border-l border-gold-800 space-y-2">
                    <MobileNavLink to="/clientes/pessoa-fisica-ou-juridica" onClick={() => setIsOpen(false)}>
                      Pessoa Física Ou Jurídica
                    </MobileNavLink>
                    <MobileNavLink to="/clientes/imigrantes-haiti-reuniao-familiar" onClick={() => setIsOpen(false)}>
                      Imigrantes - Haiti (Reunião Familiar)
                    </MobileNavLink>
                    <MobileNavLink to="/clientes/imigrantes-haiti-visto-humanitario" onClick={() => setIsOpen(false)}>
                      Imigrantes - Haiti (Visto Humanitário)
                    </MobileNavLink>
                  </div>
                )}
              </div>
              
              <MobileNavLink to="/equipe" onClick={() => setIsOpen(false)}>Equipe</MobileNavLink>
              <MobileNavLink to="/noticias" onClick={() => setIsOpen(false)}>Notícias</MobileNavLink>
              <MobileNavLink to="/contato" onClick={() => setIsOpen(false)}>Contato</MobileNavLink>
              
              <div className="pt-2">
                <button className="flex items-center text-white hover:text-gold-500 transition-colors duration-300">
                  <Search size={20} className="mr-2" /> Buscar
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="text-white hover:text-gold-500 transition-colors duration-300">
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
  <Link to={to} className="text-white hover:text-gold-500 py-2 transition-colors duration-300" onClick={onClick}>
    {children}
  </Link>
);

export default Header;
