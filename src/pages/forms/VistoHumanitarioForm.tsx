
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from "@/hooks/use-toast";
import PageHeader from '@/components/layout/PageHeader';
import ClientCarousel from '@/components/clientes/ClientCarousel';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
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
import { maskPhone, maskDate } from '@/lib/masks';

const formSchema = z.object({
  nomeCompleto: z.string().min(1, "Nome completo é obrigatório"),
  dataNascimento: z.date({
    required_error: "Data de nascimento é obrigatória",
  }),
  nomePai: z.string().min(1, "Nome do pai é obrigatório"),
  nomeMae: z.string().min(1, "Nome da mãe é obrigatório"),
  numeroPassaporte: z.string().min(1, "Número do passaporte é obrigatório"),
  telefoneWhatsapp: z.string().min(10, "Telefone inválido"),
  email: z.string().email("E-mail inválido"),
});

type FormData = z.infer<typeof formSchema>;

const VistoHumanitarioForm = () => {
  const { toast } = useToast();
  const [files, setFiles] = useState<FileList | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomeCompleto: '',
      nomePai: '',
      nomeMae: '',
      numeroPassaporte: '',
      telefoneWhatsapp: '',
      email: '',
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

  return (
    <div>
      <PageHeader
        title="CADASTRO"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Clientes', path: '/clientes' },
          { label: 'Imigrantes - Haiti (Visto Humanitário)' },
        ]}
      />
      
      <ClientCarousel />
      
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">IMIGRANTES - HAITI (VISTO HUMANITÁRIO)</h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Seção 1: Informações do Imigrante */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">
                  INFORMAÇÕES DO IMIGRANTE / HT ENFÒMASYON SOU IMIGRAN
                </h3>
                
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="nomeCompleto"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>BR Nome Completo / HT Non konplè</FormLabel>
                        <FormControl>
                          <Input {...field} className="border-gold-300 focus:border-gold-500" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="dataNascimento"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>BR Data de Nascimento / HT Dat nesans</FormLabel>
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
                      name="nomePai"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>BR Nome do Pai / HT Non papa</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-gold-300 focus:border-gold-500" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="nomeMae"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>BR Nome da Mãe / HT Non manman</FormLabel>
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
                    name="numeroPassaporte"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>BR Nº do Passaporte / HT Nimewo paspò</FormLabel>
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
                      name="telefoneWhatsapp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>BR Telefone/WhatsApp / HT Telefòn/WhatsApp</FormLabel>
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
                          <FormLabel>BR E-mail / HT Imèl</FormLabel>
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
              </div>
              
              {/* Seção 2: Upload de Documentações */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">
                  BR Upload Documentações / HT Telechaje Dokimantasyon
                </h3>
                
                <div className="space-y-6">
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
                        Tipos de arquivo aceitos: jpg, png, webp, pdf, doc, docx. Máx. tamanho do arquivo: 128 MB.
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
                  
                  <div className="bg-white p-4 rounded-md border border-gray-200">
                    <h4 className="font-bold text-sm mb-2">BR Documentos Obrigatórios / HT Dokiman Obligatwa:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex flex-col">
                        <span>BR Passaporte Válido (Caso não tenha, precisamos de algum documento que esteja indicando o trâmite de emissão).</span>
                        <span className="text-xs text-gray-500">HT Paspò Valab (Si ou pa genyen youn, nou bezwen yon dokiman ki endike pwosesis emisyon an).</span>
                      </li>
                      <li className="flex flex-col">
                        <span>BR Certidão de Nascimento</span>
                        <span className="text-xs text-gray-500">HT Batistè</span>
                      </li>
                      <li className="flex flex-col">
                        <span>BR Certidão de Casamento (Se houver)</span>
                        <span className="text-xs text-gray-500">HT Sètifika Maryaj (si genyen)</span>
                      </li>
                      <li className="flex flex-col">
                        <span>BR Antecedentes Criminais do Haiti</span>
                        <span className="text-xs text-gray-500">HT Ayiti Fond Kriminèl</span>
                      </li>
                      <li className="flex flex-col">
                        <span>BR Carta de Emprego do Brasil (se houver)</span>
                        <span className="text-xs text-gray-500">HT Lèt Travay soti Brezil (si genyen)</span>
                      </li>
                      <li className="flex flex-col">
                        <span>BR No caso de menores de 18 anos, que estejam sob a guarda de terceiro, deverá ser apresentado documento expedido por juiz ou autoridade de mesma hierarquia.</span>
                        <span className="text-xs text-gray-500">HT Nan ka minè ki poko gen 18 an, ki anba gad pa yon twazyèm pati, yo dwe prezante yon dokiman ki soti nan menm yerachi a.</span>
                      </li>
                      <li className="flex flex-col">
                        <span>BR Foto 2 x 2 polegadas, recente, colorida, fundo branco.</span>
                        <span className="text-xs text-gray-500">HT Foto 2 x 2 pous, resan, koulè, background blan.</span>
                      </li>
                      <li className="flex flex-col">
                        <span>BR Reserva ou passagem aérea. (Se houver)</span>
                        <span className="text-xs text-gray-500">HT Rezèvasyon oswa tikè ayon. (Si genyen)</span>
                      </li>
                      <li className="flex flex-col">
                        <span>BR Certificado internacional contra a febre amarela.</span>
                        <span className="text-xs text-gray-500">HT Sètifika entènasyonal kont lafyèv jòn.</span>
                      </li>
                    </ul>
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

export default VistoHumanitarioForm;
