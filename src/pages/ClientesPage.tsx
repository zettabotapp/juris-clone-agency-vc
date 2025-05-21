
import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ClientesPage = () => {
  return (
    <div>
      <PageHeader
        title="CLIENTES"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Clientes' }
        ]}
      />
      
      <div className="container-custom py-16">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Área de Cadastro de Clientes</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Selecione abaixo o formulário apropriado para o seu cadastro. Todos os formulários são seguros
            e suas informações serão tratadas com confidencialidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormCard 
            title="Pessoa Física ou Jurídica" 
            description="Cadastro para pessoas físicas ou representantes de empresas."
            link="/clientes/pessoa-fisica-ou-juridica"
          />
          
          <FormCard 
            title="Imigrantes - Haiti (Reunião Familiar)" 
            description="Formulário para familiares de haitianos que já estão no Brasil."
            link="/clientes/imigrantes-haiti-reuniao-familiar"
          />
          
          <FormCard 
            title="Imigrantes - Haiti (Visto Humanitário)" 
            description="Formulário para haitianos que desejam solicitar visto humanitário para o Brasil."
            link="/clientes/imigrantes-haiti-visto-humanitario"
          />
        </div>
      </div>
    </div>
  );
};

const FormCard = ({ title, description, link }: { title: string; description: string; link: string }) => {
  return (
    <Card className="border border-gray-200 h-full flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-500">
          Clique no botão abaixo para acessar o formulário de cadastro.
        </p>
      </CardContent>
      <CardFooter>
        <Link to={link} className="w-full">
          <Button className="w-full bg-gold-500 hover:bg-gold-600">Acessar Formulário</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ClientesPage;
