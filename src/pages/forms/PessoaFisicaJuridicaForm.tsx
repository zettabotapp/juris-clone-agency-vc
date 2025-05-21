
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from "@/hooks/use-toast";
import PageHeader from '@/components/layout/PageHeader';
import ClientCarousel from '@/components/clientes/ClientCarousel';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { maskCPF, maskCNPJ, maskCEP, maskPhone } from '@/lib/masks';

const formSchema = z.object({
  nomeCompleto: z.string().min(1, "Nome completo é obrigatório"),
  estadoCivil: z.string().min(1, "Estado civil é obrigatório"),
  cpf: z.string().min(11, "CPF inválido"),
  endereco: z.string().min(1, "Endereço é obrigatório"),
  cep: z.string().min(8, "CEP inválido"),
  cidade: z.string().min(1, "Cidade é obrigatória"),
  telefone: z.string().min(10, "Telefone inválido"),
  email: z.string().email("E-mail inválido"),
  nomeEmpresa: z.string().optional(),
  cnpj: z.string().optional(),
  telefoneCorporativo: z.string().optional(),
  emailCorporativo: z.string().email("E-mail corporativo inválido").optional().or(z.literal('')),
  informacoesAdicionais: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const PessoaFisicaJuridicaForm = () => {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomeCompleto: '',
      estadoCivil: '',
      cpf: '',
      endereco: '',
      cep: '',
      cidade: '',
      telefone: '',
      email: '',
      nomeEmpresa: '',
      cnpj: '',
      telefoneCorporativo: '',
      emailCorporativo: '',
      informacoesAdicionais: '',
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    console.log("File:", file);
    
    toast({
      title: "Formulário enviado com sucesso!",
      description: "Entraremos em contato em breve.",
    });
    
    form.reset();
    setFile(null);
  };

  return (
    <div>
      <PageHeader
        title="CADASTRO"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Clientes', path: '/clientes' },
          { label: 'Pessoa Física ou Jurídica' },
        ]}
      />
      
      <ClientCarousel />
      
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">PESSOA FÍSICA OU JURÍDICA</h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="nomeCompleto"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Completo (Representante Legal)</FormLabel>
                      <FormControl>
                        <Input {...field} className="border-gold-300 focus:border-gold-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="estadoCivil"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Estado Civil</FormLabel>
                      <FormControl>
                        <Input {...field} className="border-gold-300 focus:border-gold-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="cpf"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CPF</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          value={maskCPF(field.value)}
                          onChange={(e) => field.onChange(e.target.value)}
                          maxLength={14}
                          className="border-gold-300 focus:border-gold-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="endereco"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Endereço Completo</FormLabel>
                      <FormControl>
                        <Input {...field} className="border-gold-300 focus:border-gold-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="cep"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CEP</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            value={maskCEP(field.value)}
                            onChange={(e) => field.onChange(e.target.value)}
                            maxLength={9}
                            className="border-gold-300 focus:border-gold-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="cidade"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cidade</FormLabel>
                        <FormControl>
                          <Input {...field} className="border-gold-300 focus:border-gold-500" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="telefone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            value={maskPhone(field.value)}
                            onChange={(e) => field.onChange(e.target.value)}
                            maxLength={15}
                            className="border-gold-300 focus:border-gold-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-Mail</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email"
                            className="border-gold-300 focus:border-gold-500" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                {/* Empresa */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">Dados da Empresa (Opcional)</h3>
                  
                  <FormField
                    control={form.control}
                    name="nomeEmpresa"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Da Empresa</FormLabel>
                        <FormControl>
                          <Input {...field} className="border-gold-300 focus:border-gold-500" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="cnpj"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CNPJ</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            value={field.value ? maskCNPJ(field.value) : ''}
                            onChange={(e) => field.onChange(e.target.value)}
                            maxLength={18}
                            className="border-gold-300 focus:border-gold-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="telefoneCorporativo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone Corporativo</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              value={field.value ? maskPhone(field.value) : ''}
                              onChange={(e) => field.onChange(e.target.value)}
                              maxLength={15}
                              className="border-gold-300 focus:border-gold-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="emailCorporativo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-Mail Corporativo</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="email"
                              className="border-gold-300 focus:border-gold-500" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                <FormField
                  control={form.control}
                  name="informacoesAdicionais"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Informações Adicionais</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={5}
                          className="border-gold-300 focus:border-gold-500" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="space-y-2">
                  <FormLabel>Anexar Arquivo</FormLabel>
                  <div className="flex items-center">
                    <label className="btn-primary text-black cursor-pointer py-2 px-4 rounded">
                      Escolher arquivo
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                    <span className="ml-3 text-sm text-gray-500">
                      {file ? file.name : "Nenhum arquivo escolhido"}
                    </span>
                  </div>
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold">
                ENVIAR
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default PessoaFisicaJuridicaForm;
