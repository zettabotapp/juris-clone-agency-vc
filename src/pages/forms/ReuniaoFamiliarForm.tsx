
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from "@/hooks/use-toast";
import PageHeader from '@/components/layout/PageHeader';
import ClientCarousel from '@/components/clientes/ClientCarousel';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { maskCPF, maskCEP, maskPhone, maskDate } from '@/lib/masks';

const formSchema = z.object({
  // Familiar no Brasil
  nomeChamante: z.string().min(1, "Nome completo é obrigatório"),
  emailChamante: z.string().email("E-mail inválido"),
  telefoneChamante: z.string().min(10, "Telefone inválido"),
  dataNascimentoChamante: z.date({
    required_error: "Data de nascimento é obrigatória",
  }),
  nomePaiChamante: z.string().min(1, "Nome do pai é obrigatório"),
  nomeMaeChamante: z.string().min(1, "Nome da mãe é obrigatório"),
  rnmChamante: z.string().min(1, "Número do RNM é obrigatório"),
  cpfChamante: z.string().min(11, "CPF inválido"),
  passaporteChamante: z.string().min(1, "Número do passaporte é obrigatório"),
  enderecoChamante: z.string().min(1, "Endereço é obrigatório"),
  cepChamante: z.string().min(8, "CEP inválido"),
  
  // Familiar no Haiti
  nomeChamado: z.string().min(1, "Nome completo é obrigatório"),
  dataNascimentoChamado: z.date({
    required_error: "Data de nascimento é obrigatória",
  }),
  emailChamado: z.string().email("E-mail inválido"),
  telefoneChamado: z.string().min(10, "Telefone inválido"),
  nomePaiChamado: z.string().min(1, "Nome do pai é obrigatório"),
  nomeMaeChamado: z.string().min(1, "Nome da mãe é obrigatório"),
  passaporteChamado: z.string().min(1, "Número do passaporte é obrigatório"),
  nifChamado: z.string().min(1, "Número do NIF é obrigatório"),
  grauParentesco: z.string().min(1, "Grau de parentesco é obrigatório"),
  
  // Incluir segundo familiar
  incluirSegundoFamiliar: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;

const ReuniaoFamiliarForm = () => {
  const { toast } = useToast();
  const [files, setFiles] = useState<FileList | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomeChamante: '',
      emailChamante: '',
      telefoneChamante: '',
      nomePaiChamante: '',
      nomeMaeChamante: '',
      rnmChamante: '',
      cpfChamante: '',
      passaporteChamante: '',
      enderecoChamante: '',
      cepChamante: '',
      
      nomeChamado: '',
      emailChamado: '',
      telefoneChamado: '',
      nomePaiChamado: '',
      nomeMaeChamado: '',
      passaporteChamado: '',
      nifChamado: '',
      grauParentesco: '',
      
      incluirSegundoFamiliar: false,
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    console.log("Files:", files);
    
    toast({
      title: "Formulário enviado com sucesso!",
      description: "Entraremos em contato em breve.",
    });
    
    form.reset();
    setFiles(null);
  };

  const incluirSegundoFamiliar = form.watch('incluirSegundoFamiliar');

  return (
    <div>
      <PageHeader
        title="CADASTRO"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Clientes', path: '/clientes' },
          { label: 'Imigrantes - Haiti (Reunião Familiar)' },
        ]}
      />
      
      <ClientCarousel />
      
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">IMIGRANTES - HAITI (REUNIÃO FAMILIAR)</h2>
          <p className="text-center text-red-500 mb-8">*** indica campos obrigatórios.</p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Seção 1: Familiar no Brasil */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">NOME DO FAMILIAR QUE ESTÁ NO BRASIL</h3>
                
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="nomeChamante"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Completo (Chamante):*</FormLabel>
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
                      name="emailChamante"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mail:*</FormLabel>
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
                    
                    <FormField
                      control={form.control}
                      name="telefoneChamante"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone/Whatsapp:*</FormLabel>
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
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="dataNascimentoChamante"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Data de nascimento:*</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "pl-3 text-left font-normal border-gold-300 focus:border-gold-500",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "dd/MM/yyyy", { locale: ptBR })
                                ) : (
                                  <span>Selecione uma data</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date > new Date()}
                              initialFocus
                              locale={ptBR}
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="nomePaiChamante"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome do Pai:*</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-gold-300 focus:border-gold-500" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="nomeMaeChamante"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome da Mãe:*</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-gold-300 focus:border-gold-500" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="rnmChamante"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nº do RNM (Registro Nacional Migratório):*</FormLabel>
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
                      name="cpfChamante"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nº do CPF:*</FormLabel>
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
                      name="passaporteChamante"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nº do Passaporte:*</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-gold-300 focus:border-gold-500" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="enderecoChamante"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Endereço completo:*</FormLabel>
                        <FormControl>
                          <Input {...field} className="border-gold-300 focus:border-gold-500" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="cepChamante"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CEP:*</FormLabel>
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
                </div>
              </div>
              
              {/* Seção 2: Familiar no Haiti */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">DADOS DOS FAMILIARES QUE ESTÃO NO HAITI</h3>
                
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="nomeChamado"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Completo (Chamado):*</FormLabel>
                        <FormControl>
                          <Input {...field} className="border-gold-300 focus:border-gold-500" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="dataNascimentoChamado"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Data de Nascimento:*</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "pl-3 text-left font-normal border-gold-300 focus:border-gold-500",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "dd/MM/yyyy", { locale: ptBR })
                                ) : (
                                  <span>dd/mm/aaaa</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date > new Date()}
                              initialFocus
                              locale={ptBR}
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="emailChamado"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mail:*</FormLabel>
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
                    
                    <FormField
                      control={form.control}
                      name="telefoneChamado"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone/Whatsapp:*</FormLabel>
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
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="nomePaiChamado"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome do Pai:*</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-gold-300 focus:border-gold-500" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="nomeMaeChamado"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome da Mãe:*</FormLabel>
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
                      name="passaporteChamado"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nº do Passaporte:*</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-gold-300 focus:border-gold-500" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="nifChamado"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nº do NIF:*</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-gold-300 focus:border-gold-500" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="grauParentesco"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Grau Parentesco:*</FormLabel>
                        <FormControl>
                          <Input {...field} className="border-gold-300 focus:border-gold-500" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="incluirSegundoFamiliar"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>+ INCLUIR SEGUNDO FAMILIAR</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  {incluirSegundoFamiliar && (
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <p className="text-sm text-gray-600 mb-4">
                        Formulário adicional para segundo familiar seria exibido aqui.
                        Para simplificar, este campo está apenas indicado mas não implementado completamente.
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Seção de Upload */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Anexar documentos*
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <input
                        type="file"
                        multiple
                        className="hidden"
                        id="file-upload"
                        onChange={handleFileChange}
                      />
                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer flex flex-col items-center justify-center h-full"
                      >
                        <p className="text-sm text-gray-600 mb-2">
                          Solte arquivos aqui ou
                        </p>
                        <span className="btn-primary text-black py-2 px-4 rounded">
                          SELECIONE OS ARQUIVOS
                        </span>
                        <p className="text-xs text-gray-500 mt-4">
                          Tipos de arquivo aceitos: jpg, png, pdf, doc, webp, docx. Máx. tamanho do arquivo: 128 MB.
                        </p>
                      </label>
                      
                      {files && files.length > 0 && (
                        <div className="mt-4 text-left">
                          <p className="text-sm font-medium mb-2">Arquivos selecionados:</p>
                          <ul className="list-disc pl-5 space-y-1">
                            {Array.from(files).map((file, index) => (
                              <li key={index} className="text-xs text-gray-700">
                                {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      Documentos Obrigatórios: RNM, Certidões de casamento / nascimento, Passaportes, 
                      Comprovante de endereço, Declaração de endereço (caso o comprovante esteja em nome de terceiro).
                    </p>
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

export default ReuniaoFamiliarForm;
