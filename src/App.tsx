
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import Layout from "./components/layout/Layout";

// Pages
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import PracticeAreasPage from "./pages/PracticeAreasPage";
import CorrespondentPage from "./pages/CorrespondentPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import ClientesPage from "./pages/ClientesPage";
import PessoaFisicaJuridicaForm from "./pages/forms/PessoaFisicaJuridicaForm";
import ReuniaoFamiliarForm from "./pages/forms/ReuniaoFamiliarForm";
import VistoHumanitarioForm from "./pages/forms/VistoHumanitarioForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quem-somos" element={<AboutPage />} />
            <Route path="/atuacao" element={<PracticeAreasPage />} />
            <Route path="/correspondente-juridico" element={<CorrespondentPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/clientes" element={<ClientesPage />} />
            <Route path="/clientes/pessoa-fisica-ou-juridica" element={<PessoaFisicaJuridicaForm />} />
            <Route path="/clientes/imigrantes-haiti-reuniao-familiar" element={<ReuniaoFamiliarForm />} />
            <Route path="/clientes/imigrantes-haiti-visto-humanitario" element={<VistoHumanitarioForm />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
